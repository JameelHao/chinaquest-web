"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const topLinks = [
  { label: "Visa & Entry", href: "/practical/visa" },
  { label: "Travel Trade", href: "/travel-trade" },
];

const languages = ["Deutsch", "Español", "Français", "한국어", "日本語"];

const navItems = [
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
  {
    label: "Plan a Trip",
    href: "/practical",
    children: [
      { label: "Visa & Entry", href: "/practical/visa" },
      { label: "Getting Around", href: "/practical/transport" },
      { label: "Money & Costs", href: "/practical/money" },
      { label: "Language Tips", href: "/practical/language" },
      { label: "Health & Safety", href: "/practical/health" },
    ],
  },
];

const socialIcons = [
  { label: "Instagram", icon: "IG" },
  { label: "Facebook", icon: "FB" },
  { label: "YouTube", icon: "YT" },
  { label: "TikTok", icon: "TT" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    // Track scroll for header background
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 100);
    }, { passive: true });
  }

  return (
    <>
      {/* Fixed Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(64, 68, 80, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        {/* Very Top Bar — language & utility links */}
        <div
          className="hidden lg:flex items-center justify-end gap-4 px-6"
          style={{ height: 32, fontSize: 13 }}
        >
          {topLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <span className="text-white/30">|</span>
          {languages.map((lang) => (
            <Link
              key={lang}
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              {lang}
            </Link>
          ))}
        </div>

        {/* Main Nav Bar */}
        <div className="flex items-center justify-between px-6 lg:px-8" style={{ height: 56 }}>
          {/* Logo */}
          <Link
            href="/"
            className="font-black tracking-[0.15em] text-white uppercase"
            style={{ fontSize: 15, letterSpacing: "0.15em" }}
          >
            Visit China
          </Link>

          {/* Desktop Nav — center */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-white text-sm font-bold uppercase tracking-wide hover:opacity-80 transition-opacity"
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className="opacity-60" />}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                    <div
                      className="rounded-lg overflow-hidden shadow-xl"
                      style={{ background: "#404650", minWidth: 220 }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side — social + mobile menu */}
          <div className="flex items-center gap-3">
            {/* Social icons — desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {socialIcons.map((s) => (
                <span
                  key={s.label}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold cursor-pointer hover:bg-white/30 transition-colors"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
                  title={s.label}
                >
                  {s.icon}
                </span>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ background: "#404650" }}>
          <div className="flex items-center justify-between px-6" style={{ height: 56 }}>
            <span className="text-white font-black tracking-[0.15em] uppercase" style={{ fontSize: 15 }}>
              Visit China
            </span>
            <button onClick={() => setMobileOpen(false)} className="text-white p-1">
              <X size={26} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 py-8 overflow-y-auto flex-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-white text-2xl font-black uppercase tracking-wide"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mb-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-white/60 text-lg hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Mobile social */}
          <div className="flex items-center gap-3 px-6 pb-8">
            {socialIcons.map((s) => (
              <span
                key={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
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
