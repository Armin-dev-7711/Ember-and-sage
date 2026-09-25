"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * SmoothScroll
 * ─────────────────────────────────────────────────────────────────────────
 * Wraps the page in a Lenis inertia scroll instance and synchronises it
 * with GSAP's ticker so ScrollTrigger never drifts out of sync.
 *
 * Strategy:
 *  - Add Lenis raf callback to gsap.ticker (single rAF loop).
 *  - Call ScrollTrigger.update() inside that same loop.
 *  - Destroy Lenis + remove ticker on unmount.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sync Lenis raf with GSAP ticker for perfectly-aligned ScrollTrigger updates
    function onFrame(time: number) {
      lenis.raf(time * 1000); // gsap ticker provides seconds; Lenis wants ms
      ScrollTrigger.update();
    }

    gsap.ticker.add(onFrame);
    gsap.ticker.lagSmoothing(0); // Disable lag smoothing so Lenis controls pacing

    return () => {
      gsap.ticker.remove(onFrame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
