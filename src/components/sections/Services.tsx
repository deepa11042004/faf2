"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cctv, Flame, Fingerprint, Mic, Shield } from "lucide-react";

const services = [
  {
    icon: <Cctv className="w-10 h-10" />,
    title: "CCTV Installation",
    description: "High-definition surveillance systems with remote monitoring capabilities.",
    image: "/cctv-service.png",
    href: "/services/cctv-installation"
  },
  {
    icon: <Flame className="w-10 h-10" />,
    title: "Fire Alarm System",
    description: "Advanced fire detection and alarm systems to ensure maximum safety.",
    image: "/fire-alarm-service.png",
    href: "/services/fire-alarm-system"
  },
  {
    icon: <Fingerprint className="w-10 h-10" />,
    title: "Access Control System",
    description: "Biometric and card-based access control for restricted areas.",
    image: "/access-control-service.png",
    href: "/services/access-control-system"
  },
  {
    icon: <Mic className="w-10 h-10" />,
    title: "Public Address System",
    description: "Clear and reliable communication systems for large facilities.",
    image: "/pa-system-service.png",
    href: "/services/public-address-system"
  },
  {
    icon: <Shield className="w-10 h-10 text-[#0284C7]" />,
    title: "Security Guard Services",
    description: "Highly trained and professional security personnel for all sectors.",
    image: "/guards-service.png",
    href: "/services/security-guard-services"
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[url('/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
            Our Core Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight mb-6">
            Comprehensive Security & Facility Management
          </h2>
          <p className="text-blue-100/90 text-lg md:text-xl font-inter">
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
              className="group relative bg-white/80 backdrop-blur-md rounded-[24px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/80 hover:border-[#0284C7]/40 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center border-b border-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${
                      service.image.startsWith("/") ? "object-contain p-4" : "object-cover"
                    }`}
                  />
                  <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl text-[#0284C7] shadow-lg border border-slate-200/80">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-poppins font-bold text-[#0F172A] mb-3 group-hover:text-[#0284C7] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <Link href={service.href} className="inline-flex items-center gap-2 text-[#0284C7] font-semibold hover:gap-4 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
