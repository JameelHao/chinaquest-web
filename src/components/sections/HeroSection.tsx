"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* HERO — Full viewport height, centered title */}
      <section
        className="relative w-full flex items-center justify-center"
        style={{ height: "100vh", minHeight: 700 }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80"
          alt="Great Wall of China at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle vignette overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)" }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-hero" style={{ color: "#f4f2f0" }}>
            Chart Your
            <br />
            Own Course
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div
            className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2.5 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* "THINKING ABOUT A TRIP?" intro — cream bg */}
      <section
        className="w-full flex flex-col items-center text-center"
        style={{ background: "#f4f2f0", padding: "80px 24px" }}
      >
        <p className="text-section-md" style={{ color: "#404650", marginBottom: 16 }}>
          Thinking About a Trip?
        </p>
        <h2
          className="text-section-lg"
          style={{ color: "#404650", maxWidth: 900, marginBottom: 32 }}
        >
          Your Next Bold Move
        </h2>
        <p
          className="text-card-body"
          style={{ color: "#404650", maxWidth: 600, marginBottom: 40, opacity: 0.7 }}
        >
          From the Great Wall to the rice terraces of Guilin, China offers boundless adventures for every kind of traveler.
        </p>
        <Link href="/practical/visa" className="btn-pill btn-pill-terra">
          Visa & Entry Details
        </Link>
      </section>
    </>
  );
}
