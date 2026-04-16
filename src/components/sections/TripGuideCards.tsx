import Link from "next/link";

const guides = [
  {
    category: "Road Trips",
    title: "The Silk Road",
    desc: "Xi'an to Kashgar — trace the ancient trade route through terracotta warriors, desert caves, and the cultures of western China.",
    duration: "14-21 days",
    href: "/trip/silk-road",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80",
  },
  {
    category: "Road Trips",
    title: "Yunnan Highway",
    desc: "Kunming to Shangri-La — rice terraces, Tiger Leaping Gorge, ancient Lijiang, and the foothills of the Himalayas.",
    duration: "10-14 days",
    href: "/trip/yunnan-highway",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
  },
  {
    category: "Arts & Culture",
    title: "8 Cultural Celebrations You Can't Miss",
    desc: "From Chinese New Year to the Lantern Festival, experience China's most vibrant cultural traditions firsthand.",
    href: "/experience/culture",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=500&q=80",
  },
  {
    category: "Road Trips",
    title: "Beijing to Shanghai",
    desc: "High-speed rail through China's greatest hits — the Great Wall, Nanjing, Suzhou gardens, and the Bund.",
    duration: "6-10 days",
    href: "/trip/beijing-shanghai",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500&q=80",
  },
  {
    category: "Culinary",
    title: "Must-Try Regional Cuisines",
    desc: "Sichuan, Cantonese, Shandong, Hunan — a food lover's guide to China's eight great culinary traditions.",
    href: "/experience/food",
    img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&q=80",
  },
  {
    category: "Major Events",
    title: "Iconic Festivals Across China",
    desc: "Dragon Boat races, Mid-Autumn mooncakes, Harbin Ice Festival — plan your trip around China's biggest events.",
    href: "/experience/festivals",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80",
  },
  {
    category: "Nature",
    title: "Big Adventures Across China",
    desc: "From trekking Tiger Leaping Gorge to cycling along the Yangtze — the ultimate outdoor adventures.",
    href: "/experience/nature",
    img: "https://images.unsplash.com/photo-1529921879218-f99546d03e27?w=500&q=80",
  },
  {
    category: "Family",
    title: "Amazing Family Experiences",
    desc: "Theme parks, panda bases, river cruises, and hands-on workshops — China has something for every age.",
    href: "/experience/family",
    img: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=500&q=80",
  },
  {
    category: "Road Trips",
    title: "The Tea Horse Road",
    desc: "Follow the ancient tea trading route from Yunnan through Sichuan into Tibet — a journey through time.",
    duration: "12-18 days",
    href: "/trip/tea-horse-road",
    img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&q=80",
  },
];

/* Category badge colors matching visittheusa patterns */
const categoryColors: Record<string, string> = {
  "Road Trips": "#3b82f6",
  "Arts & Culture": "#8b5cf6",
  Culinary: "#ef4444",
  "Major Events": "#f59e0b",
  Nature: "#22c55e",
  Family: "#ec4899",
};

export default function TripGuideCards() {
  return (
    <section
      className="w-full"
      style={{ background: "#f4f2f0", padding: "80px 0" }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: 1400,
          padding: "0 clamp(16px, 4vw, 48px)",
        }}
      >
        {/* Section header */}
        <div className="mb-12">
          <p
            className="text-sm font-bold tracking-[4px] uppercase mb-3"
            style={{ color: "#404650", opacity: 0.5 }}
          >
            Trip Guides
          </p>
          <h2 className="text-section-md" style={{ color: "#404650" }}>
            Plan Your Journey
          </h2>
        </div>

        {/* Card grid — 3 columns, portrait 5:6.7 ratio like visittheusa (500x670) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group block bg-white rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Image — portrait ratio matching visittheusa's 500x670 */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "500/670" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={guide.img}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category badge — top left */}
                <span
                  className="absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide"
                  style={{
                    background: categoryColors[guide.category] || "#404650",
                    color: "#ffffff",
                  }}
                >
                  {guide.category}
                </span>
                {/* Duration badge — top right (if applicable) */}
                {guide.duration && (
                  <span
                    className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      color: "#ffffff",
                    }}
                  >
                    {guide.duration}
                  </span>
                )}
              </div>

              {/* Text content */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold mb-2 leading-snug"
                  style={{ color: "#404650" }}
                >
                  {guide.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 line-clamp-2"
                  style={{ color: "rgba(64,68,80,0.65)" }}
                >
                  {guide.desc}
                </p>
                <span
                  className="text-sm font-bold uppercase tracking-wide transition-colors group-hover:opacity-70"
                  style={{ color: "#D5A58F" }}
                >
                  Read Article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
