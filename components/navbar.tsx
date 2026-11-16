"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    let ticking = false;

    function handleScroll() {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < 96) {
          setIsHidden(false);
        } else if (currentScrollY > lastScrollY.current) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }

        lastScrollY.current = currentScrollY;
        ticking = false;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNavbarHidden = isHidden && !isOpen;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border bg-background transition-transform duration-300 ease-out focus-within:translate-y-0 motion-reduce:transition-none",
        isNavbarHidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[100rem] items-center justify-between px-5 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link href="/" aria-label="Muiz Rexhepi home" className="flex items-center gap-2.5">
          <Image
            src="/brand/mr-light.svg"
            alt=""
            width={42}
            height={42}
            priority
            className="size-9 sm:size-10"
          />
          <span className="font-heading text-lg font-extrabold tracking-[-.045em] sm:text-xl">Muiz Rexhepi</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}
          >
            Start a Project
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              size={18}
              strokeWidth={1.8}
              className="ml-2"
            />
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex size-10 items-center justify-center text-foreground transition-colors hover:text-primary lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <MenuIcon open={isOpen} />
        </button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="top"
          initialFocus={true}
          className="max-h-dvh w-full! max-w-none! overflow-y-auto border-none bg-background p-0"
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>

          <div className="flex h-full flex-col px-6 pb-8 pt-14 sm:px-10">
            <nav aria-label="Mobile navigation" className="flex flex-1 flex-col justify-center">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards items-center justify-between border-b border-border/60 py-4"
                  style={{
                    animationDelay: `${100 + index * 60}ms`,
                    animationDuration: "400ms",
                  }}
                >
                  <span className="font-heading text-3xl font-medium tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-4xl">
                    {item.label}
                  </span>
                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    size={22}
                    strokeWidth={1.6}
                    className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
                  />
                </Link>
              ))}
            </nav>

            <div
              className="flex animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards flex-col gap-4 pt-8"
              style={{ animationDelay: "420ms", animationDuration: "400ms" }}
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full text-base",
                )}
              >
                Start a Project
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={18}
                  strokeWidth={1.8}
                  className="ml-2"
                />
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function NavLink({
  item,
  pathname,
}: {
  item: (typeof navItems)[number];
  pathname: string;
}) {
  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
        active ? "bg-foreground text-background" : "text-foreground hover:bg-muted",
      )}
    >
      {item.label}
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-4 w-5 flex-col items-center justify-center">
      <span
        className={cn(
          "absolute h-[1.5px] w-5 bg-current transition-all duration-300 ease-out",
          open ? "translate-y-0 rotate-45" : "-translate-y-[5px] rotate-0",
        )}
      />
      <span
        className={cn(
          "absolute h-[1.5px] w-5 bg-current transition-all duration-200 ease-out",
          open ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute h-[1.5px] w-5 bg-current transition-all duration-300 ease-out",
          open ? "translate-y-0 -rotate-45" : "translate-y-[5px] rotate-0",
        )}
      />
    </span>
  );
}
