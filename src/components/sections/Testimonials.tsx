"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Facility Manager, TechPark",
    content: "Family Anchor has completely transformed our security operations. Their personnel are highly professional and the tech integration is seamless.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Resident Association President",
    content: "We hired them for our residential complex. The 24/7 support and quick response time give us incredible peace of mind.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Operations Director, Manufacturing Corp",
    content: "The fire alarm and access control systems they installed are top-notch. Truly a premium service provider.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Dark waves background texture matching About section */}
      <div 
        className="absolute inset-0 bg-[url('/dark-waves.png')] bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none z-0" 
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-zinc-900/80 border border-zinc-800 backdrop-blur-md p-8 rounded-[24px] relative group hover:border-[#38BDF8]/40 hover:shadow-2xl shadow-xl transition-all"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#38BDF8]/20 group-hover:text-[#38BDF8]/40 transition-colors" />
              <div className="flex items-center gap-1 mb-6 text-[#F59E0B]">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed italic relative z-10 font-inter">
                "{testi.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 flex items-center justify-center font-bold font-bebas text-xl shadow-sm">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bebas text-lg tracking-wide text-white">{testi.name}</h4>
                  <p className="text-sm text-slate-400 font-inter">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
