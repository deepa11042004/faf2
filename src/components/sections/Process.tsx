"use client";

import { motion } from "framer-motion";
import { ClipboardList, Map, PenTool, Wrench, ShieldAlert, Headphones } from "lucide-react";

const processSteps = [
  { icon: <ClipboardList />, title: "Requirement Analysis" },
  { icon: <Map />, title: "Site Survey" },
  { icon: <PenTool />, title: "Planning" },
  { icon: <Wrench />, title: "Installation" },
  { icon: <ShieldAlert />, title: "Testing" },
  { icon: <Headphones />, title: "Support" },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#4338CA] font-bebas text-lg tracking-widest uppercase mb-2 block">
            Our Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0F172A] leading-tight mb-6">
            A Proven Process for Success
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#4338CA] to-[#10B981] origin-left -translate-y-1/2 z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-md shadow-xl border border-slate-200/80 flex items-center justify-center text-[#4338CA] group-hover:scale-110 transition-transform duration-300 mb-4 relative">
                  {step.icon}
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-poppins font-semibold text-[#0F172A] text-sm md:text-base px-2">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
