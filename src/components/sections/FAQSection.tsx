"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What are the passport requirements for China?",
    a: "You'll need a valid passport with at least six months of remaining validity beyond your planned stay in China and at least one blank page for the visa sticker.",
  },
  {
    q: "Do I need a visa to travel to China?",
    a: "Most foreign nationals need a visa. Tourist visas (L visa) typically take 4-5 business days. China also offers 144-hour visa-free transit in major cities including Beijing, Shanghai, Guangzhou, and Chengdu for citizens of 54 countries.",
  },
  {
    q: "How long can I stay in China as a tourist?",
    a: "Tourist visas (L visa) typically allow stays of 30 days. The 144-hour visa-free transit allows up to 6 days. Multiple-entry visas may allow stays of 60 or 90 days per visit. Check with your local Chinese embassy for specifics.",
  },
  {
    q: "What can I expect at customs?",
    a: "China customs is straightforward. Declare cash over $5,000 USD equivalent. No fresh food or plants allowed. Electronics and personal items pass freely. Duty-free allowances include 400 cigarettes and 2 bottles of alcohol (1.5L total).",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full" style={{ background: "#404650", padding: "80px 0" }}>
      <div
        className="flex flex-col lg:flex-row gap-16"
        style={{ padding: "0 clamp(32px, 6vw, 80px)" }}
      >
        {/* Left: Title + description + CTA */}
        <div className="lg:w-[38%] flex-shrink-0 flex flex-col gap-8">
          <h2
            style={{
              fontFamily: "'Anton', 'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(48px, 7vw, 96px)",
              lineHeight: 0.95,
              color: "#ffffff",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Visa & Entry
          </h2>

          <p
            style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
              fontSize: 16,
              fontWeight: 350,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
            }}
          >
            Learn details about China&apos;s visa & entry policies.
          </p>

          <div>
            <Link href="/practical/visa" className="btn-pill btn-pill-terra">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right: FAQ accordion — evenly distributed */}
        <div className="flex-1 flex flex-col justify-between">
          <Accordion.Root type="single" collapsible className="flex flex-col justify-between h-full">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
              >
                <Accordion.Trigger className="group flex items-center justify-between w-full py-8 text-left cursor-pointer">
                  <span
                    className="pr-4"
                    style={{
                      fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                      fontSize: "clamp(18px, 1.8vw, 26px)",
                      fontWeight: 600,
                      color: "#ffffff",
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={22}
                    className="flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div
                    className="pb-6 leading-relaxed"
                    style={{
                      fontFamily: "'Avenir Next', 'Avenir', 'Segoe UI', 'Inter', sans-serif",
                      fontSize: 15,
                      fontWeight: 350,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
