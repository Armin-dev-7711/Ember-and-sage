"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * useBentoGlimpseAnimation
 * ─────────────────────────────────────────────────────────────────────────
 * GSAP ScrollTrigger choreography for the "A Glimpse Inside" gallery.
 *
 *  1. Header   — eyebrow + headline slide up (y: 35 → 0) at `top 80%`
 *  2. Cards    — each frame fades/slides up (y: 40 → 0, stagger 0.1,
 *                0.8s, power2.out) as it scrolls into view. Uses
 *                `ScrollTrigger.batch` so every row of the tall grid
 *                animates when it actually appears.
 *  3. Parallax — desktop (`lg`) only: scrubbed multiplane depth where the
 *                centre column drifts yPercent -6 while the outer columns
 *                drift yPercent 4. Applied to column wrappers, so it never
 *                conflicts with the card entrance transforms.
 *
 * Respects `prefers-reduced-motion`. Uses `useGSAP` for React 19-safe
 * cleanup and containerRef scoping.
 */
export function useBentoGlimpseAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const section = containerRef.current;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ── Header reveal ─────────────────────────────────────────── */
        gsap.fromTo(
          "[data-glimpse-header] > *",
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        /* ── Cards stagger-in (per row, as they enter the viewport) ─ */
        const cards = gsap.utils.toArray<HTMLElement>("[data-glimpse-card]");
        gsap.set(cards, { opacity: 0, y: 40 });

        ScrollTrigger.batch(cards, {
          start: "top 90%",
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out",
              overwrite: true,
            }),
          onLeaveBack: (batch) =>
            gsap.to(batch, {
              opacity: 0,
              y: 40,
              duration: 0.4,
              ease: "power2.in",
              overwrite: true,
            }),
        });
      });

      /* ── Differential column parallax (desktop only) ─────────────── */
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const parallax = (selector: string, yPercent: number) =>
            gsap.fromTo(
              selector,
              { yPercent: 0 },
              {
                yPercent,
                ease: "none",
                scrollTrigger: {
                  trigger: "[data-glimpse-grid]",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            );

          parallax('[data-glimpse-col="1"]', 4);
          parallax('[data-glimpse-col="2"]', -6);
          parallax('[data-glimpse-col="3"]', 4);
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [] }
  );

  return containerRef;
}
