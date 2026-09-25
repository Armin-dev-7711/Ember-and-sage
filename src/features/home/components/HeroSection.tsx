"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useHeroTimeline } from "../hooks/useHeroTimeline";
import { RESERVE_HREF } from "@/constants/navigation";

/**
 * HeroSection
 * ─────────────────────────────────────────────────────────────────────────
 * Full-viewport cinematic hero with:
 *  - Moody steak photography background (scale-in on load)
 *  - Multi-layer radial vignette for text contrast
 *  - Serif headline split across two lines with ember-orange italic accent
 *  - Dual CTAs (ember-fill primary + outline secondary)
 *  - Scroll indicator with infinite GSAP bounce
 */
export default function HeroSection() {
  const containerRef = useHeroTimeline();

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Hero – Where Fire Meets Flavor"
      className={cn(
        "relative min-h-screen w-full",
        "flex flex-col",
        "overflow-hidden"
      )}
    >
      {/* ── Background Image ──────────────────────────────────────────── */}
      <div
        data-hero-bg
        className="absolute inset-0 will-change-transform"
        style={{ opacity: 0 }} /* GSAP controls opacity */
      >
        <Image
          src="/hero-bg.jpg"
          alt="Charred dry-aged ribeye steak with rosemary, garlic and bone marrow butter, surrounded by ambient fire bokeh"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── Multi-layer Vignette & Gradient ───────────────────────────── */}
      {/* Left-side fade: ensures text readability */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(105deg, #0B0908 0%, #0B0908 22%, rgba(11,9,8,0.85) 42%, rgba(11,9,8,0.5) 60%, rgba(11,9,8,0.15) 80%, transparent 100%)",
        }}
      />

      {/* Top fade */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-48 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,9,8,0.6) 0%, transparent 100%)",
        }}
      />

      {/* Bottom fade to section below */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-56 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to top, #0B0908 0%, rgba(11,9,8,0.6) 60%, transparent 100%)",
        }}
      />

      {/* Radial centre vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 20% 50%, transparent 30%, rgba(11,9,8,0.4) 65%, #0B0908 100%)",
        }}
      />

      {/* ── Hero Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 md:px-10 lg:px-16 xl:px-20 pt-28 pb-24">
        <div className="max-w-[680px]">

          {/* Overline tag */}
          <p
            data-hero-overline
            className={cn(
              "font-sans text-[11px] font-medium uppercase tracking-[0.28em]",
              "text-[#A89F91] mb-6 md:mb-8",
              "flex items-center gap-3"
            )}
            style={{ opacity: 0 }}
          >
            <span className="block w-5 h-px bg-[#C85A17] opacity-70" />
            Downtown District · New York
          </p>

          {/* Main Headline */}
          <h1 className="font-serif leading-[1.05] mb-6 md:mb-8">
            {/* Line 1: "Where Fire" */}
            <span className="block overflow-hidden">
              {["Where", "Fire"].map((word) => (
                <span
                  key={word}
                  data-hero-word
                  className={cn(
                    "inline-block mr-[0.22em]",
                    "text-[clamp(3rem,7.5vw,5.5rem)]",
                    "font-normal text-[#F5F2EB]"
                  )}
                  style={{ opacity: 0 }}
                >
                  {word}
                </span>
              ))}
            </span>

            {/* Line 2: "Meets Flavor." — italic ember accent */}
            <span className="block overflow-hidden mt-1">
              {["Meets", "Flavor."].map((word) => (
                <span
                  key={word}
                  data-hero-word
                  className={cn(
                    "inline-block mr-[0.18em]",
                    "text-[clamp(3rem,7.5vw,5.5rem)]",
                    "italic font-medium text-[#C85A17]",
                    "[text-shadow:0_0_30px_rgba(200,90,23,0.3)]"
                  )}
                  style={{ opacity: 0 }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          {/* Description */}
          <p
            data-hero-description
            className={cn(
              "font-sans text-[15px] md:text-[15.5px] leading-[1.7]",
              "text-[#A89F91] max-w-[480px] mb-10 md:mb-12"
            )}
            style={{ opacity: 0 }}
          >
            An intimate dining experience built around bold flavors, seasonal
            ingredients, and the art of cooking over fire.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary – ember fill */}
            <Button
              asChild
              data-hero-cta
              className={cn(
                "h-12 px-7 rounded-none",
                "font-sans text-[10.5px] font-semibold uppercase tracking-[0.22em]",
                "bg-[#C85A17] text-[#F5F2EB]",
                "border border-[#C85A17]",
                "hover:bg-[#D95D1E] hover:scale-[1.02]",
                "transition-all duration-250 ease-out",
                "shadow-[0_4px_24px_rgba(200,90,23,0.3)]",
                "hover:shadow-[0_6px_32px_rgba(200,90,23,0.45)]"
              )}
              style={{ opacity: 0 }}
            >
              <Link href={RESERVE_HREF} id="hero-reserve-cta">
                Reserve a Table
              </Link>
            </Button>

            {/* Secondary – transparent outline */}
            <Button
              asChild
              variant="outline"
              data-hero-cta
              className={cn(
                "h-12 px-7 rounded-none",
                "font-sans text-[10.5px] font-semibold uppercase tracking-[0.22em]",
                "bg-transparent border border-[rgba(245,242,235,0.35)]",
                "text-[#F5F2EB]",
                "hover:bg-[rgba(245,242,235,0.06)]",
                "hover:border-[rgba(245,242,235,0.7)]",
                "transition-all duration-300"
              )}
              style={{ opacity: 0 }}
            >
              <Link href="/menu" id="hero-menu-cta">
                Explore Our Menu
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ──────────────────────────────────────────── */}
      <div
        data-hero-scroll
        aria-label="Scroll down"
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 z-10",
          "flex flex-col items-center gap-2"
        )}
        style={{ opacity: 0 }}
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-[#6E665B]">
          Scroll
        </span>
        <ChevronDown
          size={18}
          className="text-[#6E665B]"
          strokeWidth={1.5}
        />
      </div>
    </section>
  );
}
