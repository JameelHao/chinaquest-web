import Image from "next/image";
import Link from "next/link";
import DestinationHero from "@/components/sections/DestinationHero";

const beijingCities = [
  {
    name: "Beijing",
    slug: "beijing",
    description: "The capital — ancient temples, modern skylines, and everything in between.",
    image: "/images/carousel-1.jpg",
  },
  {
    name: "Yanqing",
    slug: "yanqing",
    description: "Mountains, wild scenery and the iconic Badaling section of the Great Wall.",
    image: "/images/carousel-2.jpg",
  },
  {
    name: "Miyun",
    slug: "miyun",
    description: "Gubei Water Town and unspoiled natural landscapes northeast of the capital.",
    image: "/images/carousel-3.jpg",
  },
  {
    name: "Huairou",
    slug: "huairou",
    description: "Mutianyu and Jinshanling — the most beautiful Great Wall sections.",
    image: "/images/carousel-4.jpg",
  },
];

export default function BeijingPage() {
  return (
    <>
      <DestinationHero
        title="Beijing"
        subtitle="Where 2,000 years of imperial history meet a buzzing modern capital"
        image="/images/hero-great-wall.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: "Beijing", href: "/destinations/beijing" },
        ]}
      />

      {/* Cities section */}
      <section className="py-16 px-6 lg:px-[50px]">
        <div className="max-w-[1400px] mx-auto">
          {/* Section label */}
          <p
            className="uppercase tracking-[3px] mb-6"
            style={{ fontSize: 12, fontWeight: 600, color: "#9a9696", fontFamily: "'Inter', sans-serif" }}
          >
            01 / EXPLORE
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
            Cities & Districts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beijingCities.map((city) => (
              <Link
                key={city.slug}
                href={`/destinations/beijing/${city.slug}`}
                className="group block rounded-xl overflow-hidden"
                style={{ background: "#f7f7f5" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="uppercase"
                    style={{
                      fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                      fontSize: 22,
                      fontWeight: 400,
                      color: "#2d3142",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {city.name}
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: "#6b6565",
                    }}
                  >
                    {city.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notables section */}
      <section className="py-16 px-6 lg:px-[50px]" style={{ background: "#f0efed" }}>
        <div className="max-w-[1400px] mx-auto">
          <p
            className="uppercase tracking-[3px] mb-6"
            style={{ fontSize: 12, fontWeight: 600, color: "#9a9696", fontFamily: "'Inter', sans-serif" }}
          >
            02 / HIGHLIGHTS
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
            Must-See Attractions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Forbidden City", href: "/destinations/beijing/beijing/forbidden-city", img: "/images/carousel-1.jpg" },
              { name: "Great Wall", href: "/destinations/beijing/yanqing/badaling", img: "/images/carousel-2.jpg" },
              { name: "Tiananmen Square", href: "/destinations/beijing/beijing/tiananmen-square", img: "/images/carousel-3.jpg" },
            ].map((poi) => (
              <Link
                key={poi.name}
                href={poi.href}
                className="group relative block overflow-hidden rounded-xl"
                style={{ aspectRatio: "5/6" }}
              >
                <Image
                  src={poi.img}
                  alt={poi.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="uppercase"
                    style={{
                      fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                      fontSize: 24,
                      fontWeight: 400,
                      color: "#ffffff",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {poi.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practical info teaser */}
      <section className="py-16 px-6 lg:px-[50px]">
        <div className="max-w-[1400px] mx-auto">
          <p
            className="uppercase tracking-[3px] mb-6"
            style={{ fontSize: 12, fontWeight: 600, color: "#9a9696", fontFamily: "'Inter', sans-serif" }}
          >
            03 / PLAN
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
            Essential Information
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Best Time to Visit", value: "Mar – May, Sep – Oct" },
              { label: "Getting There", value: "PEK & PKX airports" },
              { label: "Metro System", value: "27 lines, 800+ stations" },
              { label: "Avg. Trip Length", value: "4 – 6 days" },
            ].map((info) => (
              <div
                key={info.label}
                className="p-5 rounded-xl"
                style={{ background: "#f7f7f5" }}
              >
                <p
                  className="uppercase mb-2"
                  style={{ fontSize: 11, fontWeight: 600, color: "#9a9696", letterSpacing: "0.1em" }}
                >
                  {info.label}
                </p>
                <p
                  style={{ fontSize: 15, fontWeight: 500, color: "#2d3142", fontFamily: "'Inter', sans-serif" }}
                >
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
