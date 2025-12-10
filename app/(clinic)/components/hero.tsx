import React from "react";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-widest mb-8 mx-auto lg:mx-0 hover:bg-brand-100 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Specialized for Dental Clinics
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Turn your website into your best{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                receptionist.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-slate-500 mb-8 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Most clinic websites are just digital brochures. We build
              patient-focused engines that book appointments while you sleep.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-12 justify-center lg:justify-start">
              <a
                href="#audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white text-[17px] font-semibold rounded-full shadow-lg shadow-brand-500/20 transition-all transform hover:-translate-y-1"
              >
                Get a Free Website Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#examples"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[17px] font-semibold rounded-full transition-all"
              >
                View Examples
              </a>
            </div>

            {/* Social Proof / Guarantee */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-500" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-brand-500 fill-current" />
                <span>Trusted by Doctors in Europe & UAE</span>
              </div>
            </div>
          </div>

          {/* --- Right Column: Visual Mockup --- */}
          <div className="relative flex-1 w-full max-w-[600px] lg:max-w-none">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-50/80 rounded-full blur-[100px] -z-10"></div>

            {/* Browser Window Container */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]">
              {/* Browser Toolbar */}
              <div className="bg-white px-4 sm:px-5 py-3 sm:py-4 border-b border-slate-100 flex items-center gap-4">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
                </div>
                <div className="bg-slate-50 flex-1 h-7 sm:h-8 rounded md:mx-4 max-w-[240px] flex items-center justify-center border border-slate-100">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-[10px] font-medium text-slate-400">
                    Secure Medical Site
                  </span>
                </div>
              </div>

              {/* Mockup Content */}
              <div className="relative bg-slate-50">
                {/* Hero Image in Mockup */}
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                  alt="Modern Clinic Reception"
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

                {/* Floating Notification Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-brand-600 uppercase tracking-wider mb-0.5">
                        New Patient
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Appointment Confirmed
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
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
