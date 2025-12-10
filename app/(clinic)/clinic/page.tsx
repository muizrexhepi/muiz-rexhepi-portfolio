"use client";

import React, { useState, useEffect } from "react";
import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { Comparison } from "../components/comparison";
import { Pricing } from "../components/pricing";
import { About } from "../components/about";
import { Contact } from "../components/contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-[#FAFAFA]">
      <main className="flex-grow pt-20">
        <Hero />
        <Features />
        <Comparison />
        <Pricing />
        <About />
        <Contact />
      </main>

      <footer className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-6 bg-brand-500 rounded flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
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
            <span className="font-display font-bold text-[#1d1d1f]">
              ClinicFlow
            </span>
          </div>
          <p className="text-slate-500 text-sm mb-6">
            A premium service by{" "}
            <a
              href="https://muizrexhepi.com"
              className="text-brand-500 font-medium hover:underline"
            >
              Muiz Rexhepi
            </a>
            .
            <br className="sm:hidden" /> Specialized in dental practice growth.
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-slate-600 hover:text-[#1d1d1f] font-medium text-[15px] transition-colors rounded-full hover:bg-slate-100"
  >
    {children}
  </button>
);

const MobileNavButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-left text-slate-600 font-medium py-3 px-2 hover:bg-slate-50 rounded-lg transition-colors"
  >
    {children}
  </button>
);

export default App;
