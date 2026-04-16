import Link from "next/link";

const categories = [
  {
    label: "Destinations",
    category: "Explore",
    title: "34 Provinces",
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1920&q=80",
  },
  {
    label: "Routes",
    category: "Featured",
    title: "Curated Itineraries",
    href: "/trip",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
  },
  {
    label: "Food & Drink",
    category: "Culinary",
    title: "Chinese Cuisine",
    href: "/experience/food",
    img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=1920&q=80",
  },
  {
    label: "Culture",
    category: "Heritage",
    title: "History & Arts",
    href: "/experience/culture",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80",
  },
  {
    label: "Nature",
    category: "Landscapes",
    title: "Mountains & Rivers",
    href: "/experience/nature",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    label: "Practical",
    category: "Plan",
    title: "Visa & Transport",
    href: "/practical",
    img: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=1920&q=80",
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full" style={{ background: "#404650" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            href={cat.href}
            className="group block relative overflow-hidden"
            style={{ height: "720px" }}
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
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.4)" }}
            />

            {/* Content area — bottom-left aligned */}
            <div
              className="absolute bottom-0 left-0 right-0 p-12"
            >
              {/* Category label */}
              <p
                className="text-sm font-light uppercase tracking-widest mb-3"
                style={{ color: "#ffffff" }}
              >
                {cat.category}
              </p>
              {/* Title */}
              <h2
                className="text-6xl font-black leading-none mb-4"
                style={{ color: "#ffffff" }}
              >
                {cat.title}
              </h2>
              {/* Label */}
              <p
                className="text-base font-light"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {cat.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
