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
