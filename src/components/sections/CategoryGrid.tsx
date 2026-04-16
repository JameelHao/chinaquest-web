import Link from "next/link";

const categories = [
  {
    category: "EXPLORE",
    title: "Destinations",
    label: "34 Provinces · 500+ Attractions",
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=960&q=80",
  },
  {
    category: "CULINARY",
    title: "Food & Drink",
    label: "Eight Great Cuisines",
    href: "/experience/food",
    img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=960&q=80",
  },
  {
    category: "HERITAGE",
    title: "Culture",
    label: "5,000 Years of History",
    href: "/experience/culture",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=960&q=80",
  },
  {
    category: "LANDSCAPES",
    title: "Nature",
    label: "Mountains · Rivers · Deserts",
    href: "/experience/nature",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=960&q=80",
  },
  {
    category: "ROAD TRIPS",
    title: "Routes",
    label: "Curated Itineraries",
    href: "/trip",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=960&q=80",
  },
  {
    category: "PLAN",
    title: "Practical",
    label: "Visa · Transport · Tips",
    href: "/practical",
    img: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=960&q=80",
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full" style={{ background: "#404650" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="group block relative overflow-hidden"
            style={{ height: 720 }}
          >
            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cat.img}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Bottom gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
              }}
            />

            {/* Content — bottom left */}
            <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
              <p className="text-category mb-3" style={{ color: "#ffffff", fontSize: 18, letterSpacing: 3 }}>
                {cat.category}
              </p>
              <h2 className="text-section-lg mb-4" style={{ color: "#ffffff", fontSize: "clamp(2rem, 5vw, 72px)" }}>
                {cat.title}
              </h2>
              <p className="text-base font-light mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
                {cat.label}
              </p>
              <span className="btn-pill btn-pill-terra">
                Discover
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
