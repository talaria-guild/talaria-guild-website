# Talaria Guild Website

Modern Next.js website with Contentlayer CMS for easy content management.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **CMS**: Contentlayer (Markdown-based)
- **Language**: TypeScript
- **Deployment**: Static export (can deploy to Vercel, Vultr, or any static host)

## Features

- ✅ Markdown-based CMS (no database needed)
- ✅ Fast static site generation
- ✅ SEO-optimized
- ✅ Mobile responsive
- ✅ Easy to edit content (just edit .md files)
- ✅ TypeScript for type safety

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Build static site
npm run build

# The static site will be in the /out directory
# Deploy the /out folder to any static hosting
```

## Content Management

### Adding/Editing Pages

Edit markdown files in `/content/pages/`:

```markdown
---
title: Your Page Title
description: Page description for SEO
---

# Your Page Title

Your content here using Markdown...
```

### Adding/Editing Services

Edit markdown files in `/content/services/`:

```markdown
---
title: Service Name
description: Service description
icon: 🚀
features:
  - Feature 1
  - Feature 2
  - Feature 3
---

# Service Name

Your service content...
```

## Directory Structure

```
talaria-guild-website/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Homepage
│   ├── layout.tsx      # Root layout with nav/footer
│   └── globals.css     # Global styles
├── content/            # Markdown content (CMS)
│   ├── pages/         # Static pages
│   └── services/      # Service pages
├── components/         # React components (future)
├── public/            # Static assets (images, etc.)
└── contentlayer.config.ts  # CMS configuration
```

## Deployment Options

### Option 1: Vercel (Recommended for MVP)
1. Push to GitHub
2. Connect repository to Vercel
3. Auto-deploys on every push
4. Free tier available

### Option 2: Vultr (Self-hosted)
1. Build: `npm run build`
2. Upload `/out` directory to Vultr server
3. Serve with Nginx or Caddy
4. Set up GitHub Actions for auto-deploy

## Customization

### Colors/Branding
Edit `tailwind.config.ts` to customize colors and styling.

### Navigation
Edit `app/layout.tsx` to modify header navigation and footer.

### Homepage
Edit `app/page.tsx` to customize homepage content and layout.

## Adding Features

### Contact Form
Install react-hook-form + Formspree:
```bash
npm install react-hook-form @formspree/react
```

### Analytics
Add Google Analytics or Plausible in `app/layout.tsx`.

### Blog
Add blog document type to `contentlayer.config.ts` and create `/content/blog/` directory.

## Support

Questions? Email [your-email@talariaguild.com]

## License

Proprietary - Talaria Guild © 2026
