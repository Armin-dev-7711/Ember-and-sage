/**
 * GSAP + ScrollTrigger central setup file.
 * Import this file wherever GSAP is used to guarantee plugins
 * are registered exactly once.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once at module level
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
