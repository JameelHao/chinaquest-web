"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";

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
  { label: "China 5000", href: "/experience/heritage" },
  { label: "Road Trips", href: "/trip" },
  { label: "Major Events", href: "/experience/festivals" },
];

const languages = [
  { code: "en", label: "English", href: "/" },
  { code: "zh", label: "中文", href: "/zh/" },
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
          style={{ height: 80 }}
        >
          {/* Logo — left */}
          <Link
            href="/"
            className="font-black text-white uppercase tracking-tighter flex-shrink-0"
            style={{ fontSize: 24, lineHeight: 0.8, marginRight: 48 }}
          >
            <span style={{ fontSize: 10, display: "block", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 2 }}>
              VISIT THE
            </span>
            CHINA
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-white/80 transition-colors"
                style={{ fontSize: 14, fontWeight: 700 }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <Link
              href="/practical/visa"
              className="text-white flex items-center gap-1.5 hover:text-white/80 transition-colors"
              style={{ fontSize: 14, fontWeight: 700 }}
            >
              <span className="w-4 h-4 border border-white/50 rounded-sm inline-flex items-center justify-center" style={{ fontSize: 8 }}>V</span>
              Visa & Entry
            </Link>
            <Link
              href="/travel-trade"
              className="text-white flex items-center gap-1.5 hover:text-white/80 transition-colors"
              style={{ fontSize: 14, fontWeight: 700 }}
            >
              <span className="w-4 h-4 border border-white/50 rounded-sm inline-flex items-center justify-center" style={{ fontSize: 8 }}>T</span>
              Travel Trade
            </Link>
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
                className="text-white font-bold hover:text-white/80 transition-colors cursor-pointer flex items-center gap-1"
                style={{ fontSize: 14 }}
              >
                English <span style={{ fontSize: 10, transform: "rotate(90deg)", display: "inline-block" }}>></span>
              </button>
              {langOpen && (
                <div
                  className="absolute top-full right-0 mt-2 rounded-lg overflow-hidden shadow-xl"
                  style={{ background: "#fff", minWidth: 150, border: "1px solid rgba(0,0,0,0.08)" }}
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

      {/* vertical "Trip Planner" tab — fixed to right edge */}
      <div 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] bg-black text-white px-3 py-6 rounded-l-xl cursor-pointer hover:bg-black/90 transition-all flex flex-col items-center gap-3 shadow-2xl"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <Sparkles size={16} className="mb-1" />
        <span className="uppercase font-bold tracking-widest text-[11px]">Trip Planner</span>
      </div>

      {/* ═══ Mobile menu overlay ═══ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ background: "#1a1a1a" }}>
          <div className="flex items-center justify-between px-6" style={{ height: 80 }}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}
              className="font-black text-white uppercase tracking-tighter" style={{ fontSize: 24 }}>
              <span style={{ fontSize: 10, display: "block", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 2 }}>VISIT THE</span>
              CHINA
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white p-1 cursor-pointer">
              <X size={32} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-white text-3xl font-black uppercase tracking-wide hover:opacity-80 transition-opacity">
                {item.label}
              </Link>
            ))}
            <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <Link href="/practical/visa" onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white/60 text-lg hover:text-white transition-colors">
                Visa &amp; Entry
              </Link>
              <Link href="/travel-trade" onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white/60 text-lg hover:text-white transition-colors">
                Travel Trade
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
