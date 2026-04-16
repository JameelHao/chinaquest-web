"use client";

import Link from "next/link";

/* ── visittheusa tagline (from website):
   - White background
   - Large bold header
   - Descriptive paragraph
   - Pill button CTA
── */

export default function TaglineSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 text-black" style={{ lineHeight: 1.1 }}>
          Discover the Infinite Wonders of China
        </h2>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
          From the neon-lit skyscrapers of Shanghai to the ancient silence of the Gobi Desert, 
          China offers a journey like no other. Experience 5,000 years of history, 
          breathtaking landscapes, and a culture that bridges the gap between antiquity and the future.
        </p>
        <Link 
          href="/destinations" 
          className="inline-block bg-[#D5A58F] hover:bg-[#c4947e] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all"
          style={{ fontSize: 14 }}
        >
          Explore Destinations
        </Link>
      </div>
    </section>
  );
}
