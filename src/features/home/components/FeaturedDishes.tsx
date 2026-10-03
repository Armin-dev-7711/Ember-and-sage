"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FEATURED_DISHES } from "../mocks/dishes.mock";
import { useFeaturedDishesAnimation } from "../hooks/useFeaturedDishesAnimation";
import type { Dish } from "../types";

/**
 * FeaturedDishes
 * ─────────────────────────────────────────────────────────────────────────
 * "From The Kitchen" — Section 3 of the EMBER & SAGE landing page.
 *
 * Layout:
 *  - Dark `#0B0908` background, seamless continuation from StoryTeaser
 *  - Section header: eyebrow + serif headline (left) + "VIEW FULL MENU" CTA (right)
 *  - 4-column responsive dish card grid (1 → 2 → 4 cols)
 *  - Each card: image (hover scale) + title/price row + ingredients row
 *
 * GSAP (via useFeaturedDishesAnimation):
 *  - Header children: fade + lift on scroll entry (power3.out, 0.10s stagger)
 *  - Cards: stagger-in L→R on scroll entry (power3.out, 0.12s stagger, y:50)
 */
export default function FeaturedDishes() {
  const containerRef = useFeaturedDishesAnimation();

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      id="featured-dishes"
      aria-label="From The Kitchen — Featured Dishes"
      className={cn(
        "relative w-full",
        "bg-[#0B0908]",
        "py-24 md:py-32",
        "overflow-hidden",
      )}
    >
      {/* ── Subtle top separator ───────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(245,242,235,0.06) 30%, rgba(245,242,235,0.06) 70%, transparent)",
        }}
      />

      {/* ── Main container ────────────────────────────────────────────── */}
      <div className="w-full px-6 md:px-12 lg:px-[4vw] xl:px-[5vw]">

        {/* ── Section Header ────────────────────────────────────────────── */}
        <div
          data-dishes-header
          className={cn(
            "flex flex-col md:flex-row md:items-end justify-between",
            "gap-6 mb-16",
          )}
        >
          {/* Left: Eyebrow + Headline */}
          <div>
            {/* Eyebrow */}
            <p
              className={cn(
                "font-sans text-[11px] font-medium uppercase",
                "tracking-[0.28em] text-[#B58E62]",
              )}
            >
              FROM THE KITCHEN
            </p>

            {/* Headline */}
            <h2
              className={cn(
                "font-serif font-normal leading-[1.1] tracking-tight",
                "text-[#F5F2EB] mt-3",
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
              )}
            >
              A menu worth coming
              <br />
              back for.
            </h2>
          </div>

          {/* Right: CTA Button */}
          <div>
            <Button
              asChild
              variant="outline"
              id="featured-dishes-view-menu-cta"
              className={cn(
                "rounded-none border-white/20",
                "text-[#F5F2EB] text-xs uppercase tracking-[0.2em]",
                "px-6 py-5 font-sans font-medium",
                "hover:border-[#C85A17] hover:text-[#C85A17]",
                "hover:bg-transparent",
                "transition-all duration-300",
                "bg-transparent",
              )}
            >
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>

        {/* ── Dishes Grid ───────────────────────────────────────────────── */}
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
            "gap-6 lg:gap-8",
          )}
        >
          {FEATURED_DISHES.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>

      {/* ── Bottom fade to next section ────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(11,9,8,0.5) 100%)",
        }}
      />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * DishCard
 * Individual dish card — image hover scale + title/price + ingredients.
 * ───────────────────────────────────────────────────────────────────────── */
function DishCard({ dish }: { dish: Dish }) {
  return (
    <article
      data-dish-card
      className="group cursor-pointer"
      aria-label={dish.name}
    >
      {/* ── Image Container ─────────────────────────────────────────────── */}
      <Link
        href={`/menu/${dish.slug}`}
        id={`dish-card-${dish.id}`}
        tabIndex={0}
        className="block"
        aria-label={`View ${dish.name} on the menu`}
      >
        <div
          className={cn(
            "relative overflow-hidden",
            "aspect-[4/5]",
            "bg-[#14100E]",
            "rounded-none",
          )}
        >
          {/* Dish Image */}
          <Image
            src={dish.image}
            alt={`${dish.name} — ${dish.ingredients}`}
            fill
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={cn(
              "object-cover object-center",
              "transition-transform duration-700 ease-out",
              "group-hover:scale-105",
              "will-change-transform",
            )}
          />

          {/* Subtle dark vignette overlay — deepens on hover */}
          <div
            aria-hidden
            className={cn(
              "absolute inset-0 z-10 pointer-events-none",
              "bg-gradient-to-t from-[#0B0908]/50 via-transparent to-transparent",
              "opacity-60 group-hover:opacity-40 transition-opacity duration-500",
            )}
          />

          {/* Ember accent glow strip at bottom edge */}
          <div
            aria-hidden
            className={cn(
              "absolute bottom-0 inset-x-0 h-0.5 z-20",
              "bg-[#C85A17]",
              "scale-x-0 group-hover:scale-x-100",
              "origin-left transition-transform duration-500 ease-out",
            )}
          />
        </div>

        {/* ── Card Meta ─────────────────────────────────────────────────── */}
        <div className="pt-4">
          {/* Row 1: Title + Price */}
          <div className="flex justify-between items-baseline gap-2">
            <h3
              className={cn(
                "font-serif text-lg font-medium leading-snug",
                "text-[#E6E1D8] truncate",
                "transition-colors duration-300",
              )}
            >
              {dish.name}
            </h3>
            <span
              className={cn(
                "font-serif text-base font-medium shrink-0",
                "text-[#B58E62]",
              )}
            >
              {dish.price}
            </span>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-[rgba(245,242,235,0.08)] my-2.5" />

          {/* Row 2: Ingredients */}
          <p
            className={cn(
              "font-sans text-xs leading-relaxed",
              "text-[#8A857D]",
              "line-clamp-1",
            )}
          >
            {dish.ingredients}
          </p>
        </div>
      </Link>
    </article>
  );
}
