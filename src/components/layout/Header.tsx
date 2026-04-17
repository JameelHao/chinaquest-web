"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, X, Globe, Briefcase } from "lucide-react";

const navItems = [
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/experience" },
  { label: "China5000", href: "/experience/heritage" },
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

  // Row 2 (main nav): white bg + dark text when scrolled
  const navTextColor = scrolled ? "#404650" : "#ffffff";
  // Row 1 (utility bar): stays white text always (dark bg when scrolled, transparent when not)
  const utilityTextMuted = "rgba(255,255,255,0.7)";
  const utilityTextColor = "#ffffff";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[9999]"
      >
        {/* ── Row 1: Utility bar — dark bg when scrolled ── */}
        <div
          className="hidden lg:flex items-center justify-end gap-6 px-6 lg:pl-[50px] lg:pr-[60px] transition-all duration-300"
          style={{
            height: 36,
            background: scrolled ? "#404650" : "transparent",
            borderBottom: scrolled ? "none" : "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Link
            href="/practical/visa"
            className="hover:opacity-80 transition-all flex items-center gap-1.5"
            style={{ fontSize: 15, fontWeight: 500, color: utilityTextMuted }}
          >
            <Globe size={13} />
            Visa & Entry
          </Link>
          <Link
            href="/travel-trade"
            className="hover:opacity-80 transition-all flex items-center gap-1.5"
            style={{ fontSize: 15, fontWeight: 500, color: utilityTextMuted }}
          >
            <Briefcase size={13} />
            Travel Trade
          </Link>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
              className="hover:opacity-80 transition-all cursor-pointer flex items-center gap-1"
              style={{ fontSize: 15, fontWeight: 600, color: utilityTextColor }}
            >
              English
              <ChevronDown size={13} />
            </button>
            {langOpen && (
              <div
                className="absolute top-full right-0 mt-2 rounded-lg overflow-hidden shadow-xl"
                style={{ background: "#fff", minWidth: 120, border: "1px solid rgba(0,0,0,0.08)" }}
              >
                {languages.map((l) => (
                  <Link
                    key={l.code}
                    href={l.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    style={{ color: "#404650" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Row 2: Main nav — white bg when scrolled ── */}
        <div
          className="flex items-center px-6 lg:px-[50px] transition-all duration-300"
          style={{
            height: 52,
            background: scrolled ? "#ffffff" : "transparent",
            boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
          }}
        >
          {/* Logo — VISIT THE + CHINA, tight spacing */}
          <Link
            href="/"
            className="uppercase flex-shrink-0 leading-none transition-colors duration-300"
            style={{ color: navTextColor, marginLeft: 10 }}
          >
            <span
              className="block"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                marginBottom: -2,
              }}
            >
              VISIT THE
            </span>
            <span
              className="block"
              style={{
                fontFamily: "'Barlow Condensed', 'Inter', sans-serif",
                fontSize: 42,
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
              }}
            >
              CHINA
            </span>
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:opacity-70 transition-all flex items-center gap-1 group"
                style={{ fontSize: 16, fontWeight: 750, color: navTextColor }}
              >
                {item.label}
                <ChevronDown size={15} style={{ opacity: 0.5 }} className="group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block flex-shrink-0" style={{ width: 120 }} />

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-sm font-bold uppercase tracking-wide ml-auto cursor-pointer transition-colors duration-300"
            style={{ color: navTextColor }}
          >
            Menu
          </button>
        </div>
      </header>

      {/* ═══ Mobile menu overlay ═══ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ background: "#1a1a1a" }}>
          <div className="flex items-center justify-between px-6" style={{ height: 72 }}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}
              className="text-white uppercase leading-none">
              <span className="block" style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", marginBottom: -2 }}>VISIT THE</span>
              <span className="block" style={{ fontFamily: "'Barlow Condensed', 'Inter', sans-serif", fontSize: 42, fontWeight: 900, lineHeight: 0.9 }}>CHINA</span>
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
                Visa & Entry
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
