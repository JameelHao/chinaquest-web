# ChinaQuest Implementation Plan

## Phase 1: Project Foundation

### 1.1 Initialize Next.js 14 Project
```bash
npx create-next-app@latest chinaquest-web \
  --typescript --tailwind --app --src-dir \
  --import-alias "@/*" --no-git
```

### 1.2 Install Dependencies
```bash
npm install tailwindcss @tailwindcss/typography
npm install lucide-react framer-motion
npm install @radix-ui/react-accordion
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install class-variance-authority clsx tailwind-merge
npm install next/font
```

### 1.3 Configure Tailwind + Inter Font
- Add Inter via `next/font/google`
- Configure `tailwind.config.ts` with custom colors, spacing, typography
- Set up `cn()` utility from `tailwind-merge`

---

## Phase 2: Layout Shell

### 2.1 Header Component
| Element | Spec |
|---------|------|
| Height | 72px, sticky |
| Background | white, shadow on scroll |
| Logo | Left |
| Nav links | Destinations, Routes, Experiences, Practical |
| Right | Language switcher (9 languages) + social icons |
| Mobile | Hamburger → full-screen overlay |

### 2.2 Footer Component
- 4-column links: Destinations, Routes, Experiences, Practical
- Social icons row
- Copyright + legal links

### 2.3 Base Layout
```
Root Layout
├── <html lang="en">
├── Header
├── {children}
└── Footer
```

---

## Phase 3: Home Page

### 3.1 Hero Section (100vh)
```
┌──────────────────────────────────────────────┐
│ Full-bleed background image                  │
│ Dark gradient overlay (bottom → transparent) │
│                                              │
│ "Explore China's Wonders"      ← H1 56px/800 │
│ "34 provinces, 500+ attractions"  ← Tagline   │
│                                              │
│ [Discover Now] CTA button     ← Red accent   │
└──────────────────────────────────────────────┘
```

### 3.2 Category Grid (6 columns → 3 → 2 → 1)
```
┌────────┬────────┬────────┬────────┬────────┬────────┐
│ 01/06 │ 02/06 │ 03/06 │ 04/06 │ 05/06 │ 06/06 │
│ Dest  │ Routes│Themes │ Food  │Culture│Pract  │
└────────┴────────┴────────┴────────┴────────┴────────┘
```
- Each card: numbered badge, circular image, bold title, subtitle, "Discover →"

### 3.3 Featured Destinations (carousel or 4-col grid)
- Beijing, Shanghai, Xi'an, Chengdu, Hangzhou, Guilin

### 3.4 Route Highlight (full-width editorial)
- "Silk Road 14 Days" with large imagery + description

### 3.5 Thematic Cards (3-col grid)
- Food, Culture, Nature, Adventure, Family, Wellness

### 3.6 FAQ Accordion
- Visa, transport, best time, budget

### 3.7 Newsletter Signup

---

## Phase 4: Destination Pages

### 4.1 Province Page (`/destinations/[province]`)
```
┌──────────────────────────────────────────────┐
│ Province Hero (60vh)                        │
│ Province name + tagline                      │
│ Population | Area | Best season | Capital   │
├──────────────────────────────────────────────┤
│ Quick Facts (icon grid)                     │
│ Climate | Language | Currency | Time zone    │
├──────────────────────────────────────────────┤
│ Top Cities (4-col cards)                   │
├──────────────────────────────────────────────┤
│ Must-Visit POIs (numbered list)            │
├──────────────────────────────────────────────┤
│ Local Food (horizontal scroll)              │
├──────────────────────────────────────────────┤
│ Practical Info (accordion)                  │
└──────────────────────────────────────────────┘
```

### 4.2 City Page (`/destinations/[province]/[city]`)
- Similar to province but with city-specific content
- POI listing grid

### 4.3 POI Detail (`/destinations/[province]/[city]/[poi]`)
- Image gallery (main + thumbnails)
- Quick facts: hours, price, duration, rating
- About section (Q&A format)
- FAQ with schema
- Map embed
- Nearby attractions

---

## Phase 5: Route & Experience Pages

### 5.1 Route Page (`/trip/[route]`)
- Hero image
- Route overview
- Day-by-day itinerary
- Map visualization
- Related POIs

### 5.2 Experience Page (`/experience/[theme]`)
- Theme hero
- Related routes + POIs

---

## Phase 6: SEO & GEO

### 6.1 Schema.org Structured Data
```typescript
// WebSite (root layout)
{ "@type": "WebSite", "name": "ChinaQuest", "potentialAction": { SearchAction } }

// TouristAttraction (POI pages)
{ "@type": "TouristAttraction", "geo": GeoCoordinates, "priceRange": "¥60" }

// FAQPage (practical pages)
{ "@type": "FAQPage", "mainEntity": [Question, ...] }
```

### 6.2 hreflang Tags
```html
<link rel="alternate" hreflang="en" href="https://chinaquest.com/en/..." />
<link rel="alternate" hreflang="zh" href="https://chinaquest.com/zh/..." />
```

### 6.3 llms.txt
- Static file at `/llms.txt`

### 6.4 Public API
- `/api/pois` — all POIs with coordinates
- `/api/provinces` — all provinces with metadata

---

## Phase 7: Polish

- Scroll animations (Framer Motion stagger)
- Card hover effects
- Loading skeletons
- 404 page
- Accessibility audit

---

## Task Breakdown

| # | Task | Est. |
|---|------|------|
| 1 | Init Next.js + install deps | 30min |
| 2 | Header + Footer + base layout | 2h |
| 3 | Home page (hero + categories + featured) | 3h |
| 4 | Home page (routes + themes + FAQ) | 2h |
| 5 | Province page template | 3h |
| 6 | City page template | 2h |
| 7 | POI detail page | 3h |
| 8 | Route page | 2h |
| 9 | Experience page | 1h |
| 10 | SEO (schema + hreflang + llms.txt) | 2h |
| 11 | API endpoints | 1h |
| 12 | Animations + polish | 2h |

**Total estimate**: ~23-25h

---

## Quick Start Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start
npm run start
```
