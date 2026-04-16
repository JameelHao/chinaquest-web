import Link from "next/link";

/* ── visittheusa: 4 landscape destination images, edge-to-edge row
   Each has location name + region overlaid at bottom
   Destinations: Silver Falls OR, Zion UT, Traverse City MI, Miami Beach FL
── */

const destinations = [
  {
    name: "Zhangjiajie National Forest Park",
    region: "Hunan",
    href: "/destinations/hunan/zhangjiajie",
    img: "https://images.unsplash.com/photo-1529921879218-f99546d03e27?w=700&q=80",
  },
  {
    name: "Jiuzhaigou Valley",
    region: "Sichuan",
    href: "/destinations/sichuan/jiuzhaigou",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
  },
  {
    name: "Li River",
    region: "Guilin",
    href: "/destinations/guangxi/guilin",
    img: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=700&q=80",
  },
  {
    name: "The Bund",
    region: "Shanghai",
    href: "/destinations/shanghai",
    img: "https://images.unsplash.com/photo-1537531383496-f4749dc67eee?w=700&q=80",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="w-full" style={{ background: "#ffffff" }}>
      {/* Edge-to-edge 4-column grid, no container padding */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {destinations.map((d) => (
          <Link key={d.name} href={d.href}
            className="group block relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={d.img} alt={d.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <p className="text-sm font-bold text-white leading-snug">{d.name}</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>{d.region}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
