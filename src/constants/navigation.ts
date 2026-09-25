export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home",       href: "/" },
  { label: "Our Story",  href: "/our-story" },
  { label: "Menu",       href: "/menu" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery",    href: "/gallery" },
  { label: "Contact",    href: "/contact" },
];

export const RESERVE_HREF = "/reserve";
