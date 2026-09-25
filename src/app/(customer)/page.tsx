import HeroSection from "@/features/home/components/HeroSection";
import Navbar from "@/components/shared/Navbar";

/**
 * Home page – (customer) route group.
 * Mounts the cinematic hero section with GSAP entrance choreography.
 */
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* ── Placeholder for upcoming sections ─────────────────────── */}
      {/* Phase 2+: About, Menu Highlights, Experience, Gallery, CTA */}
    </main>
  );
}
