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
    <section className="py-12 md:py-16 bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden">
      {/* ISO & Authority Compliance Badge Bar */}
      <div className="container mx-auto px-4 mb-10">
        {/* 
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10 pb-8 border-b border-slate-200/80">
          <div className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-sky-200 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bebas text-sm md:text-base tracking-widest text-slate-800 uppercase font-bold">
              ISO 9001:2015 Certified
            </span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-sky-200 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]" />
            <span className="font-bebas text-sm md:text-base tracking-widest text-slate-800 uppercase font-bold">
              PSARA Govt. Compliant
            </span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-sky-200 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="font-bebas text-sm md:text-base tracking-widest text-slate-800 uppercase font-bold">
              MSME Govt. Registered
            </span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-sky-200 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span className="font-bebas text-sm md:text-base tracking-widest text-slate-800 uppercase font-bold">
              100% Quality Audited
            </span>
          </div>
        </div>
        */}

        <h2 className="font-bebas text-3xl md:text-5xl tracking-widest text-[#0F172A] uppercase text-center">
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
