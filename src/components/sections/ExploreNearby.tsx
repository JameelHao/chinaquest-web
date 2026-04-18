"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const nearby = [
  { name: "Hebei", href: "/destinations/hebei", image: "/images/carousel-2.jpg" },
  { name: "Tianjin", href: "/destinations/tianjin", image: "/images/carousel-3.jpg" },
  { name: "Shandong", href: "/destinations/shandong", image: "/images/carousel-1.jpg" },
  { name: "Shanxi", href: "/destinations/shanxi", image: "/images/carousel-4.jpg" },
  { name: "Inner Mongolia", href: "/destinations/inner-mongolia", image: "/images/carousel-2.jpg" },
  { name: "Liaoning", href: "/destinations/liaoning", image: "/images/carousel-3.jpg" },
];

export default function ExploreNearby() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const updateIndex = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards.length) return;
    const containerLeft = el.getBoundingClientRect().left;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.getBoundingClientRect().left - containerLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setCurrentIndex(closest + 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateIndex, { passive: true });
    return () => el.removeEventListener("scroll", updateIndex);
  });

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("[data-card]") as HTMLElement;
    const cardWidth = card?.offsetWidth || 300;
    scrollRef.current.scrollBy({
      left: dir === "right" ? cardWidth + 24 : -(cardWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    <section style={{ background: "#f4f2f0", padding: "64px 0 80px" }}>
      <div style={{ padding: "0 48px" }}>
        {/* Header: title left, counter + arrows right */}
        <div className="flex items-start justify-between" style={{ marginBottom: 40 }}>
          <h2
            className="uppercase"
            style={{
              fontFamily: "'Anton', 'Bebas Neue', sans-serif",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 900,
              color: "rgb(64, 68, 80)",
              lineHeight: 1,
              letterSpacing: 1,
            }}
          >
            Explore Nearby.
          </h2>

          <div className="flex items-center gap-4 flex-shrink-0 mt-2">
            <span
              style={{
                fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                fontSize: 20,
                fontWeight: 350,
                color: "rgba(64,68,80,0.35)",
              }}
            >
              {String(currentIndex).padStart(2, "0")}/{String(nearby.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => scroll("left")}
              disabled={currentIndex <= 1}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer"
              style={currentIndex <= 1
                ? { border: "1.5px solid rgba(64,68,80,0.15)", color: "rgba(64,68,80,0.2)", background: "transparent", cursor: "default" }
                : { background: "#404650", color: "#ffffff", border: "none" }
              }
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={currentIndex >= nearby.length}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer"
              style={currentIndex >= nearby.length
                ? { border: "1.5px solid rgba(64,68,80,0.15)", color: "rgba(64,68,80,0.2)", background: "transparent", cursor: "default" }
                : { background: "#404650", color: "#ffffff", border: "none" }
              }
              aria-label="Scroll right"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto"
        style={{
          marginLeft: 48,
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
        }}
      >
        {nearby.map((place) => (
          <Link
            key={place.name}
            href={place.href}
            data-card
            className="group relative flex-shrink-0 block overflow-hidden rounded-2xl"
            style={{
              width: "clamp(260px, 28vw, 380px)",
              aspectRatio: "3/4",
              scrollSnapAlign: "start",
            }}
          >
            <Image
              src={place.image}
              alt={place.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.65) 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3
                className="uppercase"
                style={{
                  fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                  fontSize: "clamp(18px, 2.5vw, 28px)",
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: 1,
                  lineHeight: 1.1,
                }}
              >
                {place.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
