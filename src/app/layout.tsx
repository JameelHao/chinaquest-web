import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ChinaQuest — Explore China's Wonders",
  description:
    "Comprehensive travel guide for 34 provinces, 500+ attractions. Plan your China trip with expert tips on destinations, routes, food, culture, and more.",
  keywords: ["China travel", "China guide", "Chinese attractions", "travel guide"],
  openGraph: {
    title: "ChinaQuest — Explore China's Wonders",
    description: "Your comprehensive guide to traveling China",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-full flex flex-col" style={{ background: "#f4f2f0", color: "#404650" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
