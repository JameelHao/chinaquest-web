"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

/* ── visittheusa header (from screenshot):
   Single transparent bar overlaying hero:
   LEFT:   VISIT THE USA logo
   CENTER: Destinations · Experiences · America250 · Road Trips · Major Events
   RIGHT:  Visa & Entry · Travel Trade · English
   Right edge: vertical "Trip Planner" tab
── */

const navItems = [
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/experience" },
  { label: "China Heritage", href: "/experience/heritage" },
  { label: "Road Trips", href: "/trip" },
  { label: "Major Events", href: "/experience/festivals" },
];

const languages = [
  { code: "en", label: "English", href: "/" },
  { code: "zh", label: "中文", href: "/zh/" },
  { code: "ja", label: "日本語", href: "/ja/" },
  { code: "ko", label: "한국어", href: "/ko/" },
  { code: "de", label: "Deutsch", href: "/de/" },
  { code: "fr", label: "Français", href: "/fr/" },
  { code: "es", label: "Español", href: "/es/" },
  { code: "pt", label: "Português Brasileiro", href: "/pt-br/" },
];

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        {/* Single row — matching visittheusa screenshot exactly */}
        <div
          className="flex items-center px-6 lg:px-10"
          style={{ height: 60 }}
        >
          {/* Logo — left */}
          <Link
            href="/"
            className="font-black text-white uppercase tracking-wider flex-shrink-0"
            style={{ fontSize: 13, letterSpacing: "0.15em", lineHeight: 1, marginRight: 32 }}
          >
            <span style={{ fontSize: 10, display: "block", fontWeight: 700, letterSpacing: "0.2em", marginBottom: 1 }}>
              VISIT
            </span>
            CHINA
          </Link>

          {/* Center nav — desktop: Destinations · Experiences · ChinaHeritage · Road Trips · Major Events */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors px-3 py-1"
                style={{ fontSize: 13, fontWeight: 600 }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side — Visa & Entry · Travel Trade · English */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link
              href="/practical/visa"
              className="text-white/70 hover:text-white transition-colors"
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              Visa &amp; Entry
            </Link>
            <Link
              href="/travel-trade"
              className="text-white/70 hover:text-white transition-colors"
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              Travel Trade
            </Link>
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
                className="text-white font-bold hover:text-white/80 transition-colors cursor-pointer"
                style={{ fontSize: 12 }}
              >
                English
              </button>
              {langOpen && (
                <div
                  className="absolute top-full right-0 mt-2 rounded-lg overflow-hidden shadow-xl"
                  style={{ background: "#fff", minWidth: 180, border: "1px solid rgba(0,0,0,0.08)" }}
                >
                  {languages.map((l) => (
                    <Link
                      key={l.code}
                      href={l.href}
                      className="block px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                      style={{ color: "#404650" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white text-sm font-bold uppercase tracking-wide ml-auto cursor-pointer"
          >
            Menu
          </button>
        </div>
      </header>

      {/* ═══ Mobile menu overlay ═══ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ background: "#1a1a1a" }}>
          <div className="flex items-center justify-between px-6" style={{ height: 60 }}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}
              className="font-black text-white uppercase tracking-wider" style={{ fontSize: 13 }}>
              <span style={{ fontSize: 10, display: "block", fontWeight: 700, letterSpacing: "0.2em", marginBottom: 1 }}>VISIT</span>
              CHINA
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white p-1 cursor-pointer">
              <X size={26} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-white text-2xl font-black uppercase tracking-wide hover:opacity-80 transition-opacity">
                {item.label}
              </Link>
            ))}
            <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <Link href="/practical/visa" onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white/60 text-base hover:text-white transition-colors">
                Visa &amp; Entry
              </Link>
              <Link href="/travel-trade" onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white/60 text-base hover:text-white transition-colors">
                Travel Trade
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
