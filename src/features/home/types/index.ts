/**
 * Feature: home
 * Types barrel for the home feature slice.
 */

/**
 * Dish
 * ─────────────────────────────────────────────────────────────────────────
 * Represents a single featured dish displayed in the "From The Kitchen"
 * section on the home page.
 */
export interface Dish {
  /** Unique stable identifier (used as React key) */
  id: string;
  /** Display name shown in the card title */
  name: string;
  /** Formatted price string e.g. "$34" */
  price: string;
  /** Short comma-separated ingredient highlight list */
  ingredients: string;
  /** Absolute public image path e.g. "/dishes/ribeye.jpg" */
  image: string;
  /** URL-safe slug for linking to /menu/:slug */
  slug: string;
}

/**
 * Category
 * ─────────────────────────────────────────────────────────────────────────
 * Represents a single menu category banner displayed in the
 * "Something for every appetite." section on the home page.
 */
export interface Category {
  /** Unique stable identifier (used as React key) */
  id: string;
  /** Display title shown on the card e.g. "STARTERS" */
  title: string;
  /** Short supporting description */
  description: string;
  /** Absolute public image path e.g. "/images/home/category-starters.jpg" */
  image: string;
  /** Destination link e.g. "/menu?category=starters" */
  href: string;
  /** URL-safe slug used for the category query param and element ids */
  slug: string;
}
