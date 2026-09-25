"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

/**
 * useHeroTimeline
 * ─────────────────────────────────────────────────────────────────────────
 * GSAP entrance choreography for the cinematic hero section.
 *
 * Timeline sequence:
 *  0.00s – Background image scale + fade in (1.6s, power2.out)
 *  0.30s – Navbar elements slide in from top (staggered)
 *  0.60s – Overline tag fades up
 *  0.80s – Headline words stagger in from below
 *  1.10s – Description paragraph fades in
 *  1.30s – CTA buttons stagger in
 *  1.50s – Scroll indicator pulses in
 *
 * All animations use useGSAP for React 19-safe cleanup.
 */
export function useHeroTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      /* ── Background image ──────────────────────────────────────────── */
      tl.fromTo(
        "[data-hero-bg]",
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power2.out" },
        0
      );

      /* ── Navbar (logo, links, cta) – subtle drop from top ──────────── */
      // Navbar is outside the hero scope so we query the document directly
      const navbarEl = document.querySelector("[data-navbar]");
      if (navbarEl) {
        tl.fromTo(
          navbarEl,
          { y: -24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.3
        );
      }


      /* ── Overline ────────────────────────────────────────────────────── */
      tl.fromTo(
        "[data-hero-overline]",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.6
      );

      /* ── Headline words (each word is a separate span) ──────────────── */
      tl.fromTo(
        "[data-hero-word]",
        { y: 45, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.1 },
        0.78
      );

      /* ── Description ────────────────────────────────────────────────── */
      tl.fromTo(
        "[data-hero-description]",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75 },
        1.1
      );

      /* ── CTA Buttons ────────────────────────────────────────────────── */
      tl.fromTo(
        "[data-hero-cta]",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
        1.28
      );

      /* ── Scroll indicator ────────────────────────────────────────────── */
      tl.fromTo(
        "[data-hero-scroll]",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.55
      );

      /* ── Infinite bounce on scroll indicator ────────────────────────── */
      tl.add(() => {
        gsap.to("[data-hero-scroll]", {
          y: 8,
          duration: 0.9,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    },
    { scope: containerRef }
  );

  return containerRef;
}
