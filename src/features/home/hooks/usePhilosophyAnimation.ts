"use client";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export function usePhilosophyAnimation() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });

      // Background parallax
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Heading & Copy Entrance
      if (contentRef.current) {
        tl.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );
      }

      // Individual orange accent lines draw across with stagger
      const lines = containerRef.current.querySelectorAll('[data-pillar-line]');
      if (lines.length > 0) {
        tl.fromTo(
          lines,
          { scaleX: 0 },
          { scaleX: 1, duration: 1, stagger: 0.15, transformOrigin: 'left center', ease: 'power3.inOut' },
          '-=0.4'
        );
      }

      // 3 Pillars body content stagger
      const pillarBodies = containerRef.current.querySelectorAll('[data-pillar-content]');
      if (pillarBodies.length > 0) {
        tl.fromTo(
          pillarBodies,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.7'
        );
      }
    },
    { scope: containerRef }
  );

  return { containerRef, bgRef, contentRef, pillarsRef };
}
