import Link from "next/link";

/* ── visittheusa structure:
   1) Full-viewport hero image (no text overlay)
   2) Tagline paragraph (white bg, large editorial text)
   3) "THINKING ABOUT A TRIP?" heading + "Visa & Entry Details" CTA
── */

export default function HeroSection() {
  return (
    <>
      {/* ═══ HERO — 100vh image, no text ═══ */}
      <section className="relative w-full" style={{ height: "100vh", minHeight: 600 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80"
          alt="Great Wall of China"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.2) 100%)" }}
        />
        <p className="absolute bottom-6 left-8 z-10 text-xs tracking-wide" style={{ color: "rgba(255,255,255,0.5)" }}>
          Great Wall of China · Beijing
        </p>
      </section>

      {/* ═══ TAGLINE — visittheusa: large editorial paragraph on white bg ═══ */}
      <section style={{ background: "#ffffff", padding: "100px 24px 60px" }}>
        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <p style={{
            fontSize: "clamp(20px, 2.5vw, 32px)",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "#404650",
          }}>
            This is a place where travelers can chart their own course, where
            stories unfold in unexpected places and discovery happens one
            connection at a time. Whatever type of travel you seek, China is
            ready to help you plan your next beautiful journey.
          </p>
        </div>
      </section>

      {/* ═══ CTA — "THINKING ABOUT A TRIP?" + button ═══ */}
      <section style={{ background: "#ffffff", padding: "20px 24px 100px" }}>
        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <p className="uppercase tracking-[4px] font-bold mb-5"
            style={{ fontSize: 12, color: "rgba(64,68,80,0.35)" }}>
            Thinking About a Trip?
          </p>
          <Link href="/practical/visa" className="btn-pill btn-pill-dark">
            Visa &amp; Entry Details
          </Link>
        </div>
      </section>
    </>
  );
}
