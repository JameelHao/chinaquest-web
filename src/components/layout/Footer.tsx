"use client";

import Link from "next/link";

const footerNavLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/trip", label: "Routes" },
  { href: "/experience/food", label: "Food & Drink" },
  { href: "/experience/culture", label: "Culture" },
  { href: "/experience/nature", label: "Nature" },
  { href: "/practical", label: "Practical" },
  { href: "/practical/visa", label: "Visa & Entry" },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full"
      style={{ background: "#ffffff", paddingTop: 250 }}
    >
      {/* Footer Background Image — absolute, 550px tall, cover */}
      <div
        className="absolute w-full"
        style={{
          height: 550,
          top: 0,
          left: 0,
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1920"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 80%" }}
        />
      </div>

      {/* Top Footer — logo left, signup right */}
      <div
        className="relative flex items-center justify-between w-full"
        style={{
          height: 550,
          paddingLeft: 48,
          paddingRight: 48,
          zIndex: 2,
        }}
      >
        {/* Logo + Nav links — left side */}
        <div className="flex flex-col justify-end flex-grow-1">
          <Link
            href="/"
            className="font-black tracking-widest mb-8"
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-family-display)",
              fontSize: 18,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            VISIT CHINA
          </Link>
          <div className="flex flex-wrap gap-x-4">
            {footerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-opacity hover:opacity-70"
                style={{
                  color: "#ffffff",
                  fontFamily: "var(--font-family-body)",
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup Box — right side, terracotta bg */}
        <div
          className="flex flex-col items-start justify-center"
          style={{
            width: 550,
            height: 550,
            background: "#D5A58F",
            paddingLeft: 48,
            paddingRight: 48,
          }}
        >
          <h3
            className="font-display mb-2"
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "#404650",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            Ready?
          </h3>
          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-family-body)",
              fontSize: 16,
              color: "#404650",
              lineHeight: 1.5,
            }}
          >
            Get travel inspiration and planning tips for China delivered to your inbox.
          </p>

          {/* Email form */}
          <form
            className="w-full flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-full text-sm"
              style={{
                background: "#ffffff",
                color: "#404650",
                fontFamily: "var(--font-family-body)",
                border: "none",
                outline: "none",
              }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-r-full text-sm font-bold transition-opacity hover:opacity-80"
              style={{
                background: "#404650",
                color: "#ffffff",
                fontFamily: "var(--font-family-body)",
              }}
            >
              Subscribe
            </button>
          </form>

          <Link
            href="/privacy"
            className="mt-4 text-sm transition-opacity hover:opacity-70"
            style={{ color: "#404650", fontFamily: "var(--font-family-body)" }}
          >
            privacy policy
          </Link>
        </div>
      </div>

      {/* Bottom Footer — copyright + social */}
      <div
        className="relative flex items-center justify-between w-full"
        style={{
          height: 349,
          paddingLeft: 48,
          paddingRight: 48,
          paddingTop: 16,
          zIndex: 2,
          background: "#ffffff",
        }}
      >
        {/* Copyright */}
        <p
          className="text-sm"
          style={{
            color: "#404650",
            fontFamily: "var(--font-family-body)",
          }}
        >
          © 2026 ChinaQuest. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {[
            { label: "Facebook", icon: "F" },
            { label: "YouTube", icon: "Y" },
            { label: "Twitter", icon: "T" },
            { label: "Instagram", icon: "I" },
          ].map((s) => (
            <span
              key={s.label}
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-opacity hover:opacity-70"
              style={{ background: "#f4f2f0", color: "#404650" }}
              title={s.label}
            >
              {s.icon}
            </span>
          ))}
        </div>

        {/* Legal Links */}
        <div className="flex gap-4 text-sm">
          {["Privacy Policy", "Terms of Use"].map((label) => (
            <Link
              key={label}
              href="/privacy"
              className="transition-opacity hover:opacity-70"
              style={{
                color: "#404650",
                fontFamily: "var(--font-family-body)",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
