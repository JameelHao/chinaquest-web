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
              className="flex"
              style={{
                borderBottom:
                  i < items.length - 1
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "none",
              }}
            >
              {/* Timeline column — dot + line, independent from content */}
              <div
                className="flex flex-col items-center flex-shrink-0"
                style={{ width: 20, paddingTop: 24 }}
              >
                {/* Dot */}
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: activeIndex === i ? "#D5A58F" : "transparent",
                    border: activeIndex === i ? "2px solid #D5A58F" : "2px solid rgba(255,255,255,0.5)",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                  }}
                />
                {/* Vertical line — stretches with content height */}
                {i < items.length - 1 && (
                  <span
                    style={{
                      width: 0,
                      flexGrow: 1,
                      borderLeft: "1.5px solid rgba(255,255,255,0.2)",
                      marginTop: 6,
                      marginBottom: -1,
                    }}
                  />
                )}
              </div>

              {/* Content column — title row + expandable description */}
              <div className="flex-1 min-w-0" style={{ paddingLeft: 12 }}>
                {/* Title row */}
                <button
                  onClick={() => setActiveIndex(i)}
                  className="w-full flex items-center cursor-pointer"
                  style={{
                    padding: "20px 0",
                    background: "transparent",
                    textAlign: "left",
                    gap: 8,
                  }}
                >
                  <span
                    className="flex-1"
                    style={{
                      fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                      fontSize: 16,
                      fontWeight: activeIndex === i ? 600 : 500,
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

                {/* Expandable description */}
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
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "rgba(255,255,255,0.7)",
                        paddingBottom: 20,
                        opacity: activeIndex === i ? 1 : 0,
                        transition: "opacity 0.3s ease 0.1s",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
