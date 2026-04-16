import Link from "next/link";

const categories = [
  {
    index: "01",
    label: "Destinations",
    title: "34 Provinces",
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
  },
  {
    index: "02",
    label: "Routes",
    title: "Curated Itineraries",
    href: "/trip",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
  },
  {
    index: "03",
    label: "Experiences",
    title: "Themed Journeys",
    href: "/experience",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    index: "04",
    label: "Food & Drink",
    title: "Culinary Adventures",
    href: "/experience/food",
    img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80",
  },
  {
    index: "05",
    label: "Culture",
    title: "Heritage & Arts",
    href: "/experience/culture",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    index: "06",
    label: "Practical",
    title: "Visa & Transport",
    href: "/practical",
    img: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=800&q=80",
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full" style={{ background: "#404650" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {categories.map((cat) => (
          <Link
            key={cat.index}
            href={cat.href}
            className="group relative overflow-hidden block"
            style={{ height: "400px" }}
          >
            {/* Background Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cat.img}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div
              className="absolute inset-0 transition-opacity group-hover:opacity-80"
              style={{ background: "rgba(0,0,0,0.45)" }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <span
                className="text-xs font-normal tracking-widest uppercase mb-2"
                style={{ color: "#d5d5d8" }}
              >
                {cat.index}/06
              </span>
              <p
                className="text-sm font-light uppercase tracking-wide mb-1"
                style={{ color: "#ffffff" }}
              >
                {cat.label}
              </p>
              <h2
                className="text-2xl font-black leading-tight"
                style={{ color: "#ffffff" }}
              >
                {cat.title}
              </h2>
              <span
                className="mt-3 text-sm font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "#ffffff" }}
              >
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
