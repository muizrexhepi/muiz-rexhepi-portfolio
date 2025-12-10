import React from "react";

const logos = [
  "DentalCare+",
  "Apex Oral",
  "SmileStudio",
  "MediDent",
  "Pure White",
  "Orthos",
  "Gentle Touch",
  "Elite Dental",
];

export const LogoWall: React.FC = () => {
  return (
    // Increased vertical padding slightly to give the logos more breathing room
    <section className="py-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
      {/* 🛑 Removed the "Trusted by leading clinics..." text block 🛑 */}

      <div className="relative flex overflow-hidden group">
        {/* The marquee strip. Note the use of animate-marquee and pause-on-hover */}
        <div className="flex animate-marquee whitespace-nowrap pause-on-hover">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-12 lg:mx-20 flex items-center justify-center grayscale opacity-60 transition-all duration-300 cursor-default"
            >
              {/* If these were real SVG logos, they would replace this <span> tag */}
              <span className="text-3xl font-display font-bold text-slate-800">
                {logo}
              </span>
            </div>
          ))}
        </div>

        {/* Fade edges - Ensure 'from-white' and 'to-transparent' match your background color (bg-slate-50/50 is close enough to white) */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};
