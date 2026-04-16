import Link from "next/link";

const destinations = [
  {
    name: "Beijing",
    desc: "Walk through the Forbidden City, hike the Great Wall, and explore ancient hutong neighborhoods.",
    href: "/destinations/beijing",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500&q=80",
    badge: "Must Visit",
  },
  {
    name: "Shanghai",
    desc: "Where futuristic skyscrapers meet colonial-era waterfront architecture on the Bund.",
    href: "/destinations/shanghai",
    img: "https://images.unsplash.com/photo-1537531383496-f4749dc67eee?w=500&q=80",
    badge: "Top City",
  },
  {
    name: "Xi'an",
    desc: "Home of the Terracotta Army, the ancient city wall, and the vibrant Muslim Quarter.",
    href: "/destinations/xian",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=500&q=80",
    badge: "Heritage",
  },
  {
    name: "Chengdu",
    desc: "Meet giant pandas, feast on Sichuan hotpot, and sip tea in centuries-old teahouses.",
    href: "/destinations/sichuan/chengdu",
    img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&q=80",
    badge: "Wildlife",
  },
  {
    name: "Guilin",
    desc: "Cruise the Li River through otherworldly karst peaks — one of Earth's most iconic landscapes.",
    href: "/destinations/guangxi/guilin",
    img: "https://images.unsplash.com/photo-1529921879218-f99546d03e27?w=500&q=80",
    badge: "Nature",
  },
  {
    name: "Hangzhou",
    desc: "West Lake, silk markets, Longjing tea plantations — Marco Polo's 'finest city in the world'.",
    href: "/destinations/zhejiang/hangzhou",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
    badge: "Classic",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="w-full" style={{ background: "#f4f2f0", padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }}>
        {/* Section header */}
        <div className="mb-12">
          <p
            className="text-sm font-bold tracking-[4px] uppercase mb-3"
            style={{ color: "#404650", opacity: 0.5 }}
          >
            Featured Destinations
          </p>
          <h2 className="text-section-md" style={{ color: "#404650" }}>
            Popular Places
          </h2>
        </div>

        {/* Cards — portrait 3:4 ratio like visittheusa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="group block relative overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={dest.img}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                }}
              />
              {/* Badge */}
              <span
                className="absolute top-4 left-4 z-10 text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: "#37cd8f", color: "#ffffff" }}
              >
                {dest.badge}
              </span>
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">
                  {dest.name}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed line-clamp-2">
                  {dest.desc}
                </p>
              </div>
              {/* Hover effect — subtle shadow lift */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.2)" }}
              />
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 text-center">
          <Link href="/destinations" className="btn-pill btn-pill-dark">
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
