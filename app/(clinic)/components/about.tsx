import React from "react";
import { Briefcase, MapPin } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-brand-600 font-bold tracking-wider text-xs uppercase mb-6">
              <span className="w-8 h-[2px] bg-brand-600"></span>
              About Your Partner
            </div>
            <h3 className="font-display text-4xl font-bold text-[#1d1d1f] mb-6">
              Hi, I'm Muiz Rexhepi.
            </h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                I help dental clinics across Europe and the UAE modernize their
                business.
              </p>
              <p>
                I noticed that many doctors are frustrated with agencies that
                are slow, expensive, and don't understand how a clinic actually
                works. You don't need "fancy code"—you need a reliable way for
                patients to find you and book appointments.
              </p>
              <p>
                When you work with me, you're not just getting a website. You're
                getting a dedicated partner who handles all the technical
                headaches so you can focus on treating patients.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-0.5">
                    Experience
                  </p>
                  <p className="text-[15px] font-bold text-slate-900">
                    4+ Years in Tech
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-0.5">
                    Based In
                  </p>
                  <p className="text-[15px] font-bold text-slate-900">
                    Europe & UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-brand-600 rounded-[2rem] transform rotate-3 scale-95 opacity-10"></div>
            {/* Use a placeholder that looks professional or the user's actual image if available */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white">
              <img
                src="/assets/images/profile.jpeg"
                alt="Muiz Rexhepi"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <p className="text-white font-bold text-xl">Muiz Rexhepi</p>
                <p className="text-white/80 text-sm font-medium">
                  Digital Specialist for Clinics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
