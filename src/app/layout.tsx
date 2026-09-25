import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import SmoothScroll from "@/components/shared/SmoothScroll";

/* ── Google Fonts ─────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

/* ── Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "EMBER & SAGE | Fine Dining · Downtown New York",
  description:
    "An intimate dining experience built around bold flavors, seasonal ingredients, and the art of cooking over fire. Reserve your table at Ember & Sage, Downtown District, New York.",
  keywords: [
    "Ember Sage",
    "fine dining",
    "New York restaurant",
    "fire cooking",
    "open fire grill",
    "tasting menu",
    "Michelin dining",
  ],
  openGraph: {
    title: "EMBER & SAGE | Fine Dining · Downtown New York",
    description:
      "Where fire meets flavor. An intimate dining experience built around bold flavors, seasonal ingredients, and the art of cooking over fire.",
    type: "website",
    locale: "en_US",
  },
};

/* ── Root Layout ──────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#0B0908] text-[#F5F2EB] antialiased overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#14100E",
              border: "1px solid rgba(245,242,235,0.08)",
              color: "#F5F2EB",
              fontFamily: "var(--font-sans)",
            },
          }}
        />
      </body>
    </html>
  );
}
