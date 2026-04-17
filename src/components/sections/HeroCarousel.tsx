"use client";

import Link from "next/link";
import Image from "next/image";

/*
  visittheusa card stack — scroll to reveal, each card covers the previous one.
  Uses sticky positioning: each card sticks at top, next card scrolls up over it.
*/

const slides = [
  {
    category: "CHINESE ORIGINALS",
    title: "China's Original Spirit",
    body: "Discover uniquely Chinese destinations, stories, and experiences that celebrate the nation's original spirit across 5,000 years of history.",
    cta: "Discover Originals",
    href: "/experience/culture",
    img: "/images/carousel-1.jpg",
  },
  {
    category: "ANCIENT WONDERS",
    title: "Beloved Places of China",
    body: "From the Forbidden City to the Terracotta Army, meet incredible places and welcoming people — one province, one story, one experience at a time.",
    cta: "Discover More",
    href: "/experience/heritage",
    img: "/images/carousel-2.jpg",
  },
  {
    category: "ROAD TRIPS",
    title: "Boundless Adventures",
    body: "Countless avenues of discovery unfold from China's city streets and scenic highways. Explore the Silk Road, Yunnan Highway, and more.",
    cta: "Go Explore",
    href: "/trip",
    img: "/images/carousel-3.jpg",
  },
  {
    category: "CULINARY",
    title: "Eight Great Cuisines",
    body: "From fiery Sichuan hotpot to delicate Cantonese dim sum, China's regional cuisines offer an endless journey for your taste buds.",
    cta: "Taste China",
    href: "/experience/food",
    img: "/images/carousel-4.jpg",
  },
];

function CardSlide({
  slide,
  index,
  total,
}: {
  slide: (typeof slides)[0];
  index: number;
  total: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <div
      className="sticky top-0 w-full flex flex-col md:flex-row"
      style={{
        height: "100vh",
        zIndex: index + 1,
      }}
    >
      {/* Left panel */}
      <div
        className="relative flex flex-col justify-between md:w-[46%] flex-shrink-0"
        style={{
          background: "#404650",
          padding: "clamp(36px, 5vw, 56px)",
        }}
      >
        {/* Wave decoration */}
        <svg
          className="absolute top-0 right-0 h-full opacity-[0.06] pointer-events-none"
          viewBox="0 0 200 600"
          fill="none"
          preserveAspectRatio="none"
          style={{ width: "60%" }}
        >
          {[0, 40, 80, 120, 160, 200].map((offset) => (
            <path
              key={offset}
              d={`M${offset},0 Q${offset + 30},150 ${offset},300 Q${offset - 30},450 ${offset},600`}
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </svg>

        {/* Category — top */}
        <div className="relative z-10">
          <p
            className="uppercase tracking-[4px]"
            style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
              fontSize: "clamp(12px, 1.2vw, 16px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {slide.category}
          </p>
        </div>

        {/* Title + Body + CTA — center */}
        <div className="relative z-10 flex flex-col gap-8">
          <h2
            className="uppercase"
            style={{
              fontFamily: "'Anton', 'Bebas Neue', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            {slide.title}
          </h2>

          <p
            className="hidden sm:block"
            style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
              fontSize: "clamp(14px, 1.2vw, 18px)",
              fontWeight: 350,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {slide.body}
          </p>

          <div>
            <Link href={slide.href} className="btn-pill btn-pill-terra">
              {slide.cta}
            </Link>
          </div>
        </div>

        {/* Counter — bottom */}
        <p
          className="relative z-10"
          style={{
            fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
            fontSize: "clamp(12px, 1.2vw, 16px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "1px",
          }}
        >
          {num}/{totalStr}
        </p>
      </div>

      {/* Right panel: image */}
      <div className="relative flex-1 min-h-[300px] md:min-h-0">
        <Image
          src={slide.img}
          alt={slide.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 54vw"
        />
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  return (
    <section className="relative w-full">
      {slides.map((slide, i) => (
        <CardSlide key={i} slide={slide} index={i} total={slides.length} />
      ))}
    </section>
  );
}
