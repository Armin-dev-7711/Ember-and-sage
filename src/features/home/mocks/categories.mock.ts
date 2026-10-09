import type { Category } from "../types";

/**
 * Mock data for the "Something for every appetite." category banners.
 * Links target the menu page filtered by category slug.
 */
export const categories: Category[] = [
  {
    id: "starters",
    title: "STARTERS",
    description: "Small plates designed to begin the evening.",
    image: "/images/home/category-starters.jpg",
    href: "/menu?category=starters",
    slug: "starters",
  },
  {
    id: "mains",
    title: "MAINS",
    description: "Fire-grilled meats, seafood, and seasonal favorites.",
    image: "/images/home/category-mains.jpg",
    href: "/menu?category=mains",
    slug: "mains",
  },
  {
    id: "desserts",
    title: "DESSERTS",
    description: "Thoughtful finishes for a memorable meal.",
    image: "/images/home/category-desserts.jpg",
    href: "/menu?category=desserts",
    slug: "desserts",
  },
  {
    id: "drinks",
    title: "COCKTAILS & WINE",
    description: "Curated drinks designed to complement every course.",
    image: "/images/home/category-drinks.jpg",
    href: "/menu?category=drinks",
    slug: "drinks",
  },
];
