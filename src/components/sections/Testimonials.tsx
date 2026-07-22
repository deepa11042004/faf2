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
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4338CA]/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#4338CA] font-bebas text-lg tracking-widest uppercase mb-2 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0F172A] leading-tight mb-6">
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
              className="bg-white/80 border border-slate-200/80 backdrop-blur-md p-8 rounded-[24px] relative group hover:shadow-2xl shadow-xl transition-all"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#4338CA]/10 group-hover:text-[#4338CA]/20 transition-colors" />
              <div className="flex items-center gap-1 mb-6 text-[#F59E0B]">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed italic relative z-10">
                "{testi.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center font-bold font-poppins shadow-sm">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[#0F172A]">{testi.name}</h4>
                  <p className="text-sm text-slate-500">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
