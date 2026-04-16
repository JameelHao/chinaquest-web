"use client";

import { useState } from "react";
import Link from "next/link";

const regions = [
  {
    name: "North China",
    provinces: ["Beijing", "Tianjin", "Hebei", "Shanxi", "Inner Mongolia"],
    href: "/destinations?region=north",
  },
  {
    name: "East China",
    provinces: ["Shanghai", "Jiangsu", "Zhejiang", "Anhui", "Fujian", "Shandong"],
    href: "/destinations?region=east",
  },
  {
    name: "South China",
    provinces: ["Guangdong", "Guangxi", "Hainan"],
    href: "/destinations?region=south",
  },
  {
    name: "Central China",
    provinces: ["Henan", "Hubei", "Hunan", "Jiangxi"],
    href: "/destinations?region=central",
  },
  {
    name: "Southwest",
    provinces: ["Sichuan", "Yunnan", "Guizhou", "Tibet", "Chongqing"],
    href: "/destinations?region=southwest",
  },
  {
    name: "Northwest",
    provinces: ["Shaanxi", "Gansu", "Qinghai", "Ningxia", "Xinjiang"],
    href: "/destinations?region=northwest",
  },
  {
    name: "Northeast",
    provinces: ["Liaoning", "Jilin", "Heilongjiang"],
    href: "/destinations?region=northeast",
  },
];

const tabs = ["Regions", "Provinces", "Special Regions"] as const;
type Tab = (typeof tabs)[number];

const specialRegions = [
  "Hong Kong", "Macau", "Taiwan",
];

const allProvinces = regions.flatMap((r) => r.provinces).sort();

export default function ExploreMap() {
  const [activeTab, setActiveTab] = useState<Tab>("Regions");
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <section
      className="w-full"
      style={{ background: "#ffffff", padding: "80px 0" }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: 1400,
          padding: "0 clamp(16px, 4vw, 48px)",
        }}
      >
        {/* Section header */}
        <div className="mb-10">
          <p
            className="text-sm font-bold tracking-[4px] uppercase mb-3"
            style={{ color: "#404650", opacity: 0.5 }}
          >
            Explore China
          </p>
          <h2 className="text-section-md" style={{ color: "#404650" }}>
            Discover Every Region
          </h2>
        </div>

        {/* Tabs — matching visittheusa's Regions / States / Territories */}
        <div
          className="flex items-center gap-0 mb-10"
          style={{ borderBottom: "2px solid #e5e5e5" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-6 py-3 text-sm font-bold tracking-wide uppercase transition-colors relative cursor-pointer"
              style={{
                color: activeTab === tab ? "#404650" : "rgba(64,68,80,0.4)",
                borderBottom:
                  activeTab === tab ? "2px solid #404650" : "2px solid transparent",
                marginBottom: -2,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "Regions" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-2">
            {regions.map((region) => (
              <div key={region.name} className="mb-6">
                <Link
                  href={region.href}
                  className="block text-lg font-black uppercase tracking-wide mb-2 transition-colors hover:opacity-70"
                  style={{ color: "#404650" }}
                  onMouseEnter={() => setHoveredRegion(region.name)}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  {region.name}
                  {hoveredRegion === region.name && (
                    <span className="ml-2 text-sm" style={{ color: "#D5A58F" }}>
                      &rarr;
                    </span>
                  )}
                </Link>
                <div className="flex flex-col gap-0.5">
                  {region.provinces.map((prov) => (
                    <Link
                      key={prov}
                      href={`/destinations/${prov.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: "rgba(64,68,80,0.6)" }}
                    >
                      {prov}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Provinces" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-2">
            {allProvinces.map((prov) => (
              <Link
                key={prov}
                href={`/destinations/${prov.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm py-1 transition-colors hover:opacity-70"
                style={{ color: "#404650" }}
              >
                {prov}
              </Link>
            ))}
          </div>
        )}

        {activeTab === "Special Regions" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2">
            {specialRegions.map((sr) => (
              <Link
                key={sr}
                href={`/destinations/${sr.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-lg font-black uppercase tracking-wide transition-colors hover:opacity-70 py-2"
                style={{ color: "#404650" }}
              >
                {sr}
              </Link>
            ))}
          </div>
        )}

        {/* Airports callout — matching visittheusa */}
        <div
          className="mt-10 pt-6 flex items-center gap-3"
          style={{ borderTop: "1px solid #e5e5e5" }}
        >
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: "#D5A58F", color: "#404650" }}
          >
            ✈
          </span>
          <Link
            href="/practical/transport"
            className="text-sm font-bold transition-colors hover:opacity-70"
            style={{ color: "#404650" }}
          >
            Major International Airports
          </Link>
        </div>
      </div>
    </section>
  );
}
