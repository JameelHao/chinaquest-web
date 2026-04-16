# ChinaQuest Web Design Architecture

## Layer 0: Brand & Visual Identity

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Deep Navy | `#1a365d` | Trust, navigation, headers |
| Secondary | Warm Gold | `#d69e2e` | Accents, highlights, Chinese cultural touch |
| Accent | Vibrant Red | `#c53030` | CTAs, urgency, Chinese national color |
| Background | Off-White | `#f7fafc` | Page background |
| Surface | Pure White | `#ffffff` | Cards, elevated surfaces |
| Text Primary | Charcoal | `#1a202c` | Body text |
| Text Secondary | Gray | `#718096` | Captions, metadata |
| Border | Light Gray | `#e2e8f0` | Dividers, card borders |

### Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| Hero H1 | Inter | 800 (Extra Bold) | 56px | 36px |
| Section H2 | Inter | 700 (Bold) | 40px | 28px |
| Card H3 | Inter | 600 (Semi-Bold) | 24px | 20px |
| Body | Inter | 400 (Regular) | 16px | 15px |
| Caption | Inter | 400 (Regular) | 14px | 13px |
| Button | Inter | 600 (Semi-Bold) | 15px | 14px |

**Fallback Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

### Spacing System (8px Grid)

```
xs:   4px   (0.25rem)
sm:   8px   (0.5rem)
md:   16px  (1rem)
lg:   24px  (1.5rem)
xl:   32px  (2rem)
2xl:  48px  (3rem)
3xl:  64px  (4rem)
4xl:  96px  (6rem)
```

### Border Radius

```
none:   0px
sm:     4px
md:     8px
lg:     12px
xl:     16px
full:   9999px (pills, avatars)
```

---

## Layer 1: Layout System

### Page Hierarchy = URL Hierarchy

```
/                           → Home (hero + featured)
/destination/              → Province list
/destination/[province]/   → Province page
/destination/[province]/[city]/    → City page
/destination/[province]/[city]/[poi]/ → POI detail
/trip/[route-slug]/        → Route/Itinerary page
/experience/[theme]/       → Theme page (food, culture, nature)
/practical/                → Visa, transport, tips
/api/...                   → Data endpoints
/llms.txt                  → AI crawler manifest
```

### Grid System

- **Desktop (1200px+)**: 12-column grid, 80px horizontal padding
- **Laptop (1024px-1199px)**: 12-column grid, 48px padding
- **Tablet (768px-1023px)**: 8-column grid, 32px padding
- **Mobile (< 768px)**: 4-column grid, 16px padding

### Max Content Width

- **Text content**: 720px (optimal reading width)
- **Card grids**: 1280px
- **Full-width sections**: 1440px (with overflow images)

---

## Layer 2: Page Structure

### Home Page Layout

```
┌─────────────────────────────────────────────┐
│ HEADER (sticky)                             │
│ Logo | Nav Links | Language | Social        │
├─────────────────────────────────────────────┤
│ HERO SECTION (100vh)                       │
│ Full-bleed image + gradient overlay         │
│ H1 headline + tagline + CTA                │
├─────────────────────────────────────────────┤
│ CATEGORY GRID (6 columns)                   │
│ 01 Destinations | 02 Routes | 03 Themes     │
│ 04 Food & Drink | 05 Culture | 06 Practical │
├─────────────────────────────────────────────┤
│ FEATURED DESTINATIONS (carousel/grid)       │
│ Beijing | Shanghai | Xi'an | Chengdu...    │
├─────────────────────────────────────────────┤
│ ROUTE HIGHLIGHT (full-width editorial)      │
│ Silk Road 14 Days with large imagery        │
├─────────────────────────────────────────────┤
│ THEMATIC CARDS (3-column grid)              │
│ Food | Culture | Nature | Adventure...      │
├─────────────────────────────────────────────┤
│ FAQ SECTION (accordion)                    │
│ Visa, transport, best time to visit...     │
├─────────────────────────────────────────────┤
│ NEWSLETTER SIGNUP                           │
├─────────────────────────────────────────────┤
│ FOOTER (multi-column)                       │
│ Links | Social | Legal | Copyright          │
└─────────────────────────────────────────────┘
```

### Destination Page Layout

```
┌─────────────────────────────────────────────┐
│ HEADER                                      │
├─────────────────────────────────────────────┤
│ PROVINCE HERO (70vh)                        │
│ Province name + key stats                   │
│ Population | Area | Best season | Capital   │
├─────────────────────────────────────────────┤
│ QUICK FACTS (icon grid)                     │
│ Climate | Language | Currency | Time zone   │
├─────────────────────────────────────────────┤
│ TOP CITIES (card grid)                      │
│ 4 city cards with images                    │
├─────────────────────────────────────────────┤
│ MUST-VISIT POIs (numbered list)             │
│ 01 Forbidden City | 02 Great Wall...       │
├─────────────────────────────────────────────┤
│ LOCAL FOOD (horizontal scroll)              │
│ Peking Duck | Dim Sum | Noodles...          │
├─────────────────────────────────────────────┤
│ PRACTICAL INFO (accordion)                  │
│ Transport | Best time | Tips                │
├─────────────────────────────────────────────┤
│ RELATED DESTINATIONS                       │
└─────────────────────────────────────────────┘
```

### POI Detail Page Layout

```
┌─────────────────────────────────────────────┐
│ HEADER                                      │
├─────────────────────────────────────────────┤
│ IMAGE GALLERY (full-width, 60vh)            │
│ Main image + thumbnail strip                │
├─────────────────────────────────────────────┤
│ CONTENT HEADER                              │
│ POI name + rating + category badge           │
│ Location | Hours | Price | Duration         │
├─────────────────────────────────────────────┤
│ QUICK FACTS (icon cards)                    │
│ Opening hours | Price | Best season...      │
├─────────────────────────────────────────────┤
│ ABOUT (editorial text)                      │
│ History | What to see | Tips               │
├─────────────────────────────────────────────┤
│ FAQ (structured data ready)                 │
│ Common questions with answers               │
├─────────────────────────────────────────────┤
│ MAP SECTION                                  │
│ Embedded map with location                  │
├─────────────────────────────────────────────┤
│ NEARBY ATTRACTIONS                          │
│ Related POIs                                │
└─────────────────────────────────────────────┘
```

---

## Layer 3: Component System

### Navigation Components

#### TopNav (Sticky)
- Height: 72px
- Background: white with subtle shadow on scroll
- Logo: left-aligned
- Nav links: center (Destinations, Routes, Experiences, Practical)
- Right side: Language switcher + Social icons
- Mobile: Hamburger menu triggers overlay

#### Language Switcher
- Dropdown with flag icons
- 9 languages: EN, ZH, JA, KO, ES, FR, DE, PT, RU
- Current language shown with flag + code

#### Mobile Menu
- Full-screen overlay
- Large touch targets (48px minimum)
- Animated slide-in from right
- Close button (X) top-right

### Hero Components

#### HomeHero
- Height: 100vh minus header
- Background: High-res image with dark gradient overlay (bottom-up)
- Gradient: linear-gradient(to top, rgba(0,0,0,0.7), transparent)
- Content: H1 + tagline + CTA button
- Optional: Search bar overlay

#### PageHero (Interior pages)
- Height: 60vh
- Smaller H1 (40px vs 56px)
- Breadcrumb below

### Card Components

#### CategoryCard
```
┌─────────────────────┐
│      01/06          │  ← Numbered badge
│                     │
│   [Circular Image]  │
│                     │
│   Destinations      │  ← Bold title
│   34 Provinces      │  ← Subtitle
│                     │
│   Discover →        │  ← Link
└─────────────────────┘
```
- Size: 280px × 320px
- Border-radius: 12px
- Hover: translateY(-4px), shadow elevation

#### DestinationCard
```
┌─────────────────────┐
│   [Image 3:4 ratio]  │
│                     │
│   [Badge: Province]  │
│                     │
│   Beijing           │
│   Capital · 21M     │
│                     │
│   12 attractions →  │
└─────────────────────┘
```
- Size: 320px × 420px
- Image aspect: 3:4 portrait
- Border-radius: 12px
- Shadow on hover

#### POICard
```
┌─────────────────────┐
│   [Image 16:9]      │
│                     │
│   ★★★★☆ 4.5        │
│   Forbidden City    │
│   Beijing           │
│                     │
│   ¥60 · 3-4 hours   │
└─────────────────────┘
```
- Size: 300px × 280px
- Rating stars in accent gold
- Price + duration metadata

#### RouteCard
```
┌─────────────────────┐
│   [Image 3:2]        │
│                     │
│   [Duration Badge]  │
│   14 Days            │
│                     │
│   Silk Road          │
│   Adventure          │
│                     │
│   Xi'an → Dunhuang   │
│   → Urumqi           │
└─────────────────────┘
```
- Size: 380px × 480px
- Duration pill: top-right overlay
- Route stops listed as text

### Content Components

#### AccordionFAQ
```
┌─────────────────────────────────────────────┐
│  Do I need a visa for China?           [+] │
├─────────────────────────────────────────────┤
│  ✕ Closed                                  │
├─────────────────────────────────────────────┤
│  What is the best time to visit?       [+] │
├─────────────────────────────────────────────┤
│  Open                                       │
│  The best time is...                        │
│  [Answer text expanded]                     │
└─────────────────────────────────────────────┘
```
- Border-radius: 8px
- Plus/Minus icon animation
- Smooth height transition (300ms)

#### Breadcrumb
```
Home / Destinations / Beijing / Forbidden City
```
- Separator: `/` or `›`
- Current page: non-clickable, bold
- Font-size: 14px
- Color: secondary text

#### ImageGallery
- Main image: 16:9 aspect
- Thumbnails: 80px × 60px strip below
- Lightbox on click
- Swipe support on mobile

### Form Components

#### SearchBar
```
┌─────────────────────────────────────────────┐
│  🔍  Search destinations, attractions...   │
└─────────────────────────────────────────────┘
```
- Height: 56px
- Border-radius: 28px (pill shape)
- Icon: Magnifying glass left
- Placeholder text: secondary color

#### NewsletterSignup
```
┌──────────────────┐  ┌────────────┐
│  Enter email     │  │  Subscribe │
└──────────────────┘  └────────────┘
```
- Email input + button inline
- Button: accent red background

---

## Layer 4: Responsive Behavior

### Breakpoints

| Name | Range | Columns | Gutter | Padding |
|------|-------|---------|--------|---------|
| Mobile | < 640px | 4 | 16px | 16px |
| Tablet | 640-1023px | 8 | 24px | 32px |
| Desktop | 1024-1279px | 12 | 24px | 48px |
| Wide | 1280px+ | 12 | 32px | 80px |

### Responsive Patterns

**Category Grid:**
- Mobile: 2 columns
- Tablet: 3 columns
- Desktop: 6 columns

**Destination Cards:**
- Mobile: 1 column (full-width)
- Tablet: 2 columns
- Desktop: 3-4 columns

**Hero Content:**
- Mobile: Center-aligned, smaller text
- Desktop: Left-aligned with max-width

**Navigation:**
- Mobile: Hamburger menu
- Tablet+: Full horizontal nav

---

## Layer 5: Animation & Interaction

### Transitions

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Card hover | transform, box-shadow | 200ms | ease-out |
| Accordion | height | 300ms | ease-in-out |
| Modal | opacity, transform | 250ms | ease-out |
| Page load | opacity | 400ms | ease |
| Image hover | transform (scale) | 300ms | ease-out |

### Hover States

**Cards:**
```css
transform: translateY(-4px);
box-shadow: 0 12px 24px rgba(0,0,0,0.1);
```

**Buttons:**
```css
Primary: darken background 10%
Secondary: darken border 10%
```

**Links:**
```css
color: darken(primary, 10%);
text-decoration: underline;
```

### Scroll Animations

- Cards fade-in + slide-up on scroll (staggered 100ms)
- Section backgrounds parallax on hero
- Sticky header shadow appears on scroll

---

## Layer 6: Technical Implementation

### Framework Stack (Recommended)

```
Frontend:    Next.js 14 (App Router)
Styling:     Tailwind CSS 3.4
Components:  shadcn/ui (Radix primitives)
Icons:       Lucide React
Fonts:       Next/font (Inter)
Images:      Next/Image (automatic optimization)
Maps:        Mapbox GL JS or Google Maps
Animation:   Framer Motion
CMS:         (TBD - consider Sanity, Contentful)
Hosting:     Vercel
```

### Project Structure

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Home
│   │   ├── layout.tsx            # Marketing layout
│   │   └── destinations/
│   │       ├── page.tsx          # Province list
│   │       └── [province]/
│   │           ├── page.tsx      # Province page
│   │           └── [city]/
│   │               └── [poi]/
│   │                   └── page.tsx
│   ├── (content)/
│   │   ├── trip/
│   │   │   └── [route]/
│   │   └── experience/
│   │       └── [theme]/
│   ├── api/
│   │   ├── attractions/
│   │   │   └── route.ts
│   │   └── pois/
│   │       └── route.ts
│   └── llms.txt/
│       └── route.ts
├── components/
│   ├── ui/                       # shadcn components
│   ├── cards/
│   │   ├── destination-card.tsx
│   │   ├── poi-card.tsx
│   │   └── route-card.tsx
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── mobile-menu.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── category-grid.tsx
│   │   └── faq-accordion.tsx
│   └── forms/
│       ├── search-bar.tsx
│       └── newsletter.tsx
├── lib/
│   ├── utils.ts
│   ├── schemas/                  # Zod schemas
│   └── data/                     # Static data
└── styles/
    └── globals.css
```

### SEO Implementation

#### Schema.org Structured Data

```typescript
// WebSite schema (global)
{ "@type": "WebSite", "name": "ChinaQuest", "potentialAction": { "@type": "SearchAction", "target": ".../search/{search_term_string}" } }

// TouristAttraction schema (per POI)
{ "@type": "TouristAttraction", "name": "Forbidden City", "geo": { "@type": "GeoCoordinates", "latitude": 39.9163, "longitude": 116.3972 }, "priceRange": "¥60" }

// FAQPage schema
{ "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "...", "acceptedAnswer": { "@type": "Answer", "text": "..." } }] }
```

#### hreflang Tags

```html
<link rel="alternate" hreflang="en" href="https://chinaquest.com/en/beijing/" />
<link rel="alternate" hreflang="zh" href="https://chinaquest.com/zh/beijing/" />
<link rel="alternate" hreflang="ja" href="https://chinaquest.com/ja/beijing/" />
```

#### llms.txt

```markdown
# ChinaQuest — China Travel Guide
> Comprehensive travel guide for 34 provinces, 500+ attractions

## Destinations
- /destination/beijing/ - Beijing travel guide
- /destination/shanghai/ - Shanghai travel guide

## Data
- /api/pois.json - All attractions with coordinates
- /api/provinces.json - All provinces with metadata
```

---

## Layer 7: visittheusa Comparison

| Aspect | visittheusa | ChinaQuest |
|--------|-------------|------------|
| Page hierarchy | 3 levels | 5 levels (province → city → POI) |
| Content scope | Country-level | Province → City → POI nested |
| Color psychology | Navy/Gold (US pride) | Navy/Gold/Red (Chinese heritage) |
| Hero height | 100vh | 100vh (home), 60vh (pages) |
| Card style | Portrait 5:6.7 | Portrait 3:4, 16:9 mix |
| Category count | 6 | 6 (Destinations, Routes, Themes, Food, Culture, Practical) |
| FAQ format | Accordion | Accordion + FAQPage schema |
| Language support | 8 (no hreflang) | 9 + hreflang tags |
| Map integration | State picker | Province → City → POI drill-down |
| Data API | None | /api/pois.json public |

---

## Layer 8: Implementation Priority

### Phase 1: Foundation
1. Set up Next.js project with Tailwind
2. Configure fonts (Inter) and base styles
3. Build layout components (Header, Footer, MobileMenu)
4. Implement responsive grid system

### Phase 2: Core Pages
5. Home page with Hero + Category grid
6. Destination listing page
7. Province page template
8. City page template

### Phase 3: Content & POI
9. POI detail page with gallery
10. Route/itinerary page
11. Theme/experience page
12. FAQ accordion component

### Phase 4: SEO & GEO
13. Schema.org structured data
14. hreflang implementation
15. llms.txt generation
16. Public API endpoints

### Phase 5: Polish
17. Animations and transitions
18. Performance optimization
19. Accessibility audit
20. Cross-browser testing
