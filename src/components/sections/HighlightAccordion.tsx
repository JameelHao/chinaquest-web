"use client";

import { useState } from "react";
import Image from "next/image";

interface AccordionItem {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface HighlightAccordionProps {
  heading: string;
  items: AccordionItem[];
  /** When true, accordion is on the left and image on the right */
  reverse?: boolean;
}

export default function HighlightAccordion({ heading, items, reverse = false }: HighlightAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  const imageBlock = (
    <div
      className="md:w-1/2 relative rounded-2xl overflow-hidden"
      style={{ aspectRatio: "1/1" }}
    >
      <Image
        src={active.image}
        alt={active.title}
        fill
        className="object-cover transition-all duration-500"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );

  const accordionBlock = (
    <div className="md:w-1/2 flex flex-col">
      <h3
        className="uppercase"
        style={{
          fontFamily: "'Anton', 'Bebas Neue', sans-serif",
          fontSize: "clamp(24px, 3vw, 36px)",
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 1.1,
          letterSpacing: 1,
          marginBottom: 24,
        }}
      >
        {heading}
      </h3>

      {/* Accordion — CSS Grid: timeline col + content col share rows */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "24px 1fr",
          columnGap: 12,
        }}
      >
        {items.map((item, i) => (
          <>
            {/* Grid cell: timeline */}
            <div
              key={`tl-${i}`}
              className="flex flex-col items-center"
              style={{ gridColumn: 1 }}
            >
              {i > 0 && (
                <div
                  style={{
                    width: 0,
                    height: 18,
                    borderLeft: "1.5px dashed rgba(255,255,255,0.25)",
                    flexShrink: 0,
                  }}
                />
              )}
              {i === 0 && <div style={{ height: 18, flexShrink: 0 }} />}
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: activeIndex === i ? "#D5A58F" : "transparent",
                  border: activeIndex === i
                    ? "2px solid #D5A58F"
                    : "2px solid rgba(255,255,255,0.5)",
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                }}
              />
              {i < items.length - 1 && (
                <div
                  style={{
                    width: 0,
                    flexGrow: 1,
                    borderLeft: "1.5px dashed rgba(255,255,255,0.25)",
                  }}
                />
              )}
            </div>

            {/* Grid cell: content */}
            <div
              key={`ct-${i}`}
              style={{
                gridColumn: 2,
                borderBottom:
                  i < items.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
              }}
            >
              <button
                onClick={() => setActiveIndex(i)}
                className="w-full flex items-center cursor-pointer"
                style={{
                  height: 48,
                  background: "transparent",
                  textAlign: "left",
                  gap: 8,
                }}
              >
                <span
                  className="flex-1"
                  style={{
                    fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                    fontSize: 18,
                    fontWeight: activeIndex === i ? 700 : 600,
                    color: activeIndex === i ? "#ffffff" : "rgba(255,255,255,0.6)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.title}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={activeIndex === i ? "#ffffff" : "rgba(255,255,255,0.4)"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transition: "transform 0.4s ease, stroke 0.3s ease",
                    transform: activeIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    flexShrink: 0,
                  }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                style={{
                  display: "grid",
                  gridTemplateRows: activeIndex === i ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.4s ease",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                      fontSize: 16,
                      fontWeight: 400,
                      lineHeight: "26px",
                      color: "rgba(255,255,255,0.7)",
                      paddingBottom: 16,
                      opacity: activeIndex === i ? 1 : 0,
                      transition: "opacity 0.3s ease 0.1s",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="flex flex-col md:flex-row items-start gap-8"
      style={{ marginBottom: 48 }}
    >
      {reverse ? (
        <>
          {accordionBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {accordionBlock}
        </>
      )}
    </div>
  );
}
