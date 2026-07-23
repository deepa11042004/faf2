"use client";

import { motion } from "framer-motion";
import { FileSearch, Compass, Layers, Cpu, ShieldCheck, Headset } from "lucide-react";

const processSteps = [
  { icon: <FileSearch className="w-8 h-8 stroke-[1.75]" />, title: "Requirement Analysis" },
  { icon: <Compass className="w-8 h-8 stroke-[1.75]" />, title: "Site Survey" },
  { icon: <Layers className="w-8 h-8 stroke-[1.75]" />, title: "Planning" },
  { icon: <Cpu className="w-8 h-8 stroke-[1.75]" />, title: "Installation" },
  { icon: <ShieldCheck className="w-8 h-8 stroke-[1.75]" />, title: "Testing" },
  { icon: <Headset className="w-8 h-8 stroke-[1.75]" />, title: "Support" },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Dark waves background texture matching About section */}
      <div 
        className="absolute inset-0 bg-[url('/dark-waves.png')] bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none z-0" 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block">
            Our Workflow
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight mb-6">
            A Proven Process for Success
          </h2>
        </div>

        <div className="relative">
          {/* Base Track Line centered at circle mid-height (top-10 / 40px) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[3px] bg-zinc-800 -translate-y-1/2 z-0" />
          
          {/* Animated Blue Line moving left-to-right on scroll into view */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block absolute top-10 left-0 right-0 h-[4px] bg-[#0077ff] shadow-[0_0_20px_#0077ff,0_0_8px_#38BDF8] origin-left -translate-y-1/2 z-0"
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
                <div className="w-20 h-20 rounded-full bg-zinc-950 backdrop-blur-xl border-2 border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.35)] flex items-center justify-center text-[#38BDF8] group-hover:scale-110 group-hover:bg-[#38BDF8] group-hover:text-black transition-all duration-300 mb-4 relative">
                  {step.icon}
                </div>
                <h3 className="font-bebas tracking-wider text-white text-base md:text-lg px-2">
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
