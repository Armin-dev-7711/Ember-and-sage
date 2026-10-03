"use client";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export function useChefAnimation() {
  const containerRef = useRef<HTMLElement>(null);
  const portraitWrapperRef = useRef<HTMLDivElement>(null);
  const portraitImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });

      // Portrait Image Parallax & Scale Settling
      if (portraitImageRef.current) {
        // Initial setup for the parallax scrub and entrance scale
        gsap.set(portraitImageRef.current, { yPercent: -4, scale: 1.06 });

        // Settling animation on entrance
        tl.to(portraitImageRef.current, {
          scale: 1.0,
          duration: 1.5,
          ease: 'power3.out',
        });

        // Scrubbing parallax attached to scroll
        gsap.to(portraitImageRef.current, {
          yPercent: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Content Sequence Stagger
      if (contentRef.current) {
        tl.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
          '-=1.2'
        );
      }
    },
    { scope: containerRef }
  );

  return { containerRef, portraitWrapperRef, portraitImageRef, contentRef };
}
