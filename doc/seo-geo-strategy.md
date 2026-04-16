# SEO & GEO Strategy: Learning from visittheusa.com

## SEO Fundamentals (Learn from visittheusa)

### 1. Page Hierarchy = URL Hierarchy

visittheusa structure:

- `/destination/oregon/` — state page
- `/trip/route-66/` — route page
- `/experience/food-and-drink/` — theme page

Your China version should follow:

- `/destination/beijing/`
- `/destination/beijing/forbidden-city/`
- `/trip/silk-road-14-days/`
- `/experience/food/`

### 2. Structured Data (Schema.org — 3 layers)

visittheusa uses:
- **WebSite** — enables Google search box in results
- **WebPage + BreadcrumbList** — breadcrumb navigation
- **Organization** — brand entity

You should add:

```json
{
  "@type": "TouristAttraction",
  "name": "Forbidden City",
  "geo": { "@type": "GeoCoordinates", "latitude": 39.9163, "longitude": 116.3972 },
  "openingHoursSpecification": {...},
  "isAccessibleForFree": false,
  "priceRange": "¥60"
}
```

visittheusa does **not** have attraction-level structured data. Adding this exceeds their implementation.

### 3. Multilingual (visittheusa approach)

visittheusa has 8 languages but does **not** use hreflang tags (a known gap). You should add:

```html
<link rel="alternate" hreflang="en" href="https://xxx.com/en/beijing/" />
<link rel="alternate" hreflang="zh" href="https://xxx.com/zh/beijing/" />
<link rel="alternate" hreflang="ja" href="https://xxx.com/ja/beijing/" />
```

### 4. Internal Site Search

visittheusa uses SearchAction schema:

```json
{ "@type": "SearchAction", "target": "https://visittheusa.com/search/{search_term_string}/" }
```

Google displays a direct search box in results. Must replicate.

---

## GEO (Where You Can Outperform visittheusa)

AI engines (ChatGPT/Perplexity) prioritize content that directly answers questions.

visittheusa content is **narrative-style** ("stories unfold in unexpected places") — difficult for AI to extract facts. You should use **Q&A format**:

```markdown
## How much is Forbidden City ticket?
Adults ¥60, students ¥20. Closed every Monday.

## How long to visit Forbidden City?
Recommended 3-4 hours. Central axis highlights route ~2 hours.

## What to eat near Forbidden City?
Huguoshi Snacks across from Jingshan Park...
```

AI will cite this content directly with source attribution.

### FAQ Structured Data

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much is the Forbidden City ticket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adult tickets are ¥60, student tickets ¥20."
      }
    }
  ]
}
```

Perplexity and Google AI Overview strongly favor FAQPage schema.

### llms.txt

Place a `/llms.txt` at the site root, exclusively for AI crawlers:

```markdown
# China Travel Guide
> Comprehensive travel guide for 34 provinces, 500+ attractions

## Destinations
- /destination/beijing/ - Beijing travel guide
- /destination/shanghai/ - Shanghai travel guide

## Data
- /api/pois.json - All attractions with coordinates
```

This is a 2025-2026 emerging GEO standard. visittheusa has not implemented it.

### Public Data API

Provide `/api/attractions.json` as a public API. AI crawlers and third-party tools can call your data directly. More data citations = higher GEO authority.

---

## Summary: Copy vs. Outperform

| Aspect | Copy | Outperform |
|--------|------|------------|
| Page hierarchy structure | ✅ | |
| Large-image visual style | ✅ | |
| WebSite + Organization schema | ✅ | |
| Multilingual | ✅ | Add hreflang (they lack it) |
| Attraction structured data | | ✅ They don't do TouristAttraction schema |
| FAQ schema | | ✅ They don't do it |
| llms.txt | | ✅ They don't have it |
| Q&A content format | | ✅ They use narrative style |
| Public data API | | ✅ They don't offer it |

**Conclusion**: Replicate visittheusa's structure for SEO. For GEO, implement what they haven't (FAQ schema + llms.txt + Q&A content) — this is how you surpass them in the AI era.
