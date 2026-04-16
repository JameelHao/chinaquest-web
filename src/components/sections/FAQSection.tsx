"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "Do I need a passport to visit China?",
    a: "Yes. All foreign nationals need a valid passport with at least 6 months of remaining validity. Make sure your passport has at least one blank page for the visa sticker.",
  },
  {
    q: "Do I need a visa to visit China?",
    a: "Most foreign nationals need a visa. Tourist visas (L visa) typically take 4-5 business days. China also offers 144-hour visa-free transit in major cities including Beijing, Shanghai, Guangzhou, and Chengdu for citizens of 54 countries.",
  },
  {
    q: "How long can I stay in China as a tourist?",
    a: "Tourist visas (L visa) typically allow stays of 30 days. The 144-hour visa-free transit allows up to 6 days. Multiple-entry visas may allow stays of 60 or 90 days per visit. Check with your local Chinese embassy for specifics.",
  },
  {
    q: "What should I expect at customs?",
    a: "China customs is straightforward. Declare cash over $5,000 USD equivalent, no fresh food or plants. Electronics and personal items pass freely. Duty-free allowances include 400 cigarettes, 2 bottles of alcohol (1.5L total). The process is quick at major airports.",
  },
];

export default function FAQSection() {
  return (
    <section
      className="w-full"
      style={{ background: "#f4f2f0", padding: "80px 0" }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: 800,
          padding: "0 clamp(16px, 4vw, 48px)",
        }}
      >
        {/* Header */}
        <div className="mb-10">
          <p
            className="text-sm font-bold tracking-[4px] uppercase mb-3"
            style={{ color: "#404650", opacity: 0.5 }}
          >
            Visa &amp; Entry
          </p>
          <h2 className="text-section-md" style={{ color: "#404650" }}>
            Common Questions
          </h2>
        </div>

        {/* Accordion — light theme matching visittheusa */}
        <Accordion.Root type="single" collapsible className="flex flex-col gap-0">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`faq-${i}`}
              className="overflow-hidden"
              style={{
                borderBottom: "1px solid rgba(64,68,80,0.12)",
              }}
            >
              <Accordion.Trigger className="group flex items-center justify-between w-full py-5 text-left cursor-pointer">
                <span
                  className="text-base md:text-lg font-bold pr-4"
                  style={{ color: "#404650" }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  style={{ color: "rgba(64,68,80,0.4)" }}
                />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div
                  className="pb-5 text-sm md:text-base leading-relaxed"
                  style={{ color: "rgba(64,68,80,0.7)" }}
                >
                  {faq.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {/* CTA — like visittheusa */}
        <div className="mt-10 text-center">
          <Link href="/practical/visa" className="btn-pill btn-pill-dark">
            All Visa &amp; Entry Details
          </Link>
        </div>
      </div>
    </section>
  );
}
