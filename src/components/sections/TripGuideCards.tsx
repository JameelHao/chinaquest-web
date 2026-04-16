import Link from "next/link";

/* ── visittheusa: 9 article cards in 3-col grid
   Each card: portrait image (500x670) + category badge + title + desc + "Read Article"
   Some have duration badge (6-12 days, 14-21 days)
── */

const guides = [
  {
    category: "Major Events",
    title: "Your Guide to China's Top Festival Cities",
    desc: "Make plans now to explore these exciting host destinations and beyond.",
    href: "/trip/festival-cities",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=500&q=80",
  },
  {
    category: "Road Trips",
    title: "Silk Road: Ancient Trade Routes and Desert Adventures",
    desc: "Discover an epic journey through Xi'an, Dunhuang, Turpan and Kashgar along the ancient trade route.",
    duration: "14-21 days",
    href: "/trip/silk-road",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80",
  },
  {
    category: "Arts & Culture",
    title: "Entertainment Epicenters Across China",
    desc: "Experience some of the country's best theater, music, family fun and nightlife at these hot spots.",
    href: "/trip/entertainment-epicenters",
    img: "https://images.unsplash.com/photo-1537531383496-f4749dc67eee?w=500&q=80",
  },
  {
    category: "Road Trips",
    title: "Explore the Heart of China on the Yunnan Highway",
    desc: "Enjoy the journey from Kunming to Shangri-La on this iconic road trip through southwest China.",
    duration: "10-14 days",
    href: "/trip/yunnan-highway",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
  },
  {
    category: "Arts & Culture",
    title: "8 Cultural Celebrations That Capture the Spirit of China",
    desc: "Take a coast-to-coast journey through this heritage-filled festival roadmap.",
    href: "/trip/cultural-celebrations",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80",
  },
  {
    category: "Arts & Culture",
    title: "Must-See Music Festivals in China",
    desc: "Discover some of the top music festivals in China for dancing to the rhythms that move you.",
    href: "/trip/music-festivals",
    img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&q=80",
  },
  {
    category: "Major Events",
    title: "Iconic Sporting Events of China",
    desc: "From racing circuits to roaring stadiums, witness China's passion for sports throughout the country.",
    href: "/trip/sporting-events",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500&q=80",
  },
  {
    category: "Family",
    title: "Amazing Family Experiences Across China",
    desc: "Discover the many fun ways for families to reconnect and create unforgettable memories.",
    href: "/trip/family-experiences",
    img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&q=80",
  },
  {
    category: "Nature",
    title: "Big Adventures Across China",
    desc: "If you're seeking wide-open spaces and a little adrenaline, these bucket-list experiences deliver both.",
    href: "/trip/big-adventures",
    img: "https://images.unsplash.com/photo-1529921879218-f99546d03e27?w=500&q=80",
  },
];

const catColor: Record<string, string> = {
  "Road Trips": "#2563eb",
  "Arts & Culture": "#7c3aed",
  "Major Events": "#dc2626",
  Family: "#db2777",
  Nature: "#16a34a",
};

export default function TripGuideCards() {
  return (
    <section className="w-full" style={{ background: "#f4f2f0", padding: "80px 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1400, padding: "0 clamp(16px, 4vw, 48px)" }}>
        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((g) => (
            <Link key={g.title} href={g.href}
              className="group block bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg">
              {/* Image — portrait 500:670 matching visittheusa */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "500/670" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.img} alt={g.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Category badge */}
                <span className="absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-sm uppercase tracking-wide"
                  style={{ background: catColor[g.category] || "#404650", color: "#fff" }}>
                  {g.category}
                </span>
                {/* Duration badge */}
                {g.duration && (
                  <span className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-sm"
                    style={{ background: "rgba(0,0,0,0.6)", color: "#fff" }}>
                    {g.duration}
                  </span>
                )}
              </div>
              {/* Text */}
              <div className="p-5">
                <h3 className="text-base font-bold mb-2 leading-snug" style={{ color: "#404650" }}>
                  {g.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "rgba(64,68,80,0.55)" }}>
                  {g.desc}
                </p>
                <span className="text-sm font-bold uppercase tracking-wide group-hover:opacity-70 transition-opacity"
                  style={{ color: "#D5A58F" }}>
                  Read Article
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
