"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { chefSpotlightData } from "../mocks/chef.mock";
import { useChefAnimation } from "../hooks/useChefAnimation";

/**
 * ChefSpotlight
 * ─────────────────────────────────────────────────────────────────────────
 * Section 5: "Chef Spotlight" – Executive Chef Adrian Cole.
 *
 * Layout:
 *  - Fully stretched container matching StoryTeaser (px-6 md:px-12 lg:px-[4vw] xl:px-[5vw])
 *  - Responsive 12-col grid: portrait image (left 6 cols) + content (right 6 cols)
 *  - Cinematic portrait with smooth edge vignetting into #0B0908
 *  - Content: eyebrow → serif headline with ember italic → philosophy body
 *    → elegant handwritten signature block (Alex Brush) → interactive CTA
 *
 * GSAP:
 *  - Smooth scrubbed vertical parallax + scale settle via useChefAnimation
 *  - Staggered content entrance
 */
export function ChefSpotlight() {
  const { containerRef, portraitWrapperRef, portraitImageRef, contentRef } =
    useChefAnimation();
  const {
    eyebrow,
    headlineLine1,
    headlineLine2,
    philosophy,
    name,
    credential,
    linkText,
    linkUrl,
  } = chefSpotlightData;

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      id="chef-spotlight"
      aria-label="Chef Spotlight – Adrian Cole"
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

      {/* ── Stretched full-width container matching StoryTeaser ─────────── */}
      <div className="w-full px-6 md:px-12 lg:px-[4vw] xl:px-[5vw]">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12",
            "gap-12 lg:gap-20 xl:gap-24",
            "items-center"
          )}
        >
          {/* ── Left Column: Chef Portrait (md:col-span-6) ──────────────── */}
          <div className="md:col-span-6 order-2 md:order-1">
            <div
              ref={portraitWrapperRef}
              className="relative overflow-hidden aspect-[4/5] w-full"
            >
              {/* Image wrapper with GSAP parallax & scale settling */}
              <div
                ref={portraitImageRef as React.RefObject<HTMLDivElement>}
                className="absolute inset-0 w-full h-[112%] -top-[6%] will-change-transform"
              >
                <Image
                  src="/images/home/chef-portrait.jpg"
                  alt={`Portrait of ${name} at open hearth grill`}
                  fill
                  quality={92}
                  sizes="(max-width: 768px) 100vw, 50vw"
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
              {/* Subtle warm center radial vignette for dramatic contrast */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(11,9,8,0.75)_105%)] pointer-events-none z-10"
              />
            </div>
          </div>

          {/* ── Right Column: Chef Content (md:col-span-6) ──────────────── */}
          <div className="md:col-span-6 order-1 md:order-2 flex items-center md:pl-12 lg:pl-16 xl:pl-24">
            <div
              ref={contentRef}
              className="flex flex-col max-w-xl w-full items-start"
            >
              {/* Eyebrow Tag */}
              <p
                className={cn(
                  "font-sans text-[11px] font-medium uppercase tracking-[0.28em]",
                  "text-[#B58E62] mb-6 md:mb-7"
                )}
              >
                {eyebrow}
              </p>

              {/* Main Headline */}
              <h2
                className={cn(
                  "font-serif leading-[1.1] tracking-tight",
                  "text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]",
                  "mb-6 md:mb-7"
                )}
              >
                <span className="block font-normal text-[#E6E1D8]">
                  {headlineLine1}
                </span>
                <span className="block italic font-normal mt-1 text-[#C85A17]">
                  {headlineLine2}
                </span>
              </h2>

              {/* Philosophy Body Copy */}
              <p
                className={cn(
                  "font-sans text-sm md:text-base leading-relaxed",
                  "text-[#8A857D]",
                  "max-w-lg mb-8 md:mb-10"
                )}
              >
                {philosophy}
              </p>

              {/* Handwritten Signature Block */}
              <div className="flex flex-col items-start mb-8 md:mb-10 group">
                <span
                  className={cn(
                    "font-signature text-4xl sm:text-5xl md:text-[3.5rem]",
                    "text-[#F5F2EB] font-normal leading-none tracking-normal",
                    "select-none -rotate-1 origin-left pt-1 pb-3",
                    "transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  )}
                >
                  {name}
                </span>
                {/* Ultra-thin divider */}
                <div
                  aria-hidden
                  className="w-24 h-[1px] bg-white/15 my-2"
                />
                <span className="text-[10px] sm:text-[11px] font-sans font-medium text-[#A89F91]/80 tracking-[0.25em] uppercase">
                  {credential}
                </span>
              </div>

              {/* CTA Link */}
              <Link
                href={linkUrl}
                id="chef-spotlight-cta"
                className={cn(
                  "inline-flex items-center gap-2",
                  "font-sans text-[11px] font-medium uppercase tracking-[0.22em]",
                  "text-[#B58E62]",
                  "hover:text-[#E6E1D8]",
                  "transition-colors duration-300",
                  "group cursor-pointer w-fit"
                )}
              >
                {linkText}
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
export default ChefSpotlight;
