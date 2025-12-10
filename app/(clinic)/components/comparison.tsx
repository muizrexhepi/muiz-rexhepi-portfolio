import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

export const Comparison: React.FC = () => {
  return (
    <section
      id="results"
      className="py-32 bg-[#FAFAFA] overflow-hidden border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
            Is your website losing patients?
          </h2>
          <p className="text-lg text-slate-500 font-normal">
            Patients judge your clinical quality by your digital quality. Don't
            let a bad website send them to your competitor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Before Card (Bad UI) */}
          <div className="flex flex-col group opacity-90 hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                Typical "Old" Clinic Site
              </span>
            </div>

            {/* Image Container with "Tab Cutoff" Logic */}
            <div className="flex-grow bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative aspect-[4/3] shadow-inner">
              {/* 
                      NOTE: The '-mt-12' class below pulls the image up by 48px. 
                      This hides the browser tabs/address bar from your screenshot.
                      Replace the src below with your actual "Bad UI" screenshot URL.
                    */}
              <img
                src="/assets/images/clinicOld.png"
                alt="Outdated dental website design"
                className="w-full h-full object-cover object-top grayscale opacity-80"
              />
              {/* Overlay to make it look 'inactive' */}
              <div className="absolute inset-0 bg-slate-200/10 pointer-events-none"></div>
            </div>

            <div className="mt-6 px-1 space-y-2">
              <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>{" "}
                Hard to find phone number
              </p>
              <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>{" "}
                Looks broken on mobile phones
              </p>
              <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>{" "}
                Slow loading frustrates patients
              </p>
            </div>
          </div>

          {/* After Card (Good UI) */}
          <div className="flex flex-col relative">
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                The ClinicFlow Standard
              </span>
            </div>

            {/* Image Container with "Tab Cutoff" Logic */}
            <div className="flex-grow bg-white rounded-2xl border border-slate-200 overflow-hidden relative aspect-[4/3] shadow-2xl shadow-brand-500/10 ring-4 ring-brand-500/5 transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/assets/images/clinicModern.png"
                alt="Modern ClinicFlow design"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
            </div>

            <div className="mt-6 px-1 space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#1d1d1f] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                Clear "Book Now" buttons everywhere
              </div>
              <div className="flex items-center gap-2 text-sm text-[#1d1d1f] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                Loads instantly on any device
              </div>
              <div className="flex items-center gap-2 text-sm text-[#1d1d1f] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                Builds immediate trust with new patients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
