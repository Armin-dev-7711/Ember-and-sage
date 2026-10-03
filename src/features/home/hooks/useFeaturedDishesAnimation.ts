"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

/**
 * useFeaturedDishesAnimation
 * ─────────────────────────────────────────────────────────────────────────
 * GSAP ScrollTrigger choreography for the "From The Kitchen" featured
 * dishes section.
 *
 * Animation sequence (two-phase, fired by scroll position):
 *
 *  Phase 1 — Header reveal (fires at `top 80%`):
 *    [data-dishes-header] children fade + lift  (y: 35→0, opacity: 0→1)
 *    stagger: 0.10s, duration: 0.85s, ease: power3.out
 *
 *  Phase 2 — Cards stagger in L→R (fires at `top 75%`):
 *    [data-dish-card] elements  (opacity: 0→1, y: 50→0)
 *    stagger: 0.12s, duration: 0.9s, ease: power3.out
 *
 * Uses `useGSAP` for React 19-safe cleanup and containerRef scoping.
 */
export function useFeaturedDishesAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const trigger = containerRef.current;

      /* ── Phase 1: Header children reveal ───────────────────────────── */
      gsap.fromTo(
        "[data-dishes-header] > *",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.10,
          ease: "power3.out",
          scrollTrigger: {
            trigger,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* ── Phase 2: Dish cards stagger L→R ───────────────────────────── */
      gsap.fromTo(
        "[data-dish-card]",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return containerRef;
}
