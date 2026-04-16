"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  { src: "/images/hero-great-wall.jpg", alt: "Great Wall at sunrise" },
  { src: "/images/hero-drone-field.jpg", alt: "Drone over karst rice fields" },
  { src: "/images/hero-tech-lab.jpg", alt: "Students exploring drone technology lab" },
  { src: "/images/hero-scene4.jpg", alt: "Students walking tree-lined streets in China" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: 600 }}>
      {/* Background images with crossfade */}
      {heroImages.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          className="object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          sizes="100vw"
        />
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Title — bottom center, up 10% */}
      <div
        className="absolute inset-0 z-[2] flex items-end justify-center"
        style={{ padding: "0 24px clamp(80px, 28vh, 240px)" }}
      >
        <h1
          className="text-center uppercase"
          style={{
            fontFamily: "'Anton', 'Bebas Neue', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(52px, 10.4vw, 148px)",
            lineHeight: 0.88,
            letterSpacing: "2px",
            color: "#f4f2f0",
          }}
        >
          CHINA QUEST
        </h1>
      </div>
    </section>
  );
}
