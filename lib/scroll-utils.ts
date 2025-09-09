"use client";

import { useLenis } from "lenis/react";

export const useScrollUtils = () => {
  const lenis = useLenis();

  const scrollToSection = (sectionId: string, offset: number = -100) => {
    if (lenis) {
      lenis.scrollTo(`#${sectionId}`, {
        offset,
        duration: 1.5,
      });
    }
  };

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.8,
      });
    }
  };

  return {
    scrollToSection,
    scrollToTop,
    lenis,
  };
};
