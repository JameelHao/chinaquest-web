import Image from "next/image";
import DestinationHero from "@/components/sections/DestinationHero";

export default function ForbiddenCityPage() {
  return (
    <>
      <DestinationHero
        title="Forbidden City"
        image="/images/carousel-1.jpg"
      />

      <section className="py-16 px-6 lg:px-[50px]">
        <div className="max-w-[900px] mx-auto">
          <p
            className="uppercase tracking-[3px] mb-6"
            style={{ fontSize: 12, fontWeight: 600, color: "#9a9696", fontFamily: "'Inter', sans-serif" }}
          >
            01 / OVERVIEW
          </p>

          <h2
            className="uppercase mb-6"
            style={{
              fontFamily: "'Anton', 'Bebas Neue', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "#2d3142",
              lineHeight: 1.05,
            }}
          >
            The World&apos;s Largest Palace Complex
          </h2>

          <div className="space-y-6">
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3d3d3d", fontFamily: "'Inter', sans-serif" }}>
              The Forbidden City — Zijin Cheng, or Purple Forbidden City — served as the Chinese imperial palace from the Ming Dynasty in 1420 until the fall of the Qing Dynasty in 1912. Twenty-four emperors lived and ruled from this 180-acre complex, which contains 980 buildings and approximately 9,000 rooms.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3d3d3d", fontFamily: "'Inter', sans-serif" }}>
              Today it houses the Palace Museum, one of the world&apos;s most visited art museums, with a collection of nearly 1.86 million precious artifacts spanning 5,000 years of Chinese civilization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
