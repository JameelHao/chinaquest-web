const { chromium } = require('playwright');
const fs = require('fs');

setTimeout(() => {
  console.error('TIMEOUT');
  process.exit(1);
}, 120000);

(async () => {
  const userDataDir = '/tmp/pw-vtu-detail-' + Date.now();
  const browser = await chromium.launchPersistentContext(userDataDir, {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--remote-debugging-port=9223', '--no-first-run', '--no-default-browser-check'],
    headless: false,
  });

  const page = browser.pages()[0] || await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  console.error('Navigating...');
  await page.goto('https://www.visittheusa.com/', { timeout: 90000, waitUntil: 'domcontentloaded' });
  console.error('Waiting 12 sec...');
  await new Promise(r => setTimeout(r, 12000));

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
        top: s.top, left: s.left, zIndex: s.zIndex,
        borderRadius: s.borderRadius,
        objectFit: s.objectFit, objectPosition: s.objectPosition,
        transform: s.transform, overflow: s.overflow,
        flexDirection: s.flexDirection,
        alignItems: s.alignItems, justifyContent: s.justifyContent,
        gap: s.gap,
      };
    }

    // TOP BAR
    const topBar = document.getElementById('top-bar');
    const topBarStyle = topBar ? getStyle(topBar) : null;
    const topBarChildren = topBar ? Array.from(topBar.children).map(c => ({
      tag: c.tagName.toLowerCase(),
      className: typeof c.className === 'string' ? c.className.slice(0, 80) : '',
      style: getStyle(c),
    })) : [];

    // HEADER (hero)
    const header = document.querySelector('header.hero');
    const headerStyle = header ? getStyle(header) : null;
    const headerBg = header ? window.getComputedStyle(header).backgroundImage : null;

    // Header inner content
    const headerInner = header ? header.querySelector('.header-content-wrap') : null;
    const headerInnerStyle = headerInner ? getStyle(headerInner) : null;

    // H1 in header
    const h1 = header ? header.querySelector('h1') : null;
    const h1Style = h1 ? getStyle(h1) : null;

    // THE INTRO SECTION (shifan-text)
    const introSection = document.querySelector('.shifan-text');
    const introStyle = introSection ? getStyle(introSection) : null;
    const introH2 = introSection ? introSection.querySelector('h2') : null;
    const introH2Style = introH2 ? getStyle(introH2) : null;
    const introP = introSection ? introSection.querySelector('p') : null;
    const introPStyle = introP ? getStyle(introP) : null;
    const introA = introSection ? introSection.querySelector('a') : null;
    const introAStyle = introA ? getStyle(introA) : null;

    // CARDSTACK - each card
    const cardstack = document.querySelector('.cardstack');
    const cardstackStyle = cardstack ? getStyle(cardstack) : null;
    const cards = cardstack ? Array.from(cardstack.querySelectorAll(':scope > section, :scope > div')) : [];
    const cardData = cards.slice(0, 8).map((card, i) => {
      const s = getStyle(card);
      const h2 = card.querySelector('h2');
      const h2s = h2 ? getStyle(h2) : null;
      const p = card.querySelector('p');
      const ps = p ? getStyle(p) : null;
      const imgs = Array.from(card.querySelectorAll('img')).slice(0, 3).map(img => ({
        src: img.src.slice(0, 80),
        naturalW: img.naturalWidth,
        naturalH: img.naturalHeight,
        style: getStyle(img),
      }));
      const as = Array.from(card.querySelectorAll('a')).filter(a => a.textContent.trim()).slice(0, 5).map(a => ({
        text: a.textContent.trim().slice(0, 40),
        href: a.getAttribute('href'),
        style: getStyle(a),
      }));
      const ctag = card.tagName.toLowerCase();
      const cclass = typeof card.className === 'string' ? card.className.slice(0, 80) : '';
      return { i, tag: ctag, className: cclass, height: s?.height, bg: s?.bg, bgImage: s?.bgImage, h2: h2s ? { text: h2?.textContent?.trim().slice(0, 80), ...h2s } : null, p: ps ? { text: p?.textContent?.trim().slice(0, 100), ...ps } : null, imgs, links: as };
    });

    // SOCIAL SECTION (ugc-section)
    const ugc = document.querySelector('.ugc-section');
    const ugcStyle = ugc ? getStyle(ugc) : null;
    const ugcH2 = ugc ? ugc.querySelector('h2') : null;
    const ugcH2Style = ugcH2 ? getStyle(ugcH2) : null;

    // NEWSLETTER SECTION (wp-block-group)
    const newsletter = document.querySelector('.wp-block-group');
    const newsletterStyle = newsletter ? getStyle(newsletter) : null;
    const newsletterH2 = newsletter ? newsletter.querySelector('h2') : null;
    const newsletterH2Style = newsletterH2 ? getStyle(newsletterH2) : null;

    // FOOTER
    const footer = document.querySelector('footer');
    const footerStyle = footer ? getStyle(footer) : null;

    // Footer top section
    const footerTop = footer ? footer.querySelector('.top-footer-wrap') : null;
    const footerTopStyle = footerTop ? getStyle(footerTop) : null;
    const footerTopCols = footerTop ? Array.from(footerTop.children).map(c => ({
      tag: c.tagName.toLowerCase(),
      className: typeof c.className === 'string' ? c.className.slice(0, 80) : '',
      style: getStyle(c),
      links: Array.from(c.querySelectorAll('a')).filter(a => a.textContent.trim()).slice(0, 6).map(a => ({
        text: a.textContent.trim().slice(0, 40),
        href: a.getAttribute('href'),
        style: getStyle(a),
      })),
    })) : [];

    // Footer bottom
    const footerBottom = footer ? footer.querySelector('.footer-bottom-wrap') : null;
    const footerBottomStyle = footerBottom ? getStyle(footerBottom) : null;

    // Get bg image from footer
    const footerBgImg = footer ? footer.querySelector('.bg-image') : null;
    const footerBgImgStyle = footerBgImg ? getStyle(footerBgImg) : null;
    const footerBgImgSrc = footerBgImg ? footerBgImg.src : null;

    return {
      topBarStyle, topBarChildren,
      headerStyle, headerBg,
      headerInnerStyle, h1Style,
      introStyle, introH2Style, introPStyle, introAStyle,
      cardstackStyle, cardData,
      ugcStyle, ugcH2Style,
      newsletterStyle, newsletterH2Style,
      footerStyle, footerTopStyle, footerTopCols, footerBottomStyle,
      footerBgImgStyle, footerBgImgSrc,
    };
  });

  const output = JSON.stringify(data, null, 2);
  fs.writeFileSync('/tmp/vtu-detail.json', output);
  console.log('Saved:', output.length, 'chars');
  await browser.close();
  process.exit(0);
})().catch(e => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
