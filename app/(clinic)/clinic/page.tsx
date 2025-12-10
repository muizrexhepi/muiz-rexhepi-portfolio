"use client";

import React from "react";
import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { Comparison } from "../components/comparison";
import { Pricing } from "../components/pricing";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { LogoWall } from "../components/logos";
import { Portfolio } from "../components/portfolio";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <main className="flex-grow">
        <Hero />
        <LogoWall />
        <Features />
        <Portfolio />
        <Comparison />
        <Pricing />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;
