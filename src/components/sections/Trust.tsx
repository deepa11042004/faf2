"use client";

import { motion } from "framer-motion";
import { Building2, Factory, Hospital, School, Landmark, Hotel, Home, Briefcase } from "lucide-react";

const clients = [
  { name: "Residential", icon: <Home className="w-8 h-8" /> },
  { name: "Commercial", icon: <Briefcase className="w-8 h-8" /> },
  { name: "Industrial", icon: <Factory className="w-8 h-8" /> },
  { name: "Hospitals", icon: <Hospital className="w-8 h-8" /> },
  { name: "Schools", icon: <School className="w-8 h-8" /> },
  { name: "Banks", icon: <Landmark className="w-8 h-8" /> },
  { name: "Hotels", icon: <Hotel className="w-8 h-8" /> },
  { name: "Corporate", icon: <Building2 className="w-8 h-8" /> },
];

export function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="font-bebas text-3xl md:text-5xl tracking-widest text-[#0F172A] uppercase">
          Trusted By Industry Leaders Across Sectors
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group py-2">
        <div className="flex w-[200%] animate-marquee">
          <div className="flex w-1/2 justify-around items-center space-x-6 px-3">
            {[...clients, ...clients].map((client, idx) => (
              <div 
                key={idx} 
                className="w-36 h-36 md:w-40 md:h-40 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer shrink-0"
              >
                <div className="text-slate-800">
                  {client.icon}
                </div>
                <span className="font-bebas text-xl md:text-2xl text-[#0F172A] tracking-wider">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
