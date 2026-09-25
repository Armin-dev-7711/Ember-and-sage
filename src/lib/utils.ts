import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind classes with conflict resolution.
 * Drop-in replacement for the shadcn `cn` import from "cn".
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
