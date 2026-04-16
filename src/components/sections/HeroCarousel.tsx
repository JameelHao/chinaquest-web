"use client";

import { useState, useCallback, useEffect } from "react";
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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((index + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  /* Auto-advance every 6s */
  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section className="w-full" style={{ background: "#f4f2f0" }}>
      {/* Section header — matching visittheusa's minimal label above carousel */}
      <div
        className="mx-auto"
        style={{
          maxWidth: 1400,
          padding: "60px clamp(16px, 4vw, 48px) 24px",
        }}
      >
        <p
          className="text-sm font-bold tracking-[4px] uppercase"
          style={{ color: "#404650", opacity: 0.5 }}
        >
          Featured
        </p>
      </div>

      {/* Main carousel — full-width image with left text overlay */}
      <div
        className="relative w-full mx-auto overflow-hidden"
        style={{
          maxWidth: 1400,
          height: "clamp(480px, 45vw, 680px)",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 48px)",
        }}
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          {/* Background image with crossfade */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={slide.img}
            src={slide.img}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              animation: "fadeIn 0.7s ease-out",
            }}
          />
          {/* Left gradient for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 45%, transparent 75%)",
            }}
          />

          {/* Content — left side */}
          <div
            className="relative z-10 h-full flex flex-col justify-center"
            style={{
              maxWidth: 560,
              padding: "48px clamp(24px, 5vw, 56px)",
            }}
          >
            {/* Slide counter — 01/06 */}
            <p
              className="text-sm font-bold tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {slide.number}/{slide.total}
            </p>

            {/* Category label */}
            <p
              className="text-xs font-bold tracking-[3px] uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {slide.category}
            </p>

            {/* Title */}
            <h2
              className="font-black uppercase tracking-wide mb-5"
              style={{
                color: "#ffffff",
                fontSize: "clamp(1.75rem, 3.5vw, 48px)",
                lineHeight: 1.05,
                whiteSpace: "pre-line",
              }}
            >
              {slide.title}
            </h2>

            {/* Body text */}
            <p
              className="text-base leading-relaxed mb-7 hidden sm:block"
              style={{
                color: "rgba(255,255,255,0.8)",
                maxWidth: 440,
              }}
            >
              {slide.body}
            </p>

            {/* CTA */}
            <div>
              <Link href={slide.href} className="btn-pill btn-pill-terra">
                {slide.cta}
              </Link>
            </div>
          </div>

          {/* Navigation arrows — bottom right */}
          <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
            <button
              onClick={() => goTo(current - 1)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/30"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => goTo(current + 1)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/30"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
              }}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dot indicators — bottom center */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300"
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background:
                    i === current ? "#ffffff" : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div style={{ height: 60 }} />
    </section>
  );
}
