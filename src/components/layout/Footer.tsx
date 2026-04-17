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
      {/* Image + card wrapper — card overlaps image and white area */}
      <div className="relative">
        {/* Background image — top half only */}
        <div className="relative w-full" style={{ height: "clamp(220px, 22vw, 320px)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/footer-forbidden-city.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 58%" }}
          />
        </div>

        {/* Nav links — directly below image */}
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
              style={{ fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: "#404650" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* White area — gives space for card to overlap into */}
        <div style={{ height: "clamp(120px, 12vw, 180px)", background: "#ffffff" }} />

        {/* Gold card — positioned to overlap both image and white area */}
        <div
          className="absolute hidden lg:flex flex-col justify-center"
          style={{
            width: "clamp(380px, 35vw, 480px)",
            right: "clamp(32px, 5vw, 80px)",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgb(197, 179, 140)",
            padding: "48px 40px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
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

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between"
        style={{ padding: "32px clamp(32px, 6vw, 80px)", background: "#ffffff" }}
      >
        <Link href="/" className="uppercase leading-none" style={{ color: "#404650" }}>
          <span className="block" style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em" }}>
            VISIT THE
          </span>
          <span className="block" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 42, fontWeight: 900, lineHeight: 0.9 }}>
            CHINA
          </span>
        </Link>

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
