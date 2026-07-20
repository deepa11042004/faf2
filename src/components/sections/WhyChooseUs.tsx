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
    <section className="py-24 bg-[#2F2B2C] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#11BDF2] font-semibold uppercase tracking-wider text-sm mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight mb-6">
            The Family Anchor Advantage
          </h2>
          <p className="text-slate-300 text-lg">
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
              className="bg-[#231F20] p-6 rounded-[20px] shadow-sm hover:shadow-xl transition-all duration-300 border border-white/10 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#2F2B2C] flex items-center justify-center text-[#11BDF2] mb-4 group-hover:scale-110 group-hover:bg-[#11BDF2] group-hover:text-white transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="font-poppins font-semibold text-white group-hover:text-[#11BDF2] transition-colors">
                {reason.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
