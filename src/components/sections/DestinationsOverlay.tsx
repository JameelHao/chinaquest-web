"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

const cities = [
  { name: "Beijing", slug: "beijing", image: "/images/carousel-1.jpg" },
  { name: "Shanghai", slug: "shanghai", image: "/images/carousel-2.jpg" },
  { name: "Shenzhen", slug: "shenzhen", image: "/images/carousel-3.jpg" },
  { name: "Hong Kong", slug: "hong-kong", image: "/images/carousel-4.jpg" },
  { name: "Xi'an", slug: "xian", image: "/images/xian.jpg" },
];

interface DestinationsOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function DestinationsOverlay({
  open,
  onClose,
}: DestinationsOverlayProps) {
  if (!open) return null;

  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-[9998] overflow-y-auto animate-fadeIn"
      style={{
        top: 88,
        background: "rgba(200, 200, 210, 0.35)",
        backdropFilter: "blur(40px) saturate(1.4)",
        WebkitBackdropFilter: "blur(40px) saturate(1.4)",
      }}
    >
      {/* CLOSE — right-aligned, same row as header */}
      <div className="flex items-center justify-end" style={{ padding: "20px 52px 0" }}>
        <button
          onClick={onClose}
          className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-all"
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#2d3142",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            background: "transparent",
            border: "none",
          }}
        >
          CLOSE
          <X size={22} strokeWidth={2.5} />
        </button>
      </div>

      {/* City grid — centered */}
      <div className="flex items-start justify-center w-full" style={{ minHeight: "calc(100vh - 120px)", padding: "36px 48px 48px" }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6 w-full max-w-[1200px]">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/destinations/${city.slug}`}
              onClick={onClose}
              className="group block rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              style={{ background: "#ffffff", padding: 10 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <p
                className="uppercase"
                style={{
                  fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#2d3142",
                  letterSpacing: "0.04em",
                  padding: "10px 4px 4px",
                }}
              >
                {city.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
