"use client";

import Image from "next/image";
import Link from "next/link";
import { useCarouselScroll } from "@/hooks/useCarouselScroll";
import ScrollNav from "@/components/ui/ScrollNav";

interface TripIdea {
  title: string;
  href: string;
  image: string;
}

interface TripIdeasSliderProps {
  title?: string;
  description?: string;
  items: TripIdea[];
}

export default function TripIdeasSlider({
  title = "Trip Ideas",
  description,
  items,
}: TripIdeasSliderProps) {
  const { scrollRef, canScrollLeft, canScrollRight, currentPage, totalPages, scroll } = useCarouselScroll();

  return (
    <section style={{ padding: "80px 0 64px" }}>
      <div
        className="mx-auto"
        style={{ maxWidth: 1680, padding: "0 48px" }}
      >
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:flex-shrink-0" style={{ width: "clamp(240px, 28%, 360px)" }}>
            <h2
              className="uppercase"
              style={{
                fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 900,
                color: "rgb(64, 68, 80)",
                lineHeight: 1.1,
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              {title}
            </h2>

            {description && (
              <p
                style={{
                  fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                  fontSize: 20,
                  fontWeight: 350,
                  lineHeight: "30px",
                  color: "rgba(64, 68, 80, 0.6)",
                  marginBottom: 32,
                }}
              >
                {description}
              </p>
            )}

            <ScrollNav
              currentPage={currentPage}
              totalPages={totalPages}
              canScrollLeft={canScrollLeft}
              canScrollRight={canScrollRight}
              onScrollLeft={() => scroll("left")}
              onScrollRight={() => scroll("right")}
            />
          </div>

          <div className="flex-1 min-w-0 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-5"
              style={{
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
              }}
            >
              {items.map((item, i) => (
                <Link
                  key={item.title}
                  href={item.href}
                  data-card
                  className="group relative flex-shrink-0 block overflow-hidden rounded-2xl"
                  style={{
                    width: i % 2 === 0 ? "58%" : "38%",
                    aspectRatio: "3/4",
                    scrollSnapAlign: "start",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0" style={{ padding: "24px 24px 24px 40px" }}>
                    <h3
                      className="uppercase"
                      style={{
                        fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                        fontSize: "clamp(16px, 2vw, 22px)",
                        fontWeight: 900,
                        color: "#ffffff",
                        letterSpacing: 1,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
