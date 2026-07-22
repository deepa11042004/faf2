"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Hospital, School, Warehouse, Hotel, ShoppingBag, Building2, Factory, Landmark } from "lucide-react";

const industries = [
  { name: "Residential", icon: <Home className="w-8 h-8" />, image: "https://placehold.co/600x400/282425/11bdf2?text=Residential" },
  { name: "Commercial", icon: <Briefcase className="w-8 h-8" />, image: "https://placehold.co/600x400/282425/11bdf2?text=Commercial" },
  { name: "Healthcare", icon: <Hospital className="w-8 h-8" />, image: "https://placehold.co/600x400/282425/11bdf2?text=Healthcare" },
  { name: "Education", icon: <School className="w-8 h-8" />, image: "https://placehold.co/600x400/282425/11bdf2?text=Education" },
  { name: "Warehouses", icon: <Warehouse className="w-8 h-8" />, image: "https://placehold.co/600x400/282425/11bdf2?text=Warehouses" },
  { name: "Hotels", icon: <Hotel className="w-8 h-8" />, image: "https://placehold.co/600x400/282425/11bdf2?text=Hotels" },
  { name: "Retail", icon: <ShoppingBag className="w-8 h-8" />, image: "https://placehold.co/600x400/282425/11bdf2?text=Retail" },
  { name: "Corporate Offices", icon: <Building2 className="w-8 h-8" />, image: "https://placehold.co/600x400/282425/11bdf2?text=Corporate+Offices" },
  { name: "Factories", icon: <Factory className="w-8 h-8" />, image: "https://placehold.co/600x400/282425/11bdf2?text=Factories" },
  { name: "Government", icon: <Landmark className="w-8 h-8" />, image: "https://placehold.co/600x400/282425/11bdf2?text=Government" },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#4338CA] font-bebas text-lg tracking-widest uppercase mb-2 block">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0F172A] leading-tight mb-6">
            Tailored Solutions for Every Sector
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden h-48 md:h-56 shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-slate-200/80 bg-white/80 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <img
                src={industry.image}
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-white text-center">
                <div className="mb-3 text-[#10B981] transform group-hover:-translate-y-2 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="font-poppins font-semibold text-lg leading-tight transform group-hover:translate-y-1 transition-transform duration-300">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
