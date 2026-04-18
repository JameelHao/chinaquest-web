"use client";

import Image from "next/image";
import Link from "next/link";
import { useCarouselScroll } from "@/hooks/useCarouselScroll";
import ScrollNav from "@/components/ui/ScrollNav";

const experiences = [
  {
    name: "Imperial Palace Tour",
    desc: "Walk through 500 years of dynastic history inside the world's largest palatial complex.",
    img: "/images/carousel-1.jpg",
    href: "/experience/imperial-palace-tour",
  },
  {
    name: "Great Wall Hiking",
    desc: "Trek wild and restored sections through dramatic mountain scenery north of Beijing.",
    img: "/images/carousel-2.jpg",
    href: "/experience/great-wall-hiking",
  },
  {
    name: "Hutong Food Walk",
    desc: "Discover authentic Beijing street food and hidden courtyard restaurants in the old lanes.",
    img: "/images/carousel-3.jpg",
    href: "/experience/hutong-food-walk",
  },
  {
    name: "Traditional Tea Ceremony",
    desc: "Experience the art of Chinese tea culture in a centuries-old teahouse setting.",
    img: "/images/carousel-4.jpg",
    href: "/experience/tea-ceremony",
  },
  {
    name: "Beijing Opera Night",
    desc: "Witness the spectacle of painted faces, acrobatics, and centuries-old storytelling.",
    img: "/images/carousel-1.jpg",
    href: "/experience/beijing-opera",
  },
  {
    name: "Temple of Heaven at Dawn",
    desc: "Join locals practicing tai chi under ancient cypresses as the first light hits the prayer hall.",
    img: "/images/carousel-3.jpg",
    href: "/experience/temple-of-heaven-dawn",
  },
  {
    name: "Summer Palace Boat Ride",
    desc: "Glide across Kunming Lake and take in the marble boat, pagodas, and willow-lined shores.",
    img: "/images/carousel-4.jpg",
    href: "/experience/summer-palace-boat",
  },
  {
    name: "798 Art District",
    desc: "Explore China's most vibrant contemporary art scene in converted Mao-era factory spaces.",
    img: "/images/carousel-2.jpg",
    href: "/experience/798-art-district",
  },
];

export default function ExperiencesPanel() {
  const { scrollRef, canScrollLeft, canScrollRight, currentPage, totalPages, scroll } = useCarouselScroll();

  return (
    <section className="relative">
      <div className="relative" style={{ height: "clamp(400px, 50vw, 600px)" }}>
        <Image
          src="/images/carousel-2.jpg"
          alt="Beijing experiences"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div
        className="mx-auto"
        style={{
          maxWidth: 1680,
          margin: "-100px auto 0",
          padding: "0 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            background: "rgba(244, 242, 240, 0.95)",
            backdropFilter: "blur(8px)",
            borderRadius: 20,
            padding: "48px 48px 40px",
          }}
        >
          <div className="flex items-center justify-between" style={{ marginBottom: 32 }}>
            <h2
              className="uppercase"
              style={{
                fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900,
                color: "rgb(64, 68, 80)",
                lineHeight: 1,
                letterSpacing: 1,
              }}
            >
              Experiences
            </h2>

            <ScrollNav
              currentPage={currentPage}
              totalPages={totalPages}
              canScrollLeft={canScrollLeft}
              canScrollRight={canScrollRight}
              onScrollLeft={() => scroll("left")}
              onScrollRight={() => scroll("right")}
            />
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          >
            {experiences.map((exp) => (
              <Link
                key={exp.name}
                href={exp.href}
                data-card
                className="group flex-shrink-0"
                style={{
                  width: "clamp(240px, 22vw, 300px)",
                  scrollSnapAlign: "start",
                }}
              >
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{ aspectRatio: "4/3", marginBottom: 16 }}
                >
                  <Image
                    src={exp.img}
                    alt={exp.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="300px"
                  />
                </div>
                <h3
                  className="uppercase"
                  style={{
                    fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                    fontSize: 22,
                    fontWeight: 900,
                    letterSpacing: 1,
                    color: "rgb(64, 68, 80)",
                    lineHeight: 1.3,
                    marginBottom: 10,
                  }}
                >
                  {exp.name}
                </h3>
                <p
                  className="line-clamp-3"
                  style={{
                    fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "rgba(64, 68, 80, 0.6)",
                    marginBottom: 12,
                  }}
                >
                  {exp.desc}
                </p>
                <span
                  className="group-hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "rgb(64, 68, 80)",
                    textDecoration: "underline",
                  }}
                >
                  Get trip ideas →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
