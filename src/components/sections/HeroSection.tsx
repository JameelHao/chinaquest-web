"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* HERO — Full viewport image, minimal overlay, matching visittheusa */}
      <section
        className="relative w-full flex items-end justify-center"
        style={{ height: "100vh", minHeight: 700 }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80"
          alt="Great Wall of China"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Bottom gradient for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        {/* Bottom credit / location tag — like visittheusa */}
        <div className="relative z-10 pb-8 px-8 w-full flex justify-between items-end">
          <p
            className="text-sm font-medium tracking-wide"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Great Wall of China, Beijing
          </p>
        </div>
      </section>

      {/* Tagline section — cream bg, centered, matching visittheusa's intro block */}
      <section
        className="w-full"
        style={{ background: "#f4f2f0", padding: "80px 24px" }}
      >
        <div
          className="mx-auto text-center"
          style={{ maxWidth: 800 }}
        >
          <p
            className="text-card-body leading-relaxed mb-10"
            style={{ color: "#404650", opacity: 0.85 }}
          >
            This is a place where travelers can chart their own course, where
            stories unfold in unexpected places and discovery happens one
            connection at a time.
          </p>
          <p
            className="text-sm font-bold tracking-[4px] uppercase mb-4"
            style={{ color: "#404650", opacity: 0.5 }}
          >
            Thinking About a Trip?
          </p>
          <h2
            className="text-section-md mb-6"
            style={{ color: "#404650" }}
          >
            Whatever type of travel you seek, China is ready.
          </h2>
          <Link href="/practical/visa" className="btn-pill btn-pill-terra">
            Visa &amp; Entry Details
          </Link>
        </div>
      </section>
    </>
  );
}
