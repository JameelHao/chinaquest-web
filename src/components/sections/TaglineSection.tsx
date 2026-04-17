import Link from "next/link";

export default function TaglineSection() {
  return (
    <section
      className="w-full"
      style={{ background: "#f4f2f0", padding: "80px 0 64px" }}
    >
      {/* Text block — wide padding, centered */}
      <div style={{ padding: "0 10vw", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(26px, 3.3vw, 42px)",
            lineHeight: 1.5,
            color: "#404650",
            marginBottom: 64,
          }}
        >
          This is a place where travelers can chart their own course, where
          stories unfold in unexpected places and discovery happens one
          connection at a time. Whatever type of travel you seek, China is ready
          to help you plan your next beautiful journey.
        </p>
      </div>

      {/* THINKING ABOUT A TRIP? + button — dead center */}
      <div style={{ textAlign: "center" }}>
        <h2
          className="uppercase"
          style={{
            fontFamily: "'Anton', 'Bebas Neue', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 2.4vw, 31px)",
            letterSpacing: "1px",
            color: "#404650",
            marginBottom: 20,
          }}
        >
          Thinking About a Trip?
        </h2>

        <Link
          href="/practical/visa"
          className="btn-pill btn-pill-terra"
        >
          Visa & Entry Details
        </Link>
      </div>
    </section>
  );
}
