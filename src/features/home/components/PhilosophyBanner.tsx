"use client";

import React from 'react';
import Image from 'next/image';
import { philosophyPillars } from '../mocks/philosophy.mock';
import { usePhilosophyAnimation } from '../hooks/usePhilosophyAnimation';

export function PhilosophyBanner() {
  const { containerRef, bgRef, contentRef, pillarsRef } = usePhilosophyAnimation();

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-24 md:py-36 bg-[#0B0908] overflow-hidden relative"
    >
      {/* Background Image Setup */}
      <div ref={bgRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src="/images/home/philosophy-bg.jpg"
          alt="Atmospheric dining room with open hearth fire"
          fill
          priority={false}
          className="object-cover"
          sizes="100vw"
        />
        {/* Layered dark overlay & vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0908] via-black/85 to-[#0B0908]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B0908]/40 to-[#0B0908]/90"></div>
      </div>

      {/* Subtle top separator for seamless section continuity */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(245,242,235,0.06) 30%, rgba(245,242,235,0.06) 70%, transparent)",
        }}
      />

      {/* Main Content Layout aligned with previous sections */}
      <div className="w-full px-6 md:px-12 lg:px-[4vw] xl:px-[5vw] relative z-10">
        <div ref={contentRef} className="flex flex-col">
          <h2 className="font-serif text-[#F5F2EB] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            More than a meal.
          </h2>
          <p className="font-sans text-[#A89F91] text-sm md:text-base leading-relaxed max-w-xl mt-6">
            From the glow of the open kitchen to the last bite of dessert, every detail is designed to make your evening memorable.
          </p>
        </div>

        {/* Three Core Pillars Grid - each has its own top border separated by grid gap */}
        <div 
          ref={pillarsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-20 md:mt-28"
        >
          {philosophyPillars.map((pillar) => (
            <div key={pillar.id} className="flex flex-col">
              {/* Individual orange accent line with gap between columns */}
              <div 
                data-pillar-line
                className="w-full h-[1px] bg-[#C85A17]/45 mb-8 md:mb-10 origin-left"
              />
              <div data-pillar-content className="flex flex-col">
                <span className="text-xs font-mono text-[#C85A17] tracking-[0.2em] block mb-4 uppercase">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#F5F2EB] font-medium tracking-normal mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#A89F91] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
