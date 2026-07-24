"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Briefcase, Hospital, School, Warehouse, Hotel, ShoppingBag, Building2, Factory, Landmark } from "lucide-react";

const industries = [
  { name: "Residential", icon: <Home className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" },
  { name: "Commercial", icon: <Briefcase className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
  { name: "Healthcare", icon: <Hospital className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80" },
  { name: "Education", icon: <School className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" },
  { name: "Warehouses", icon: <Warehouse className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
  { name: "Hotels", icon: <Hotel className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
  { name: "Retail", icon: <ShoppingBag className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" },
  { name: "Corporate Offices", icon: <Building2 className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
  { name: "Factories", icon: <Factory className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { name: "Government", icon: <Landmark className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=800&q=80" },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-[url('/images/backgrounds/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight mb-6">
            Tailored Solutions for Every Sector
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, idx) => (
            <Link key={idx} href="/industries">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="group relative bg-white/80 backdrop-blur-md rounded-[24px] overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-slate-200/80 hover:border-[#0284C7]/40 flex flex-col justify-between h-full cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden bg-white flex items-center justify-center border-b border-slate-100">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-5 text-center flex-1 flex items-center justify-center">
                  <h3 className="text-xl md:text-2xl font-bebas tracking-wider text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                    {industry.name}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
