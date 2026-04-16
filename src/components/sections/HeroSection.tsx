"use client";

/* ── visittheusa hero (from screenshot):
   - Full-viewport background image
   - Bottom: huge bold title "AMERICA THE BEAUTIFUL" → "CHINA THE BEAUTIFUL"
   - Below title: "Get travel ideas with AI" gold button
   - Below button: 4 pill suggestion buttons with star ✦ icons
── */

const suggestions = [
  "Find my family adventure",
  "Show me incredible views",
  "Build my family road trip",
  "See top arts destinations",
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-end"
      style={{ height: "100vh", minHeight: 650 }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80"
        alt="Great Wall of China"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark gradient overlay — heavier at bottom for text */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Content at bottom — matching visittheusa */}
      <div className="relative z-10 w-full text-center pb-10 px-6">
        {/* Big title — "CHINA THE BEAUTIFUL" */}
        <h1
          className="font-black uppercase text-white mx-auto"
          style={{
            fontSize: "clamp(40px, 8vw, 120px)",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            marginBottom: 24,
          }}
        >
          China The Beautiful
        </h1>

        {/* AI button — gold/amber pill */}
        <button
          className="inline-flex items-center gap-2 rounded-full mb-6 cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            background: "rgba(213,165,143,0.9)",
            color: "#1a1a1a",
            padding: "10px 22px",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          <span>✦</span>
          Get travel ideas with AI
        </button>

        {/* Suggestion pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              className="inline-flex items-center gap-1.5 rounded-full cursor-pointer hover:bg-white/25 transition-colors"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(4px)",
                color: "#ffffff",
                padding: "8px 18px",
                fontSize: 13,
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span style={{ fontSize: 10 }}>✦</span>
              {s}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
