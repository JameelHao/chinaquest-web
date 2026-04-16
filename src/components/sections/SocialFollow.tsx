/* ── visittheusa: "Join the Adventure. FOLLOW @VISITTHEUSA" ── */

const socials = [
  { label: "Instagram", icon: "IG", href: "#" },
  { label: "Facebook", icon: "FB", href: "#" },
  { label: "YouTube", icon: "YT", href: "#" },
  { label: "TikTok", icon: "TT", href: "#" },
];

export default function SocialFollow() {
  return (
    <section className="w-full text-center" style={{ background: "#ffffff", padding: "80px 24px" }}>
      <h2 className="font-black uppercase tracking-wide"
        style={{ fontSize: "clamp(24px, 3.5vw, 44px)", lineHeight: 1.2, color: "#404650" }}>
        Join the Adventure.<br />
        <span style={{ color: "#D5A58F" }}>Follow @VisitChina</span>
      </h2>
      <div className="flex items-center justify-center gap-3 mt-8">
        {socials.map((s) => (
          <a key={s.label} href={s.href}
            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-110"
            style={{ background: "#404650", color: "#fff" }} title={s.label}>
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
