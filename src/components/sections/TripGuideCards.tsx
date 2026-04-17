"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const guides = [
  {
    category: "Major Events",
    title: "Your Guide to China's Top Festival Cities",
    desc: "Make plans now to explore these exciting host destinations and beyond.",
    href: "/trip/festival-cities",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=500&q=80",
  },
  {
    category: "Road Trips",
    title: "Silk Road: Ancient Trade Routes and Desert Adventures",
    desc: "Discover an epic journey through Xi'an, Dunhuang, Turpan and Kashgar along the ancient trade route.",
    duration: "14-21 days",
    href: "/trip/silk-road",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80",
  },
  {
    category: "Arts & Culture",
    title: "Entertainment Epicenters Across China",
    desc: "Experience some of the country's best theater, music, family fun and nightlife at these hot spots.",
    href: "/trip/entertainment-epicenters",
    img: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?w=500&q=80",
  },
  {
    category: "Road Trips",
    title: "Explore the Heart of China on the Yunnan Highway",
    desc: "Enjoy the journey from Kunming to Shangri-La on this iconic road trip through southwest China.",
    duration: "10-14 days",
    href: "/trip/yunnan-highway",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
  },
  {
    category: "Arts & Culture",
    title: "8 Cultural Celebrations That Capture the Spirit of China",
    desc: "Take a coast-to-coast journey through this heritage-filled festival roadmap.",
    href: "/trip/cultural-celebrations",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80",
  },
  {
    category: "Arts & Culture",
    title: "Must-See Music Festivals in China",
    desc: "Discover some of the top music festivals in China for dancing to the rhythms that move you.",
    href: "/trip/music-festivals",
    img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&q=80",
  },
  {
    category: "Major Events",
    title: "Iconic Sporting Events of China",
    desc: "From racing circuits to roaring stadiums, witness China's passion for sports throughout the country.",
    href: "/trip/sporting-events",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500&q=80",
  },
  {
    category: "Family",
    title: "Amazing Family Experiences Across China",
    desc: "Discover the many fun ways for families to reconnect and create unforgettable memories.",
    href: "/trip/family-experiences",
    img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&q=80",
  },
  {
    category: "Nature",
    title: "Big Adventures Across China",
    desc: "If you're seeking wide-open spaces and a little adrenaline, these bucket-list experiences deliver both.",
    href: "/trip/big-adventures",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&q=80",
  },
];

const catColor: Record<string, string> = {
  "Road Trips": "#2563eb",
  "Arts & Culture": "#7c3aed",
  "Major Events": "#dc2626",
  Family: "#db2777",
  Nature: "#16a34a",
};

export default function TripGuideCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector("a")?.offsetWidth || 360;
    const amount = cardWidth + 24; // card width + gap
    scrollRef.current.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full" style={{ background: "#f4f2f0", padding: "64px 0 80px" }}>
      <div style={{ padding: "0 clamp(32px, 6vw, 80px)" }}>
        {/* Header: title left, counter + arrows right */}
        <div className="flex items-start justify-between mb-8">
          <h2
            className="uppercase"
            style={{
              fontFamily: "'Anton', 'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(24px, 3.5vw, 44px)",
              lineHeight: 1.1,
              color: "#404650",
              maxWidth: 500,
            }}
          >
            Your Next Bold Move? Explore China Your Way
          </h2>

          <div className="flex items-center gap-4 flex-shrink-0 mt-2">
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 20,
                fontWeight: 350,
                color: "rgba(64,68,80,0.35)",
              }}
            >
              01/{String(guides.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all"
              style={{ border: "1.5px solid rgba(64,68,80,0.2)", color: "rgba(64,68,80,0.4)", background: "transparent" }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:opacity-80"
              style={{ background: "#404650", color: "#ffffff", border: "none" }}
              aria-label="Scroll right"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      <div style={{ height: 32 }} />

      {/* Horizontal scroll track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Left spacer */}
        <div className="flex-shrink-0" style={{ width: "clamp(26px, 5.5vw, 74px)" }} />
        {guides.map((g) => (
          <Link
            key={g.title}
            href={g.href}
            className="group block flex-shrink-0"
            style={{ width: "clamp(280px, 30vw, 380px)", scrollSnapAlign: "start" }}
          >
            {/* Image — portrait 500:670, rounded */}
            <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: "500/670" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.img}
                alt={g.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Content below image */}
            <div
              className="flex flex-col gap-4"
              style={{ marginTop: 16 }}
            >
              <p className="uppercase">
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(64,68,80,0.45)",
                    letterSpacing: "1.5px",
                    background: "rgba(64,68,80,0.06)",
                    padding: "4px 10px",
                    borderRadius: 4,
                  }}
                >
                  {g.category}
                </span>
              </p>
              <h3 className="font-bold leading-snug" style={{ fontSize: 18, color: "#404650" }}>
                {g.title}
              </h3>
              <p className="leading-relaxed line-clamp-3" style={{ fontSize: 15, color: "rgba(64,68,80,0.6)" }}>
                {g.desc}
              </p>
              <span
                className="font-bold group-hover:opacity-70 transition-opacity underline"
                style={{ fontSize: 15, color: "#404650" }}
              >
                Read Article →
              </span>
            </div>
          </Link>
        ))}
        {/* Right spacer */}
        <div className="flex-shrink-0" style={{ width: "clamp(26px, 5.5vw, 74px)" }} />
      </div>

      {/* Hide scrollbar via CSS */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
