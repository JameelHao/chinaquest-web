"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── visittheusa carousel:
   - Full width, edge-to-edge, NO rounded corners
   - ~600-700px tall
   - Left gradient overlay for text
   - Text block: 01/06 counter · CATEGORY · Title · Body · CTA
   - Arrows bottom-right, dots bottom-center
── */

const slides = [
  {
    category: "CHINESE ORIGINALS",
    title: "China's Original Spirit",
    body: "Discover uniquely Chinese destinations, stories, and experiences that celebrate the nation's original spirit across 5,000 years of history.",
    cta: "Discover Originals",
    href: "/experience/culture",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1920&q=80",
  },
  {
    category: "ANCIENT WONDERS",
    title: "Beloved Places of China",
    body: "From the Forbidden City to the Terracotta Army, meet incredible places and welcoming people — one province, one story, one experience at a time.",
    cta: "Discover More",
    href: "/experience/heritage",
    img: "https://images.unsplash.com/photo-1529921879218-f99546d03e27?w=1920&q=80",
  },
  {
    category: "ROAD TRIPS",
    title: "Boundless Adventures",
    body: "Countless avenues of discovery unfold from China's city streets and scenic highways. Explore the Silk Road, Yunnan Highway, and more.",
    cta: "Go Explore",
    href: "/trip",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
  },
  {
    category: "CULINARY",
    title: "Eight Great Cuisines",
    body: "From fiery Sichuan hotpot to delicate Cantonese dim sum, China's regional cuisines offer an endless journey for your taste buds.",
    cta: "Taste China",
    href: "/experience/food",
    img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=1920&q=80",
  },
  {
    category: "MAJOR EVENTS",
    title: "The Big Stage",
    body: "The world's biggest cultural events happen here, and you're invited. Chart an action-packed vacation around festivals, food, and more.",
    cta: "Find Events",
    href: "/experience/festivals",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80",
  },
  {
    category: "VISA & ENTRY",
    title: "Tips for Global Travelers",
    body: "Read frequently asked questions to help ensure your next China vacation starts with a smooth and informed arrival.",
    cta: "Learn More",
    href: "/practical/visa",
    img: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=1920&q=80",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((index + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];
  const num = String(current + 1).padStart(2, "0");

  return (
    <section className="w-full" style={{ background: "#ffffff" }}>
      {/* Full-width carousel — edge to edge, NO rounded corners, NO padding */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(450px, 55vw, 700px)" }}>
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={slide.img}
          src={slide.img}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "fadeIn 0.7s ease-out" }}
        />
        {/* Left gradient */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 45%, transparent 70%)" }}
        />

        {/* Content — left side */}
        <div className="relative z-10 h-full flex flex-col justify-center"
          style={{ maxWidth: 580, padding: "48px clamp(24px, 5vw, 64px)" }}>
          {/* 01/06 counter */}
          <p className="text-sm font-bold tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
            {num}/{String(slides.length).padStart(2, "0")}
          </p>
          {/* Category */}
          <p className="text-xs font-bold tracking-[3px] uppercase mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
            {slide.category}
          </p>
          {/* Title */}
          <h2 className="font-black uppercase tracking-wide mb-5"
            style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.08 }}>
            {slide.title}
          </h2>
          {/* Body */}
          <p className="text-base leading-relaxed mb-7 hidden sm:block"
            style={{ color: "rgba(255,255,255,0.8)", maxWidth: 460 }}>
            {slide.body}
          </p>
          {/* CTA */}
          <div>
            <Link href={slide.href} className="btn-pill btn-pill-terra">{slide.cta}</Link>
          </div>
        </div>

        {/* Arrows — bottom right */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
          <button onClick={() => goTo(current - 1)} aria-label="Previous"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/30 cursor-pointer"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => goTo(current + 1)} aria-label="Next"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/30 cursor-pointer"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots — bottom center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              className="transition-all duration-300 cursor-pointer"
              style={{
                width: i === current ? 28 : 8, height: 8, borderRadius: 4,
                background: i === current ? "#fff" : "rgba(255,255,255,0.4)",
              }} />
          ))}
        </div>
      </div>
    </section>
  );
}
