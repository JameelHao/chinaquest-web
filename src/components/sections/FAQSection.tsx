"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

/* ── visittheusa FAQ structure:
   Heading: "Visa & Entry"
   Subtext: "Learn details about the USA's visa & entry policies."
   4 Q&A items (not accordion on visittheusa, but we keep accordion for better UX)
   CTA: "Learn More"
── */

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
    <section className="w-full" style={{ background: "#f4f2f0", padding: "80px 0" }}>
      <div className="mx-auto" style={{ maxWidth: 800, padding: "0 clamp(16px, 4vw, 48px)" }}>
        {/* Header — matching visittheusa */}
        <p className="uppercase tracking-[4px] font-bold mb-3"
          style={{ fontSize: 12, color: "rgba(64,68,80,0.35)" }}>
          Visa &amp; Entry
        </p>
        <h2 className="font-black uppercase tracking-wide mb-3"
          style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#404650", lineHeight: 1.15 }}>
          Common Questions
        </h2>
        <p className="mb-10" style={{ fontSize: 16, color: "rgba(64,68,80,0.55)" }}>
          Learn details about China&apos;s visa &amp; entry policies.
        </p>

        {/* Accordion */}
        <Accordion.Root type="single" collapsible className="flex flex-col gap-0">
          {faqs.map((faq, i) => (
            <Accordion.Item key={i} value={`faq-${i}`}
              className="overflow-hidden" style={{ borderBottom: "1px solid rgba(64,68,80,0.1)" }}>
              <Accordion.Trigger className="group flex items-center justify-between w-full py-5 text-left cursor-pointer">
                <span className="text-base font-bold pr-4" style={{ color: "#404650" }}>{faq.q}</span>
                <ChevronDown size={18}
                  className="flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  style={{ color: "rgba(64,68,80,0.3)" }} />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="pb-5 text-sm leading-relaxed" style={{ color: "rgba(64,68,80,0.6)" }}>
                  {faq.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {/* CTA — "Learn More" like visittheusa */}
        <div className="mt-8">
          <Link href="/practical/visa" className="btn-pill btn-pill-dark">Learn More</Link>
        </div>
      </div>
    </section>
  );
}
