import Link from "next/link";

const socials = [
  { label: "Instagram", icon: "IG", href: "#" },
  { label: "Facebook", icon: "FB", href: "#" },
  { label: "YouTube", icon: "YT", href: "#" },
  { label: "TikTok", icon: "TT", href: "#" },
];

export default function SocialFollow() {
  return (
    <section
      className="w-full text-center"
      style={{ background: "#f4f2f0", padding: "80px 24px" }}
    >
      <p
        className="text-sm font-bold tracking-[4px] uppercase mb-4"
        style={{ color: "#404650", opacity: 0.5 }}
      >
        Join the Adventure
      </p>
      <h2
        className="text-section-md mb-8"
        style={{ color: "#404650" }}
      >
        Follow @VisitChina
      </h2>
      <div className="flex items-center justify-center gap-4">
        {socials.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-110"
            style={{ background: "#404650", color: "#ffffff" }}
            title={s.label}
          >
            {s.icon}
          </Link>
        ))}
      </div>
    </section>
  );
}
