# Talaria Works — Design System

> Clean, classical-meets-engineered design language for **Talaria Works**: an
> AI-powered software consultancy offering fractional CIO / Staff Engineer work
> and managed service (MSP) engagements. This system powers the marketing site
> and internal / client-facing applications.

The name **Talaria** is the winged sandals of Hermes/Mercury — speed, motion,
and messenger-craft. The mark pairs that winged foot with an engineering gear:
**momentum + precision**. That tension (classical gravitas × modern engineering)
is the whole brand.

## Sources
- `assets/logo-full.png` — the only asset provided by the client (winged-foot-in-gear
  emblem above a two-weight serif wordmark). Color palette, wordmark styling, and the
  gold/silver/ink direction were all derived from this file.
- `assets/logo-mark.png`, `assets/logo-wordmark.png` — programmatic crops of the above
  (emblem only / wordmark only). Not reconstructions — pixels from the original.
- No codebase, Figma, website, or copy deck was provided. Content-fundamentals and
  component inventory below are an authored, brand-appropriate starting point, not a
  recreation of an existing product. **Please attach any real site copy, app screens,
  or a component library and this system will be tightened to match.**

---

## Content fundamentals

**Voice.** Senior, plain-spoken, and calm — a trusted advisor who has shipped the
thing before. We sound like a principal engineer explaining a decision, not a
sales team pitching. Confident without hype; specific without jargon-for-its-own-sake.

- **Person.** Address the client as **you**; speak as **we**. ("We embed with your
  team." / "You keep ownership of everything we build.")
- **Casing.** Sentence case for all UI, headings, and body. The only all-caps are the
  Cinzel brand wordmark and short mono eyebrow labels (e.g. `MANAGED SERVICES`).
- **Tone examples.**
  - Hero: *"Senior engineering, on demand. We plug into your team, ship what matters, and leave you stronger than we found you."*
  - Service line: *"Fractional CIO — strategy, roadmap, and vendor decisions from someone who's owned the pager."*
  - MSP: *"We keep the lights on so your team can build. Monitoring, patching, and response, handled."*
  - Empty state: *"Nothing needs your attention right now. We'll flag anything that does."*
- **Numbers & precision.** Prefer concrete over superlative: *"48-hour onboarding,"*
  *"12 systems monitored,"* not *"blazing-fast, world-class."*
- **No emoji.** The brand is understated and premium; emoji undercut it. Use the icon
  set (see Iconography) for visual affordances instead.
- **Punctuation.** Em dashes for asides, Oxford comma, periods on full-sentence body
  copy, no exclamation marks in product UI.

---

## Visual foundations

**Palette.** Metallic **gold `#C7A831`** is the single brand accent — used
deliberately and sparingly (one primary action, one active state, thin rules,
the mark). **Silver `#909090`** is the secondary metallic for quiet chrome and
disabled/decorative bits. On **dark/ink backgrounds use the on-dark logo variants**
(`assets/logo-mark-ondark.png`, `assets/logo-full-ondark.png`) — the plain mark's black
ring and outlines vanish on black. Everything else is a **warm ink ramp** on a **warm
paper-white `#FAF9F3`** ground — never pure `#FFFFFF` page backgrounds, never
cold blue-grays. Cards are pure white to lift off the paper ground. Dark
surfaces are near-black warm ink (`#0B0B0A`). Semantic colors (green/amber/red/blue)
are muted so they read as *information*, not carnival.

- Gold is precious: if two things are gold on a screen, one is wrong. Large gold
  fills only for the hero CTA or a single highlighted panel.

**Type.** A restrained two-role system — the ornate serif is kept rare on purpose:
- **Cinzel** (display *accent*) — Trajan-style classical caps. Used **only** for the
  wordmark and, occasionally, a single hero line. Never for section headings, never
  for body, never in data UI. If Cinzel appears more than once or twice on a screen,
  it's overused.
- **Libre Franklin** (headings + UI + body) — humanist gothic, weights 300–800. This is
  the workhorse: **all real headings** (weight 700–800, tight tracking), running text,
  labels, buttons, tables, and large numbers.
- **JetBrains Mono** (technical) — mono eyebrow labels (uppercase, `0.22em` tracking),
  code, metrics, ticket IDs. This is the "engineering" texture of the brand.

**Spacing.** 4px base grid; generous macro whitespace (sections breathe at 96–128px).
Dense, legible micro-spacing inside data UI.

**Backgrounds.** Predominantly flat paper-white or flat dark ink — **no busy gradients,
no photographic hero washes, no illustration.** The recurring motifs are (1) a thin
2px gold rule as a section divider/kicker underline, and (2) an optional faint gear
watermark (the mark at ~4% opacity, large, bleeding off an edge) on dark hero panels
only. Use texture with restraint.

**Corner radii.** Restrained and engineered, not pill-soft: inputs/buttons `5px`,
cards `8–12px`, large panels `18px`. Pills (`999px`) only for badges/tags and small
status chips. Avatars/emblems are circles.

**Cards.** White surface, `1px` `--border-subtle` hairline, `--shadow-sm`, `8–12px`
radius. On hover (interactive cards) lift to `--shadow-md` and the border warms to
`--border-default`. No colored left-border-accent cards — that pattern is banned.

**Borders & shadows.** Hairline `1px` borders do most structural work; shadows are
soft, cool-neutral, and layered (ambient + key). Gold elements get a dedicated warm
glow `--shadow-gold` on hover only. Inner shadow (`--shadow-inset`) for sunken wells
(inputs on focus use ring, not inset).

**Elevation / blur.** Sticky headers use a translucent paper background with
`backdrop-filter: blur(10px)` and a hairline bottom border. Modals dim the page with
a `rgba(11,11,10,0.45)` scrim. Transparency is used sparingly — chrome only, never
decoratively over content.

**Motion.** Quick and confident: `120–200ms`, `cubic-bezier(0.2,0,0,1)`. Fades and
short translate-ins (6–10px), **no bounce, no spring, no long easing.** Speed is the
brand — nothing should feel sluggish, nothing should feel gimmicky.

**Interaction states.**
- *Hover:* primary (gold) → darken to `--accent-hover`; neutral/ghost → `--surface-hover`
  wash; links → darken + underline.
- *Active/press:* darken one more step (`--accent-active`) and `translateY(1px)` — a
  small physical "press", never a scale-shrink.
- *Focus:* 2px gold outline, 2px offset (`:focus-visible`), plus a soft `--focus-ring`
  on form controls.
- *Disabled:* 45% opacity, `not-allowed`, no shadow.

**Imagery.** When photography is used it is warm, natural-light, desaturated slightly
(no heavy filters, no duotone, minimal grain), leaning editorial/architectural rather
than stock-tech. Screenshots and diagrams are preferred over decorative imagery.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) — 24px, 1.75px stroke, round caps/joins,
  currentColor. Loaded from CDN (`lucide@latest`). It matches the brand's clean,
  engineered line quality without competing with the ornate serif wordmark. The
  `Icon` component wraps it (see `components/media/`).
- **Why Lucide (a substitution):** no icon set was provided by the client, so Lucide
  is the flagged default. If Talaria has a preferred set, swap the CDN link in
  `Icon.jsx` and the eyebrow/glyph usage will follow.
- **Stroke, not fill.** Icons are line icons at 1.75px; do not mix in filled/duotone
  glyph styles. Size steps: 16 (inline/label), 20 (buttons), 24 (nav/feature).
- **Color.** Icons inherit text color. Gold icons only for the active/brand accent
  (e.g. active nav item, feature bullet mark). Silver for decorative/disabled.
- **No emoji, no unicode dingbats** as UI icons anywhere.
- **The mark** (`assets/logo-mark.png`) is not an icon — never inline it at icon sizes;
  it is the brand emblem for headers, footers, and hero watermarks only.

---

## Index / manifest

Root:
- `styles.css` — global entry (import list only). **Consumers link this.**
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill front-matter wrapper.
- `thumbnail.html` — homepage tile.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `layout.css`, `base.css`.
- `assets/` — `logo-full.png`, `logo-mark.png`, `logo-wordmark.png`, plus
  `logo-full-ondark.png` / `logo-mark-ondark.png` (recolored for dark backgrounds).

Foundations (Design System tab cards): `guidelines/*.card.html` — Type, Colors,
Spacing, Brand groups.

Components (`window.TalariaWorks.*`), grouped under `components/`:
- `core/` — **Button**, **IconButton**, **Badge**, **Tag**
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**, **Field**
- `data/` — **Card**, **StatCard**, **Table**, **Avatar**, **Progress**
- `feedback/` — **Dialog**, **Toast**, **Tooltip**, **Alert**
- `navigation/` — **Tabs**, **Breadcrumb**
- `media/` — **Icon**, **Logo**

Intentional additions (no source component library existed): the whole inventory is
authored. `Icon` and `Logo` wrap the Lucide set and brand mark respectively;
`StatCard` and `Field` are convenience compositions flagged here for transparency.

UI kits (`ui_kits/`):
- `website/` — Talaria Works marketing site (hero, services, dark CTA).
- `portal/` — client MSP + engagement portal (dashboard, tickets, systems).
