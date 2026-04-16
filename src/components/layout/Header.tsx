"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";

const navLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/trip", label: "Routes" },
  { href: "/experience", label: "Experiences" },
  { href: "/practical", label: "Practical" },
];

const languages = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-[52px] flex items-center px-6 transition-all duration-300"
        style={{
          background: scrolled ? "#ffffff" : "transparent",
          boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-black text-lg tracking-wider mr-10"
          style={{ color: scrolled ? "#404650" : "#ffffff" }}
        >
          CHINAQUEST
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-bold tracking-wide transition-opacity hover:opacity-80"
              style={{ color: scrolled ? "#404650" : "#ffffff" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-base font-bold"
              style={{ color: scrolled ? "#404650" : "#ffffff" }}
            >
              <Globe size={18} />
              <span>{languages.find((l) => l.code === currentLang)?.flag}</span>
            </button>
            {langOpen && (
              <div
                className="absolute right-0 top-full mt-2 py-2 rounded-lg shadow-lg min-w-[120px]"
                style={{ background: "#ffffff" }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setLangOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
                    style={{ color: "#404650" }}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {["F", "Y", "T", "I"].map((icon) => (
              <span
                key={icon}
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  color: scrolled ? "#404650" : "#ffffff",
                }}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMobileOpen(true)}
          style={{ color: scrolled ? "#404650" : "#ffffff" }}
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ background: "#404650" }}>
          <div className="flex items-center justify-between px-6 h-[52px]">
            <span className="text-white font-black text-lg tracking-wider">CHINAQUEST</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-8 py-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-bold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-8 mt-auto pb-12">
            <div className="flex gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang.code);
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-1 text-white text-sm font-medium opacity-80 hover:opacity-100"
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
