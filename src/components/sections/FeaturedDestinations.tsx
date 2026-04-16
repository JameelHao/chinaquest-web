import Link from "next/link";

/* 4 landscape destinations at bottom — matching visittheusa's destination showcase */
const destinations = [
  {
    name: "Zhangjiajie",
    region: "Hunan",
    href: "/destinations/hunan/zhangjiajie",
    img: "https://images.unsplash.com/photo-1529921879218-f99546d03e27?w=700&q=80",
  },
  {
    name: "West Lake",
    region: "Hangzhou",
    href: "/destinations/zhejiang/hangzhou",
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
    <section className="w-full" style={{ background: "#ffffff", padding: "80px 0 0" }}>
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
            Destinations
          </p>
          <h2 className="text-section-md" style={{ color: "#404650" }}>
            Places to Explore
          </h2>
        </div>
      </div>

      {/* 4-column landscape grid — edge to edge like visittheusa */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {destinations.map((dest) => (
          <Link
            key={dest.name}
            href={dest.href}
            className="group block relative overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={dest.img}
              alt={dest.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Bottom gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, transparent 100%)",
              }}
            />
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <h3 className="text-lg font-bold text-white mb-0.5">
                {dest.name}
              </h3>
              <p
                className="text-xs font-medium tracking-wide"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {dest.region}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
