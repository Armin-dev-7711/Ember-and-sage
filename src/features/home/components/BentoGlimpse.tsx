"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { galleryColumns } from "../mocks/gallery.mock";
import { useBentoGlimpseAnimation } from "../hooks/useBentoGlimpseAnimation";

/**
 * BentoGlimpse
 * ─────────────────────────────────────────────────────────────────────────
 * "A Glimpse Inside" — asymmetrical atmosphere gallery (Section 7).
 *
 * Layout:
 *  - Full-bleed `#0B0908` section; inner container matches the other home
 *    sections so edges align (`px-6 md:px-12 lg:px-[4vw] xl:px-[5vw]`)
 *  - Eyebrow + serif headline, then three staggered column stacks:
 *      mobile  → single column, stacks flow one after another
 *      tablet  → columns 1 & 2 side by side, column 3 spans full width
 *                as a 3-up row (no empty space)
 *      desktop → three independent columns with ragged, intentional rhythm
 *  - Each frame is a `figure` with slow hover zoom and an edge vignette
 *    that blends into the page background.
 *
 * GSAP:
 *  - Header slide-up, per-row card stagger and desktop-only differential
 *    column parallax (see hook).
 */
export function BentoGlimpse() {
  const containerRef = useBentoGlimpseAnimation();

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      id="glimpse-inside"
      aria-labelledby="glimpse-inside-heading"
      className="relative w-full bg-[#0B0908] py-24 md:py-36 overflow-x-clip"
    >
      <div className="w-full px-6 md:px-12 lg:px-[4vw] xl:px-[5vw]">
        {/* ── Section Header ───────────────────────────────────────── */}
        <div data-glimpse-header className="mb-16 md:mb-20">
          <p
            className={cn(
              "font-sans text-[11px] font-medium uppercase",
              "tracking-[0.28em] text-[#A89F91]",
            )}
          >
            A Glimpse Inside
          </p>
          <h2
            id="glimpse-inside-heading"
            className={cn(
              "font-serif font-normal text-[#F5F2EB]",
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
              "leading-[1.05] tracking-tight mt-3",
            )}
          >
            Come hungry. Leave <br />
            inspired.
          </h2>
        </div>

        {/* ── Asymmetrical 3-column gallery ────────────────────────── */}
        <div
          data-glimpse-grid
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            "gap-6 lg:gap-8 items-start",
          )}
        >
          {galleryColumns.map((column, columnIndex) => {
            const isLastColumn = columnIndex === galleryColumns.length - 1;
            return (
              <div
                key={column.id}
                data-glimpse-col={columnIndex + 1}
                className={cn(
                  "flex flex-col gap-6 lg:gap-8 will-change-transform",
                  /* Tablet: last column spans both tracks as a 3-up row */
                  isLastColumn &&
                    "md:col-span-2 md:grid md:grid-cols-3 md:items-start lg:col-span-1 lg:flex lg:flex-col",
                )}
              >
                {column.items.map((item) => (
                  <figure
                    key={item.id}
                    data-glimpse-card
                    id={`glimpse-${item.id}`}
                    className="group relative m-0 w-full overflow-hidden bg-[#14100E] cursor-pointer"
                    style={{ aspectRatio: item.aspectRatio }}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.alt}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={cn(
                        "object-cover object-center",
                        "transition-transform duration-700 ease-out",
                        "group-hover:scale-105",
                      )}
                    />

                    {/* Edge vignette — blends frame into #0B0908 */}
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, transparent 55%, rgba(11,9,8,0.55) 100%)",
                        boxShadow: "inset 0 0 40px rgba(11,9,8,0.35)",
                      }}
                    />

                    <figcaption className="sr-only">{item.title}</figcaption>
                  </figure>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BentoGlimpse;
