const { chromium } = require('playwright');
const fs = require('fs');

setTimeout(() => { console.error('TIMEOUT'); process.exit(1); }, 120000);

(async () => {
  const userDataDir = '/tmp/pw-vtu-tripmap-' + Date.now();
  const browser = await chromium.launchPersistentContext(userDataDir, {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-first-run', '--no-default-browser-check', '--disable-blink-features=AutomationControlled'],
    headless: false,
  });

  const page = browser.pages()[0] || await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  console.error('Navigating...');
  await page.goto('https://www.visittheusa.com/destinations/alabama/', { timeout: 90000, waitUntil: 'domcontentloaded' });
  console.error('Waiting 15 sec...');
  await new Promise(r => setTimeout(r, 15000));

  // Screenshot just the trip-map section
  const tripMapEl = await page.$('section.trip-map');
  if (tripMapEl) {
    await tripMapEl.screenshot({ path: '/tmp/vtu-tripmap-screenshot.png' });
    console.error('Trip-map screenshot saved');
  }

  const data = await page.evaluate(() => {
    function getStyle(el) {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      return {
        width: s.width, height: s.height,
        paddingTop: s.paddingTop, paddingBottom: s.paddingBottom,
        paddingLeft: s.paddingLeft, paddingRight: s.paddingRight,
        marginTop: s.marginTop, marginBottom: s.marginBottom,
        bg: s.backgroundColor, color: s.color,
        fontSize: s.fontSize, fontWeight: s.fontWeight,
        lineHeight: s.lineHeight, letterSpacing: s.letterSpacing,
        fontFamily: s.fontFamily, textTransform: s.textTransform,
        display: s.display, position: s.position,
        flexDirection: s.flexDirection,
        alignItems: s.alignItems, justifyContent: s.justifyContent,
        gap: s.gap, columnGap: s.columnGap,
        gridTemplateColumns: s.gridTemplateColumns,
        borderRadius: s.borderRadius, maxWidth: s.maxWidth,
        borderBottom: s.borderBottom, borderTop: s.borderTop,
      };
    }

    const section = document.querySelector('section.trip-map');
    if (!section) return { error: 'trip-map section not found' };

    // The section itself
    const sectionStyle = getStyle(section);

    // The fold-wrap container
    const foldWrap = section.querySelector('.fold-wrap');
    const foldWrapStyle = foldWrap ? getStyle(foldWrap) : null;

    // Left column: title-wrap
    const titleWrap = section.querySelector('.title-wrap');
    const titleWrapStyle = titleWrap ? getStyle(titleWrap) : null;

    // H2 in title-wrap
    const h2 = titleWrap ? titleWrap.querySelector('h2') : null;
    const h2Style = h2 ? getStyle(h2) : null;
    const h2Text = h2 ? h2.textContent.trim() : null;

    // Description paragraph
    const descP = titleWrap ? titleWrap.querySelector('p') : null;
    const descPStyle = descP ? getStyle(descP) : null;
    const descPText = descP ? descP.textContent.trim().slice(0, 300) : null;

    // Highlight items (usually .togggle-container or similar list)
    const highlightItems = titleWrap
      ? Array.from(titleWrap.querySelectorAll('.togggle-container > *, .highlight-item, .feature-item, li, [class*=feature], [class*=highlight], .fold-flex > div'))
        .filter(el => el.textContent.trim().length > 10)
        .slice(0, 10)
        .map(el => ({
          tag: el.tagName.toLowerCase(),
          className: typeof el.className === 'string' ? el.className.slice(0, 120) : '',
          text: el.textContent.trim().slice(0, 200),
          style: getStyle(el),
          html: el.outerHTML.slice(0, 500),
        }))
      : [];

    // ALL children of title-wrap for structure
    const titleWrapChildren = titleWrap
      ? Array.from(titleWrap.children).map((c, i) => ({
          i,
          tag: c.tagName.toLowerCase(),
          className: typeof c.className === 'string' ? c.className.slice(0, 120) : '',
          text: c.textContent.trim().slice(0, 200),
          style: getStyle(c),
          html: c.outerHTML.slice(0, 600),
          childCount: c.children.length,
        }))
      : [];

    // Right column: map-wrap
    const mapWrap = section.querySelector('.map-wrap, [class*=map], .col-sm-9, .trip-map-wrap-general > :last-child');
    const mapWrapStyle = mapWrap ? getStyle(mapWrap) : null;
    const mapWrapClass = mapWrap ? (typeof mapWrap.className === 'string' ? mapWrap.className.slice(0, 120) : '') : null;

    // Find the actual map element inside
    const mapEl = section.querySelector('.mapboxgl-map, .leaflet-container, iframe, [class*=mapbox], canvas');
    const mapElStyle = mapEl ? getStyle(mapEl) : null;

    // All direct children of fold-wrap for column structure
    const foldWrapChildren = foldWrap
      ? Array.from(foldWrap.children).map((c, i) => ({
          i,
          tag: c.tagName.toLowerCase(),
          className: typeof c.className === 'string' ? c.className.slice(0, 120) : '',
          style: getStyle(c),
          childCount: c.children.length,
          html: c.outerHTML.slice(0, 300),
        }))
      : [];

    // Full HTML of the section (truncated)
    const sectionHTML = section.outerHTML.slice(0, 5000);

    return {
      sectionStyle,
      foldWrapStyle,
      foldWrapChildren,
      titleWrapStyle,
      titleWrapChildren,
      h2Style, h2Text,
      descPStyle, descPText,
      highlightItems,
      mapWrapStyle, mapWrapClass,
      mapElStyle,
      sectionHTML,
    };
  });

  const output = JSON.stringify(data, null, 2);
  fs.writeFileSync('/tmp/vtu-tripmap.json', output);
  console.log(output);
  console.error('Done. Saved to /tmp/vtu-tripmap.json');

  await browser.close();
  process.exit(0);
})().catch(e => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
