"use client";

import Link from "next/link";

const footerNav = [
  { href: "/experience/heritage", label: "China5000" },
  { href: "/trip", label: "Road Trips" },
  { href: "/experience/festivals", label: "Major Events" },
];

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* Hero image + signup card */}
      <div className="relative" style={{ height: "clamp(350px, 35vw, 480px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 50%" }}
        />

        {/* Gold signup card — independent card, overlapping image bottom-right */}
        <div
          className="absolute hidden lg:flex flex-col justify-center"
          style={{
            width: "clamp(380px, 35vw, 480px)",
            right: "clamp(32px, 5vw, 80px)",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgb(197, 179, 140)",
            padding: "56px 44px",
            borderRadius: 0,
            boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
          }}
        >
          <h3
            style={{
              fontFamily: "'Anton', 'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 3.5vw, 48px)",
              color: "#404650",
              lineHeight: 1.1,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Stay Inspired
          </h3>

          <p
            style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 400,
              color: "rgba(64,68,80,0.7)",
              lineHeight: 1.6,
              marginBottom: 28,
            }}
          >
            Bring China the Beautiful to your inbox. Sign up to receive travel ideas, tips and more.
          </p>

          <label
            className="block"
            style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#404650",
              marginBottom: 8,
            }}
          >
            Email
          </label>

          <form
            className="relative"
            onSubmit={(e) => e.preventDefault()}
            style={{
              background: "rgba(255,255,255,0.85)",
              borderRadius: 28,
              border: "1.5px solid #404650",
              padding: "5px 5px 5px 18px",
              display: "flex",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-grow outline-none bg-transparent"
              style={{ fontSize: 14, color: "#404650", border: "none", padding: "8px 0" }}
            />
            <button
              type="submit"
              className="flex-shrink-0 font-bold hover:opacity-85 transition-opacity cursor-pointer"
              style={{
                background: "#404650",
                color: "#ffffff",
                border: "none",
                borderRadius: 22,
                padding: "10px 24px",
                fontSize: 13,
              }}
            >
              Signup
            </button>
          </form>

          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-0.5" />
            <span
              style={{
                fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                fontSize: 12,
                color: "rgba(64,68,80,0.5)",
                lineHeight: 1.5,
              }}
            >
              Yes, sign me up. By clicking this box, I acknowledge I have read and agreed to{" "}
              <Link href="/privacy" className="underline">
                privacy policy
              </Link>
              .
            </span>
          </label>
        </div>
      </div>

      {/* Nav links bar */}
      <div
        className="flex items-center gap-8"
        style={{
          padding: "20px clamp(32px, 6vw, 80px)",
          background: "#ffffff",
          borderBottom: "1px solid rgba(64,68,80,0.08)",
        }}
      >
        {footerNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:opacity-60 transition-opacity"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: "#404650" }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between"
        style={{ padding: "32px clamp(32px, 6vw, 80px)", background: "#ffffff" }}
      >
        {/* Left: brand */}
        <div>
          <Link href="/" className="uppercase leading-none" style={{ color: "#404650" }}>
            <span className="block" style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em" }}>
              VISIT THE
            </span>
            <span className="block" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 42, fontWeight: 900, lineHeight: 0.9 }}>
              CHINA
            </span>
          </Link>
        </div>

        {/* Right: legal */}
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:opacity-60 transition-opacity" style={{ fontSize: 12, color: "rgba(64,68,80,0.5)" }}>
            Privacy Policy
          </Link>
          <Link href="/privacy" className="hover:opacity-60 transition-opacity" style={{ fontSize: 12, color: "rgba(64,68,80,0.5)" }}>
            Cookie Preferences
          </Link>
        </div>
      </div>
    </footer>
  );
}
