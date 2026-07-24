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
    <section className="py-20 bg-[url('/images/backgrounds/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
      
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
              className="relative group bg-white/95 backdrop-blur-xl p-8 rounded-3xl border-4 border-sky-300 hover:border-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Subtle top gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-600 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Container with glowing effect */}
              <div className="relative mb-5">
                <div className="absolute inset-0 rounded-2xl bg-sky-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-4 rounded-2xl bg-sky-50 text-[#0284C7] border border-sky-200 group-hover:bg-[#0284C7] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md">
                  {stat.icon}
                </div>
              </div>

              {/* Counter Value */}
              <div className="flex items-baseline text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-2 font-poppins">
                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span className="text-[#0284C7] font-bold ml-0.5">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-slate-600 font-semibold tracking-wider text-xs uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
