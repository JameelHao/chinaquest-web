"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a visa to visit China?",
    a: "Most foreign nationals need a visa to enter China. Tourist visas (L visa) are available for travelers from most countries. The process typically takes 4-5 business days. Some countries have visa-free arrangements for short stays.",
  },
  {
    q: "What is the best time to visit China?",
    a: "The best time is spring (April-May) and autumn (September-October) when weather is mild across most of the country. Summer can be hot and humid, especially in the south. Winter is cold but great for northern attractions like the Great Wall.",
  },
  {
    q: "How do I get around China?",
    a: "China has an excellent high-speed rail network covering most major cities. Domestic flights are also affordable. Within cities, metro systems, taxis, and ride-sharing apps like DiDi are widely available.",
  },
  {
    q: "Is China expensive for travelers?",
    a: "China can suit various budgets. Mid-range travelers can expect to spend $50-100/day including accommodation, food, and transport. Luxury travel is also well-developed. Visa fees and flights are the main upfront costs.",
  },
  {
    q: "Will I be able to use my phone in China?",
    a: "Major international carriers offer roaming, but it's expensive. We recommend buying a local SIM card or eSIM upon arrival. WiFi is widely available in hotels and restaurants in major cities.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full py-16 px-8" style={{ background: "#404650" }}>
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <p
            className="text-sm font-normal tracking-widest uppercase mb-2"
            style={{ color: "#d5d5d8" }}
          >
            Common Questions
          </p>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ color: "#ffffff", lineHeight: 1.1 }}
          >
            Travel Tips & FAQ
          </h2>
        </div>

        {/* Accordion */}
        <Accordion.Root type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`faq-${i}`}
              className="overflow-hidden rounded-lg"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <Accordion.Trigger className="group flex items-center justify-between w-full px-6 py-5 text-left">
                <span
                  className="text-base md:text-lg font-bold"
                  style={{ color: "#ffffff" }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  style={{ color: "#d5d5d8" }}
                />
              </Accordion.Trigger>
              <Accordion.Content
                className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
              >
                <div
                  className="px-6 pb-5 text-sm md:text-base leading-relaxed"
                  style={{ color: "#d5d5d8" }}
                >
                  {faq.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      <style>{`
        @keyframes slideDown {
          from { height: 0; }
          to { height: var(--radix-accordion-content-height); }
        }
        @keyframes slideUp {
          from { height: var(--radix-accordion-content-height); }
          to { height: 0; }
        }
        .animate-slideDown {
          animation: slideDown 300ms ease-out;
        }
        .animate-slideUp {
          animation: slideUp 300ms ease-out;
        }
      `}</style>
    </section>
  );
}
