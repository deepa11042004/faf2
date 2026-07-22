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
    <section className="py-12 bg-gradient-to-r from-[#4338CA] to-[#3B82F6] border-y border-slate-200 overflow-hidden text-white shadow-inner">
      <div className="container mx-auto px-4 text-center mb-8">
        <p className="text-sm font-bold text-white/90 uppercase tracking-widest">
          Trusted By Industry Leaders Across Sectors
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex w-[200%] animate-marquee">
          <div className="flex w-1/2 justify-around items-center space-x-8 px-4">
            {[...clients, ...clients].map((client, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-all duration-300 w-40 hover:scale-105 cursor-pointer"
              >
                {client.icon}
                <span className="font-poppins font-bold text-lg md:text-xl tracking-tight">
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
