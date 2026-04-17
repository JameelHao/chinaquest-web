const { chromium } = require('playwright');
const fs = require('fs');

const url = process.argv[2] || 'https://www.visittheusa.com/';
const waitSeconds = parseInt(process.argv[3] || '12', 10);

setTimeout(() => {
  console.error('TIMEOUT');
  process.exit(1);
}, 120000);

(async () => {
  const userDataDir = '/tmp/pw-vtu-full-' + Date.now();
  const browser = await chromium.launchPersistentContext(userDataDir, {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--remote-debugging-port=9222', '--no-first-run', '--no-default-browser-check'],
    headless: false,
  });

  const page = browser.pages()[0] || await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  console.error('Navigating...');
  await page.goto(url, { timeout: 90000, waitUntil: 'domcontentloaded' });

  console.error('Waiting', waitSeconds, 'sec for Cloudflare...');
  await new Promise(r => setTimeout(r, waitSeconds * 1000));

  const data = await page.evaluate(() => {
    function getStyles(el) {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      return {
        width: s.width, height: s.height,
        minHeight: s.minHeight, maxHeight: s.maxHeight,
        paddingTop: s.paddingTop, paddingBottom: s.paddingBottom,
        paddingLeft: s.paddingLeft, paddingRight: s.paddingRight,
        marginTop: s.marginTop, marginBottom: s.marginBottom,
        bg: s.backgroundColor, bgImage: s.backgroundImage,
        color: s.color, fontSize: s.fontSize, fontWeight: s.fontWeight,
        lineHeight: s.lineHeight, letterSpacing: s.letterSpacing,
        display: s.display, position: s.position,
        top: s.top, left: s.left, right: s.right, bottom: s.bottom,
        zIndex: s.zIndex, overflow: s.overflow,
        borderTopLeftRadius: s.borderTopLeftRadius,
        borderTopRightRadius: s.borderTopRightRadius,
        borderBottomLeftRadius: s.borderBottomLeftRadius,
        borderBottomRightRadius: s.borderBottomRightRadius,
        transform: s.transform,
      };
    }

    function getTextStyles(el) {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      return {
        fontSize: s.fontSize, fontWeight: s.fontWeight,
        lineHeight: s.lineHeight, letterSpacing: s.letterSpacing,
        color: s.color, fontFamily: s.fontFamily,
        textTransform: s.textTransform, textAlign: s.textAlign,
      };
    }

    // Full body children structure
    const sections = Array.from(document.body.children).map((el, i) => {
      const s = getStyles(el);
      const tag = el.tagName.toLowerCase();
      const id = el.id;
      const className = typeof el.className === 'string' ? el.className.slice(0, 120) : '';

      // Get all h1, h2, h3
      const headings = Array.from(el.querySelectorAll('h1,h2,h3')).map(h => ({
        tag: h.tagName.toLowerCase(),
        text: h.textContent.trim().slice(0, 80),
        ...getTextStyles(h),
      }));

      // Get all images with dimensions
      const imgs = Array.from(el.querySelectorAll('img')).slice(0, 10).map(img => ({
        src: img.src.slice(0, 100),
        naturalW: img.naturalWidth,
        naturalH: img.naturalHeight,
        objectFit: window.getComputedStyle(img).objectFit,
        objectPosition: window.getComputedStyle(img).objectPosition,
      }));

      // Get all links text
      const links = Array.from(el.querySelectorAll('a')).filter(a => a.textContent.trim()).slice(0, 15).map(a => ({
        text: a.textContent.trim().slice(0, 40),
        href: a.getAttribute('href'),
      }));

      // Get direct children style info
      const children = Array.from(el.children).slice(0, 5).map((child, ci) => {
        const cs = getStyles(child);
        const ctag = child.tagName.toLowerCase();
        const cclass = typeof child.className === 'string' ? child.className.slice(0, 80) : '';
        const ch = child.querySelector('h1,h2,h3');
        return {
          tag: ctag,
          className: cclass,
          height: cs?.height,
          bg: cs?.bg,
          childHeading: ch ? { text: ch.textContent.trim().slice(0, 60), ...getTextStyles(ch) } : null,
        };
      });

      return {
        i, tag, id, className,
        height: s?.height, minHeight: s?.minHeight,
        bg: s?.bg, bgImage: s?.bgImage,
        display: s?.display, position: s?.position,
        zIndex: s?.zIndex,
        headings, imgs, links, children,
      };
    });

    // Header nav
    const header = document.querySelector('header') || document.querySelector('[class*=header]');
    const headerStyle = header ? getStyles(header) : null;
    const headerLinks = header
      ? Array.from(header.querySelectorAll('a')).filter(a => a.textContent.trim()).slice(0, 25).map(a => ({
          text: a.textContent.trim().slice(0, 50),
          href: a.getAttribute('href'),
          ...getTextStyles(a),
          className: typeof a.className === 'string' ? a.className.slice(0, 60) : '',
        }))
      : [];

    // Footer
    const footer = document.querySelector('footer');
    const footerStyle = footer ? getStyles(footer) : null;
    const footerCols = footer
      ? Array.from(footer.querySelectorAll('section, [class*=col], [class*=grid]')).slice(0, 8).map(el => ({
          className: typeof el.className === 'string' ? el.className.slice(0, 60) : '',
          ...getStyles(el),
          links: Array.from(el.querySelectorAll('a')).filter(a => a.textContent.trim()).slice(0, 8).map(a => ({
            text: a.textContent.trim().slice(0, 40),
            href: a.getAttribute('href'),
          })),
        }))
      : [];

    // CSS custom properties (design tokens)
    const rootStyles = getComputedStyle(document.documentElement);
    const cssVars = {};
    for (const prop of rootStyles) {
      if (prop.startsWith('--')) cssVars[prop] = rootStyles.getPropertyValue(prop);
    }

    // All text on page - get computed styles for key text elements
    const allH1 = Array.from(document.querySelectorAll('h1')).slice(0, 5).map(h => ({
      text: h.textContent.trim().slice(0, 80),
      ...getTextStyles(h),
    }));
    const allH2 = Array.from(document.querySelectorAll('h2')).slice(0, 10).map(h => ({
      text: h.textContent.trim().slice(0, 80),
      ...getTextStyles(h),
    }));

    return {
      sections, headerStyle, headerLinks, footerStyle, footerCols,
      cssVars, allH1, allH2,
    };
  });

  // Save to file
  const output = JSON.stringify(data, null, 2);
  fs.writeFileSync('/tmp/vtu-full-scrape.json', output);
  console.log('Output saved to /tmp/vtu-full-scrape.json');
  console.log('Size:', output.length, 'chars');

  await browser.close();
  process.exit(0);
})().catch(e => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
