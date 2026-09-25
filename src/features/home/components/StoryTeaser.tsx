"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStoryScrollAnimation } from "../hooks/useStoryScrollAnimation";

/**
 * StoryTeaser
 * ─────────────────────────────────────────────────────────────────────────
 * "Our Story" teaser section – second section on the home page.
 *
 * Layout:
 *  - Dark `#0B0908` background, flush with the hero above
 *  - Responsive 12-col grid: portrait image (left 5 cols) + content (right 7)
 *  - Portrait: atmospheric restaurant interior with olive velvet booths,
 *    copper pendants, candlelight, open-fire kitchen in background.
 *  - Content: eyebrow tag → serif headline (regular + italic) → body copy → CTA
 *
 * GSAP:
 *  - Image: scrub-based scale-down parallax (1.08 → 1.0) via ScrollTrigger
 *  - Content children: staggered fade+lift on scroll entry (power3.out, 0.12s stagger)
 */
export default function StoryTeaser() {
  const containerRef = useStoryScrollAnimation();

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      id="our-story-teaser"
      aria-label="Our Story – EMBER & SAGE"
      className={cn(
        "relative w-full",
        "bg-[#0B0908]",
        "py-24 md:py-32",
        "overflow-hidden"
      )}
    >
      {/* ── Subtle top separator line ──────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(245,242,235,0.06) 30%, rgba(245,242,235,0.06) 70%, transparent)",
        }}
      />

      {/* ── Main container ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12",
            "gap-12 lg:gap-20 xl:gap-24",
            "items-center"
          )}
        >
          {/* ── Left Column: Portrait Image ──────────────────────────── */}
          <div className="md:col-span-5">
            {/* Outer clip container — rounds nothing, just clips overflow */}
            <div className="relative overflow-hidden aspect-[4/5] w-full">
              {/* Image wrapper with GSAP scale handle */}
              <div
                data-story-img-wrap
                className="absolute inset-0 will-change-transform"
                style={{ transform: "scale(1.08)" }} /* GSAP overrides this */
              >
                <Image
                  src="/story-portrait.jpg"
                  alt="Olive-green velvet curved booths, handcrafted copper pendant lights and candle-lit tables at EMBER & SAGE, with chefs cooking over open flames in the background"
                  fill
                  quality={92}
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>

              {/* ── Edge vignettes: blend all four edges into #0B0908 ── */}
              {/* Top edge */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-24 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, #0B0908 0%, transparent 100%)",
                }}
              />
              {/* Bottom edge */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to top, #0B0908 0%, transparent 100%)",
                }}
              />
              {/* Right edge – blends into content area */}
              <div
                aria-hidden
                className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to right, transparent 0%, #0B0908 100%)",
                }}
              />
              {/* Left edge */}
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-12 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to left, transparent 0%, #0B0908 100%)",
                }}
              />
            </div>
          </div>

          {/* ── Right Column: Story Content ──────────────────────────── */}
          <div className="md:col-span-7 flex items-center">
            {/* data-story-content: GSAP targets each direct child */}
            <div
              data-story-content
              className="flex flex-col max-w-xl w-full"
            >
              {/* Eyebrow Tag */}
              <p
                className={cn(
                  "font-sans text-[11px] font-medium uppercase tracking-[0.28em]",
                  "text-[#A89F91] mb-6 md:mb-7",
                  "flex items-center gap-3"
                )}
                style={{ opacity: 0 }} /* GSAP controls reveal */
              >
                <span className="block w-5 h-px bg-[#C85A17] opacity-60 shrink-0" />
                Our Story
              </p>

              {/* Main Headline */}
              <h2
                className={cn(
                  "font-serif leading-[1.1] tracking-tight",
                  "text-[#F5F2EB]",
                  "text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]",
                  "mb-6 md:mb-7"
                )}
                style={{ opacity: 0 }} /* GSAP controls reveal */
              >
                {/* Line 1 — regular weight */}
                <span className="block font-normal">
                  Rooted in tradition.
                </span>
                {/* Line 2 — italic, editorial accent */}
                <span
                  className={cn(
                    "block italic font-normal mt-1",
                    "text-[#F5F2EB]"
                  )}
                >
                  Created for today.
                </span>
              </h2>

              {/* Story Body Copy */}
              <p
                className={cn(
                  "font-sans text-sm md:text-base leading-relaxed",
                  "text-[#A89F91]",
                  "max-w-lg mb-8 md:mb-10"
                )}
                style={{ opacity: 0 }} /* GSAP controls reveal */
              >
                EMBER &amp; SAGE brings together open-fire cooking, seasonal
                ingredients, and modern culinary techniques to create food
                that feels both familiar and unexpected.
              </p>

              {/* Decorative rule */}
              <div
                aria-hidden
                className="w-12 h-px bg-[rgba(245,242,235,0.12)] mb-8 md:mb-10"
                style={{ opacity: 0 }} /* GSAP controls reveal */
              />

              {/* CTA Link */}
              <Link
                href="/our-story"
                id="story-teaser-cta"
                className={cn(
                  "inline-flex items-center gap-2",
                  "font-sans text-[11px] font-medium uppercase tracking-[0.22em]",
                  "text-[#F5F2EB]",
                  "hover:text-[#C85A17]",
                  "transition-colors duration-300",
                  "group cursor-pointer w-fit"
                )}
                style={{ opacity: 0 }} /* GSAP controls reveal */
              >
                Discover Our Story
                <ArrowRight
                  size={14}
                  strokeWidth={1.75}
                  className={cn(
                    "transition-transform duration-300",
                    "group-hover:translate-x-1.5"
                  )}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom fade to next section ───────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(11,9,8,0.4) 100%)",
        }}
      />
    </section>
  );
}
