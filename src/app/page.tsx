/* ── visittheusa.com section order:
   1. Hero (100vh image)
   2. Tagline + CTA (white bg)
   3. Carousel (full-width, 6 slides)
   4. Social Follow
   5. Explore Map (tabs)
   6. Trip Guide Cards (9 cards, 3-col)
   7. Featured Destinations (4 landscape images)
   8. FAQ (Visa & Entry)
── */

import HeroSection from "@/components/sections/HeroSection";
import TaglineSection from "@/components/sections/TaglineSection";
import HeroCarousel from "@/components/sections/HeroCarousel";
import SocialFollow from "@/components/sections/SocialFollow";
import ExploreMap from "@/components/sections/ExploreMap";
import TripGuideCards from "@/components/sections/TripGuideCards";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TaglineSection />
      <HeroCarousel />
      <SocialFollow />
      <ExploreMap />
      <TripGuideCards />
      <FeaturedDestinations />
      <FAQSection />
    </>
  );
}
