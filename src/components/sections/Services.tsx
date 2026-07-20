"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cctv, Flame, Fingerprint, Mic, Shield } from "lucide-react";

const services = [
  {
    icon: <Cctv className="w-10 h-10" />,
    title: "CCTV Installation",
    description: "High-definition surveillance systems with remote monitoring capabilities.",
    image: "https://placehold.co/600x400/282425/11bdf2?text=CCTV",
  },
  {
    icon: <Flame className="w-10 h-10" />,
    title: "Fire Alarm System",
    description: "Advanced fire detection and alarm systems to ensure maximum safety.",
    image: "https://placehold.co/600x400/282425/11bdf2?text=Fire+Alarm",
  },
  {
    icon: <Fingerprint className="w-10 h-10" />,
    title: "Access Control System",
    description: "Biometric and card-based access control for restricted areas.",
    image: "https://placehold.co/600x400/282425/11bdf2?text=Access+Control",
  },
  {
    icon: <Mic className="w-10 h-10" />,
    title: "Public Address System",
    description: "Clear and reliable communication systems for large facilities.",
    image: "https://placehold.co/600x400/282425/11bdf2?text=PA+System",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Security Guard Services",
    description: "Highly trained and professional security personnel for all sectors.",
    image: "https://placehold.co/600x400/282425/11bdf2?text=Security+Guards",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#282425] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#11BDF2] font-semibold uppercase tracking-wider text-sm mb-2 block">
            Our Core Services
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight mb-6">
            Comprehensive Security & Facility Management
          </h2>
          <p className="text-slate-300 text-lg">
            We provide end-to-end solutions tailored to meet the unique challenges of your environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-[#2F2B2C] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 border border-white/5"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-md p-4 rounded-2xl text-white">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-poppins font-bold text-white mb-3 group-hover:text-[#11BDF2] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[#11BDF2] font-medium hover:gap-4 transition-all cursor-pointer">
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
