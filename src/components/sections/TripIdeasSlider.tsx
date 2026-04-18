"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const [page, setPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Show 2 cards per page
  const perPage = 2;
  const totalPages = Math.ceil(items.length / perPage);

  const scrollToPage = (p: number) => {
    const next = Math.max(0, Math.min(p, totalPages - 1));
    setPage(next);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / items.length;
      scrollRef.current.scrollTo({
        left: next * perPage * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section style={{ padding: "80px 0 64px" }}>
      <div
        className="mx-auto"
        style={{ maxWidth: 1680, padding: "0 48px" }}
      >
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left column — title + description + pagination */}
          <div className="md:flex-shrink-0" style={{ width: "clamp(240px, 28%, 360px)" }}>
            <h2
              className="uppercase"
              style={{
                fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                fontSize: "clamp(48px, 7vw, 96px)",
                fontWeight: 900,
                color: "rgb(64, 68, 80)",
                lineHeight: 1,
                letterSpacing: 2,
                marginBottom: 24,
              }}
            >
              {title}
            </h2>

            {description && (
              <p
                style={{
                  fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "26px",
                  color: "rgba(64, 68, 80, 0.6)",
                  marginBottom: 32,
                }}
              >
                {description}
              </p>
            )}

            {/* Pagination */}
            <div className="flex items-center gap-3">
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgb(64, 68, 80)",
                }}
              >
                {String(page + 1).padStart(2, "0")}/{String(totalPages).padStart(2, "0")}
              </span>
              <button
                onClick={() => scrollToPage(page - 1)}
                disabled={page === 0}
                className="flex items-center justify-center rounded-full cursor-pointer"
                style={{
                  width: 36,
                  height: 36,
                  border: "1.5px solid rgb(64, 68, 80)",
                  background: "transparent",
                  opacity: page === 0 ? 0.3 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(64,68,80)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scrollToPage(page + 1)}
                disabled={page >= totalPages - 1}
                className="flex items-center justify-center rounded-full cursor-pointer"
                style={{
                  width: 36,
                  height: 36,
                  background: "rgb(64, 68, 80)",
                  opacity: page >= totalPages - 1 ? 0.3 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right column — scrolling cards */}
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
                  <div className="absolute bottom-0 left-0 right-0 p-6">
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
