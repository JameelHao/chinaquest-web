"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* HERO — Full screen hero with H1 */}
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

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
          <h1
            className="max-w-5xl"
            style={{
              fontSize: "clamp(3rem, 10vw, 9.9rem)",
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: "2px",
              color: "#f4f2f0",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out",
            }}
          >
            Explore China&apos;s
            <br />
            Wonders
          </h1>

          <p
            className="mt-6 max-w-xl text-lg md:text-xl font-light leading-relaxed"
            style={{
              color: "#ffffff",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease-out 0.2s",
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
              transition: "all 0.7s ease-out 0.3s",
            }}
          >
            Discover Now
          </a>
        </div>
      </section>

      {/* INTRO — "THINKING ABOUT A TRIP?" */}
      <section
        className="w-full py-16 px-8 text-center"
        style={{ background: "#f4f2f0" }}
      >
        <p
          className="text-xs font-normal tracking-[0.3em] uppercase mb-4"
          style={{ color: "#404650" }}
        >
          Plan Your Journey
        </p>
        <h2
          className="max-w-3xl mx-auto"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "#404650",
          }}
        >
          Thinking About a Trip?
        </h2>
        <p
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed"
          style={{ color: "#404650" }}
        >
          This is a place where travelers can chart their own course, where
          stories unfold in unexpected places — and where every journey reveals
          something new about the world&apos;s most fascinating destination.
        </p>
        <a
          href="/practical/visa"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-70"
          style={{ color: "#404650" }}
        >
          Visa & Entry Details →
        </a>
      </section>
    </>
  );
}
