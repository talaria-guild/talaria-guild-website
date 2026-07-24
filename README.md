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
npm run build      # production build
```

## Content edits

Most copy lives in `lib/content.ts` (services, coverage tiers, trust bar, process). Page-level
headings/hero copy live in the `app/**/page.tsx` files.

## Known follow-ups

- **Contact form uses mailto.** `components/ContactForm.tsx` opens the visitor's mail client — no
  backend required. To deliver server-side (Formspree, a Route Handler, or Payload), replace the
  marked block with a `fetch("/api/contact", …)` call. See the comment in that file.
- **Deploy workflow is stale.** `.github/workflows/deploy.yml` predates this rewrite — review it
  (Vercel auto-detects Next.js; the workflow may be unnecessary).
- **Rotate the leaked GitHub PAT** still embedded in `.git/config` and move the remote to SSH.

## Contact

217-827-3483 · info@talariaworks.com
