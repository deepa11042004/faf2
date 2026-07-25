"use client";

import { motion } from "framer-motion";
import { Users, HeadphonesIcon, Award, Cpu, DollarSign, CheckSquare, Zap, Wrench } from "lucide-react";

const reasons = [
  { 
    icon: <Users className="w-10 h-10" />, 
    title: "Experienced Team",
    desc: "10+ years of security expertise and field-tested personnel."
  },
  { 
    icon: <HeadphonesIcon className="w-10 h-10" />, 
    title: "24x7 Support",
    desc: "Round-the-clock emergency response & live monitoring."
  },
  { 
    icon: <Award className="w-10 h-10" />, 
    title: "Certified Professionals",
    desc: "ISO 9001:2015 & PSARA government compliant safety officers."
  },
  { 
    icon: <Cpu className="w-10 h-10" />, 
    title: "Latest Technology",
    desc: "AI video analytics, smart sensors & biometric integration."
  },
  { 
    icon: <DollarSign className="w-10 h-10" />, 
    title: "Affordable Pricing",
    desc: "Transparent rates without hidden installation fees."
  },
  { 
    icon: <CheckSquare className="w-10 h-10" />, 
    title: "Quality Assurance",
    desc: "100% audited security protocols & stringent checks."
  },
  { 
    icon: <Zap className="w-10 h-10" />, 
    title: "Fast Installation",
    desc: "Rapid deployment & turnkey system commissioning."
  },
  { 
    icon: <Wrench className="w-10 h-10" />, 
    title: "AMC Support",
    desc: "Comprehensive annual maintenance contracts for total peace of mind."
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-sky-50/80 text-slate-900 border-y border-sky-200 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 leading-tight mb-6">
            The Family Anchor Advantage
          </h2>
          <p className="text-slate-600 text-lg font-inter leading-relaxed">
            We don't just provide security; we provide peace of mind through a relentless 
            commitment to excellence, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Brand Blue Bento Cards on Light Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="group relative bg-[#0284C7] text-white p-8 rounded-[28px] border-2 border-sky-400 shadow-xl hover:-translate-y-1.5 hover:bg-[#0369a1] hover:border-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-[#0284C7] transition-all duration-300 shadow-md text-white">
                  {reason.icon}
                </div>
                <h3 className="font-bebas text-2xl text-white tracking-wider uppercase mb-2">
                  {reason.title}
                </h3>
                <p className="text-blue-100/90 font-inter text-xs leading-relaxed font-medium">
                  {reason.desc}
                </p>
              </div>

              {/* Bottom accent strip */}
              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-[11px] font-bebas text-blue-200 tracking-widest uppercase">
                  Core Advantage 0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-300 group-hover:bg-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
