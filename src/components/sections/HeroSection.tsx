"use client";

/* ── visittheusa hero (from screenshot):
   - Full-viewport background image
   - Bottom center: huge ultra-bold title "CHINA THE BEAUTIFUL"
   - No AI buttons, no suggestion pills
── */

export default function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-end"
      style={{ height: "100vh", minHeight: 650 }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80"
        alt="Great Wall of China"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Title at bottom center */}
      <div className="relative z-10 w-full text-center" style={{ paddingBottom: "clamp(60px, 8vh, 100px)", paddingLeft: 24, paddingRight: 24 }}>
        <h1
          className="text-white uppercase mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 10vw, 160px)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
          }}
        >
          China The Beautiful
        </h1>
      </div>
    </section>
  );
}
