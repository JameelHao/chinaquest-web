"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

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
  { label: "Visa & Entry", href: "/practical/visa" },
  { label: "Getting Around", href: "/practical/transport" },
];

const planItems = [
  { label: "Visa & Entry", href: "/practical/visa" },
  { label: "Getting Around", href: "/practical/transport" },
  { label: "Money & Costs", href: "/practical/money" },
  { label: "Language Tips", href: "/practical/language" },
  { label: "Health & Safety", href: "/practical/health" },
];

const socialIcons = [
  { label: "Instagram", icon: "IG" },
  { label: "Facebook", icon: "FB" },
  { label: "YouTube", icon: "YT" },
  { label: "TikTok", icon: "TT" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
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

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handler = () => {
      setPlanOpen(false);
      setLangOpen(false);
    };
    if (planOpen || langOpen) {
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    }
  }, [planOpen, langOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
        }}
      >
        {/* Row 1: Top utility bar — matching visittheusa */}
        <div
          className="hidden lg:flex items-center gap-5 px-8"
          style={{ height: 34, fontSize: 13 }}
        >
          <Link
            href="/practical/visa"
            className={`font-medium transition-colors ${scrolled ? "text-[#404650]/60 hover:text-[#404650]" : "text-white/80 hover:text-white"}`}
          >
            Visa &amp; Entry
          </Link>
          <Link
            href="/travel-trade"
            className={`font-medium transition-colors ${scrolled ? "text-[#404650]/60 hover:text-[#404650]" : "text-white/80 hover:text-white"}`}
          >
            Travel Trade
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Language selector — right side like visittheusa */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen(!langOpen);
                setPlanOpen(false);
              }}
              className={`font-medium transition-colors ${scrolled ? "text-[#404650]/60 hover:text-[#404650]" : "text-white/80 hover:text-white"}`}
            >
              English ▾
            </button>
            {langOpen && (
              <div
                className="absolute top-full right-0 mt-2 rounded-lg overflow-hidden shadow-xl"
                style={{ background: "#ffffff", minWidth: 160, border: "1px solid rgba(0,0,0,0.08)" }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full px-4 py-2.5 text-sm text-left hover:bg-gray-50 transition-colors"
                    style={{ color: "#404650" }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Row 2: Main nav bar — logo left, controls right */}
        <div
          className="flex items-center justify-between px-6 lg:px-8"
          style={{ height: 52 }}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`font-black tracking-[0.15em] uppercase transition-colors ${scrolled ? "text-[#404650]" : "text-white"}`}
            style={{ fontSize: 15 }}
          >
            Visit China
          </Link>

          {/* Right cluster */}
          <div className="flex items-center gap-5">
            {/* Menu button */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setPlanOpen(false);
              }}
              className={`text-sm font-bold uppercase tracking-wide transition-opacity hover:opacity-70 ${scrolled ? "text-[#404650]" : "text-white"}`}
            >
              Menu
            </button>

            {/* Social icons — desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {socialIcons.map((s) => (
                <span
                  key={s.label}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold cursor-pointer transition-colors"
                  style={{
                    background: scrolled
                      ? "rgba(64,68,80,0.1)"
                      : "rgba(255,255,255,0.15)",
                    color: scrolled ? "#404650" : "#fff",
                  }}
                  title={s.label}
                >
                  {s.icon}
                </span>
              ))}
            </div>

            {/* Plan a Trip — desktop dropdown */}
            <div className="hidden lg:block relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPlanOpen(!planOpen);
                  setMenuOpen(false);
                }}
                className={`text-sm font-bold uppercase tracking-wide transition-opacity hover:opacity-70 ${scrolled ? "text-[#404650]" : "text-white"}`}
              >
                Plan a Trip
              </button>

              {planOpen && (
                <div
                  className="absolute top-full right-0 mt-3 rounded-lg overflow-hidden shadow-xl"
                  style={{
                    background: "#ffffff",
                    minWidth: 220,
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  {planItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setPlanOpen(false)}
                      className="block px-5 py-3 text-sm transition-colors hover:bg-gray-50"
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

      {/* Full-screen Menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ background: "#404650" }}
        >
          {/* Menu header */}
          <div
            className="flex items-center justify-between px-6 lg:px-8"
            style={{ height: 52 }}
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-black tracking-[0.15em] text-white uppercase"
              style={{ fontSize: 15 }}
            >
              Visit China
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white p-1 hover:opacity-70 transition-opacity"
            >
              <X size={26} />
            </button>
          </div>

          {/* Menu content */}
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

          {/* Menu footer — social */}
          <div className="flex items-center gap-3 px-6 lg:px-8 pb-8">
            {socialIcons.map((s) => (
              <span
                key={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                }}
              >
                {s.icon}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
