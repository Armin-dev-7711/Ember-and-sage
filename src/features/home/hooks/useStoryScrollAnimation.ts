"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

/**
 * useStoryScrollAnimation
 * ─────────────────────────────────────────────────────────────────────────
 * GSAP ScrollTrigger choreography for the "Our Story Teaser" section.
 *
 * Animation sequence (fires when section enters viewport at 75%):
 *  1. Image wrapper – gentle scale-down 1.08 → 1.0 with scrub parallax
 *  2. Content children – staggered fade+lift (opacity: 0→1, y: 35→0)
 *     Eyebrow → headline lines → body copy → CTA link
 *     (stagger: 0.12s, power3.out)
 *
 * Uses useGSAP for React 19-safe cleanup and scoped selectors.
 */
export function useStoryScrollAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const trigger = containerRef.current;

      /* ── Image parallax / scale reveal ─────────────────────────────── */
      gsap.fromTo(
        "[data-story-img-wrap]",
        { scale: 1.08 },
        {
          scale: 1.0,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top 75%",
            end: "bottom 20%",
            scrub: 1.2,
          },
        }
      );

      /* ── Content stagger reveal ─────────────────────────────────────── */
      gsap.fromTo(
        "[data-story-content] > *",
        { opacity: 0, y: 35 },
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
