"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface DestinationHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function DestinationHero({
  title,
  subtitle,
  image,
  breadcrumb,
}: DestinationHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "60vh", minHeight: 400 }}
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
            "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Content — bottom left */}
      <div
        className="absolute inset-0 z-[2] flex flex-col justify-end"
        style={{ padding: "0 clamp(24px, 5vw, 60px) clamp(40px, 8vh, 80px)" }}
      >
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-1 mb-4">
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={14} className="text-white/50" />}
                {i < breadcrumb.length - 1 ? (
                  <Link
                    href={item.href}
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {item.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1
          className="uppercase"
          style={{
            fontFamily: "'Anton', 'Bebas Neue', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(48px, 8vw, 100px)",
            lineHeight: 0.9,
            letterSpacing: "2px",
            color: "#ffffff",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="mt-4 max-w-xl"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(14px, 1.5vw, 18px)",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
