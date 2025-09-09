"use client";

import { useLenis } from "lenis/react";

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export function SmoothScrollLink({
  href,
  children,
  className = "",
  offset = -100,
}: SmoothScrollLinkProps) {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (href.startsWith("#") && lenis) {
      const target = href.substring(1);
      lenis.scrollTo(`#${target}`, {
        offset,
        duration: 1.5,
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
