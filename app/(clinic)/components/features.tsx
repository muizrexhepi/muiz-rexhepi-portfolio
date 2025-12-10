import React from "react";
import { Smartphone, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "24/7 Online Booking",
    description:
      "Your reception desk closes at 5 PM. Your website shouldn't. Let patients book their own slots anytime.",
  },
  {
    icon: Smartphone,
    title: "Perfect on Mobile",
    description:
      "70% of patients look for dentists on their phones. We ensure your clinic looks professional on every device.",
  },
  {
    icon: MapPin,
    title: "Rank Higher on Maps",
    description:
      "We structure your site so Google knows exactly where you are, helping locals find you first.",
  },
  {
    icon: CheckCircle2,
    title: "Medical Compliance",
    description:
      "Secure forms and data protection standards built-in, so you don't have to worry about privacy.",
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Section Header */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl font-bold text-[#1d1d1f] mb-6 tracking-tight leading-[1.1]">
              More bookings.
              <br />
              Less phone tag.
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed font-normal">
              We replace complex technology with simple tools that help your
              front desk staff and delight your patients.
            </p>
            <div className="h-1 w-20 bg-brand-500 rounded-full"></div>
          </div>

          {/* Feature Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 text-brand-600">
                  <feature.icon className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#1d1d1f] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-normal text-[15px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
