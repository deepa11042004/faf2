"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Building, ShieldCheck, Clock } from "lucide-react";

const stats = [
  { icon: <Building size={32} />, value: 500, suffix: "+", label: "Projects" },
  { icon: <Users size={32} />, value: 100, suffix: "+", label: "Clients" },
  { icon: <ShieldCheck size={32} />, value: 50, suffix: "+", label: "Security Personnel" },
  { icon: <Clock size={32} />, value: 24, suffix: "x7", label: "Support" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Abstract dark waves background texture matching About section */}
      <div 
        className="absolute inset-0 bg-[url('/dark-waves.png')] bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none z-0" 
      />
      {/* Glow decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="relative group bg-sky-950/40 backdrop-blur-xl p-8 rounded-3xl border-4 border-[#38BDF8]/60 hover:border-[#38BDF8] shadow-[0_8px_30px_rgba(56,189,248,0.15)] hover:shadow-[0_20px_40px_rgba(56,189,248,0.3)] transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Subtle top gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Container with glowing effect */}
              <div className="relative mb-5">
                <div className="absolute inset-0 rounded-2xl bg-[#38BDF8]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-4 rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/40 group-hover:bg-[#38BDF8] group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-md">
                  {stat.icon}
                </div>
              </div>

              {/* Counter Value */}
              <div className="flex items-baseline text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 font-poppins">
                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span className="text-[#38BDF8] font-bold ml-0.5">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-slate-300 font-semibold tracking-wider text-xs uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
