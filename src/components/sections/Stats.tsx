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
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.15)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-4 group bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="p-4 bg-emerald-50 rounded-2xl text-[#10B981] border border-emerald-100 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <div className="flex items-center text-4xl md:text-5xl font-poppins font-bold text-[#0F172A]">
                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                <span className="text-[#4338CA]">{stat.suffix}</span>
              </div>
              <p className="text-slate-600 font-semibold uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
