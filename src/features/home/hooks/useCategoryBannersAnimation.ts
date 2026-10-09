"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

/**
 * useCategoryBannersAnimation
 * ─────────────────────────────────────────────────────────────────────────
 * GSAP ScrollTrigger choreography for the "Something for every appetite."
 * category banners section.
 *
 *  1. Headline  — slides up (y: 35 → 0, opacity: 0 → 1) at `top 80%`
 *  2. Cards     — staggered fade-up (y: 50 → 0, opacity: 0 → 1)
 *                 duration 0.9s, stagger 0.15s, power3.out,
 *                 fired when the grid enters the viewport
 *
 * Respects `prefers-reduced-motion` (content is shown immediately).
 * Uses `useGSAP` for React 19-safe cleanup and containerRef scoping.
 */
export function useCategoryBannersAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const trigger = containerRef.current;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ── Headline entrance ─────────────────────────────────────── */
        gsap.fromTo(
          "[data-categories-headline]",
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        /* ── Cards staggered fade-up ───────────────────────────────── */
        gsap.fromTo(
          "[data-category-card]",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-categories-grid]",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [] }
  );

  return containerRef;
}
