import Link from "next/link";

const destinations = [
  {
    name: "Beijing",
    subtitle: "Capital · 21M",
    desc: "Forbidden City, Great Wall, Tiananmen Square",
    href: "/destinations/beijing",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80",
    badge: "Must Visit",
  },
  {
    name: "Shanghai",
    subtitle: "Mega City · 24M",
    desc: "The Bund, Yu Garden, Oriental Pearl",
    href: "/destinations/shanghai",
    img: "https://images.unsplash.com/photo-1537531383496-f4749dc67eee?w=600&q=80",
    badge: "Top City",
  },
  {
    name: "Xi'an",
    subtitle: "Ancient Capital",
    desc: "Terracotta Army, City Wall, Muslim Quarter",
    href: "/destinations/xian",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=80",
    badge: "Heritage",
  },
  {
    name: "Chengdu",
    subtitle: "Sichuan Province",
    desc: "Giant Pandas, Sichuan Cuisine, Leshan Giant Buddha",
    href: "/destinations/sichuan",
    img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80",
    badge: "Wildlife",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="w-full py-16 px-8" style={{ background: "#f4f2f0" }}>
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p
            className="text-sm font-normal tracking-widest uppercase mb-2"
            style={{ color: "#404650" }}
          >
            Featured Destinations
          </p>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ color: "#404650", lineHeight: 1.1 }}
          >
            Popular Places
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="group block rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "#ffffff",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badge */}
                <span
                  className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded"
                  style={{ background: "#37cd8f", color: "#ffffff" }}
                >
                  {dest.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-black mb-1" style={{ color: "#404650" }}>
                  {dest.name}
                </h3>
                <p className="text-sm font-light mb-2" style={{ color: "#718096" }}>
                  {dest.subtitle}
                </p>
                <p className="text-sm font-normal leading-relaxed" style={{ color: "#404650" }}>
                  {dest.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-base font-bold transition-opacity hover:opacity-70"
            style={{ color: "#404650" }}
          >
            View All Destinations →
          </Link>
        </div>
      </div>
    </section>
  );
}
