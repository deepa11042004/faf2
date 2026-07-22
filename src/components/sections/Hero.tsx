"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F4C81] via-[#1B6CA8] to-[#0D3B66] text-white">
      {/* Sweeping organic fluid wave overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-[140%] h-[140%] -top-[20%] -left-[20%] text-white"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-200 150 C300 450, 700 50, 1600 400 L1600 1100 L-200 1100 Z"
            fill="currentColor"
            fillOpacity="0.06"
          />
          <path
            d="M-200 300 C400 650, 850 150, 1700 550 L1700 1100 L-200 1100 Z"
            fill="currentColor"
            fillOpacity="0.04"
          />
          <path
            d="M-200 450 C500 800, 950 250, 1800 700 L1800 1100 L-200 1100 Z"
            fill="currentColor"
            fillOpacity="0.03"
          />
        </svg>

        {/* Soft glowing ambient light spheres */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#10B981]/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-32 lg:pt-36 pb-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md shadow-lg w-fit"
          >
            <Shield className="text-[#38BDF8] w-4 h-4" />
            <span className="font-bebas text-sm tracking-widest uppercase text-white">
              Top Rated Security Agency
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-poppins font-extrabold text-white leading-tight">
            Protecting <br />
            What <br />
            <span className="text-[#38BDF8] drop-shadow-md">
              Matters Most
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100/90 max-w-xl font-inter leading-relaxed">
            Delivering advanced surveillance systems, fire safety solutions,
            access control, and professional security services for homes, businesses,
            industries, and institutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-16">
            <Button variant="premium" size="lg" className="bg-[#38BDF8] hover:bg-[#0284C7] text-white border-none shadow-xl">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white">
              Explore Services
            </Button>
          </div>
        </motion.div>

        {/* Right Content - Full Header Expanded Security Guard Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[480px] md:h-[540px] lg:h-[580px] flex items-center justify-center"
        >
          {/* Expanded Hero Guard Image Container */}
          <div className="relative w-full h-full overflow-hidden shadow-2xl group">
            <img
              src="/hero-guard.jpg"
              alt="Professional Security Guard Saluting"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Live Status Badge on Bottom Left */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#10B981]"></span>
              </span>
              <span className="font-bebas text-base md:text-lg tracking-wider uppercase text-[#0F172A]">24/7 Active Security</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
