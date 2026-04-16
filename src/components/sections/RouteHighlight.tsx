import Link from "next/link";

const routes = [
  {
    title: "The Silk Road",
    days: "14 Days",
    desc: "Xi'an to Kashgar — trace the ancient trade route through terracotta warriors, desert caves, and the cultures of western China.",
    href: "/trip/silk-road",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
  },
  {
    title: "Yunnan Highway",
    days: "10 Days",
    desc: "Kunming to Shangri-La — rice terraces, Tiger Leaping Gorge, ancient Lijiang, and the foothills of the Himalayas.",
    href: "/trip/yunnan-highway",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    title: "Beijing to Shanghai",
    days: "7 Days",
    desc: "High-speed rail through China's greatest hits — the Great Wall, Nanjing, Suzhou gardens, and the Bund.",
    href: "/trip/beijing-shanghai",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80",
  },
];

export default function RouteHighlight() {
  return (
    <section className="w-full" style={{ background: "#404650", padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }}>
        {/* Section header */}
        <div className="mb-12">
          <p
            className="text-sm font-bold tracking-[4px] uppercase mb-3"
            style={{ color: "#d5d5d8" }}
          >
            Road Trips
          </p>
          <h2 className="text-section-md" style={{ color: "#ffffff" }}>
            Boundless Adventures
          </h2>
        </div>

        {/* Route cards — horizontal full-width */}
        <div className="flex flex-col gap-6">
          {routes.map((route) => (
            <Link
              key={route.title}
              href={route.href}
              className="group block relative overflow-hidden rounded-lg"
              style={{ height: "clamp(280px, 25vw, 400px)" }}
            >
              {/* Background */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={route.img}
                alt={route.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, rgba(64,68,80,0.85) 0%, rgba(64,68,80,0.3) 60%, transparent 100%)",
                }}
              />

              {/* Content — left aligned */}
              <div className="relative z-10 h-full flex flex-col justify-center" style={{ padding: "0 clamp(24px, 4vw, 48px)", maxWidth: 600 }}>
                <p className="text-sm font-bold tracking-[3px] uppercase mb-2" style={{ color: "#d5d5d8" }}>
                  {route.days}
                </p>
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide mb-3">
                  {route.title}
                </h3>
                <p className="text-base text-white/75 leading-relaxed mb-6 hidden sm:block">
                  {route.desc}
                </p>
                <span className="btn-pill btn-pill-terra" style={{ alignSelf: "flex-start" }}>
                  Explore Route
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
