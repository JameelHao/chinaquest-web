"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";

const navItems = [
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Beijing", href: "/destinations/beijing" },
      { label: "Shanghai", href: "/destinations/shanghai" },
      { label: "Xi'an", href: "/destinations/xian" },
      { label: "Chengdu", href: "/destinations/chengdu" },
      { label: "Hangzhou", href: "/destinations/hangzhou" },
      { label: "Guilin", href: "/destinations/guilin" },
    ],
  },
  { label: "Routes", href: "/trip" },
  { label: "Visa & Entry", href: "/practical/visa" },
];

const languages = [
  { code: "en", label: "English", flag: "EN" },
  { code: "zh", label: "中文", flag: "中文" },
  { code: "ja", label: "日本語", flag: "JA" },
  { code: "ko", label: "한국어", flag: "KO" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  return (
    <>
      {/* Fixed Top Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center px-8"
        style={{ height: "52px", background: "transparent" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-black text-base tracking-widest mr-10"
          style={{ color: "#ffffff" }}
        >
          VISIT THE CQ
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <>
                  <button
                    className="text-base font-bold flex items-center gap-1"
                    style={{ color: "#ffffff" }}
                  >
                    {item.label}
                  </button>
                  {/* Mega Menu - States */}
                  <div
                    className="absolute top-full left-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200"
                    style={{ minWidth: "600px" }}
                  >
                    <div
                      className="grid grid-cols-3 gap-2 p-4 rounded-lg"
                      style={{ background: "#404650" }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="px-3 py-2 text-sm font-medium rounded transition-colors hover:bg-white/10"
                          style={{ color: "#ffffff" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-base font-bold transition-opacity hover:opacity-80"
                  style={{ color: "#ffffff" }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          {/* Language Switcher */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-bold"
              style={{ color: "#ffffff" }}
            >
              <Globe size={16} />
              <span>{currentLang.toUpperCase()}</span>
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
              <div
                className="py-2 rounded-lg shadow-lg min-w-[120px]"
                style={{ background: "#404650" }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10"
                    style={{ color: "#ffffff" }}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {["F", "Y", "T", "I"].map((icon) => (
              <span
                key={icon}
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-opacity hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff" }}
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
          style={{ color: "#ffffff" }}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ background: "#404650" }}>
          <div className="flex items-center justify-between px-8 h-[52px]">
            <span className="text-white font-black text-base tracking-widest">VISIT THE CQ</span>
            <button onClick={() => setMobileOpen(false)} className="text-white">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-8 py-12">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-2xl font-bold"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-2 ml-4 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-white/70 text-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
