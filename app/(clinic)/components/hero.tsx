import React from "react";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="max-w-2xl flex-1 text-center lg:text-left">
            <a
              href="https://muizrexhepi.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-8 mx-auto lg:mx-0 hover:bg-brand-100 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Specialized for Dental Clinics
            </a>

            <h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-6 leading-[1.05]">
              Turn your website into your best{" "}
              <span className="text-brand-500">receptionist.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Most clinic websites are just digital brochures. We build
              patient-focused engines that book appointments while you sleep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white text-[17px] font-bold rounded-full shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Get a Free Website Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#results"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[17px] font-bold rounded-full transition-all"
              >
                View Examples
              </a>
            </div>

            {/* Guarantee Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center lg:justify-start text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-500" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-brand-500" />
                <span>Trusted by Doctors in Europe & UAE</span>
              </div>
            </div>
          </div>

          {/* Visual Content: High Trust Mockup */}
          <div className="relative flex-1 w-full max-w-[600px] perspective-1000">
            {/* Soft Glow Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Main Browser Window */}
            <div className="relative bg-white rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden transform transition-all duration-700 hover:scale-[1.01]">
              {/* Browser Chrome */}
              <div className="bg-white px-5 py-4 border-b border-slate-100 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
                </div>
                <div className="bg-slate-50 flex-1 h-8 rounded-md mx-4 max-w-[240px] flex items-center justify-center border border-slate-100">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-[10px] font-medium text-slate-400">
                    Secure Medical Site
                  </span>
                </div>
              </div>

              {/* Abstract Website Content - Simplified for ICP */}
              <div className="relative bg-white">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                  alt="Modern Clinic Reception"
                  className="w-full h-64 object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        New Patient
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        Appointment Confirmed
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
