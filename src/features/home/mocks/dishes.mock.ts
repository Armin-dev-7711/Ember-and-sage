import type { Dish } from "../types";

/**
 * FEATURED_DISHES
 * ─────────────────────────────────────────────────────────────────────────
 * Mock data for the "From The Kitchen" featured dishes showcase.
 * Replace with API call when the menu endpoint is available.
 *
 * Images are served from /public/dishes/ (Next.js static assets).
 */
export const FEATURED_DISHES: Dish[] = [
  {
    id: "dish-001",
    name: "Ember-Grilled Ribeye",
    price: "$34",
    ingredients: "Charred shallots, smoked jus, roasted herbs",
    image: "/dishes/ribeye.jpg",
    slug: "ember-grilled-ribeye",
  },
  {
    id: "dish-002",
    name: "Sage Butter Gnocchi",
    price: "$24",
    ingredients: "Wild mushrooms, parmesan, crispy sage",
    image: "/dishes/gnocchi.jpg",
    slug: "sage-butter-gnocchi",
  },
  {
    id: "dish-003",
    name: "Fire-Roasted Salmon",
    price: "$29",
    ingredients: "Citrus glaze, seasonal vegetables, herb oil",
    image: "/dishes/salmon.jpg",
    slug: "fire-roasted-salmon",
  },
  {
    id: "dish-004",
    name: "Dark Chocolate Torte",
    price: "$14",
    ingredients: "Sea salt, roasted hazelnut, vanilla cream",
    image: "/dishes/chocolate-torte.jpg",
    slug: "dark-chocolate-torte",
  },
];
