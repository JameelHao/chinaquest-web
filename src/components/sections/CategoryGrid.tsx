import Link from "next/link";

const categories = [
  {
    label: "34 Provinces",
    category: "Explore",
    title: "Destinations",
    subtitle: "AMERICAN ORIGINALS",
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1920&q=80",
  },
  {
    label: "Curated Itineraries",
    category: "Featured",
    title: "Routes",
    subtitle: "ROAD TRIPS",
    href: "/trip",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
  },
  {
    label: "Chinese Cuisine",
    category: "Culinary",
    title: "Food & Drink",
    subtitle: "CULINARY",
    href: "/experience/food",
    img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=1920&q=80",
  },
  {
    label: "History & Arts",
    category: "Heritage",
    title: "Culture",
    subtitle: "HERITAGE",
    href: "/experience/culture",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80",
  },
  {
    label: "Mountains & Rivers",
    category: "Landscapes",
    title: "Nature",
    subtitle: "LANDSCAPES",
    href: "/experience/nature",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    label: "Visa & Transport",
    category: "Plan",
    title: "Practical",
    subtitle: "PLAN",
    href: "/practical",
    img: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=1920&q=80",
  },
];

export default function CategoryGrid() {
  return (
    <section
      className="w-full"
      style={{ background: "#404650" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            href={cat.href}
            className="group block relative overflow-hidden"
            style={{ height: 720 }}
          >
            {/* Background Image — full bleed, object-fit cover */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cat.img}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Card Content — bottom-left aligned, no overlay needed */}
            <div
              className="absolute bottom-0 left-0 right-0 p-12"
              style={{ zIndex: 10 }}
            >
              {/* Category subtitle — 24px, letter-spaced */}
              <p
                className="text-category-label mb-3"
                style={{ color: "#ffffff" }}
              >
                {cat.subtitle}
              </p>

              {/* H2 Title — 96px bold white uppercase */}
              <h2
                className="text-section-dark"
                style={{
                  color: "#ffffff",
                  marginBottom: 32,
                  lineHeight: 1,
                }}
              >
                {cat.title}
              </h2>

              {/* Label */}
              <p
                className="text-lg font-light"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {cat.label}
              </p>

              {/* CTA — pill button */}
              <span className="btn-cta mt-6">
                Discover
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
