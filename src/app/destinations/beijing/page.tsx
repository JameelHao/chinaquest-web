import Image from "next/image";
import Link from "next/link";
import DestinationHero from "@/components/sections/DestinationHero";
import BeijingIntro from "@/components/sections/BeijingIntro";
import HighlightAccordion from "@/components/sections/HighlightAccordion";
import TripIdeasSlider from "@/components/sections/TripIdeasSlider";
import ExploreNearby from "@/components/sections/ExploreNearby";
import ExperiencesPanel from "@/components/sections/ExperiencesPanel";

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

          {/* Sub-section: The Living City — accordion, image left */}
          <HighlightAccordion
            heading="The Living City"
            items={[
              {
                title: "Temple of Heaven",
                description: "Arrive at dawn. Find Beijing's grandparents practicing tai chi beneath ancient cypresses — the ritual of the Son of Heaven, quietly alive.",
                href: "/destinations/beijing/beijing/temple-of-heaven",
                image: "/images/carousel-3.jpg",
              },
              {
                title: "Hutong & Houhai",
                description: "Get lost in Beijing's last medieval neighborhoods. Cycle past courtyard homes, stop for a bowl of zhajiangmian, and emerge at a lake where locals still swim in winter.",
                href: "/destinations/beijing/beijing/hutong-houhai",
                image: "/images/carousel-4.jpg",
              },
              {
                title: "Peking Duck Dinner",
                description: "End the day the only way Beijing ends a day — with a crispy lacquered bird, sliced tableside, wrapped in a paper-thin pancake.",
                href: "/destinations/beijing/beijing/peking-duck",
                image: "/images/carousel-1.jpg",
              },
            ]}
          />

          {/* Sub-section: An Empress's Playground — reversed */}
          <HighlightAccordion
            heading="An Empress's Playground"
            reverse
            items={[
              {
                title: "Summer Palace",
                description: "Cixi spent the navy's budget building a marble boat that cannot sail. Whatever you think of her, she had taste — Kunming Lake is Beijing's most beautiful lie.",
                href: "/destinations/beijing/beijing/summer-palace",
                image: "/images/carousel-4.jpg",
              },
              {
                title: "Yuanmingyuan (Old Summer Palace)",
                description: "Walk the ruins of \"the Versailles of the East\" — burned in 1860, deliberately left in pieces, a national wound frozen in marble.",
                href: "/destinations/beijing/beijing/yuanmingyuan",
                image: "/images/carousel-2.jpg",
              },
              {
                title: "798 Art District",
                description: "From Mao-era munitions factories to China's most electric contemporary art scene — Beijing's answer to Berlin, painted in rebellion.",
                href: "/destinations/beijing/beijing/798-art",
                image: "/images/carousel-3.jpg",
              },
            ]}
          />

        </div>
      </section>

      {/* Experiences — full-width hero image + floating panel card */}
      <ExperiencesPanel />

      {/* Trip Ideas — left text + right card slider */}
      <TripIdeasSlider
        description="Browse articles featuring the best of Beijing from imperial landmarks to hidden local gems."
        items={[
          { title: "Through the Vermilion Gates: A Day Inside the Forbidden City", href: "/trip/forbidden-city-day", image: "/images/trip-1.jpg" },
          { title: "Sunrise on the Great Wall: Mutianyu to Jinshanling Trek", href: "/trip/great-wall-trek", image: "/images/trip-2.jpg" },
          { title: "Temple of Heaven in Snow: Beijing's Most Beautiful Season", href: "/trip/temple-heaven-winter", image: "/images/trip-3.jpg" },
          { title: "Golden Hour at the Summer Palace: Kunming Lake by Boat", href: "/trip/summer-palace-boat", image: "/images/trip-4.jpg" },
          { title: "Guardian of the Empire: Discovering Beijing's Stone Sentinels", href: "/trip/stone-lions", image: "/images/trip-5.jpg" },
        ]}
      />

      {/* Explore Nearby */}
      <ExploreNearby />
    </>
  );
}
