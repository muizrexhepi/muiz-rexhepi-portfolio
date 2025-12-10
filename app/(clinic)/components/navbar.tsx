"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    setIsMobileMenuOpen(false);

    if (!element) return;

    const offset = 80;
    const bodyTop = document.body.getBoundingClientRect().top;
    const elementTop = element.getBoundingClientRect().top;
    const scrollTarget = elementTop - bodyTop - offset;

    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed bg-white w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-sm bg-white/80 backdrop-blur-2xl"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href={"/clinic"}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            {" "}
            <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <span className="font-display font-bold text-xl text-[#1d1d1f]">
              ClinicFlow
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavButton onClick={() => scrollToSection("features")}>
              Features
            </NavButton>
            <NavButton onClick={() => scrollToSection("results")}>
              Results
            </NavButton>
            <NavButton onClick={() => scrollToSection("pricing")}>
              Pricing
            </NavButton>
            <NavButton onClick={() => scrollToSection("about")}>
              About
            </NavButton>
            <div className="pl-6">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md"
              >
                Get Free Audit
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-600 hover:text-slate-900 p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full px-6 py-6 shadow-xl">
          <div className="flex flex-col space-y-2">
            <MobileNavButton onClick={() => scrollToSection("features")}>
              Features
            </MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection("results")}>
              Results
            </MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection("pricing")}>
              Pricing
            </MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection("about")}>
              About
            </MobileNavButton>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 bg-brand-500 text-white px-4 py-3.5 rounded-xl font-medium w-full shadow-lg shadow-brand-500/20"
            >
              Get Free Audit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-slate-600 hover:text-[#1d1d1f] font-medium text-[15px] rounded-full hover:bg-slate-100"
  >
    {children}
  </button>
);

const MobileNavButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className="text-left text-slate-600 font-medium py-3 px-2 hover:bg-slate-50 rounded-lg"
  >
    {children}
  </button>
);
