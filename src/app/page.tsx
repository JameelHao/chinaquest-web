import HeroSection from "@/components/sections/HeroSection";
import CategoryGrid from "@/components/sections/CategoryGrid";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import RouteHighlight from "@/components/sections/RouteHighlight";
import FAQSection from "@/components/sections/FAQSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <FeaturedDestinations />
      <RouteHighlight />
      <FAQSection />
      <NewsletterSection />
    </>
  );
}
