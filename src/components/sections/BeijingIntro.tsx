"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    iconClass: "has-icon--skyscrapers",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(64,68,80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 9h1" />
        <path d="M14 9h1" />
        <path d="M9 13h1" />
        <path d="M14 13h1" />
      </svg>
    ),
    title: "Imperial heritage",
    description:
      "Six centuries of imperial splendor — from the Forbidden City to the Temple of Heaven, Beijing preserves China's grandest royal legacy.",
  },
  {
    iconClass: "has-icon--mountain",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(64,68,80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20l4-8 4 4 4-6 6 10" />
        <circle cx="18" cy="5" r="2" />
      </svg>
    ),
    title: "Great Wall & beyond",
    description:
      "Hike wild and restored sections of the Great Wall through dramatic mountain scenery just an hour from the city center.",
  },
  {
    iconClass: "has-icon--star",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(64,68,80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
      </svg>
    ),
    title: "Culture & cuisine",
    description:
      "Discover hutong alleyways, Peking duck, world-class museums, and a thriving contemporary art scene across 798 and beyond.",
  },
];

const places = [
  { name: "Forbidden City", slug: "forbidden-city", image: "/images/carousel-1.jpg" },
  { name: "Great Wall", slug: "great-wall", image: "/images/carousel-2.jpg" },
  { name: "Temple of Heaven", slug: "temple-of-heaven", image: "/images/carousel-3.jpg" },
  { name: "Summer Palace", slug: "summer-palace", image: "/images/carousel-4.jpg" },
];

export default function BeijingIntro() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!mapRef.current || mapReady) return;

    import("leaflet").then((L) => {
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      setTimeout(() => {
        if (!mapRef.current) return;

        const map = L.map(mapRef.current, {
          center: [39.9042, 116.4074],
          zoom: 8,
          zoomControl: true,
          scrollWheelZoom: false,
        });

        L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            maxZoom: 18,
          }
        ).addTo(map);

        const icon = L.divIcon({
          className: "custom-pin",
          html: `<svg width="28" height="36" viewBox="0 0 28 36" fill="none">
            <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.268 21.732 0 14 0z" fill="#D5A58F"/>
            <circle cx="14" cy="14" r="6" fill="white"/>
          </svg>`,
          iconSize: [28, 36],
          iconAnchor: [14, 36],
        });

        L.marker([39.9042, 116.4074], { icon }).addTo(map);

        setMapReady(true);
      }, 100);
    });
  }, [mapReady]);

  return (
    <section style={{ background: "#f4f2f0", marginTop: 64, marginBottom: 64 }}>
      <div
        className="mx-auto flex flex-col lg:flex-row"
        style={{ maxWidth: 1680, padding: "0 48px", gap: 16 }}
      >
        {/* Left column — title + description + highlights + cities */}
        <div className="lg:w-1/2" style={{ paddingRight: 16 }}>
          <h2
            className="uppercase"
            style={{
              fontFamily: "'Anton', 'Bebas Neue', sans-serif",
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 900,
              color: "rgb(64, 68, 80)",
              lineHeight: 1,
              letterSpacing: 2,
              marginBottom: 32,
            }}
          >
            The Imperial Capital
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 20,
              fontWeight: 350,
              lineHeight: "30px",
              color: "rgb(64, 68, 80)",
              marginBottom: 32,
            }}
          >
            Hike ancient walls, wander through centuries-old hutongs, and discover
            a city where 3,000 years of history meet a thriving modern
            metropolis. From imperial palaces to cutting-edge art districts,
            Beijing invites you to experience the heart of China.
          </p>

          {/* Highlight items */}
          <div>
            {highlights.map((h, i) => (
              <div
                key={h.title}
                style={{
                  padding: "32px 16px",
                  marginBottom: i < highlights.length - 1 ? 0 : 0,
                  borderBottom: i < highlights.length - 1 ? "1px solid rgba(64,68,80,0.12)" : "none",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0" style={{ width: 32, height: 32, marginTop: 2 }}>
                    {h.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 20,
                        fontWeight: 500,
                        color: "rgb(64, 68, 80)",
                        marginBottom: 8,
                      }}
                    >
                      {h.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 16,
                        fontWeight: 400,
                        lineHeight: "24px",
                        color: "rgb(64, 68, 80)",
                      }}
                    >
                      {h.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Places to Go sub-section */}
          <div style={{ marginTop: 16 }}>
            <h2
              className="uppercase"
              style={{
                fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 900,
                color: "rgb(64, 68, 80)",
                lineHeight: 1.1,
                letterSpacing: 1,
                marginBottom: 32,
              }}
            >
              Places to Go
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {places.map((place) => (
                <Link
                  key={place.slug}
                  href={`/destinations/beijing/beijing/${place.slug}`}
                  className="group flex items-center gap-3 rounded-lg overflow-hidden transition-shadow hover:shadow-md"
                  style={{
                    background: "#ffffff",
                    padding: "8px 12px",
                  }}
                >
                  <div
                    className="flex-shrink-0 relative rounded overflow-hidden"
                    style={{ width: 48, height: 48 }}
                  >
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                      fontSize: 14,
                      fontWeight: 900,
                      letterSpacing: 1,
                      color: "rgb(64, 68, 80)",
                    }}
                  >
                    {place.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — map (sticky) */}
        <div className="lg:w-1/2 relative">
          <div
            className="lg:sticky"
            style={{ top: 120 }}
          >
            <div
              ref={mapRef}
              className="w-full overflow-hidden"
              style={{
                height: "clamp(400px, 60vh, 700px)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
