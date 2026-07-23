"use client";

import { motion } from "framer-motion";
import { Users, HeadphonesIcon, Award, Cpu, DollarSign, CheckSquare, Zap, Wrench } from "lucide-react";

const reasons = [
  { icon: <Users className="w-8 h-8" />, title: "Experienced Team" },
  { icon: <HeadphonesIcon className="w-8 h-8" />, title: "24x7 Support" },
  { icon: <Award className="w-8 h-8" />, title: "Certified Professionals" },
  { icon: <Cpu className="w-8 h-8" />, title: "Latest Technology" },
  { icon: <DollarSign className="w-8 h-8" />, title: "Affordable Pricing" },
  { icon: <CheckSquare className="w-8 h-8" />, title: "Quality Assurance" },
  { icon: <Zap className="w-8 h-8" />, title: "Fast Installation" },
  { icon: <Wrench className="w-8 h-8" />, title: "AMC Support" },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Ambient background glow shapes for backdrop blur effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#0268aa]/20 rounded-full blur-3xl -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-3xl -translate-y-1/2 -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#4338CA] font-bebas text-lg tracking-widest uppercase mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0F172A] leading-tight mb-6">
            The Family Anchor Advantage
          </h2>
          <p className="text-slate-600 text-lg">
            We don't just provide security; we provide peace of mind through a relentless 
            commitment to excellence, innovation, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#0268aa]/55 backdrop-blur-xl p-6 rounded-[20px] shadow-2xl hover:shadow-2xl hover:scale-105 hover:bg-[#0268aa]/75 transition-all duration-300 border-2 border-[#0268aa] flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#0268aa] mb-4 group-hover:scale-110 group-hover:bg-[#0268aa] group-hover:text-white transition-all duration-300 shadow-md">
                {reason.icon}
              </div>
              <h3 className="font-bebas text-xl md:text-2xl text-white tracking-wider uppercase group-hover:text-white transition-colors drop-shadow">
                {reason.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
