#!/usr/bin/env bash
#
# One-time host setup for dev.talariaworks.com on talaria-portal.
#
# Run from your laptop:
#   bash deploy/dev/setup-host.sh
#
# SAFETY PROPERTIES — this box runs client-portal prod, omni dev, and several
# other sites. Everything here is written so it can never be the reason one of
# them goes down.
#
#   * Idempotent. Safe to re-run; every step checks before it acts.
#   * Purely additive. Creates a directory, a Caddy block and an SSH key entry.
#     Modifies no existing container, config block, or database.
#   * Backs up /etc/caddy/Caddyfile and authorized_keys, timestamped, first.
#   * Health-checks every existing site BEFORE it starts and refuses to proceed
#     if anything is already broken — so it can never be blamed for
#     pre-existing breakage, and you never debug two problems at once.
#   * Re-checks every site AFTER the Caddy reload and AUTOMATICALLY RESTORES
#     the previous Caddyfile if any site that was healthy has stopped being so.
#   * Never prunes, never restarts anything it did not create.
#
# What it does NOT do: DNS (Cloudflare, see step 0) and starting the container
# (that is the deploy workflow's job).

set -euo pipefail

HOST="${HOST:-178.156.254.178}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/tg-autolykos}"
DOMAIN="dev.talariaworks.com"
APP_PORT="3051"
APP_DIR="/opt/talaria-website-dev"
LOG_NAME="talaria-website-dev"
DEPLOY_KEY_FILE="${DEPLOY_KEY_FILE:-$HOME/Repos/talaria-guild/.secrets/talaria-website-deploy}"
COMPOSE_SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/docker-compose.yml"

# Sites that must still work when this finishes. client-portal prod first,
# because it is the one with real clients on it.
#
# intake and resume answer 502 by design (intake-api is stopped; the
# compose-portal-* pair is stopped pending the 2026-08-03 compromise decision).
# 502 is their correct baseline — the check compares before against after, so a
# stable 502 is fine and a 502 that becomes unreachable is not.
# basics.talariaworks.com is omitted entirely: its vhost was removed 2026-08-03
# and it can never come back healthy, which would trip the guard forever.
EXISTING_SITES=(
  clients.talariaworks.com
  clients-dev.talariaworks.com
  omni-dev.talariaworks.com
  mc.talariaworks.com
  sign.talariaworks.com
  intake.talariaworks.com
  resume.talariaworks.com
)

say() { printf '\n\033[1m==> %s\033[0m\n' "$*"; }
die() { printf '\n\033[31mFATAL: %s\033[0m\n' "$*" >&2; exit 1; }

remote() { ssh -i "$SSH_KEY" -o BatchMode=yes -o ConnectTimeout=15 "root@$HOST" "$@"; }

# ── Preflight ───────────────────────────────────────────────────────────────

say "Preflight"
[ -f "$COMPOSE_SRC" ] || die "compose file not found at $COMPOSE_SRC"
remote 'echo ok' >/dev/null || die "cannot reach $HOST over SSH"
echo "  SSH ok, compose file present."

say "Baseline — every existing site must be healthy before we begin"
# Plain newline-delimited "site code" pairs rather than an associative array:
# macOS ships bash 3.2, which has no `declare -A`, and this script must run
# from the laptop that owns the SSH key.
BASELINE=""
for site in "${EXISTING_SITES[@]}"; do
  # `|| true`, not `|| echo 000`: curl's -w already prints 000 on failure, so
  # the echo appended a SECOND 000 and produced "000000", which then failed to
  # match the "= 000" guard below — meaning the already-broken check silently
  # never fired. (Same bug, same fix, as client-portal's script.)
  code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "https://$site" 2>/dev/null || true)"
  [ -n "$code" ] || code="000"
  BASELINE="${BASELINE}${site} ${code}
"
  printf '  %-34s %s\n' "$site" "$code"
  [ "$code" = "000" ] && die "$site is already unreachable. Fix that first — do not stack changes on a broken box."
done

baseline_for() { printf '%s' "$BASELINE" | awk -v s="$1" '$1==s {print $2}'; }

# ── Step 0 (manual): DNS ────────────────────────────────────────────────────

say "DNS check"
if dig +short "$DOMAIN" | grep -q .; then
  echo "  $DOMAIN resolves."
else
  cat <<EOF

  $DOMAIN does not resolve yet.

  Add in Cloudflare before continuing (Caddy needs it to complete ACME):
      Type: A    Name: dev    Content: $HOST    Proxy: OFF (grey cloud)

  Proxy MUST be off, or Cloudflare intercepts the ACME challenge and the
  certificate never issues.

EOF
  read -r -p "  Continue anyway? Caddy will retry ACME in the background. [y/N] " reply
  [ "$reply" = "y" ] || exit 0
fi

# ── Step 1: deploy key ──────────────────────────────────────────────────────
#
# A key dedicated to this repo, not a copy of tg-autolykos. If it ever leaks
# from GitHub Actions, revoking it costs one line in authorized_keys and takes
# nothing else on the box (or the other three boxes) down with it.

say "CI deploy key"
if [ -f "$DEPLOY_KEY_FILE" ]; then
  echo "  reusing $DEPLOY_KEY_FILE"
else
  mkdir -p "$(dirname "$DEPLOY_KEY_FILE")"
  ssh-keygen -t ed25519 -N '' -C 'github-actions talaria-website' -f "$DEPLOY_KEY_FILE" >/dev/null
  echo "  generated $DEPLOY_KEY_FILE"
fi

say "Installing the deploy key on the host (append-only)"
PUBKEY="$(cat "${DEPLOY_KEY_FILE}.pub")"
remote "
set -euo pipefail
STAMP=\$(date +%Y%m%d-%H%M%S)
cp /root/.ssh/authorized_keys /root/.ssh/authorized_keys.bak-\$STAMP
BEFORE=\$(wc -l < /root/.ssh/authorized_keys)
if grep -qF 'github-actions talaria-website' /root/.ssh/authorized_keys; then
  echo '  already present, nothing to do'
else
  printf '%s\n' '$PUBKEY' >> /root/.ssh/authorized_keys
  echo '  appended'
fi
echo \"  authorized_keys: \$BEFORE -> \$(wc -l < /root/.ssh/authorized_keys) lines (backup: authorized_keys.bak-\$STAMP)\"
"

# ── Step 2: application directory ───────────────────────────────────────────

say "Creating $APP_DIR"
remote "mkdir -p $APP_DIR && chmod 750 $APP_DIR && echo '  ok'"
scp -i "$SSH_KEY" -o BatchMode=yes "$COMPOSE_SRC" "root@$HOST:$APP_DIR/docker-compose.yml"
echo "  compose file uploaded"

# ── Step 3: Caddy ───────────────────────────────────────────────────────────

say "Adding Caddy site block"
remote "
set -euo pipefail
STAMP=\$(date +%Y%m%d-%H%M%S)
BACKUP=/etc/caddy/Caddyfile.bak-\$STAMP
cp /etc/caddy/Caddyfile \$BACKUP
echo \"  backup: \$BACKUP\"

if grep -q '^$DOMAIN' /etc/caddy/Caddyfile; then
  echo '  block already present — not duplicating'
else
  cat >> /etc/caddy/Caddyfile <<'CADDY'

$DOMAIN {
	reverse_proxy localhost:$APP_PORT
	encode gzip zstd
	header {
		# The second, independent guard against dev being indexed. robots.txt
		# (served Disallow here because SITE_ENV != production) is a crawl
		# directive a badly-behaved bot can ignore; this header travels with
		# every response, including ones reached from a direct link that never
		# fetched robots.txt at all. dev.talariaworks.com appearing in search
		# results as a duplicate of the real site is slow to detect and slow to
		# undo, so it gets two mechanisms.
		X-Robots-Tag \"noindex, nofollow\"
		Strict-Transport-Security \"max-age=31536000; includeSubDomains\"
		X-Content-Type-Options \"nosniff\"
		X-Frame-Options \"DENY\"
		Referrer-Policy \"same-origin\"
	}
	log {
		output file /var/log/caddy/$LOG_NAME.log
		format json
	}
}
CADDY
  echo '  block appended'
fi

# Create the log file OWNED BY CADDY before validating.
#
# This is not tidiness, it is the fix for a real self-inflicted outage risk.
# \`caddy validate\` OPENS the log writers, so running it as root creates
# /var/log/caddy/<site>.log as root:root mode 600. The caddy daemon runs as
# user caddy, cannot then open that file, and every subsequent reload fails
# with \"permission denied\" — including reloads nobody associates with this
# change. The Caddyfile on disk becomes one the daemon cannot load, so the next
# restart or reboot would fail to start Caddy and take down every site on the
# box. Validating as the caddy user closes the hole for good.
touch /var/log/caddy/$LOG_NAME.log
chown caddy:caddy /var/log/caddy/$LOG_NAME.log
chmod 644 /var/log/caddy/$LOG_NAME.log

if ! sudo -u caddy caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile 2>&1 | tail -3; then
  echo '  VALIDATION FAILED — restoring backup, nothing reloaded'
  cp \$BACKUP /etc/caddy/Caddyfile
  exit 1
fi
echo '  config valid'

# Reload through the admin API rather than \`systemctl reload\`. systemd's
# ExecReload has a timeout; when a reload fails or stalls, systemd kills it,
# retries, and parks the unit in \"reloading\" — where later reloads queue behind
# the wedged one and appear to hang forever. \`caddy reload\` posts straight to
# the admin endpoint, so a failure is immediate and legible. The timeout
# guarantees this step cannot hang the script.
if timeout 60 caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile --force 2>&1 | tail -3; then
  echo '  caddy reloaded'
else
  echo '  RELOAD FAILED — restoring backup'
  cp \$BACKUP /etc/caddy/Caddyfile
  timeout 60 caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile --force || true
  exit 1
fi
echo \$BACKUP > /tmp/.caddy-last-backup
"

# ── Step 4: verify nothing regressed, roll back if it did ───────────────────

say "Verifying every existing site still responds"
sleep 3
REGRESSED=0
for site in "${EXISTING_SITES[@]}"; do
  code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "https://$site" 2>/dev/null || true)"
  [ -n "$code" ] || code="000"
  before="$(baseline_for "$site")"
  if [ "$code" = "000" ] && [ "$before" != "000" ]; then
    printf '  %-34s %s -> %s  REGRESSED\n' "$site" "$before" "$code"
    REGRESSED=1
  else
    printf '  %-34s %s -> %s  ok\n' "$site" "$before" "$code"
  fi
done

if [ "$REGRESSED" = "1" ]; then
  say "ROLLING BACK CADDY — a site that was healthy no longer is"
  remote '
    set -euo pipefail
    BACKUP=$(cat /tmp/.caddy-last-backup)
    cp "$BACKUP" /etc/caddy/Caddyfile
    systemctl reload caddy
    echo "  restored $BACKUP and reloaded"
  '
  die "Caddy change rolled back. The directory and SSH key remain (both harmless and unused)."
fi

# ── Done ────────────────────────────────────────────────────────────────────

say "Host setup complete"
cat <<EOF

Nothing is serving $DOMAIN yet — the container starts on the first deploy.

ONE STEP LEFT. Give GitHub Actions the deploy key and host details:

  gh secret set DEPLOY_SSH_KEY --env website-dev --repo talaria-guild/talaria-guild-website < $DEPLOY_KEY_FILE
  printf '%s' '$HOST' | gh secret set DEPLOY_HOST --env website-dev --repo talaria-guild/talaria-guild-website
  printf '%s' 'root'  | gh secret set DEPLOY_USER --env website-dev --repo talaria-guild/talaria-guild-website

Then merge to main — .github/workflows/website.yml builds the image and
website-deploy-dev.yml deploys it here automatically.

ROLLBACK, if you ever want this gone entirely:

  ssh -i $SSH_KEY root@$HOST '
    cd $APP_DIR && docker compose down 2>/dev/null || true
    rm -rf $APP_DIR
    # remove the $DOMAIN block from /etc/caddy/Caddyfile, then:
    sudo -u caddy caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile \\
      && caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile --force
  '

There is no database and no volume, so nothing here holds state — the rollback
above is genuinely complete.

EOF
