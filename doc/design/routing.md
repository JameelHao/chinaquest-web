# ChinaQuest Code Routing — Mapping to visittheusa

## visittheusa URL Patterns

| visittheusa Pattern | Example URL | Content Type |
|---------------------|-------------|--------------|
| `/destinations/{state}/` | `/destinations/oregon/` | State page |
| `/destinations/{state}/{city}/` | `/destinations/oregon/portland/` | City page |
| `/destinations/{state}/{poi}/` | `/destinations/oregon/mt-hood/` | Attraction/POI |
| `/trip/{article}/` | `/trip/route-66/` | Route/itinerary |
| `/experience/{theme}/` | `/experience/food-and-drink/` | Theme page |
| `/de/destinations/oregon/` | `/de/destinations/oregon/` | Language variant |

---

## ChinaQuest Route Mapping

### Next.js App Router Structure

```
src/app/
├── (marketing)/
│   ├── layout.tsx              # Shared marketing layout
│   │
│   ├── page.tsx                # Home: /
│   │
│   ├── destinations/
│   │   ├── page.tsx            # Province list: /destinations
│   │   │
│   │   └── [province]/
│   │       ├── page.tsx        # Province: /destinations/beijing
│   │       ├── page.tsx        # Province hero + overview
│   │       │
│   │       ├── [city]/
│   │       │   ├── page.tsx    # City: /destinations/beijing/beijing
│   │       │   │
│   │       │   └── [poi]/
│   │       │       └── page.tsx # POI: /destinations/beijing/beijing/forbidden-city
│   │       │
│   │       └── [poi]/
│   │           └── page.tsx    # Direct POI: /destinations/beijing/forbidden-city
│   │
│   ├── trip/
│   │   └── [route]/
│   │       └── page.tsx        # Route: /trip/silk-road-14-days
│   │
│   ├── experience/
│   │   └── [theme]/
│   │       └── page.tsx        # Theme: /experience/food
│   │
│   └── practical/
│       ├── page.tsx            # Overview: /practical
│       ├── visa/
│       │   └── page.tsx        # /practical/visa
│       ├── transport/
│       │   └── page.tsx        # /practical/transport
│       └── tips/
│           └── page.tsx        # /practical/tips
│
├── [lang]/
│   ├── layout.tsx              # Language layout (hreflang wrapper)
│   │
│   ├── page.tsx               # Localized home: /en, /zh, /ja
│   │
│   └── (marketing routes...)   # Mirror above with [lang] prefix
│
├── api/
│   ├── pois/
│   │   └── route.ts           # GET /api/pois
│   ├── provinces/
│   │   └── route.ts           # GET /api/provinces
│   ├── cities/
│   │   └── route.ts           # GET /api/cities
│   └── search/
│       └── route.ts           # GET /api/search?q=
│
└── llms.txt/
    └── route.ts               # GET /llms.txt
```

---

## Route Comparison

| visittheusa | ChinaQuest | Type |
|-------------|------------|------|
| `/destinations/oregon/` | `/destinations/beijing/` | Province/State |
| `/destinations/oregon/portland/` | `/destinations/beijing/beijing/` | City |
| `/destinations/oregon/mt-hood/` | `/destinations/beijing/beijing/jingshan-park/` | POI |
| `/trip/route-66/` | `/trip/silk-road-14-days/` | Route |
| `/experience/food-and-drink/` | `/experience/food/` | Theme |
| — | `/practical/visa/` | Practical (extra level) |
| `/de/destinations/oregon/` | `/zh/destinations/beijing/` | Language variant |

---

## URL Structure Detail

### Destination Hierarchy (Province → City → POI)

```
/destinations/
├── beijing/
│   ├── beijing/           # Beijing city proper
│   │   ├── forbidden-city/
│   │   ├── tiananmen-square/
│   │   └── jingshan-park/
│   ├── yanqing/
│   │   ├── badaling/
│   │   └── yanqing/
│   └── miyun/
│       └── gubei-water-town/
├── shanghai/
│   ├── shanghai/
│   │   ├── the-bund/
│   │   ├── yu-garden/
│   │   └── oriental-pearl/
│   └──qingpu/
│       └── zhujiajiao/
├── shanxi/
│   ├── taiyuan/
│   │   └── jinci-temple/
│   └── datong/
│       ├── yungang-grottoes/
│       └── hanging-temple/
└── sichuan/
    ├── chengdu/
    │   ├── chengdu-research-base/
    │   └──宽窄巷子/
    └── jiuzhaigou/
```

**Design Decision**: Cities like Beijing have both a city page AND the same name as province. URL is `/destinations/beijing/beijing/` (province/city).

### Trip/Route Hierarchy

```
/trip/
├── silk-road-14-days/
├── yangtze-river-cruise-10-days/
├── classical-gardens-7-days/
├── tibet-adventure-21-days/
└── northeast-winter-10-days/
```

### Experience/Theme Hierarchy

```
/experience/
├── food/
├── culture/
├── nature/
├── adventure/
├── family/
└── wellness/
```

### Practical Hierarchy

```
/practical/
├── visa/
├── transport/
│   ├── flights/
│   ├── trains/
│   └── within-china/
├── best-time/
├── budget/
├── language/
└── tips/
```

---

## File-to-Route Mapping (Page.tsx)

| File Path | Route | visittheusa Equivalent |
|-----------|-------|----------------------|
| `src/app/page.tsx` | `/` | Homepage |
| `src/app/destinations/page.tsx` | `/destinations` | Destinations hub |
| `src/app/destinations/[province]/page.tsx` | `/destinations/:province` | State page |
| `src/app/destinations/[province]/[city]/page.tsx` | `/destinations/:province/:city` | City page |
| `src/app/destinations/[province]/[city]/[poi]/page.tsx` | `/destinations/:province/:city/:poi` | POI detail |
| `src/app/trip/[route]/page.tsx` | `/trip/:route` | Route/itinerary |
| `src/app/experience/[theme]/page.tsx` | `/experience/:theme` | Theme page |
| `src/app/practical/[topic]/page.tsx` | `/practical/:topic` | Practical info |
| `src/app/[lang]/page.tsx` | `/:lang` | Localized home |
| `src/app/[lang]/destinations/[province]/page.tsx` | `/:lang/destinations/:province` | Localized province |
| `src/app/api/pois/route.ts` | `/api/pois` | POI data API |
| `src/app/api/provinces/route.ts` | `/api/provinces` | Province data API |
| `src/app/api/search/route.ts` | `/api/search` | Search API |

---

## Dynamic Segments

### [province]

```typescript
// Valid province slugs
beijing | shanghai | tianjin | chongqing | hebei | shanxi |
neimenggu | liaoning | jilin | heilongjiang | jiangsu |
zhejiang | anhui | fujian | jiangxi | shandong | henan |
hubei | hunan | guangdong | guangxi | hainan | sichuan |
guizhou | yunnan | xizang | shaanxi | gansu | qinghai |
ningxia | xinjiang | taiwan | xianggang | aomen
```

### [city]

```typescript
// Examples: beijing, shanghai, xian, chengdu, hangzhou, suzhou
```

### [poi]

```typescript
// Examples: forbidden-city, great-wall, terracotta-army,
// tiananmen-square, west-lake, yellow-mountain
```

### [route]

```typescript
// Examples: silk-road-14-days, yangtze-cruise-10-days,
// classical-gardens-7-days
```

### [theme]

```typescript
// Examples: food | culture | nature | adventure | family | wellness
```

### [lang]

```typescript
// en | zh | ja | ko | es | fr | de | pt | ru
```

---

## API Endpoints

| Endpoint | Method | Response |
|----------|--------|----------|
| `/api/pois` | GET | All POIs with coordinates, price, hours |
| `/api/pois?province=beijing` | GET | Filtered by province |
| `/api/pois/:id` | GET | Single POI detail |
| `/api/provinces` | GET | All provinces with metadata |
| `/api/cities?province=beijing` | GET | Cities in province |
| `/api/search?q=temple` | GET | Search results |
| `/api/routes` | GET | All routes/itineraries |
| `/llms.txt` | GET | AI crawler manifest |

---

## Multilingual Routes

```
/                           → English (default)
/en/                        → English explicit
/zh/                        → Chinese
/ja/                        → Japanese
/ko/                        → Korean
/es/                        → Spanish
/fr/                        → French
/de/                        → German
/pt/                        → Portuguese
/ru/                        → Russian

/zh/destinations/beijing/
/zh/destinations/beijing/beijing/
/zh/destinations/beijing/beijing/forbidden-city/
/zh/trip/silk-road-14-days/
/zh/experience/food/
```

---

## Route Groups (App Router)

| Group | Purpose | URL Impact |
|-------|---------|-----------|
| `(marketing)` | Shared layout for public pages | None (transparent) |
| `(content)` | Content pages (trip, experience) | None (transparent) |
| `[lang]` | Language prefix segment | Adds `/:lang` prefix |
| `(marketing)/[lang]` | Combined language + marketing | `/:lang/*` |

---

## Implementation Notes

1. **Province/City Name Collision**: Beijing is both a province and a city. Use double segment: `/destinations/beijing/beijing/`

2. **hreflang in Layout**: Each `[lang]` layout adds hreflang meta tags pointing to all language variants

3. **Static Generation**: All destination/route pages should use `generateStaticParams()` for SSG

4. **POI pages can be nested or flat**:
   - Nested: `/destinations/beijing/beijing/forbidden-city/`
   - Flat: `/destinations/beijing/forbidden-city/`
   - **Chosen**: Nested for consistency with city pages

5. **API Routes**: `/api/*` routes return JSON with proper CORS headers for public data access
