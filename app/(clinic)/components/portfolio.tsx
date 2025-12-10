import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    clinic: "Aura Dental Studio",
    location: "Berlin, Germany",
    stat: "+42%",
    statLabel: "New Patient Bookings",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    tags: ["Rebranding", "Booking System", "SEO"],
  },
  {
    clinic: "Dubai Smile Center",
    location: "Dubai, UAE",
    stat: "3.5x",
    statLabel: "ROI in 3 Months",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2148&auto=format&fit=crop",
    tags: ["Web Design", "Paid Ads Landing"],
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section
      id="examples"
      className="py-32 bg-[#FAFAFA] border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-[#1d1d1f] mb-6">
              Real results for real clinics.
            </h2>
            <p className="text-lg text-slate-500">
              We don't use templates. Every clinic gets a bespoke digital
              presence designed to outperform local competitors.
            </p>
          </div>
          {/* Optional: Add a 'View All' link here later if you have many projects */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Card */}
              <div className="relative aspect-[16/10] bg-slate-200 rounded-2xl overflow-hidden mb-8 shadow-sm group-hover:shadow-card-hover transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.clinic}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Stat Badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-slate-100 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-2xl font-bold text-brand-600 mb-0.5">
                    {project.stat}
                  </p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    {project.statLabel}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#1d1d1f] mb-2 group-hover:text-brand-600 transition-colors">
                    {project.clinic}
                  </h3>
                  <p className="text-slate-500 text-[15px] mb-4">
                    {project.location}
                  </p>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#1d1d1f] group-hover:border-[#1d1d1f] transition-all">
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
