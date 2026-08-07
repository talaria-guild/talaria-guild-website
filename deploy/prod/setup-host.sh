#!/usr/bin/env bash
#
# One-time host setup for talariaworks.com (+ www redirect) on talaria-portal.
#
# Run from your laptop:
#   bash deploy/prod/setup-host.sh
#
# Same safety properties as deploy/dev/setup-host.sh — idempotent, additive,
# backs up before it touches anything, health-checks every existing site before
# and after, and auto-restores the Caddyfile if any site that was healthy stops
# being so. Read the header there for the full reasoning.
#
# Run the DEV setup first. This is the company's public front door; there is no
# reason for it to be the first environment that has ever run this image.

set -euo pipefail

HOST="${HOST:-178.156.254.178}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/tg-autolykos}"
DOMAIN="talariaworks.com"
WWW_DOMAIN="www.talariaworks.com"
APP_PORT="3050"
APP_DIR="/opt/talaria-website-prod"
LOG_NAME="talaria-website"
DEPLOY_KEY_FILE="${DEPLOY_KEY_FILE:-$HOME/Repos/talaria-guild/.secrets/talaria-website-deploy}"
COMPOSE_SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/docker-compose.yml"

EXISTING_SITES=(
  clients.talariaworks.com
  clients-dev.talariaworks.com
  dev.talariaworks.com
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
[ -f "${DEPLOY_KEY_FILE}.pub" ] || die "deploy key not found at ${DEPLOY_KEY_FILE}.pub — run deploy/dev/setup-host.sh first, it generates one."
remote 'echo ok' >/dev/null || die "cannot reach $HOST over SSH"
echo "  SSH ok, compose file present, deploy key present."

# Dev must exist before prod. Not bureaucracy: the prod deploy workflow
# PROMOTES an image rather than building one, so an image that has never run
# anywhere would reach the public site as its first execution.
say "Confirming dev is up first"
dev_code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "https://dev.talariaworks.com" 2>/dev/null || true)"
if [ "${dev_code:-000}" = "000" ]; then
  echo "  dev.talariaworks.com is not serving."
  read -r -p "  Set prod up anyway? [y/N] " reply
  [ "$reply" = "y" ] || exit 0
else
  echo "  dev.talariaworks.com -> $dev_code"
fi

say "Baseline — every existing site must be healthy before we begin"
BASELINE=""
for site in "${EXISTING_SITES[@]}"; do
  code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "https://$site" 2>/dev/null || true)"
  [ -n "$code" ] || code="000"
  BASELINE="${BASELINE}${site} ${code}
"
  printf '  %-34s %s\n' "$site" "$code"
  [ "$code" = "000" ] && die "$site is already unreachable. Fix that first — do not stack changes on a broken box."
done

baseline_for() { printf '%s' "$BASELINE" | awk -v s="$1" '$1==s {print $2}'; }

# ── Step 0 (manual): DNS ────────────────────────────────────────────────────
#
# As of 2026-08-07 the apex does not resolve at all — talariaworks.com has
# never pointed anywhere. Only subdomains exist.

say "DNS check"
MISSING=""
for d in "$DOMAIN" "$WWW_DOMAIN"; do
  if dig +short "$d" | grep -q .; then
    echo "  $d resolves."
  else
    echo "  $d does NOT resolve."
    MISSING="yes"
  fi
done

if [ -n "$MISSING" ]; then
  cat <<EOF

  Add in Cloudflare before continuing (Caddy needs both to complete ACME):
      Type: A       Name: @      Content: $HOST       Proxy: OFF (grey cloud)
      Type: CNAME   Name: www    Content: $DOMAIN     Proxy: OFF (grey cloud)

  Proxy MUST be off, or Cloudflare intercepts the ACME challenge and the
  certificate never issues. It can be turned on later, once certs are issued
  and renewing.

  An apex A record does not affect MX records, so company email is untouched.

EOF
  read -r -p "  Continue anyway? Caddy will retry ACME in the background. [y/N] " reply
  [ "$reply" = "y" ] || exit 0
fi

# ── Step 1: deploy key ──────────────────────────────────────────────────────
#
# The same key the dev environment uses. Both stacks live on the same host and
# are deployed by the same repo's workflows, so a second key would add a second
# thing to rotate without isolating anything that is not already shared.

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

# A placeholder .env so `docker compose config` is valid before the first
# deploy — the compose file's ${TAG:?} makes every command fail without one.
# The workflow overwrites this wholesale on every run.
remote "
set -euo pipefail
if [ -f $APP_DIR/.env ]; then
  echo '  .env already exists — leaving it (the deploy workflow rewrites it)'
else
  umask 077
  printf 'TAG=latest\n' > $APP_DIR/.env
  chmod 600 $APP_DIR/.env
  echo '  placeholder .env created (mode 600)'
fi
"

# ── Step 3: Caddy ───────────────────────────────────────────────────────────

say "Adding Caddy site blocks (apex + www redirect)"
remote "
set -euo pipefail
STAMP=\$(date +%Y%m%d-%H%M%S)
BACKUP=/etc/caddy/Caddyfile.bak-\$STAMP
cp /etc/caddy/Caddyfile \$BACKUP
echo \"  backup: \$BACKUP\"

# Anchored to line start AND followed by a space or brace, so this does not
# match 'clients.talariaworks.com' or any other subdomain block.
if grep -qE '^$DOMAIN[[:space:]{]' /etc/caddy/Caddyfile; then
  echo '  block already present — not duplicating'
else
  cat >> /etc/caddy/Caddyfile <<'CADDY'

$DOMAIN {
	reverse_proxy localhost:$APP_PORT
	encode gzip zstd
	header {
		Strict-Transport-Security \"max-age=31536000; includeSubDomains\"
		X-Content-Type-Options \"nosniff\"
		X-Frame-Options \"DENY\"
		Referrer-Policy \"strict-origin-when-cross-origin\"
	}
	log {
		output file /var/log/caddy/$LOG_NAME.log
		format json
	}
}

# One canonical hostname. Serving identical content on both apex and www splits
# search ranking between them and makes the OG/canonical URLs in the app (which
# name the apex) disagree with the address in the browser bar.
$WWW_DOMAIN {
	redir https://$DOMAIN{uri} permanent
	log {
		output file /var/log/caddy/$LOG_NAME.log
		format json
	}
}
CADDY
  echo '  blocks appended'
fi

# Create the log file OWNED BY CADDY before validating. \`caddy validate\` opens
# the log writers, so running it as root creates the file root:root mode 600 —
# after which the caddy daemon cannot open it and EVERY subsequent reload fails
# with \"permission denied\", including reloads nobody associates with this
# change. The next restart or reboot would then fail to start Caddy and take
# down every site on the box.
touch /var/log/caddy/$LOG_NAME.log
chown caddy:caddy /var/log/caddy/$LOG_NAME.log
chmod 644 /var/log/caddy/$LOG_NAME.log

if ! sudo -u caddy caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile 2>&1 | tail -3; then
  echo '  VALIDATION FAILED — restoring backup, nothing reloaded'
  cp \$BACKUP /etc/caddy/Caddyfile
  exit 1
fi
echo '  config valid'

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

ONE STEP LEFT. Point the website-prod environment at this host:

  gh secret set DEPLOY_SSH_KEY --env website-prod --repo talaria-guild/talaria-guild-website < $DEPLOY_KEY_FILE
  printf '%s' '$HOST' | gh secret set DEPLOY_HOST --env website-prod --repo talaria-guild/talaria-guild-website
  printf '%s' 'root'  | gh secret set DEPLOY_USER --env website-prod --repo talaria-guild/talaria-guild-website

Then ship a release — that, and only that, deploys production:

  git tag v1.0.0 && git push origin v1.0.0
  gh release create v1.0.0 --generate-notes

Consider adding required reviewers to the website-prod environment in GitHub
first, so publishing a release is not by itself enough to change the public
site.

ROLLBACK:

  ssh -i $SSH_KEY root@$HOST '
    cd $APP_DIR && docker compose down 2>/dev/null || true
    rm -rf $APP_DIR
    # remove the $DOMAIN and $WWW_DOMAIN blocks from /etc/caddy/Caddyfile, then:
    sudo -u caddy caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile \\
      && caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile --force
  '

To roll back only the CODE, redeploy a previous commit SHA — image tags are
immutable, so this is a true rollback rather than a rebuild:

  gh workflow run website-deploy-prod.yml -f tag=<previous-sha> \\
    --repo talaria-guild/talaria-guild-website

EOF
