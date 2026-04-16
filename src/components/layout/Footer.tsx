import Link from "next/link";

const footerLinks = {
  Destinations: [
    { href: "/destinations/beijing", label: "Beijing" },
    { href: "/destinations/shanghai", label: "Shanghai" },
    { href: "/destinations/xian", label: "Xi'an" },
    { href: "/destinations/sichuan", label: "Sichuan" },
  ],
  Routes: [
    { href: "/trip/silk-road-14-days", label: "Silk Road" },
    { href: "/trip/yangtze-cruise-10-days", label: "Yangtze Cruise" },
    { href: "/trip/classical-gardens-7-days", label: "Classical Gardens" },
  ],
  Experiences: [
    { href: "/experience/food", label: "Food & Drink" },
    { href: "/experience/culture", label: "Culture" },
    { href: "/experience/nature", label: "Nature" },
    { href: "/experience/adventure", label: "Adventure" },
  ],
  Practical: [
    { href: "/practical/visa", label: "Visa" },
    { href: "/practical/transport", label: "Transport" },
    { href: "/practical/best-time", label: "Best Time to Visit" },
    { href: "/practical/budget", label: "Budget Tips" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="w-full px-8 py-16"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                className="text-base font-bold mb-4"
                style={{ color: "#404650" }}
              >
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-normal transition-opacity hover:opacity-70"
                      style={{ color: "#404650" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "#e2e8f0" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-sm font-normal"
            style={{ color: "#404650" }}
          >
            © 2026 ChinaQuest. All rights reserved.
          </span>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { label: "Facebook", icon: "F" },
              { label: "YouTube", icon: "Y" },
              { label: "Twitter", icon: "T" },
              { label: "Instagram", icon: "I" },
            ].map((s) => (
              <span
                key={s.label}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-opacity hover:opacity-70"
                style={{ background: "#f4f2f0", color: "#404650" }}
                title={s.label}
              >
                {s.icon}
              </span>
            ))}
          </div>

          {/* Legal */}
          <div className="flex gap-4 text-sm">
            {["Privacy Policy", "Terms of Use"].map((label) => (
              <span
                key={label}
                className="cursor-pointer transition-opacity hover:opacity-70"
                style={{ color: "#404650" }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
