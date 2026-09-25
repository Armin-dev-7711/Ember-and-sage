import HeroSection from "@/features/home/components/HeroSection";
import StoryTeaser from "@/features/home/components/StoryTeaser";
import Navbar from "@/components/shared/Navbar";

/**
 * Home page – (customer) route group.
 * Section order:
 *  1. HeroSection   – Cinematic full-viewport hero with GSAP entrance
 *  2. StoryTeaser   – "Our Story" editorial two-column section
 */
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StoryTeaser />

      {/* ── Placeholder for upcoming sections ─────────────────────── */}
      {/* Phase 3+: Menu Highlights, Experience, Gallery, CTA */}
    </main>
  );
}
