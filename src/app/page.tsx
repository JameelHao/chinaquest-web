import HeroSection from "@/components/sections/HeroSection";
import HeroCarousel from "@/components/sections/HeroCarousel";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import CategoryGrid from "@/components/sections/CategoryGrid";
import RouteHighlight from "@/components/sections/RouteHighlight";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroCarousel />
      <FeaturedDestinations />
      <RouteHighlight />
      <CategoryGrid />
      <FAQSection />
    </>
  );
}
