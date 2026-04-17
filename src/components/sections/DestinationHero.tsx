"use client";

import Image from "next/image";

interface DestinationHeroProps {
  title: string;
  image: string;
}

export default function DestinationHero({
  title,
  image,
}: DestinationHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: 600 }}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Title — bottom center */}
      <div
        className="absolute inset-0 z-[2] flex items-end justify-center"
        style={{ padding: "0 24px clamp(80px, 28vh, 240px)" }}
      >
        <h1
          className="uppercase text-center"
          style={{
            fontFamily: "'Anton', 'Bebas Neue', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(52px, 10.4vw, 148px)",
            lineHeight: 0.88,
            letterSpacing: "2px",
            color: "#f4f2f0",
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
