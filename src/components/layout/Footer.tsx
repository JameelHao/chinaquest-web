"use client";

import Link from "next/link";

const footerNav = [
  { href: "/destinations", label: "Destinations" },
  { href: "/trip", label: "Road Trips" },
  { href: "/experience/food", label: "Food & Drink" },
  { href: "/experience/culture", label: "Culture" },
  { href: "/experience/nature", label: "Nature" },
  { href: "/practical/visa", label: "Visa & Entry" },
  { href: "/practical/transport", label: "Getting Around" },
];

const socialLinks = [
  { label: "Instagram", icon: "IG" },
  { label: "Facebook", icon: "FB" },
  { label: "YouTube", icon: "YT" },
  { label: "TikTok", icon: "TT" },
];

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* Top section — background image with content overlay, matching visittheusa */}
      <div className="relative" style={{ height: 500 }}>
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1920"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 80%" }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
          }}
        />

        {/* Content layer */}
        <div
          className="relative z-10 h-full flex items-end justify-between"
          style={{ padding: "0 clamp(24px, 4vw, 48px) 48px" }}
        >
          {/* Left — logo + nav */}
          <div>
            <Link
              href="/"
              className="block font-black tracking-[0.15em] uppercase mb-6"
              style={{ color: "#ffffff", fontSize: 18 }}
            >
              Visit China
            </Link>
            <div className="flex flex-wrap gap-x-1">
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right — newsletter box */}
          <div
            className="hidden lg:flex flex-col justify-center flex-shrink-0"
            style={{
              width: 400,
              background: "#D5A58F",
              padding: "36px 32px",
            }}
          >
            <h3
              className="text-2xl font-black uppercase tracking-wide mb-2"
              style={{ color: "#404650" }}
            >
              Ready?
            </h3>
            <p
              className="text-sm mb-5 leading-relaxed"
              style={{ color: "#404650" }}
            >
              Get travel inspiration and planning tips for China delivered to
              your inbox.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-full text-sm outline-none"
                style={{
                  background: "#ffffff",
                  color: "#404650",
                  border: "none",
                }}
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-r-full text-sm font-bold hover:opacity-85 transition-opacity"
                style={{ background: "#404650", color: "#ffffff" }}
              >
                Subscribe
              </button>
            </form>
            <Link
              href="/privacy"
              className="mt-3 text-xs hover:opacity-70 transition-opacity"
              style={{ color: "#404650" }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar — white bg matching visittheusa */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ padding: "20px clamp(24px, 4vw, 48px)", background: "#ffffff" }}
      >
        <p className="text-sm" style={{ color: "rgba(64,68,80,0.6)" }}>
          &copy; 2026 ChinaQuest. All rights reserved.
        </p>

        {/* Social */}
        <div className="flex items-center gap-2">
          {socialLinks.map((s) => (
            <span
              key={s.label}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold cursor-pointer hover:opacity-70 transition-opacity"
              style={{ background: "#f4f2f0", color: "#404650" }}
              title={s.label}
            >
              {s.icon}
            </span>
          ))}
        </div>

        {/* Legal */}
        <div className="flex gap-4 text-sm">
          {["Privacy Policy", "Terms of Use", "Cookie Settings"].map(
            (label) => (
              <Link
                key={label}
                href="/privacy"
                className="hover:opacity-70 transition-opacity"
                style={{ color: "rgba(64,68,80,0.6)" }}
              >
                {label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
