"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    number: "01",
    total: "06",
    category: "CHINESE ORIGINALS",
    title: "China's\nOriginal Spirit",
    body: "Discover uniquely Chinese destinations — ancient capitals, sacred mountains, and living traditions found nowhere else on Earth.",
    cta: "Discover Originals",
    href: "/experience/culture",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1920&q=80",
  },
  {
    number: "02",
    total: "06",
    category: "ANCIENT WONDERS",
    title: "5,000 Years\nOf History",
    body: "Walk through dynasties — from the Forbidden City to the Terracotta Army, China's heritage sites tell stories that span millennia.",
    cta: "Explore Heritage",
    href: "/experience/heritage",
    img: "https://images.unsplash.com/photo-1529921879218-f99546d03e27?w=1920&q=80",
  },
  {
    number: "03",
    total: "06",
    category: "ROAD TRIPS",
    title: "Boundless\nAdventures",
    body: "The Silk Road, the Yunnan Highway, the Tibet-Nepal route — epic journeys through some of the most dramatic landscapes on the planet.",
    cta: "Go Explore",
    href: "/trip",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
  },
  {
    number: "04",
    total: "06",
    category: "CULINARY",
    title: "Eight Great\nCuisines",
    body: "From fiery Sichuan hotpot to delicate Cantonese dim sum, China's regional cuisines offer an endless journey for your taste buds.",
    cta: "Taste China",
    href: "/experience/food",
    img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=1920&q=80",
  },
  {
    number: "05",
    total: "06",
    category: "NATURAL WONDERS",
    title: "Mountains\n& Rivers",
    body: "Karst peaks in Guilin, rainbow mountains in Zhangye, turquoise lakes in Jiuzhaigou — nature at its most spectacular.",
    cta: "Find Nature",
    href: "/experience/nature",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    number: "06",
    total: "06",
    category: "VISA & ENTRY",
    title: "Tips for\nGlobal Travelers",
    body: "Everything you need to know about visas, transit policies, the 144-hour visa-free transit, and planning your first trip to China.",
    cta: "Learn More",
    href: "/practical/visa",
    img: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=1920&q=80",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full" style={{ background: "#404650" }}>
      {/* Main carousel area — 720px height like visittheusa */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(500px, 50vw, 720px)" }}>
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={slide.img}
          src={slide.img}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(64,68,80,0.85) 0%, rgba(64,68,80,0.4) 50%, transparent 100%)" }}
        />

        {/* Content area — left side, 768px max */}
        <div
          className="relative z-10 h-full flex flex-col justify-center"
          style={{ maxWidth: 768, padding: "48px clamp(24px, 5vw, 48px)" }}
        >
          {/* Slide counter — 01/06 */}
          <p
            className="text-sm font-bold tracking-widest mb-6"
            style={{ color: "#d5d5d8" }}
          >
            {slide.number}/{slide.total}
          </p>

          {/* Category label */}
          <p className="text-category mb-4" style={{ color: "#ffffff" }}>
            {slide.category}
          </p>

          {/* Title */}
          <h2
            className="text-section-lg mb-6"
            style={{ color: "#ffffff", whiteSpace: "pre-line" }}
          >
            {slide.title}
          </h2>

          {/* Body text */}
          <p className="text-card-body mb-8" style={{ color: "rgba(255,255,255,0.8)", maxWidth: 520 }}>
            {slide.body}
          </p>

          {/* CTA */}
          <div>
            <Link href={slide.href} className="btn-pill btn-pill-terra">
              {slide.cta}
            </Link>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={() => goTo(current - 1)}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:bg-white/30"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:bg-white/30"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? 32 : 8,
                height: 8,
                borderRadius: 4,
                background: i === current ? "#ffffff" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
