"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

/* ── visittheusa header structure:
   Row 1 (utility): LEFT "Visa & Entry" · "Travel Trade"  |  RIGHT "English ▾"
   Row 2 (main):    LEFT Logo  |  RIGHT Menu · [IG FB YT TT] · Plan a trip
   Menu overlay:    Destinations · Experiences · Road Trips
   Plan dropdown:   Destinations · Experiences · Road Trips · Visa & Entry
── */

const menuItems = [
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Beijing", href: "/destinations/beijing" },
      { label: "Shanghai", href: "/destinations/shanghai" },
      { label: "Xi'an", href: "/destinations/xian" },
      { label: "Chengdu", href: "/destinations/chengdu" },
      { label: "Guilin", href: "/destinations/guilin" },
      { label: "Hangzhou", href: "/destinations/hangzhou" },
      { label: "Yunnan", href: "/destinations/yunnan" },
      { label: "Tibet", href: "/destinations/tibet" },
    ],
  },
  { label: "Experiences", href: "/experience" },
  { label: "Road Trips", href: "/trip" },
];

const planItems = [
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/experience" },
  { label: "Road Trips", href: "/trip" },
  { label: "Visa & Entry", href: "/practical/visa" },
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!planOpen && !langOpen) return;
    const close = () => { setPlanOpen(false); setLangOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [planOpen, langOpen]);

  const txt = scrolled ? "text-[#404650]" : "text-white";
  const txtMuted = scrolled ? "text-[#404650]/60" : "text-white/70";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        }}
      >
        {/* ═══ Row 1: Utility bar ═══
            visittheusa: LEFT [Visa & Entry] [Travel Trade]  RIGHT [English ▾]
        */}
        <div className="hidden lg:flex items-center justify-between px-8" style={{ height: 34, fontSize: 13 }}>
          <div className="flex items-center gap-5">
            <Link href="/practical/visa" className={`${txtMuted} hover:${txt} transition-colors font-medium`}>
              Visa &amp; Entry
            </Link>
            <Link href="/travel-trade" className={`${txtMuted} hover:${txt} transition-colors font-medium`}>
              Travel Trade
            </Link>
          </div>
          {/* Language — right side */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); setPlanOpen(false); }}
              className={`${txtMuted} hover:${txt} transition-colors font-medium cursor-pointer`}
            >
              English ▾
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

        {/* ═══ Row 2: Main nav ═══
            visittheusa: LEFT [Logo]  RIGHT [Menu] [IG FB YT TT] [Plan a trip]
        */}
        <div className="flex items-center justify-between px-6 lg:px-8" style={{ height: 52 }}>
          <Link href="/" className={`font-black tracking-[0.15em] uppercase ${txt} transition-colors`} style={{ fontSize: 15 }}>
            Visit China
          </Link>

          <div className="flex items-center gap-5">
            <button
              onClick={() => { setMenuOpen(true); setPlanOpen(false); }}
              className={`text-sm font-bold uppercase tracking-wide hover:opacity-70 transition-opacity cursor-pointer ${txt}`}
            >
              Menu
            </button>

            {/* Social — desktop */}
            <div className="hidden lg:flex items-center gap-1.5">
              {["IG", "FB", "YT", "TT"].map((icon) => (
                <span
                  key={icon}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold cursor-pointer transition-colors"
                  style={{
                    background: scrolled ? "rgba(64,68,80,0.08)" : "rgba(255,255,255,0.15)",
                    color: scrolled ? "#404650" : "#fff",
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>

            {/* Plan a trip — desktop */}
            <div className="hidden lg:block relative">
              <button
                onClick={(e) => { e.stopPropagation(); setPlanOpen(!planOpen); setLangOpen(false); }}
                className={`text-sm font-bold uppercase tracking-wide hover:opacity-70 transition-opacity cursor-pointer ${txt}`}
              >
                Plan a trip
              </button>
              {planOpen && (
                <div
                  className="absolute top-full right-0 mt-3 rounded-lg overflow-hidden shadow-xl"
                  style={{ background: "#fff", minWidth: 200, border: "1px solid rgba(0,0,0,0.08)" }}
                >
                  {planItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setPlanOpen(false)}
                      className="block px-5 py-3 text-sm hover:bg-gray-50 transition-colors"
                      style={{ color: "#404650" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ═══ Full-screen Menu overlay ═══ */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ background: "#404650" }}>
          <div className="flex items-center justify-between px-6 lg:px-8" style={{ height: 52 }}>
            <Link href="/" onClick={() => setMenuOpen(false)} className="font-black tracking-[0.15em] text-white uppercase" style={{ fontSize: 15 }}>
              Visit China
            </Link>
            <button onClick={() => setMenuOpen(false)} className="text-white p-1 hover:opacity-70 transition-opacity cursor-pointer">
              <X size={26} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 lg:px-8 py-10">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-white text-2xl lg:text-3xl font-black uppercase tracking-wide hover:opacity-80 transition-opacity"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-1 mb-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1.5 text-white/50 text-base hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-3 px-6 lg:px-8 pb-8">
            {["IG", "FB", "YT", "TT"].map((icon) => (
              <span
                key={icon}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
