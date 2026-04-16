"use client";

import { Sparkles } from "lucide-react";

/* ── visittheusa hero (from screenshot):
   - Full-viewport background image
   - Bottom center: huge ultra-bold title "CHINA THE BEAUTIFUL"
   - AI travel ideas section with pill buttons
── */

export default function HeroSection() {
  const aiButtons = [
    "Find my family adventure",
    "Show me incredible views",
    "Build my family road trip",
    "See top arts destinations",
  ];

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

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center" style={{ paddingBottom: "clamp(40px, 6vh, 80px)", paddingLeft: 24, paddingRight: 24 }}>
        {/* Title center */}
        <h1
          className="text-white uppercase text-center mb-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 10vw, 150px)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
          }}
        >
          China The Beautiful
        </h1>

        {/* AI Travel Ideas Section */}
        <div className="flex flex-col items-center gap-4 w-full max-w-5xl">
          <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest mb-1">
            <Sparkles size={14} className="text-white" />
            <span>Get travel ideas with AI</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {aiButtons.map((text) => (
              <button
                key={text}
                className="bg-white hover:bg-white/90 text-black px-6 py-3 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 cursor-pointer shadow-lg"
                style={{ fontSize: 13, fontWeight: 700 }}
              >
                <Sparkles size={12} className="text-black/70" />
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
