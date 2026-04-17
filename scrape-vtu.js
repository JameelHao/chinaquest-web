const { chromium } = require('playwright');
(async () => {
  const wsUrl = 'ws://127.0.0.1:9222/devtools/page/3DB8CBEE12A367F1C2A1D3BAE855726F';
  console.log('Connecting to CDP...');

  // Use connectOverCDP which works
  const browser = await chromium.connectOverCDP(wsUrl);
  console.log('Connected');

  // Get the actual page from the browser
  const pages = await browser.pages();
  console.log('Pages found:', pages.length);
  const page = pages[0];

  const url = page.url();
  console.log('URL:', url);

  await new Promise(r => setTimeout(r, 2000));

  const data = await page.evaluate(() => {
    const get = (el) => {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      return {
        width: s.width,
        height: s.height,
        paddingTop: s.paddingTop,
        paddingBottom: s.paddingBottom,
        marginTop: s.marginTop,
        marginBottom: s.marginBottom,
        bg: s.backgroundColor,
        bgImage: s.backgroundImage.slice(0, 60)
      };
    };

    const header = document.querySelector('header');
    const headerLinks = header
      ? Array.from(header.querySelectorAll('a'))
          .filter(a => a.textContent.trim())
          .slice(0, 15)
          .map(a => {
            const s = window.getComputedStyle(a);
            return {
              text: a.textContent.trim().slice(0, 30),
              href: a.getAttribute('href'),
              fontSize: s.fontSize,
              fontWeight: s.fontWeight,
              color: s.color
            };
          })
      : [];

    const secs = Array.from(document.querySelectorAll('section'))
      .slice(0, 15)
      .map((el, i) => {
        const s = get(el);
        const h = el.querySelector('h1, h2');
        const hs = h ? window.getComputedStyle(h) : null;
        const imgs = Array.from(el.querySelectorAll('img')).slice(0, 2).map(img => ({
          src: img.src.slice(0, 80),
          w: img.naturalWidth,
          h: img.naturalHeight
        }));
        const as = Array.from(el.querySelectorAll('a'))
          .filter(a => a.textContent.trim())
          .slice(0, 5)
          .map(a => a.textContent.trim().slice(0, 30));
        return {
          i,
          className: el.className.slice(0, 80),
          ...s,
          heading: h
            ? {
                text: h.textContent.trim().slice(0, 60),
                fontSize: hs.fontSize,
                fontWeight: hs.fontWeight,
                color: hs.color
              }
            : null,
          imgs,
          links: as
        };
      });

    const footer = document.querySelector('footer');
    const fs = footer ? get(footer) : null;
    const footerLinks = footer
      ? Array.from(footer.querySelectorAll('a'))
          .filter(a => a.textContent.trim())
          .slice(0, 12)
          .map(a => a.textContent.trim().slice(0, 30))
      : [];

    const body = window.getComputedStyle(document.body);
    return {
      headerLinks,
      secs,
      footerStyle: fs,
      footerLinks,
      bodyBg: body.backgroundColor
    };
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})().catch(e => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
