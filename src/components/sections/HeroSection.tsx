"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* HERO — Full-screen hero, 928px height, overlaid on top of top-bar */}
      {/* Header is transparent and sits at top; hero image fills this section */}
      <section
        className="relative w-full"
        style={{
          height: "100vh",
          minHeight: 810,
          background: "#f4f2f0",
        }}
      >
        {/* Hero background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80"
          alt="China landscape"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />

        {/* Hero Content — centered H1 */}
        <div
          className="relative flex flex-col items-center justify-center h-full w-full"
          style={{ zIndex: 10 }}
        >
          <h1
            className="text-hero text-center"
            style={{
              color: "#f4f2f0",
              marginBottom: 32,
            }}
          >
            Explore China&apos;s
            <br />
            Wonders
          </h1>
        </div>
      </section>

      {/* INTRO SECTION — "THINKING ABOUT A TRIP?" */}
      {/* Background: cream #f4f2f0, dark text #404650 */}
      <section
        className="w-full flex flex-col items-center justify-center"
        style={{
          background: "#f4f2f0",
          paddingTop: 64,
          paddingBottom: 64,
        }}
      >
        {/* Eyebrow label */}
        <p
          className="text-eyebrow text-center"
          style={{
            color: "#404650",
            marginBottom: 0,
            letterSpacing: "1px",
          }}
        >
          Thinking About a Trip?
        </p>

        {/* Main heading — 96px, dark, left-aligned inside a max-width */}
        <h2
          className="text-section-dark mt-4"
          style={{
            color: "#404650",
            textAlign: "center",
            maxWidth: 900,
            paddingLeft: 48,
            paddingRight: 48,
          }}
        >
          Your Next Bold Move?
        </h2>

        {/* CTA — terra pill button */}
        <Link
          href="/practical/visa"
          className="btn-cta mt-8"
        >
          Plan Your Journey
        </Link>
      </section>
    </>
  );
}
