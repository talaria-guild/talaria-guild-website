# Talaria Works — Website

Marketing site for **Talaria Works LLC** (talariaworks.com). Next.js (App Router) + TypeScript.

Originally designed in **Claude Design**; ported to Next.js so it can be maintained as code and
extended (e.g. adding Payload CMS) later. The Claude Design **design system is kept intact** under
`_ds/` and imported — re-export from Claude Design to update tokens.

## Positioning (decided 2026-07-24)

- **Balanced two-pillar:** Managed IT & Security + Software / AI Engineering (co-equal)
- **Moderate disclosure / reserved:** services described in full; no pricing, no team size,
  no named clients, no vendor names
- **Three routes:** `/` (Home) · `/services` · `/contact`
- Content + structure spec: vault `02_Areas/Marketing/Website-Design-Prompt-ClaudeDesign.md`

## Stack

- **Next.js 16** App Router, **React 19**, **TypeScript**
- Styling: the `_ds/` design-system CSS tokens (gold `#C7A831`) imported into `app/globals.css`,
  plus a site component layer in the same file. No Tailwind.
- Icons: **lucide-react** (replaces the export's unpkg CDN)
- Fonts: Cinzel / Libre Franklin / JetBrains Mono via Google Fonts (`_ds/tokens/fonts.css`)

## Structure

```
app/
  layout.tsx           # html shell, metadata, TopBar/Header/Footer
  globals.css          # imports _ds design system + site component classes
  page.tsx             # Home
  services/page.tsx    # Services
  contact/page.tsx     # Contact
components/             # TopBar, Header (route-aware nav), Footer, ContactForm, ui primitives
lib/content.ts         # copy + service/tier data (single source for page content)
_ds/                   # Claude Design design system (tokens) — source of truth, imported intact
public/assets/         # brand logos (full / mark, light + on-dark)
```

## Develop

```
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

## Content edits

Most copy lives in `lib/content.ts` (services, coverage tiers, trust bar, process, and the
`PHONE` / `EMAIL` constants). Page-level headings/hero copy live in the `app/**/page.tsx` files.

## Deploy

Docker on `talaria-portal` (178.156.254.178) behind the host Caddy — the same shape as
`msp-tools/client-portal`. See [`INFRASTRUCTURE.md`](../INFRASTRUCTURE.md) for the host map.

| | Dev | Prod |
|---|---|---|
| URL | `dev.talariaworks.com` | `talariaworks.com` (+ `www` → apex) |
| Port | `127.0.0.1:3051` | `127.0.0.1:3050` |
| Host path | `/opt/talaria-website-dev` | `/opt/talaria-website-prod` |
| Trigger | every merge to `main`, automatically | publishing a GitHub Release |

```
push to main
  └─ .github/workflows/website.yml          typecheck → build → push GHCR
                                             tags: :latest and :<commit-sha>
       └─ website-deploy-dev.yml            workflow_run on SUCCESS → dev
            (auto, every merge)

git tag v1.0.0 && gh release create v1.0.0
  └─ .github/workflows/website-deploy-prod.yml → talariaworks.com
     PROMOTES the exact SHA image dev already ran. Never rebuilds.
```

**One-time host setup** (idempotent; backs up the Caddyfile, health-checks every other site on the
box before and after, auto-restores on regression). Dev first, then prod:

```
bash deploy/dev/setup-host.sh
bash deploy/prod/setup-host.sh
```

Each prints the `gh secret set` commands to finish with. Required GitHub secrets, per environment
(`website-dev` / `website-prod`): `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`. No application
secrets — the site has none.

**Rollback** is a pure retag, because images are tagged by immutable commit SHA:

```
gh workflow run website-deploy-prod.yml -f tag=<previous-sha>
```

### The one rule that keeps this working

The site reads **no environment variable at build time**, so a single image is correct in both
environments and prod can promote exactly what dev soaked. `SITE_ENV` and `SITE_URL` (`lib/site.ts`)
are consumed only by `app/robots.ts` and `app/sitemap.ts`, both `force-dynamic`, both evaluated per
request.

Adding a `NEXT_PUBLIC_*` read from a page or a `metadata` block would silently break that — `next
build` inlines those, and prod would start serving whatever dev was configured with. `website.yml`
guards it by booting the built server twice, once per environment, and asserting `robots.txt`
differs. Anything environment-specific belongs in the Caddy vhost or a request-time route handler.

## Known follow-ups

- **Contact form uses mailto.** `components/ContactForm.tsx` opens the visitor's mail client — no
  backend required. To deliver server-side (Formspree, a Route Handler, or Payload), replace the
  marked block with a `fetch("/api/contact", …)` call. See the comment in that file.
- **DNS for the apex does not exist yet.** `talariaworks.com` and `www.` resolve nowhere as of
  2026-08-07 — only subdomains do. `deploy/prod/setup-host.sh` prints the exact Cloudflare records;
  both must be grey-cloud (proxy off) or Caddy cannot complete the ACME challenge.
- **Rotate the leaked GitHub PAT** still embedded in `.git/config`, and move the remote to SSH.

## Contact

217-699-1337 · info@talariaworks.com

Both live in `lib/content.ts` (`PHONE` / `EMAIL`) and are imported everywhere they appear —
change them there, not in the pages.
