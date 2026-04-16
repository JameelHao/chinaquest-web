"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      className="w-full py-16 px-8 flex items-center justify-center"
      style={{ background: "#f4f2f0" }}
    >
      <div className="max-w-[600px] text-center">
        <h2
          className="text-3xl md:text-4xl font-black mb-3"
          style={{ color: "#404650", lineHeight: 1.1 }}
        >
          Your China Journey Starts Here
        </h2>
        <p
          className="text-base font-light leading-relaxed mb-8"
          style={{ color: "#718096" }}
        >
          Get destination guides, travel tips, and exclusive route
          recommendations delivered to your inbox.
        </p>

        {submitted ? (
          <p
            className="text-lg font-bold"
            style={{ color: "#37cd8f" }}
          >
            Thanks! You&apos;re on the list.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 rounded-lg text-base outline-none focus:ring-2"
              style={{
                background: "#ffffff",
                color: "#404650",
                border: "1px solid #e2e8f0",
              }}
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg text-base font-bold transition-opacity hover:opacity-90"
              style={{ background: "#c53030", color: "#ffffff" }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
