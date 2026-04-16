"use client";

import { useState } from "react";
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
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  return (
    <>
      {/* Fixed Top Bar — matches visittheusa #top-bar structure */}
      <div
        className="fixed top-0 left-0 right-0 z-[80]"
        style={{ background: "transparent" }}
      >
        {/* very-top-bar — language links, right aligned */}
        <div
          className="flex items-center justify-end"
          style={{
            height: 38,
            paddingLeft: 16,
            paddingRight: 16,
            gap: 16,
            background: "transparent",
          }}
        >
          {["Visa & Entry", "Travel Trade"].map((item) => (
            <Link
              key={item}
              href={item === "Visa & Entry" ? "/practical/visa" : "/travel-trade"}
              className="text-white text-sm font-medium"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              {item}
            </Link>
          ))}
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>|</span>
          {["Deutsch", "Español", "Français", "한국어", "日本語"].map((lang) => (
            <Link
              key={lang}
              href="#"
              className="text-white text-sm font-medium hover:opacity-80"
              style={{ fontFamily: "var(--font-family-body)" }}
            >
              {lang}
            </Link>
          ))}
        </div>

        {/* top-bar-wrap — logo + nav, centered */}
        <div
          className="flex items-center justify-center"
          style={{
            height: 87.92,
            padding: "16px 16px",
            background: "transparent",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="absolute left-8 font-black tracking-widest"
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-family-display)",
              fontSize: 16,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            VISIT CHINA
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="text-white text-base font-bold flex items-center gap-1"
                      style={{ fontFamily: "var(--font-family-body)" }}
                    >
                      {item.label}
                    </button>
                    {/* Mega Menu */}
                    <div
                      className="absolute top-full left-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200"
                      style={{ minWidth: 600 }}
                    >
                      <div
                        className="grid grid-cols-3 gap-2 p-4 rounded-lg"
                        style={{ background: "#404650" }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="px-3 py-2 text-sm font-medium rounded transition-colors hover:bg-white/10 text-white"
                            style={{ fontFamily: "var(--font-family-body)" }}
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
                    className="text-white text-base font-bold hover:opacity-80 transition-opacity"
                    style={{ fontFamily: "var(--font-family-body)" }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Language switcher — right side */}
          <div className="absolute right-8 flex items-center gap-4">
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-bold text-white"
                style={{ fontFamily: "var(--font-family-body)" }}
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
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 text-white"
                      style={{ fontFamily: "var(--font-family-body)" }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {["F", "Y", "T", "I"].map((icon) => (
                <span
                  key={icon}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-opacity hover:opacity-80"
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    color: "#ffffff",
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ background: "#404650" }}
        >
          <div
            className="flex items-center justify-between px-8"
            style={{ height: 52 }}
          >
            <span
              className="text-white font-black tracking-widest"
              style={{ fontFamily: "var(--font-family-display)" }}
            >
              VISIT CHINA
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white"
            >
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
                  style={{ fontFamily: "var(--font-family-display)" }}
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
                        style={{ fontFamily: "var(--font-family-body)" }}
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
