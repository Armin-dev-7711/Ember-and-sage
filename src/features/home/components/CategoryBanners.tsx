"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "../mocks/categories.mock";
import { useCategoryBannersAnimation } from "../hooks/useCategoryBannersAnimation";

/**
 * CategoryBanners
 * ─────────────────────────────────────────────────────────────────────────
 * "Something for every appetite." — Menu Categories Showcase (Section 6).
 *
 * Layout:
 *  - Full-bleed `#0B0908` section; inner container matches the other home
 *    sections (`px-6 md:px-12 lg:px-[4vw] xl:px-[5vw]`) so edges align
 *  - Serif headline + 2×2 bento grid (5-col track, 3:2 split) where cards
 *    alternate wide (3 cols, 3:2 rectangle) and narrow (2 cols, square):
 *    row 1 → wide + square, row 2 → square + wide. Row height is driven by
 *    the square card; the wide card stretches to match.
 *  - Each card is a `Link` to `/menu?category=<slug>` with slow image zoom,
 *    bottom-anchored legibility gradient and bottom-left aligned content
 *
 * GSAP:
 *  - Headline slides up on entry; cards stagger fade-up (see hook)
 */
export function CategoryBanners() {
  const containerRef = useCategoryBannersAnimation();

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      id="menu-categories"
      aria-labelledby="menu-categories-heading"
      className="relative w-full bg-[#0B0908] py-24 md:py-36"
    >
      <div className="w-full px-6 md:px-12 lg:px-[4vw] xl:px-[5vw]">
        {/* ── Section Headline ─────────────────────────────────────── */}
        <h2
          id="menu-categories-heading"
          data-categories-headline
          className={cn(
            "font-serif font-normal text-[#F5F2EB]",
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            "leading-[1.05] tracking-tight",
            "mb-16 md:mb-20",
          )}
        >
          Something for every <br />
          appetite.
        </h2>

        {/* ── 2×2 Category Grid ────────────────────────────────────── */}
        <div
          data-categories-grid
          className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12"
        >
          {categories.map((category, index) => {
            /* Cards 1 & 4 → wide rectangle; cards 2 & 3 → square */
            const isWide = index % 3 === 0;
            return (
            <Link
              key={category.id}
              href={category.href}
              id={`category-card-${category.slug}`}
              data-category-card
              aria-label={`Explore ${category.title}`}
              className={cn(
                "group relative block aspect-[3/2] overflow-hidden",
                isWide
                  ? "md:col-span-3 md:aspect-auto"
                  : "md:col-span-2 md:aspect-square",
                "bg-[#14100E] cursor-pointer",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-[#C85A17] focus-visible:ring-offset-2",
                "focus-visible:ring-offset-[#0B0908]",
              )}
            >
              {/* Image (zooms on hover) */}
              <Image
                src={category.image}
                alt={`${category.title} — ${category.description}`}
                fill
                quality={90}
                sizes={
                  isWide
                    ? "(max-width: 768px) 100vw, 60vw"
                    : "(max-width: 768px) 100vw, 40vw"
                }
                className={cn(
                  "object-cover object-center",
                  "transition-transform duration-700 ease-out",
                  "group-hover:scale-105",
                )}
              />

              {/* Legibility gradient */}
              <div
                aria-hidden
                className={cn(
                  "absolute inset-0 pointer-events-none",
                  "bg-gradient-to-t from-[#0B0908]/95 via-[#0B0908]/60 to-transparent",
                )}
              />

              {/* Content — bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10">
                <h3
                  className={cn(
                    "font-serif font-normal uppercase text-[#F5F2EB]",
                    "text-2xl md:text-3xl tracking-[0.2em]",
                  )}
                >
                  {category.title}
                </h3>
                <p
                  className={cn(
                    "font-sans text-xs sm:text-sm text-[#A89F91]",
                    "mt-2 max-w-md",
                  )}
                >
                  {category.description}
                </p>
                <span
                  className={cn(
                    "mt-4 inline-flex items-center gap-2",
                    "font-sans text-xs font-medium uppercase tracking-[0.22em]",
                    "text-[#C85A17] group-hover:text-[#D95D1E]",
                    "transition-colors duration-300",
                  )}
                >
                  Explore
                  <ArrowRight
                    size={14}
                    strokeWidth={1.75}
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </span>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategoryBanners;
