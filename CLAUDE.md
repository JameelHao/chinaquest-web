# ChinaQuest — China Travel Guide

## Project Overview

A comprehensive China travel guide website with destination/city/POI hierarchy, curated routes, and themed experiences.

**Reference site**: [visittheusa.com](https://www.visittheusa.com) — study its structure, visual style, and content patterns.

## Design & Architecture

Full specifications in `doc/design/`:
- **[architecture.md](doc/design/architecture.md)** — 8-layer design system (colors, typography, layout, components, responsive, animation, tech stack)
- **[routing.md](doc/design/routing.md)** — Next.js App Router file mapping to URL patterns

## URL Structure

```
/destinations/[province]/           # Province (e.g., /destinations/beijing/)
/destinations/[province]/[city]/     # City (e.g., /destinations/beijing/beijing/)
/destinations/[province]/[city]/[poi]/ # POI (e.g., /destinations/beijing/beijing/forbidden-city/)
/trip/[route]/                      # Route/itinerary
/experience/[theme]/                # Theme (food, culture, nature...)
/practical/[topic]/                 # Practical info (visa, transport...)
/llms.txt                           # AI crawler manifest
```

## SEO & GEO

See `doc/seo-geo-strategy.md` for full strategy. Key points:

- **Schema.org**: WebSite + Organization (global), TouristAttraction (per POI), FAQPage
- **hreflang**: All language variants (`/en/`, `/zh/`, `/ja/`...)
- **Q&A content**: AI-readable format, not narrative
- **llms.txt**: AI crawler manifest at root
- **Public API**: `/api/pois.json` for AI/data citation

## Tech Stack

```
Frontend:    Next.js 14 (App Router)
Styling:     Tailwind CSS
Components:  shadcn/ui
Fonts:       Inter
Images:      Next/Image
Maps:        Mapbox GL JS
Animation:   Framer Motion
Hosting:     Vercel
```

## Visittheusa Style Guide

When building pages, follow visittheusa's patterns:

- **Photography-driven**: Large hero images (100vh home, 60vh interior), images are content not decoration
- **Editorial hierarchy**: Bold headlines, clear section numbering (01/06, 02/06...)
- **Card design**: Portrait 3:4 or 5:6.7 ratio, category badges, subtle shadows on hover
- **Color palette**: Deep navy primary + warm gold accent + vibrant red for CTAs
- **Typography**: Inter font family, extra-bold headlines, generous white space
- **Navigation**: Sticky header, language switcher with flags, breadcrumb trails

## Workflow

- **Every push to `main` must also deploy to Vercel**: run `vercel --prod` after `git push origin main`

## Content Rules

- **Q&A format** for factual content (prices, hours, durations) — AI engines cite this directly
- **No narrative-first approach** — visittheusa's "stories unfold" style is harder for AI to extract facts from
- **FAQ schema** on all practical info pages
- **TouristAttraction schema** on every POI page with: geo coordinates, openingHours, priceRange, isAccessibleForFree
