import Link from "next/link";

export default function RouteHighlight() {
  return (
    <section className="w-full" style={{ background: "#404650" }}>
      <Link href="/trip/silk-road-14-days" className="group block relative overflow-hidden" style={{ height: "500px" }}>
        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80"
          alt="Silk Road"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center" style={{ padding: "0 5%" }}>
          <div style={{ maxWidth: "600px" }}>
            <p
              className="text-sm font-normal tracking-widest uppercase mb-3"
              style={{ color: "#d5d5d8" }}
            >
              Featured Route
            </p>
            <h2
              className="text-5xl md:text-6xl font-black leading-none mb-4"
              style={{ color: "#ffffff" }}
            >
              Silk Road
              <br />
              14 Days
            </h2>
            <p
              className="text-lg font-light leading-relaxed mb-6"
              style={{ color: "#ffffff" }}
            >
              Xi&apos;an to Urumqi — trace the ancient trade route through
              terracotta warriors, desert Dunhuang caves, and the modern
              cultures of western China.
            </p>
            <span
              className="inline-flex items-center gap-2 text-base font-bold"
              style={{ color: "#ffffff" }}
            >
              Explore Route →
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
