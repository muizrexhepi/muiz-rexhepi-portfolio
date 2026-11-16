"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight02Icon, Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const headerRow = "mx-auto flex h-16 w-full max-w-[100rem] shrink-0 items-center justify-between px-5 sm:h-[4.5rem] sm:px-6 lg:px-8";
const menuButton = "inline-grid size-11 shrink-0 place-items-center rounded-lg text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frame: number | null = null;

    function handleScroll() {
      if (frame !== null) return;

      frame = window.requestAnimationFrame(() => {
        const scrollY = Math.max(0, window.scrollY);
        setHasScrolled(scrollY > 8);
        setIsHidden(scrollY >= 96 && scrollY > lastScrollY);
        lastScrollY = scrollY;
        frame = null;
      });
    }

    const desktop = window.matchMedia("(min-width: 64rem)");
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setIsOpen(false);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      desktop.removeEventListener("change", closeOnDesktop);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <header
        data-scrolled={hasScrolled ? "true" : "false"}
        className={cn(
          "sticky top-0 z-40 w-full border-b transition-[transform,border-color] duration-300 ease-out focus-within:translate-y-0 motion-reduce:transition-none",
          hasScrolled ? "border-border" : "border-transparent",
          pathname === "/" && !hasScrolled ? "bg-[#100e11]" : "bg-background",
          isHidden && !isOpen ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className={headerRow}>
          <NavbarBrand />

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map(({ label, href }) => {
              const active = isNavActive(pathname, href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active ? "bg-foreground text-background" : "text-foreground hover:bg-muted",
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <ProjectLink className="hidden h-11 px-5 lg:inline-flex" />

          <SheetTrigger aria-label="Open menu" className={cn(menuButton, "-mr-2 lg:hidden")}>
            <HugeiconsIcon icon={Menu01Icon} size={24} strokeWidth={1.7} aria-hidden="true" />
          </SheetTrigger>
        </div>
      </header>

      <SheetContent
        side="top"
        showCloseButton={false}
        initialFocus={closeButton}
        className="max-h-dvh overflow-hidden border-none bg-background p-0 shadow-none motion-reduce:transition-none data-[side=top]:h-dvh"
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>

        <div className="shrink-0 border-b border-border/60 pt-[env(safe-area-inset-top)]">
          <div className={headerRow}>
            <NavbarBrand onNavigate={closeMenu} />
            <SheetClose ref={closeButton} aria-label="Close menu" className={cn(menuButton, "-mr-2")}>
              <HugeiconsIcon icon={Cancel01Icon} size={24} strokeWidth={1.7} aria-hidden="true" />
            </SheetClose>
          </div>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="mx-auto w-full max-w-lg min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4 sm:px-6"
        >
          {navItems.map(({ label, href }) => {
            const active = isNavActive(pathname, href);

            return (
              <Link
                key={href}
                href={href}
                onNavigate={closeMenu}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-[clamp(3.25rem,8dvh,4.25rem)] items-center justify-between gap-4 border-b border-border/60 py-3 font-heading text-2xl font-semibold tracking-tight transition-colors hover:text-primary focus-visible:text-primary",
                  active ? "text-primary" : "text-foreground",
                )}
              >
                {label}
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={20}
                  strokeWidth={1.7}
                  className={cn("shrink-0", active ? "text-primary" : "text-muted-foreground")}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="mx-auto w-full max-w-lg shrink-0 px-5 pt-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6">
          <ProjectLink onNavigate={closeMenu} className="h-12 w-full text-base" />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function isNavActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavbarBrand({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link href="/" aria-label="Muiz Rexhepi home" onNavigate={onNavigate} className="flex items-center gap-2.5">
      <Image src="/brand/mr-light.svg" alt="" width={42} height={42} loading="eager" className="size-9 shrink-0 sm:size-10" />
      <span className="font-heading text-lg font-extrabold tracking-[-.045em] sm:text-xl">Muiz Rexhepi</span>
    </Link>
  );
}

function ProjectLink({ className, onNavigate }: { className: string; onNavigate?: () => void }) {
  return (
    <Link href="/contact" onNavigate={onNavigate} className={cn(buttonVariants({ size: "lg" }), className)}>
      Start a Project
      <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={1.8} className="ml-2" aria-hidden="true" />
    </Link>
  );
}
