"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollNavProps {
  currentPage: number;
  totalPages: number;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

export default function ScrollNav({
  currentPage,
  totalPages,
  canScrollLeft,
  canScrollRight,
  onScrollLeft,
  onScrollRight,
}: ScrollNavProps) {
  return (
    <div className="flex items-center gap-4 flex-shrink-0">
      <span
        style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
          fontSize: 20,
          fontWeight: 350,
          color: "rgba(64,68,80,0.35)",
        }}
      >
        {String(currentPage).padStart(2, "0")}/{String(totalPages).padStart(2, "0")}
      </span>
      <button
        onClick={onScrollLeft}
        disabled={!canScrollLeft}
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
        style={
          !canScrollLeft
            ? {
                border: "1.5px solid rgba(64,68,80,0.15)",
                color: "rgba(64,68,80,0.2)",
                background: "transparent",
                cursor: "default",
              }
            : {
                background: "#404650",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
              }
        }
        aria-label="Scroll left"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={onScrollRight}
        disabled={!canScrollRight}
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
        style={
          !canScrollRight
            ? {
                border: "1.5px solid rgba(64,68,80,0.15)",
                color: "rgba(64,68,80,0.2)",
                background: "transparent",
                cursor: "default",
              }
            : {
                background: "#404650",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
              }
        }
        aria-label="Scroll right"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
