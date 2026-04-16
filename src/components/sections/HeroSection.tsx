"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "600px" }}
    >
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80"
        alt="China landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay — bottom up */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <p
          className="text-base font-normal tracking-widest uppercase mb-4 transition-all duration-700"
          style={{
            color: "#d5d5d8",
            fontSize: "1rem",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          34 Provinces · 500+ Attractions
        </p>

        <h1
          className="max-w-5xl transition-all duration-700 delay-100"
          style={{
            fontSize: "clamp(3rem, 10vw, 9.9rem)",
            fontWeight: 900,
            lineHeight: 0.85,
            letterSpacing: "2px",
            color: "#f4f2f0",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
          }}
        >
          Explore China&apos;s
          <br />
          Wonders
        </h1>

        <p
          className="mt-6 max-w-xl text-lg md:text-xl font-light leading-relaxed transition-all duration-700 delay-200"
          style={{
            color: "#ffffff",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Discover uniquely Chinese destinations, stories, and experiences
          that celebrate millennia of history and culture.
        </p>

        <a
          href="/destinations"
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded transition-all duration-200 hover:opacity-90"
          style={{
            background: "#c53030",
            color: "#ffffff",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "300ms",
          }}
        >
          Discover Now
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
          Scroll
        </span>
        <ChevronDown size={20} style={{ color: "rgba(255,255,255,0.6)" }} />
      </div>
    </section>
  );
}
