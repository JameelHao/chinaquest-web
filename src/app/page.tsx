import HeroSection from "@/components/sections/HeroSection";
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
      <HeroCarousel />
      <SocialFollow />
      <ExploreMap />
      <TripGuideCards />
      <FeaturedDestinations />
      <FAQSection />
    </>
  );
}
