"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a visa to visit China?",
    a: "Most foreign nationals need a visa. Tourist visas (L visa) typically take 4-5 business days. China also offers 144-hour visa-free transit in major cities including Beijing, Shanghai, Guangzhou, and Chengdu for citizens of 54 countries.",
  },
  {
    q: "What is the best time to visit China?",
    a: "Spring (April-May) and autumn (September-October) offer the best weather nationwide. Avoid Chinese New Year and National Day (Oct 1-7) when domestic travel surges. Winter is ideal for Harbin's Ice Festival; summer for Tibet.",
  },
  {
    q: "How do I get around China?",
    a: "China has the world's largest high-speed rail network — fast, affordable, and comfortable. Domestic flights connect 200+ cities. Within cities, metro systems and DiDi (ride-hailing) are the best options.",
  },
  {
    q: "Is China expensive for travelers?",
    a: "China suits all budgets. Budget travelers can manage on $30-50/day; mid-range $50-120/day with comfortable hotels and restaurants. Luxury travel is well-developed in major cities. Street food is excellent and costs $1-3 per meal.",
  },
  {
    q: "Will my phone and apps work?",
    a: "Buy a local SIM or eSIM for data. Google, WhatsApp, and Instagram are blocked — use a VPN or switch to WeChat (essential for daily life in China). Hotels have WiFi. Mobile payment via Alipay is now available to foreign tourists.",
  },
  {
    q: "Is China safe for tourists?",
    a: "China is one of the safest countries for travelers. Violent crime is extremely rare. Petty theft is uncommon but use normal precautions. The main challenges are language barriers and navigating the digital ecosystem.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full" style={{ background: "#404650", padding: "80px 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }}>
        {/* Header */}
        <div className="mb-12 text-center">
          <p
            className="text-sm font-bold tracking-[4px] uppercase mb-3"
            style={{ color: "#d5d5d8" }}
          >
            Common Questions
          </p>
          <h2 className="text-section-md" style={{ color: "#ffffff" }}>
            Visa & Entry FAQ
          </h2>
        </div>

        {/* Accordion */}
        <Accordion.Root type="single" collapsible className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`faq-${i}`}
              className="overflow-hidden rounded-lg"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <Accordion.Trigger className="group flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer">
                <span className="text-base md:text-lg font-bold text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  style={{ color: "#d5d5d8" }}
                />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="px-6 pb-5 text-sm md:text-base leading-relaxed" style={{ color: "#d5d5d8" }}>
                  {faq.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
