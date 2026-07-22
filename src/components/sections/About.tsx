"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Target, Eye } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden relative">
      {/* Abstract dark waves background texture */}
      <div 
        className="absolute inset-0 bg-[url('/dark-waves.png')] bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none z-0" 
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-[32px] overflow-hidden shadow-2xl border border-zinc-800">
              <img 
                src="/about-cctv.png" 
                alt="Advanced Surveillance Systems & Security Professionals"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-10 left-10 z-20 bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-zinc-800 max-w-[250px]"
              >
                <div className="flex items-center gap-4 text-[#38BDF8] mb-2">
                  <ShieldCheck className="w-10 h-10" />
                  <span className="text-3xl font-bold font-bebas text-white tracking-wide">10+</span>
                </div>
                <p className="text-sm font-medium text-slate-300">
                  Years of excellence in security and facility management
                </p>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#38BDF8]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#38BDF8]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block">
                About Our Company
              </span>
              <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight mb-6">
                Trusted Security Solutions Provider <br />
                <span className="text-[#38BDF8]">Since Day One</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-4 font-inter">
                Family Anchor Facilities Pvt. Ltd. is a premier provider of comprehensive security
                and facility management services. We specialize in protecting what matters most
                through advanced technology, rigorous training, and unwavering dedication.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed font-inter">
                From high-end residential complexes to sprawling industrial facilities, we deliver
                peace of mind tailored to your unique requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {/* Mission */}
              <div className="bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-800 hover:border-[#38BDF8]/40 transition-all">
                <Target className="w-8 h-8 text-[#38BDF8] mb-4" />
                <h3 className="text-2xl font-bebas text-white tracking-wider mb-2">Our Mission</h3>
                <p className="text-slate-300 text-sm font-inter">
                  To provide unparalleled security solutions that ensure safety, protect assets, and build trust.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-800 hover:border-[#38BDF8]/40 transition-all">
                <Eye className="w-8 h-8 text-[#38BDF8] mb-4" />
                <h3 className="text-2xl font-bebas text-white tracking-wider mb-2">Our Vision</h3>
                <p className="text-slate-300 text-sm font-inter">
                  To be the industry benchmark for innovative and reliable facility management globally.
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-4 mt-2">
              {[
                "Highly Trained Personnel",
                "Advanced Technology",
                "24/7 Monitoring",
                "Customized Solutions",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white font-bebas text-lg tracking-wider">
                  <CheckCircle2 className="w-5 h-5 text-[#38BDF8]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
