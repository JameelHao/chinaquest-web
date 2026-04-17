const { chromium } = require('playwright');
setTimeout(() => { console.error('TIMEOUT'); process.exit(1); }, 60000);

(async () => {
  const browser = await chromium.launchPersistentContext('/tmp/pw-vtu4', {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--remote-debugging-port=9229', '--no-first-run', '--no-default-browser-check'],
    headless: false
  });

  const page = browser.pages()[0] || await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('https://www.visittheusa.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 8000));

  const data = await page.evaluate(() => {
    // Find ALL links in header, including hidden
    const header = document.querySelector('header');
    const allHeaderLinks = header
      ? Array.from(header.querySelectorAll('a')).map(a => ({
          text: a.textContent.trim(),
          href: a.getAttribute('href'),
          visible: a.offsetParent !== null
        }))
      : [];

    // Find the nav/menu items specifically
    const navEls = Array.from(document.querySelectorAll('nav a, header a, [class*=nav] a')).filter(a => a.textContent.trim()).slice(0,20).map(a => ({
      text: a.textContent.trim(),
      href: a.getAttribute('href'),
      visible: a.offsetParent !== null
    }));

    // Try to find the mobile menu or overlay
    const mobileMenu = document.querySelector('[class*=mobile], [class*=menu], [class*=overlay], nav');
    const menuLinks = mobileMenu
      ? Array.from(mobileMenu.querySelectorAll('a')).filter(a => a.textContent.trim()).slice(0,20).map(a => ({
          text: a.textContent.trim(),
          href: a.getAttribute('href')
        }))
      : [];

    // Get the hero section - the big first cardstack
    const cardstack = document.querySelector('.cardstack, [class*=cardstack]');
    const cards = cardstack
      ? Array.from(cardstack.querySelectorAll('.a-card, [class*=a-card]')).slice(0,8).map((card, i) => {
          const h2 = card.querySelector('h2');
          const p = card.querySelector('p');
          const link = card.querySelector('a[href]');
          const img = card.querySelector('img');
          const hs = h2 ? window.getComputedStyle(h2) : null;
          const ps = p ? window.getComputedStyle(p) : null;
          return {
            index: i,
            heading: h2 ? { text: h2.textContent.trim().slice(0,60), fontSize: hs.fontSize, fontWeight: hs.fontWeight, color: hs.color } : null,
            paragraph: p ? { text: p.textContent.trim().slice(0,60), fontSize: ps.fontSize, color: ps.color } : null,
            link: link ? { text: link.textContent.trim().slice(0,40), href: link.getAttribute('href') } : null,
            imgSrc: img ? img.src.slice(0,80) : null,
            imgW: img ? img.naturalWidth : 0
          };
        })
      : [];

    // Full page structure - all direct children
    const structure = Array.from(document.body.children).map((el, i) => {
      const s = window.getComputedStyle(el);
      const h = el.querySelector('h1,h2');
      const hs = h ? window.getComputedStyle(h) : null;
      return {
        i,
        tag: el.tagName,
        className: el.className.slice(0,80),
        height: s.height,
        bg: s.backgroundColor,
        heading: h ? { text: h.textContent.trim().slice(0,60), fontSize: hs.fontSize } : null
      };
    });

    // Footer columns
    const footer = document.querySelector('footer');
    const footerCols = footer ? Array.from(footer.querySelectorAll('[class*=col], [class*=grid]')).slice(0,8).map(el => {
      const links = Array.from(el.querySelectorAll('a')).filter(a => a.textContent.trim()).slice(0,6).map(a => a.textContent.trim().slice(0,30));
      return { className: el.className.slice(0,40), links };
    }) : [];

    return { allHeaderLinks, navEls, menuLinks, cards, structure, footerLinks: footer ? Array.from(footer.querySelectorAll('a')).filter(a => a.textContent.trim()).slice(0,20).map(a => a.textContent.trim().slice(0,30)) : [] };
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
  process.exit(0);
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
