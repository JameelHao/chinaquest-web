"use client";

import { useState } from "react";
import Link from "next/link";

/* ── visittheusa structure:
   Heading: "Your Dream Trip Starts Now"
   Subtext: "Click the pins below..."
   Tabs: Regions | States | U.S. Territories
   Regions: Northeast, Southeast, Midwest, Southwest, West, Pacific
   Footer: "Major International Airports"
── */

const regions = [
  { name: "North China", href: "/destinations?region=north" },
  { name: "East China", href: "/destinations?region=east" },
  { name: "South China", href: "/destinations?region=south" },
  { name: "Central China", href: "/destinations?region=central" },
  { name: "Southwest", href: "/destinations?region=southwest" },
  { name: "Northwest", href: "/destinations?region=northwest" },
  { name: "Northeast", href: "/destinations?region=northeast" },
];

const provinces = [
  "Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong",
  "Guangxi", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan",
  "Hubei", "Hunan", "Inner Mongolia", "Jiangsu", "Jiangxi", "Jilin",
  "Liaoning", "Ningxia", "Qinghai", "Shaanxi", "Shandong", "Shanghai",
  "Shanxi", "Sichuan", "Tianjin", "Tibet", "Xinjiang", "Yunnan", "Zhejiang",
];

const specialRegions = ["Hong Kong", "Macau", "Taiwan"];

type Tab = "Regions" | "Provinces" | "Special Regions";

export default function ExploreMap() {
  const [tab, setTab] = useState<Tab>("Regions");
  const tabs: Tab[] = ["Regions", "Provinces", "Special Regions"];

  return (
    <section className="w-full" style={{ background: "#ffffff", padding: "80px 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1400, padding: "0 clamp(16px, 4vw, 48px)" }}>
        {/* Header — matching visittheusa */}
        <h2 className="font-black uppercase tracking-wide mb-3"
          style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#404650", lineHeight: 1.15 }}>
          Your Dream Trip Starts Now
        </h2>
        <p className="mb-10" style={{ fontSize: 16, color: "rgba(64,68,80,0.6)", maxWidth: 600 }}>
          Click the regions below to see what makes each area stand out and start mapping your own unique trip.
        </p>

        {/* Tabs — visittheusa: Regions | States | U.S. Territories */}
        <div className="flex items-center gap-0 mb-10" style={{ borderBottom: "2px solid #e5e5e5" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className="px-5 py-3 text-sm font-bold tracking-wide uppercase transition-colors cursor-pointer"
              style={{
                color: tab === t ? "#404650" : "rgba(64,68,80,0.35)",
                borderBottom: tab === t ? "2px solid #404650" : "2px solid transparent",
                marginBottom: -2,
              }}>
              {t}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === "Regions" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {regions.map((r) => (
              <Link key={r.name} href={r.href}
                className="block text-lg font-bold transition-colors hover:opacity-60 py-2"
                style={{ color: "#404650" }}>
                {r.name}
              </Link>
            ))}
          </div>
        )}

        {tab === "Provinces" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-1">
            {provinces.map((p) => (
              <Link key={p} href={`/destinations/${p.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm py-1.5 transition-colors hover:opacity-60"
                style={{ color: "#404650" }}>
                {p}
              </Link>
            ))}
          </div>
        )}

        {tab === "Special Regions" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {specialRegions.map((s) => (
              <Link key={s} href={`/destinations/${s.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-lg font-bold transition-colors hover:opacity-60 py-2"
                style={{ color: "#404650" }}>
                {s}
              </Link>
            ))}
          </div>
        )}

        {/* Airports — matching visittheusa */}
        <div className="mt-10 pt-6 flex items-center gap-3" style={{ borderTop: "1px solid #e5e5e5" }}>
          <span className="text-lg">✈️</span>
          <Link href="/practical/transport" className="text-sm font-bold hover:opacity-60 transition-colors"
            style={{ color: "#404650" }}>
            Major International Airports
          </Link>
        </div>
      </div>
    </section>
  );
}
