"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_ITEMS, RESERVE_HREF } from "@/constants/navigation";
import { cn } from "@/lib/utils";

/**
 * Navbar
 * ─────────────────────────────────────────────────────────────────────────
 * Fixed, backdrop-blurred navigation bar for EMBER & SAGE.
 * Animatable via data-navbar attribute targeted by useHeroTimeline.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      data-navbar
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "flex items-center justify-between",
        "px-6 md:px-10 lg:px-16 h-[72px]",
        "border-b border-[rgba(245,242,235,0.06)]",
        "bg-[rgba(11,9,8,0.72)] backdrop-blur-[20px]",
        "transition-all duration-300"
      )}
    >
      {/* ── Brand Logo ──────────────────────────────────────────────── */}
      <Link
        href="/"
        className={cn(
          "font-serif text-[15px] md:text-base font-semibold uppercase",
          "tracking-[0.2em] text-[#F5F2EB]",
          "transition-all duration-300",
          "hover:text-[#C85A17] hover:[text-shadow:0_0_24px_rgba(200,90,23,0.5)]"
        )}
        data-navbar-logo
      >
        Ember <span className="text-[#C85A17] font-light">&amp;</span> Sage
      </Link>

      {/* ── Desktop Nav ─────────────────────────────────────────────── */}
      <nav
        className="hidden lg:flex items-center gap-8 xl:gap-10"
        aria-label="Main navigation"
        data-navbar-links
      >
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-sans text-[11px] font-medium uppercase tracking-[0.18em]",
                "nav-underline relative pb-[3px]",
                "transition-colors duration-200",
                isActive
                  ? "text-[#F5F2EB] active"
                  : "text-[#A89F91] hover:text-[#F5F2EB]"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* ── Reserve CTA (desktop) ───────────────────────────────────── */}
      <div className="hidden lg:flex items-center" data-navbar-cta>
        <Button
          asChild
          variant="outline"
          className={cn(
            "h-9 px-5 rounded-none",
            "font-sans text-[10px] font-medium uppercase tracking-[0.2em]",
            "border-[rgba(245,242,235,0.4)] text-[#F5F2EB]",
            "bg-transparent",
            "hover:bg-[rgba(245,242,235,0.06)] hover:border-[rgba(245,242,235,0.7)]",
            "transition-all duration-300"
          )}
        >
          <Link href={RESERVE_HREF}>Reserve a Table</Link>
        </Button>
      </div>

      {/* ── Mobile Hamburger + Sheet ────────────────────────────────── */}
      <div className="flex lg:hidden items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              id="mobile-menu-trigger"
              aria-label="Open menu"
              className={cn(
                "w-10 h-10 flex items-center justify-center",
                "text-[#A89F91] hover:text-[#F5F2EB] transition-colors duration-200"
              )}
            >
              <MenuIcon size={22} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            showCloseButton={false}
            className={cn(
              "w-[300px] sm:w-[360px] p-0",
              "bg-[#0D0A09] border-l border-[rgba(245,242,235,0.06)]",
              "flex flex-col"
            )}
          >
            {/* Sheet Header */}
            <SheetHeader className="flex flex-row items-center justify-between px-7 pt-6 pb-0">
              <SheetTitle asChild>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-[#F5F2EB]"
                >
                  Ember <span className="text-[#C85A17]">&amp;</span> Sage
                </Link>
              </SheetTitle>
              <SheetClose asChild>
                <button
                  id="mobile-menu-close"
                  aria-label="Close menu"
                  className="w-9 h-9 flex items-center justify-center text-[#6E665B] hover:text-[#F5F2EB] transition-colors"
                >
                  <X size={20} />
                </button>
              </SheetClose>
            </SheetHeader>

            {/* Divider */}
            <div className="mx-7 mt-6 h-px bg-[rgba(245,242,235,0.06)]" />

            {/* Nav Links */}
            <nav className="flex flex-col gap-1 px-4 mt-6 flex-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center px-3 py-3 rounded-sm",
                      "font-sans text-[11px] font-medium uppercase tracking-[0.2em]",
                      "transition-all duration-200",
                      isActive
                        ? "text-[#C85A17] bg-[rgba(200,90,23,0.08)]"
                        : "text-[#A89F91] hover:text-[#F5F2EB] hover:bg-[rgba(245,242,235,0.04)]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Reserve CTA at bottom */}
            <div className="px-7 pb-8 mt-auto">
              <div className="h-px bg-[rgba(245,242,235,0.06)] mb-6" />
              <Button
                asChild
                className={cn(
                  "w-full h-11 rounded-none",
                  "font-sans text-[10px] font-semibold uppercase tracking-[0.22em]",
                  "bg-[#C85A17] text-[#F5F2EB]",
                  "hover:bg-[#D95D1E] transition-colors duration-200"
                )}
              >
                <Link href={RESERVE_HREF} onClick={() => setOpen(false)}>
                  Reserve a Table
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
