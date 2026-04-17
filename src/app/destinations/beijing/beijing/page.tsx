import Image from "next/image";
import Link from "next/link";
import DestinationHero from "@/components/sections/DestinationHero";

const beijingPois = [
  {
    name: "Forbidden City",
    slug: "forbidden-city",
    description: "600 years of imperial palace history — 9,999 rooms, endless stories.",
    image: "/images/carousel-1.jpg",
    category: "Heritage",
  },
  {
    name: "Tiananmen Square",
    slug: "tiananmen-square",
    description: "The world's largest public square, heart of the Chinese nation.",
    image: "/images/carousel-2.jpg",
    category: "Landmark",
  },
  {
    name: "Jingshan Park",
    slug: "jingshan-park",
    description: "The best panoramic view of the Forbidden City from atop Coal Hill.",
    image: "/images/carousel-3.jpg",
    category: "Park",
  },
  {
    name: "Temple of Heaven",
    slug: "temple-of-heaven",
    description: "Where emperors prayed for bumper harvests — supreme Ming architecture.",
    image: "/images/carousel-4.jpg",
    category: "Heritage",
  },
];

export default function BeijingCityPage() {
  return (
    <>
      <DestinationHero
        title="Beijing"
        image="/images/carousel-1.jpg"
      />

      {/* POI grid */}
      <section className="py-16 px-6 lg:px-[50px]">
        <div className="max-w-[1400px] mx-auto">
          <p
            className="uppercase tracking-[3px] mb-6"
            style={{ fontSize: 12, fontWeight: 600, color: "#9a9696", fontFamily: "'Inter', sans-serif" }}
          >
            01 / ATTRACTIONS
          </p>

          <h2
            className="uppercase mb-10"
            style={{
              fontFamily: "'Anton', 'Bebas Neue', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400,
              color: "#2d3142",
              lineHeight: 1,
            }}
          >
            Top Attractions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beijingPois.map((poi) => (
              <Link
                key={poi.slug}
                href={`/destinations/beijing/beijing/${poi.slug}`}
                className="group block rounded-xl overflow-hidden"
                style={{ background: "#f7f7f5" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={poi.image}
                    alt={poi.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span
                    className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide"
                    style={{ background: "rgba(0,0,0,0.55)", color: "#fff", fontSize: 10 }}
                  >
                    {poi.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    className="uppercase"
                    style={{
                      fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                      fontSize: 20,
                      fontWeight: 400,
                      color: "#2d3142",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {poi.name}
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: "#6b6565",
                    }}
                  >
                    {poi.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences teaser */}
      <section className="py-16 px-6 lg:px-[50px]" style={{ background: "#f0efed" }}>
        <div className="max-w-[1400px] mx-auto">
          <p
            className="uppercase tracking-[3px] mb-6"
            style={{ fontSize: 12, fontWeight: 600, color: "#9a9696", fontFamily: "'Inter', sans-serif" }}
          >
            02 / EXPERIENCES
          </p>

          <h2
            className="uppercase mb-8"
            style={{
              fontFamily: "'Anton', 'Bebas Neue', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400,
              color: "#2d3142",
              lineHeight: 1,
            }}
          >
            How to Experience Beijing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Hutong Life", desc: "Cycle through narrow alleyways, visit traditional courtyard homes, and sip tea with locals.", img: "/images/carousel-3.jpg" },
              { title: "Peking Duck", desc: "Savor the iconic dish at its birthplace — Quanjude or Da Dong for the full ritual.", img: "/images/carousel-4.jpg" },
              { title: "Night Views", desc: "Watch the city illuminate from the rooftop bars of Wangfujing or the CPC Party School.", img: "/images/xian.jpg" },
            ].map((exp) => (
              <div
                key={exp.title}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={exp.img}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.8) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="uppercase"
                    style={{
                      fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                      fontSize: 22,
                      fontWeight: 400,
                      color: "#ffffff",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
