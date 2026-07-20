"use client";

import { motion } from "framer-motion";
import { Shield, Cctv, Flame, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingCards = [
  { icon: <Cctv size={24} />, title: "CCTV", delay: 0 },
  { icon: <Flame size={24} />, title: "Fire Alarm", delay: 0.2 },
  { icon: <Shield size={24} />, title: "Security Guard", delay: 0.4 },
  { icon: <Fingerprint size={24} />, title: "Access Control", delay: 0.6 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFFFF]">
      {/* Background overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#FFFFFF] opacity-90 z-0" />

      {/* Floating particles background effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/20 rounded-full blur-xl"
            style={{
              width: Math.random() * 100 + 50 + "px",
              height: Math.random() * 100 + 50 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-24">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-fit"
          >
            <Shield className="text-primary w-4 h-4" />
            <span className="text-xs font-semibold text-white tracking-widest uppercase">
              Top Rated Security Agency
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-poppins font-extrabold text-[#231F20] leading-tight">
            Protecting What <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#11BDF2] to-[#62D3F6]">
              Matters Most
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#282425]/80 max-w-xl font-inter leading-relaxed">
            Delivering advanced surveillance systems, fire safety solutions,
            access control, and professional security services for homes, businesses,
            industries, and institutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-16">
            <Button variant="premium" size="lg" className="bg-[#11BDF2]">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-[#231F20] border-[#231F20]/20">
              Explore Services
            </Button>
          </div>
        </motion.div>

        {/* Right Content - 3D/Floating Cards */}
        <div className="relative h-[500px] w-full hidden md:block">
          {floatingCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.8, ease: "easeOut" }}
              className={`absolute glass p-6 rounded-2xl flex flex-col items-center gap-4 hover:scale-110 transition-transform cursor-pointer
                ${index === 0 ? "top-[10%] left-[10%]" : ""}
                ${index === 1 ? "top-[5%] right-[15%]" : ""}
                ${index === 2 ? "bottom-[15%] left-[20%]" : ""}
                ${index === 3 ? "bottom-[20%] right-[10%]" : ""}
              `}
              style={{
                animation: `float ${3 + index}s ease-in-out infinite alternate`,
              }}
            >
              <div className="bg-primary/20 p-4 rounded-xl text-primary">
                {card.icon}
              </div>
              <span className="text-white font-medium whitespace-nowrap">{card.title}</span>
            </motion.div>
          ))}

          {/* Central Shield glowing */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full" />
              <Shield className="w-48 h-48 text-primary drop-shadow-[0_0_50px_rgba(8,169,230,0.8)]" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Global float animation injected for the floating cards */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
      `}} />
    </section>
  );
}
