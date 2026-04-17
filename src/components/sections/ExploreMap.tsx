"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const cities = [
  { name: "Beijing", lat: 39.9042, lng: 116.4074, href: "/destinations/beijing" },
  { name: "Shanghai", lat: 31.2304, lng: 121.4737, href: "/destinations/shanghai" },
  { name: "Shenzhen", lat: 22.5431, lng: 114.0579, href: "/destinations/shenzhen" },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694, href: "/destinations/hongkong" },
];

export default function ExploreMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<unknown>(null);
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const [popupPos, setPopupPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance) return;

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
          center: [30, 110],
          zoom: 4,
          zoomControl: false,
          scrollWheelZoom: false,
        });

        L.control.zoom({ position: "topright" }).addTo(map);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
          maxZoom: 18,
        }).addTo(map);

        const icon = L.divIcon({
          className: "custom-pin",
          html: `<svg width="28" height="36" viewBox="0 0 28 36" fill="none">
            <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.268 21.732 0 14 0z" fill="#D5A58F"/>
            <circle cx="14" cy="14" r="6" fill="white"/>
          </svg>`,
          iconSize: [28, 36],
          iconAnchor: [14, 36],
          popupAnchor: [0, -36],
        });

        cities.forEach((city) => {
          const marker = L.marker([city.lat, city.lng], { icon }).addTo(map);
          marker.on("click", () => {
            setActiveCity(city.name);
            // Get pixel position of marker relative to map container
            const point = map.latLngToContainerPoint([city.lat, city.lng]);
            setPopupPos({ x: point.x, y: point.y });
          });
        });

        // Close popup on map click (not on marker)
        map.on("click", () => {
          setActiveCity(null);
          setPopupPos(null);
        });

        setMapInstance(map);
      }, 100);
    });
  }, [mapInstance]);

  const selected = cities.find((c) => c.name === activeCity);

  return (
    <section className="w-full" style={{ background: "#f4f2f0", padding: "80px 0 40px", position: "relative", zIndex: 0 }}>
      {/* Title */}
      <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 12 }}>
        <h2
          className="uppercase"
          style={{
            fontFamily: "'Anton', 'Bebas Neue', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(28px, 4vw, 48px)",
            lineHeight: 1.1,
            color: "#404650",
          }}
        >
          Your Dream Trip Starts Now
        </h2>
      </div>
      <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 32 }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            fontWeight: 350,
            color: "rgba(64,68,80,0.6)",
          }}
        >
          Click the pins below to explore each city and start mapping your own unique trip.
        </p>
      </div>

      {/* Map container */}
      <div className="relative" style={{ height: "clamp(400px, 60vh, 700px)", margin: "0 clamp(16px, 4vw, 48px)" }}>
        <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden" />

        {/* City list panel — dark, top-left */}
        <div
          className="absolute top-4 left-4 z-[500] rounded-lg overflow-hidden"
          style={{
            background: "rgba(45, 50, 60, 0.95)",
            backdropFilter: "blur(8px)",
            width: 200,
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          }}
        >
          <div style={{ padding: "16px 20px" }}>
            {cities.map((city, i) => (
              <button
                key={city.name}
                onClick={() => {
                  setActiveCity(city.name);
                  if (mapInstance) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const map = mapInstance as any;
                    map.flyTo([city.lat, city.lng], 8, { duration: 1 });
                    setTimeout(() => {
                      const point = map.latLngToContainerPoint([city.lat, city.lng]);
                      setPopupPos({ x: point.x, y: point.y });
                    }, 1100);
                  }
                }}
                className="w-full text-left cursor-pointer transition-colors flex items-start gap-3"
                style={{ padding: "0", background: "transparent" }}
              >
                {/* Timeline: dot + line */}
                <div className="flex flex-col items-center" style={{ paddingTop: 4 }}>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: activeCity === city.name ? "#D5A58F" : "rgba(255,255,255,0.3)",
                      flexShrink: 0,
                      transition: "background 0.2s",
                    }}
                  />
                  {i < cities.length - 1 && (
                    <span
                      style={{
                        width: 1.5,
                        height: 28,
                        background: "rgba(255,255,255,0.12)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
                {/* City name */}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: activeCity === city.name ? 600 : 400,
                    color: activeCity === city.name ? "#ffffff" : "rgba(255,255,255,0.7)",
                    paddingTop: 1,
                    paddingBottom: i < cities.length - 1 ? 20 : 0,
                    transition: "color 0.2s",
                  }}
                >
                  {city.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Popup card — appears above clicked pin */}
        {selected && popupPos && (
          <div
            className="absolute z-[500] rounded-lg"
            style={{
              left: popupPos.x,
              top: popupPos.y - 50,
              transform: "translate(-50%, -100%)",
              background: "#ffffff",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              minWidth: 200,
            }}
          >
            <div style={{ padding: "16px 20px" }}>
              <h3
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: 22,
                  fontWeight: 400,
                  color: "#404650",
                  marginBottom: 10,
                }}
              >
                {selected.name}
              </h3>
              <Link
                href={selected.href}
                className="btn-pill btn-pill-terra"
                style={{ fontSize: 12, padding: "8px 18px" }}
              >
                Explore →
              </Link>
            </div>
            {/* Arrow pointing down */}
            <div
              style={{
                position: "absolute",
                bottom: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid #ffffff",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
