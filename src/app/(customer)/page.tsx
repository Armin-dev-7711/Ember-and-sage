import HeroSection from "@/features/home/components/HeroSection";
import StoryTeaser from "@/features/home/components/StoryTeaser";
import FeaturedDishes from "@/features/home/components/FeaturedDishes";
import { PhilosophyBanner } from "@/features/home/components/PhilosophyBanner";
import { ChefSpotlight } from "@/features/home/components/ChefSpotlight";
import { CategoryBanners } from "@/features/home/components/CategoryBanners";
import { BentoGlimpse } from "@/features/home/components/BentoGlimpse";
import Navbar from "@/components/shared/Navbar";

/**
 * Home page – (customer) route group.
 * Section order:
 *  1. HeroSection     – Cinematic full-viewport hero with GSAP entrance
 *  2. StoryTeaser     – "Our Story" editorial two-column section
 *  3. FeaturedDishes  – "From The Kitchen" 4-dish showcase grid
 *  4. PhilosophyBanner – Philosophy pillars banner
 *  5. ChefSpotlight    – Chef portrait & signature
 *  6. CategoryBanners  – "Something for every appetite." 2×2 category grid
 *  7. BentoGlimpse     – "A Glimpse Inside" asymmetrical atmosphere gallery
 */
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StoryTeaser />
      <FeaturedDishes />
      <PhilosophyBanner />
      <ChefSpotlight />
      <CategoryBanners />
      <BentoGlimpse />

      {/* ── Placeholder for upcoming sections ─────────────────────── */}
      {/* Phase 4+: Experience, Gallery, Reservations CTA */}
    </main>
  );
}
