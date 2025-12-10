import React from "react";
import { Check, Star } from "lucide-react";

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-diasplay text-4xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
            Simple monthly plans.
          </h2>
          <p className="text-lg text-slate-500 font-normal">
            No huge upfront costs. Just a simple subscription to keep your
            clinic online and growing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plan 1: Essentials */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-12 flex flex-col hover:border-brand-200 transition-colors shadow-sm hover:shadow-lg">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-[#1d1d1f] mb-2">
                Essentials
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Everything you need to look professional online.
              </p>
            </div>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold tracking-tight text-[#1d1d1f]">
                €199
              </span>
              <span className="text-slate-500 font-medium">/month</span>
            </div>

            <a
              href="#"
              className="w-full text-center py-4 bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold rounded-full transition-all mb-10 text-[15px]"
            >
              Start Essentials
            </a>

            <div className="space-y-4 flex-grow">
              <Benefit text="Professional Website Design" />
              <Benefit text="Secure & Fast Hosting Included" />
              <Benefit text="Works on All Phones" />
              <Benefit text="Basic Google Maps Setup" />
              <Benefit text="Monthly Text Updates" />
            </div>
          </div>

          {/* Plan 2: Growth (Highlighted) */}
          <div className="bg-[#1d1d1f] rounded-[2rem] p-8 lg:p-12 flex flex-col relative shadow-2xl shadow-slate-900/20 transform lg:scale-[1.03] ring-1 ring-white/10">
            <div className="absolute top-6 right-8">
              <div className="flex items-center gap-1.5 bg-brand-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                <Star className="w-3 h-3 fill-white" /> Recommended
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Growth Partner
              </h3>
              <p className="text-slate-400 text-[15px] leading-relaxed">
                For clinics that want to actively get more patients.
              </p>
            </div>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold tracking-tight text-white">
                €349
              </span>
              <span className="text-slate-400 font-medium">/month</span>
            </div>

            <a
              href="#"
              className="w-full py-4 text-center  bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-full transition-all shadow-lg shadow-brand-500/25 mb-10 text-[15px]"
            >
              Start Growth Plan
            </a>

            <div className="space-y-4 flex-grow">
              <BenefitDark text="Everything in Essentials" />
              <BenefitDark text="Online Booking System" />
              <BenefitDark text="New Patient Forms" />
              <BenefitDark text="Google Review Automation" />
              <BenefitDark text="Priority Support (Direct Line)" />
              <BenefitDark text="Quarterly Strategy Call" />
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-16 font-medium">
          Have multiple locations?{" "}
          <a
            href="#contact"
            className="text-brand-600 hover:text-brand-700 underline font-semibold"
          >
            Get a custom quote
          </a>
          .
        </p>
      </div>
    </section>
  );
};

const Benefit: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3.5">
    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
    </div>
    <span className="text-slate-600 text-[15px] font-medium">{text}</span>
  </div>
);

const BenefitDark: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3.5">
    <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3 h-3 text-brand-400" strokeWidth={3} />
    </div>
    <span className="text-slate-300 text-[15px] font-medium">{text}</span>
  </div>
);
