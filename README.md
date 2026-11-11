# 26True — Race Website & CMS Monorepo

Official website and content management system for **26True** ([26true.com](https://26true.com)).

## Architecture Overview

* **Domain & DNS:** Cloudflare Registrar & Cloudflare DNS
* **Hosting & CDN:** Cloudflare Pages (Free tier, unlimited bandwidth, edge caching)
* **Frontend:** [Astro](https://astro.build) (Static Site Generation `output: 'static'`)
* **CMS:** [Sanity](https://www.sanity.io) (Free tier, hosted studio at `26true.sanity.studio`)
* **Access Control & Gating:** Cloudflare Zero Trust (Access) / Pages Functions

## Repository Structure

```text
26true/
├── frontend/                  # Astro static frontend (deployed to Cloudflare Pages)
│   ├── src/
│   │   ├── components/        # Reusable UI components (Hero, Sponsors, Countdown, etc.)
│   │   ├── layouts/           # Page layouts
│   │   ├── lib/               # Sanity client & GROQ query helpers
│   │   └── pages/             # Route pages (index, course, schedule, faq, etc.)
│   ├── public/                # Static assets & favicons
│   └── astro.config.mjs
│
└── studio/                    # Sanity Studio (deployed to 26true.sanity.studio)
    ├── schemaTypes/           # Content schemas (race details, schedule, sponsors, FAQs)
    ├── sanity.config.js       # Studio configuration
    └── sanity.cli.js
```

## Quick Start (Development)

### Prerequisites
* Node.js v20+ (recommended v22+)
* npm v10+

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The site will run locally at `http://localhost:4321`.

### Studio Setup
```bash
cd studio
npm install
npm run dev
```
The Sanity Studio will run locally at `http://localhost:3333`.

## Deployment

* **Frontend (Cloudflare Pages):**
  * Connected to GitHub repo.
  * Root directory: `frontend`
  * Build command: `npm run build`
  * Output directory: `dist`
  * Triggered automatically on git push to `main` (production) and branch pushes (preview/staging).
  * Automated rebuilds triggered on content publication via Sanity Webhook.

* **Studio (Sanity Hosted):**
  * Deployed via `cd studio && npx sanity deploy` to `https://26true.sanity.studio`.
