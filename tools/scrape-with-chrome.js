const { chromium } = require('playwright');

/**
 * Scrape a website using Playwright's launchPersistentContext.
 * This launches a real Chrome browser instance that can bypass
 * Cloudflare and other anti-bot protections.
 *
 * Usage:
 *   node tools/scrape-with-chrome.js https://example.com [waitSeconds]
 *
 * The Chrome instance runs in headless:false so you can see the browser.
 * For Cloudflare sites, complete the verification manually in the browser
 * window before the script continues.
 */

const url = process.argv[2] || 'https://www.visittheusa.com/';
const waitSeconds = parseInt(process.argv[3] || '8', 10);
const timeoutMs = parseInt(process.argv[4] || '60000', 10);

setTimeout(() => {
  console.error('TIMEOUT after', timeoutMs, 'ms');
  process.exit(1);
}, timeoutMs);

(async () => {
  const userDataDir = '/tmp/pw-chrome-' + Date.now();

  const browser = await chromium.launchPersistentContext(userDataDir, {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: [
      '--remote-debugging-port=9222',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-blink-features=AutomationControlled',
    ],
    headless: false,
  });

  const page = browser.pages()[0] || await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  console.log('Navigating to:', url);
  await page.goto(url, { timeout: timeoutMs, waitUntil: 'domcontentloaded' });

  console.log('Waiting', waitSeconds, 'seconds...');
  await new Promise(r => setTimeout(r, waitSeconds * 1000));

  const data = await page.evaluate(() => {
    const getStyle = (el) => {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      return {
        width: s.width,
        height: s.height,
        bg: s.backgroundColor,
        display: s.display,
      };
    };

    // Header links
    const header = document.querySelector('header');
    const allHeaderLinks = header
      ? Array.from(header.querySelectorAll('a')).map(a => ({
          text: a.textContent.trim(),
          href: a.getAttribute('href'),
          visible: a.offsetParent !== null,
        }))
      : [];

    // Nav elements
    const navEls = Array.from(
      document.querySelectorAll('nav a, header a, [class*=nav] a')
    )
      .filter(a => a.textContent.trim())
      .slice(0, 20)
      .map(a => ({
        text: a.textContent.trim(),
        href: a.getAttribute('href'),
        visible: a.offsetParent !== null,
      }));

    // Sections
    const structure = Array.from(document.body.children).map((el, i) => {
      const s = getStyle(el);
      const h = el.querySelector('h1,h2');
      const hs = h ? window.getComputedStyle(h) : null;
      return {
        i,
        tag: el.tagName,
        className: el.className.slice(0, 80),
        height: s?.height,
        bg: s?.bg,
        heading: h
          ? { text: h.textContent.trim().slice(0, 60), fontSize: hs?.fontSize }
          : null,
      };
    });

    // Footer
    const footer = document.querySelector('footer');
    const footerCols = footer
      ? Array.from(footer.querySelectorAll('[class*=col], [class*=grid]'))
          .slice(0, 8)
          .map(el => {
            const links = Array.from(el.querySelectorAll('a'))
              .filter(a => a.textContent.trim())
              .slice(0, 6)
              .map(a => a.textContent.trim().slice(0, 30));
            return { className: el.className.slice(0, 40), links };
          })
      : [];

    return {
      allHeaderLinks,
      navEls,
      structure,
      footerCols,
      footerLinks: footer
        ? Array.from(footer.querySelectorAll('a'))
            .filter(a => a.textContent.trim())
            .slice(0, 20)
            .map(a => a.textContent.trim().slice(0, 30))
        : [],
    };
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
  process.exit(0);
})().catch(e => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
