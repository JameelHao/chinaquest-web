const { chromium } = require('playwright');
const fs = require('fs');

setTimeout(() => {
  console.error('TIMEOUT');
  process.exit(1);
}, 120000);

(async () => {
  const userDataDir = '/tmp/pw-vtu-alabama-' + Date.now();
  const browser = await chromium.launchPersistentContext(userDataDir, {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-first-run', '--no-default-browser-check', '--disable-blink-features=AutomationControlled'],
    headless: false,
  });

  const page = browser.pages()[0] || await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  console.error('Navigating to Alabama page...');
  await page.goto('https://www.visittheusa.com/destinations/alabama/', { timeout: 90000, waitUntil: 'domcontentloaded' });
  console.error('Waiting 15 sec for Cloudflare + page render...');
  await new Promise(r => setTimeout(r, 15000));

  const data = await page.evaluate(() => {
    function getStyle(el) {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      return {
        width: s.width, height: s.height,
        paddingTop: s.paddingTop, paddingBottom: s.paddingBottom,
        paddingLeft: s.paddingLeft, paddingRight: s.paddingRight,
        marginTop: s.marginTop, marginBottom: s.marginBottom,
        bg: s.backgroundColor, bgImage: s.backgroundImage,
        color: s.color, fontSize: s.fontSize, fontWeight: s.fontWeight,
        lineHeight: s.lineHeight, letterSpacing: s.letterSpacing,
        fontFamily: s.fontFamily, textTransform: s.textTransform,
        textAlign: s.textAlign, display: s.display, position: s.position,
        gridTemplateColumns: s.gridTemplateColumns,
        flexDirection: s.flexDirection,
        alignItems: s.alignItems, justifyContent: s.justifyContent,
        gap: s.gap, columnGap: s.columnGap, rowGap: s.rowGap,
        borderRadius: s.borderRadius, overflow: s.overflow,
        maxWidth: s.maxWidth, minHeight: s.minHeight,
        boxSizing: s.boxSizing,
      };
    }

    function getOuterHTML(el, maxLen = 200) {
      if (!el) return null;
      return el.outerHTML.slice(0, maxLen);
    }

    // Find the intro section — try multiple selectors
    // Visittheusa state pages typically have a section after the hero with state nickname
    const allSections = Array.from(document.querySelectorAll('section, [class*=intro], [class*=overview], [class*=about]'));

    // Map all top-level sections for context
    const bodyChildren = Array.from(document.body.querySelectorAll('main > *, body > header, body > main, body > footer, body > section, body > div')).map((el, i) => ({
      i,
      tag: el.tagName.toLowerCase(),
      className: typeof el.className === 'string' ? el.className.slice(0, 120) : '',
      id: el.id || '',
      style: getStyle(el),
      headings: Array.from(el.querySelectorAll('h1,h2,h3')).slice(0, 3).map(h => ({
        tag: h.tagName.toLowerCase(),
        text: h.textContent?.trim().slice(0, 80),
        style: getStyle(h),
      })),
      snippet: el.outerHTML.slice(0, 300),
    }));

    // Try to find the two-column intro section
    // Look for sections containing a map or the state nickname
    const introSection = document.querySelector('[class*=shifan], [class*=intro], [class*=overview]')
      || document.querySelector('.wp-block-columns')
      || allSections.find(s => {
        const text = s.textContent || '';
        return (text.includes('Yellowhammer') || text.includes('Sweet Home') || text.includes('Heart of Dixie'));
      });

    let introData = null;
    if (introSection) {
      const children = Array.from(introSection.children);
      introData = {
        tag: introSection.tagName.toLowerCase(),
        className: typeof introSection.className === 'string' ? introSection.className.slice(0, 200) : '',
        style: getStyle(introSection),
        snippet: introSection.outerHTML.slice(0, 500),
        children: children.map((c, i) => ({
          i,
          tag: c.tagName.toLowerCase(),
          className: typeof c.className === 'string' ? c.className.slice(0, 120) : '',
          style: getStyle(c),
          snippet: c.outerHTML.slice(0, 400),
          headings: Array.from(c.querySelectorAll('h1,h2,h3')).slice(0, 3).map(h => ({
            tag: h.tagName.toLowerCase(),
            text: h.textContent?.trim().slice(0, 80),
            style: getStyle(h),
          })),
          paragraphs: Array.from(c.querySelectorAll('p')).slice(0, 3).map(p => ({
            text: p.textContent?.trim().slice(0, 120),
            style: getStyle(p),
          })),
        })),
      };
    }

    // Also try to find ALL sections after hero
    const mainContent = document.querySelector('main') || document.body;
    const mainChildren = Array.from(mainContent.children);

    // Find hero (header or first big section)
    const heroIdx = mainChildren.findIndex(el => {
      const cls = typeof el.className === 'string' ? el.className : '';
      return cls.includes('hero') || el.tagName === 'HEADER' || (el.querySelector('h1') && el.querySelector('img'));
    });

    // Get the section right after hero
    let afterHero = null;
    if (heroIdx >= 0 && heroIdx + 1 < mainChildren.length) {
      const el = mainChildren[heroIdx + 1];
      const children = Array.from(el.children);
      afterHero = {
        tag: el.tagName.toLowerCase(),
        className: typeof el.className === 'string' ? el.className.slice(0, 200) : '',
        style: getStyle(el),
        fullHTML: el.outerHTML.slice(0, 2000),
        children: children.map((c, i) => ({
          i,
          tag: c.tagName.toLowerCase(),
          className: typeof c.className === 'string' ? c.className.slice(0, 120) : '',
          style: getStyle(c),
          innerSnippet: c.innerHTML.slice(0, 600),
          headings: Array.from(c.querySelectorAll('h1,h2,h3')).slice(0, 5).map(h => ({
            tag: h.tagName.toLowerCase(),
            text: h.textContent?.trim().slice(0, 80),
            style: getStyle(h),
          })),
          paragraphs: Array.from(c.querySelectorAll('p')).slice(0, 5).map(p => ({
            text: p.textContent?.trim().slice(0, 200),
            style: getStyle(p),
          })),
          lists: Array.from(c.querySelectorAll('li, [class*=highlight], [class*=feature]')).slice(0, 5).map(li => ({
            text: li.textContent?.trim().slice(0, 120),
            style: getStyle(li),
            snippet: li.outerHTML.slice(0, 300),
          })),
        })),
      };
    }

    // Look for map element
    const mapEl = document.querySelector('[class*=map], iframe[src*=map], .mapboxgl-map, .leaflet-container, [id*=map]');
    let mapData = null;
    if (mapEl) {
      mapData = {
        tag: mapEl.tagName.toLowerCase(),
        className: typeof mapEl.className === 'string' ? mapEl.className.slice(0, 120) : '',
        style: getStyle(mapEl),
        src: mapEl.src || null,
      };
    }

    return {
      bodyChildren,
      introData,
      afterHero,
      mapData,
      url: window.location.href,
      title: document.title,
    };
  });

  // Also take a screenshot
  await page.screenshot({ path: '/tmp/vtu-alabama-screenshot.png', fullPage: true });
  console.error('Screenshot saved to /tmp/vtu-alabama-screenshot.png');

  const output = JSON.stringify(data, null, 2);
  fs.writeFileSync('/tmp/vtu-alabama-intro.json', output);
  console.log(output);
  console.error('Saved to /tmp/vtu-alabama-intro.json (' + output.length + ' chars)');

  await browser.close();
  process.exit(0);
})().catch(e => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
