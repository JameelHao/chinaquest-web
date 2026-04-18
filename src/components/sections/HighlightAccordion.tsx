"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AccordionItem {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface HighlightAccordionProps {
  heading: string;
  items: AccordionItem[];
}

export default function HighlightAccordion({ heading, items }: HighlightAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <div
      className="flex flex-col md:flex-row gap-8"
      style={{ marginBottom: 48 }}
    >
      {/* Left — image */}
      <div className="md:w-1/2 relative rounded-xl overflow-hidden" style={{ minHeight: 400 }}>
        <Image
          src={active.image}
          alt={active.title}
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Bottom overlay link */}
        <div className="absolute bottom-0 left-0 right-0">
          <div
            className="flex items-center justify-between"
            style={{
              background: "rgba(213, 165, 143, 0.85)",
              backdropFilter: "blur(4px)",
              padding: "16px 24px",
            }}
          >
            <Link
              href={active.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "rgb(64, 68, 80)",
              }}
            >
              ← See {active.title}
            </Link>
            <Link
              href={active.href}
              className="flex items-center justify-center rounded-full"
              style={{
                width: 36,
                height: 36,
                background: "rgb(64, 68, 80)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Right — sub-heading + accordion */}
      <div className="md:w-1/2 flex flex-col justify-center">
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

        <div>
          {items.map((item, i) => (
            <div
              key={item.title}
              style={{
                borderBottom:
                  i < items.length - 1
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "none",
              }}
            >
              <button
                onClick={() => setActiveIndex(i)}
                className="w-full flex items-start gap-4 cursor-pointer"
                style={{
                  padding: "20px 0",
                  background: "transparent",
                  textAlign: "left",
                }}
              >
                {/* Timeline: dot + dashed line */}
                <div className="flex flex-col items-center flex-shrink-0" style={{ paddingTop: 4 }}>
                  {/* Dot — solid filled when active, hollow outline when inactive */}
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: activeIndex === i ? "#D5A58F" : "transparent",
                      border: activeIndex === i ? "2px solid #D5A58F" : "2px solid rgba(255,255,255,0.5)",
                      flexShrink: 0,
                      transition: "all 0.2s",
                    }}
                  />
                  {/* Dashed vertical line connecting to next dot */}
                  {i < items.length - 1 && (
                    <span
                      style={{
                        width: 0,
                        flexGrow: 1,
                        minHeight: 24,
                        borderLeft: "1.5px dashed rgba(255,255,255,0.25)",
                      }}
                    />
                  )}
                </div>

                {/* Title + chevron */}
                <span
                  className="flex-1"
                  style={{
                    fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: activeIndex === i ? 600 : 500,
                    color: activeIndex === i ? "#ffffff" : "rgba(255,255,255,0.6)",
                    transition: "color 0.2s",
                  }}
                >
                  {item.title}
                </span>
                {/* Chevron */}
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
                    transition: "transform 0.3s, stroke 0.2s",
                    transform: activeIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Expanded content */}
              <div
                style={{
                  maxHeight: activeIndex === i ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "22px",
                    color: "rgba(255,255,255,0.7)",
                    paddingBottom: 16,
                    paddingLeft: 28,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
