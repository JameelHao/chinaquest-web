import Image from "next/image";
import Link from "next/link";
import DestinationHero from "@/components/sections/DestinationHero";
import BeijingIntro from "@/components/sections/BeijingIntro";
import HighlightAccordion from "@/components/sections/HighlightAccordion";

export default function BeijingPage() {
  return (
    <>
      <DestinationHero
        title="Beijing"
        image="/images/hero-great-wall.jpg"
      />

      {/* Intro — title + highlights + cities + map */}
      <BeijingIntro />

      {/* Must-See Attractions — dark bg */}
      <section
        style={{
          background: "rgb(64, 68, 80)",
          padding: "32px 0",
        }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: 1680, padding: "0 48px" }}
        >
          {/* Section title */}
          <div style={{ marginTop: 48 }}>
            <h2
              className="uppercase text-center"
              style={{
                fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                fontSize: "clamp(48px, 7vw, 96px)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: 2,
                marginBottom: 48,
              }}
            >
              Beijing Highlights
            </h2>
          </div>

          {/* Sub-section: Where Emperors Walked — accordion */}
          <HighlightAccordion
            heading="Where Emperors Walked"
            items={[
              {
                title: "Tiananmen Square",
                description: "Stand on the world's largest public square where six centuries of Chinese history converge — the beating heart of a nation of 1.4 billion.",
                href: "/destinations/beijing/beijing/tiananmen-square",
                image: "/images/carousel-3.jpg",
              },
              {
                title: "The Forbidden City",
                description: "Step through the Meridian Gate into 500 years of dynastic secrets. 9,999 rooms of lacquered halls, golden roofs, and whispered intrigue.",
                href: "/destinations/beijing/beijing/forbidden-city",
                image: "/images/carousel-1.jpg",
              },
              {
                title: "Jingshan Park",
                description: "Climb the hill where the last Ming emperor met his end. Watch the sun set over a sea of golden rooftops — the only place to truly see the scale of the palace below.",
                href: "/destinations/beijing/beijing/jingshan-park",
                image: "/images/carousel-2.jpg",
              },
            ]}
          />

          {/* Sub-section: Walk the Dragon's Spine — reversed accordion */}
          <HighlightAccordion
            heading="Walk the Dragon's Spine"
            reverse
            items={[
              {
                title: "Mutianyu Great Wall",
                description: "Climb the dragon that snakes across mountains. Stand on stones older than the United States by two thousand years — and see no end in either direction.",
                href: "/destinations/beijing/huairou/mutianyu",
                image: "/images/carousel-2.jpg",
              },
              {
                title: "Ming Tombs",
                description: "Descend into the Sacred Way, where stone generals and camels have stood guard over 13 emperors for 600 years.",
                href: "/destinations/beijing/changping/ming-tombs",
                image: "/images/carousel-4.jpg",
              },
              {
                title: "Olympic Park by Night",
                description: "Return to the city and watch the Bird's Nest and Water Cube light up — the new Beijing, built in 8 years, now 15 years old.",
                href: "/destinations/beijing/beijing/olympic-park",
                image: "/images/carousel-1.jpg",
              },
            ]}
          />

          {/* Sub-section: Must-Do Experiences */}
          <div style={{ marginBottom: 48 }}>
            <h3
              className="uppercase"
              style={{
                fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: 1,
                marginBottom: 16,
              }}
            >
              Must-Do Experiences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Hutong Walking Tour", href: "/destinations/beijing/beijing/hutong-tour", img: "/images/carousel-4.jpg" },
                { name: "Peking Duck Feast", href: "/destinations/beijing/beijing/peking-duck", img: "/images/carousel-1.jpg" },
                { name: "798 Art District", href: "/destinations/beijing/beijing/798-art", img: "/images/carousel-3.jpg" },
              ].map((exp) => (
                <Link
                  key={exp.name}
                  href={exp.href}
                  className="group relative block overflow-hidden rounded-xl"
                  style={{ aspectRatio: "5/6" }}
                >
                  <Image
                    src={exp.img}
                    alt={exp.name}
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
                    <h4
                      className="uppercase"
                      style={{
                        fontFamily: "'Anton', 'Bebas Neue', sans-serif",
                        fontSize: 24,
                        fontWeight: 900,
                        color: "#ffffff",
                        letterSpacing: 1,
                      }}
                    >
                      {exp.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Essential Information */}
      <section style={{ background: "#f4f2f0", padding: "64px 0" }}>
        <div
          className="mx-auto"
          style={{ maxWidth: 1680, padding: "0 48px" }}
        >
          <h2
            className="uppercase"
            style={{
              fontFamily: "'Anton', 'Bebas Neue', sans-serif",
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 900,
              color: "rgb(64, 68, 80)",
              lineHeight: 1,
              letterSpacing: 2,
              marginBottom: 48,
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
                className="p-6 rounded-xl"
                style={{ background: "#ffffff" }}
              >
                <p
                  className="uppercase mb-3"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(64,68,80,0.5)",
                    letterSpacing: "0.1em",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {info.label}
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "rgb(64, 68, 80)",
                    fontFamily: "'Inter', sans-serif",
                  }}
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
