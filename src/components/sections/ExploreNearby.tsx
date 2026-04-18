"use client";

import Image from "next/image";
import Link from "next/link";
import { useCarouselScroll } from "@/hooks/useCarouselScroll";
import ScrollNav from "@/components/ui/ScrollNav";

const nearby = [
  { name: "Hebei", href: "/destinations/hebei", image: "/images/carousel-2.jpg" },
  { name: "Tianjin", href: "/destinations/tianjin", image: "/images/carousel-3.jpg" },
  { name: "Shandong", href: "/destinations/shandong", image: "/images/carousel-1.jpg" },
  { name: "Shanxi", href: "/destinations/shanxi", image: "/images/carousel-4.jpg" },
  { name: "Inner Mongolia", href: "/destinations/inner-mongolia", image: "/images/carousel-2.jpg" },
  { name: "Liaoning", href: "/destinations/liaoning", image: "/images/carousel-3.jpg" },
];

export default function ExploreNearby() {
  const { scrollRef, canScrollLeft, canScrollRight, currentIndex, totalVisible, scroll } = useCarouselScroll();

  return (
    <section style={{ background: "#f4f2f0", padding: "64px 0 80px" }}>
      <div style={{ padding: "0 48px" }}>
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

          <div className="mt-2">
            <ScrollNav
              currentIndex={currentIndex}
              total={totalVisible}
              canScrollLeft={canScrollLeft}
              canScrollRight={canScrollRight}
              onScrollLeft={() => scroll("left")}
              onScrollRight={() => scroll("right")}
            />
          </div>
        </div>
      </div>

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
            <div className="absolute bottom-0 left-0 right-0" style={{ padding: "24px 24px 24px 40px" }}>
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
