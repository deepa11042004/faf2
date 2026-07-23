"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Cctv, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Sliders, 
  Cpu, 
  Award, 
  Wrench, 
  Headset 
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProcessSection } from "@/components/sections/Process";
import { IndustriesSection } from "@/components/sections/Industries";

const SOLUTIONS = [
  "HD & Full HD CCTV Cameras",
  "IP & Network Cameras",
  "Wireless CCTV Systems",
  "PTZ (Pan-Tilt-Zoom) Cameras",
  "Night Vision Cameras",
  "Indoor & Outdoor Surveillance",
  "Video Recording (NVR/DVR)",
  "Mobile Remote Monitoring",
  "Cloud Storage Integration",
  "Annual Maintenance Contracts (AMC)"
];

const APPLICATIONS = [
  "Residential Apartments",
  "Corporate Offices",
  "Schools & Colleges",
  "Hospitals",
  "Hotels",
  "Warehouses",
  "Retail Stores",
  "Factories",
  "Shopping Malls",
  "Government Buildings"
];

const WHY_CHOOSE = [
  "Professional Installation",
  "High-Quality Equipment",
  "Remote Monitoring",
  "24×7 Surveillance",
  "Scalable Solutions",
  "Preventive Maintenance",
  "Quick Technical Support"
];

export default function CCTVServicePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0284C7] selection:text-white">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('/dark-waves.png')] bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-sm text-[#38BDF8] font-bebas tracking-widest uppercase mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <Link href="/services" className="hover:underline">Services</Link>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <span>CCTV Installation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bebas tracking-wide text-white mb-6">
              Secure Every Corner with <span className="text-[#38BDF8]">Advanced CCTV Surveillance</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-inter max-w-3xl mx-auto">
              End-to-end high-definition CCTV surveillance solutions designed to safeguard your home, business, and industrial premises 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase block">
                Professional Surveillance
              </span>
              <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-slate-900 leading-tight">
                Continuous 24/7 Monitoring & Asset Protection
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-inter">
                At <strong className="text-slate-900">Family Anchor Facilities Pvt. Ltd.</strong>, we provide end-to-end CCTV surveillance solutions designed to safeguard your home, business, and industrial premises. Our advanced security camera systems enable 24/7 monitoring, helping you prevent unauthorized access, monitor daily activities, and protect valuable assets.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed font-inter">
                Our team conducts a detailed site assessment to recommend the most suitable surveillance solution based on your property layout and security requirements. From installation and configuration to maintenance and technical support, we ensure seamless system performance and maximum reliability.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed font-inter">
                Whether you require a small residential setup or a large-scale surveillance network for commercial and industrial facilities, we deliver customized solutions using high-quality equipment and industry best practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[480px] rounded-[32px] overflow-hidden border-4 border-sky-300 shadow-2xl group"
            >
              <img 
                src="/about-cctv.png" 
                alt="CCTV Surveillance Cameras" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 text-white">
                <div className="flex items-center gap-3 text-[#38BDF8] mb-1">
                  <Cctv className="w-7 h-7" />
                  <span className="font-bebas text-2xl tracking-wide text-white">24/7 HD & Night Vision</span>
                </div>
                <p className="text-xs text-slate-300 font-inter">
                  Remote mobile live-view access and intelligent motion event recording.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Solutions & Features Grid */}
      <section className="py-24 bg-[url('/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight">
              Our CCTV Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SOLUTIONS.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border-2 border-sky-300 text-slate-900 flex items-center gap-4 shadow-lg hover:shadow-2xl hover:border-white transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] shrink-0 font-bebas text-lg">
                  {idx + 1}
                </div>
                <span className="font-bebas text-xl tracking-wide text-slate-900">{sol}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Why Choose Grid */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Applications */}
            <div className="bg-sky-50/80 rounded-[32px] p-10 border-2 border-sky-200">
              <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
                Coverage
              </span>
              <h3 className="text-4xl font-bebas tracking-wide text-slate-900 mb-6">Applications</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {APPLICATIONS.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700 font-inter">
                    <CheckCircle2 className="w-5 h-5 text-[#0284C7] shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Our CCTV Solutions? */}
            <div className="bg-[#0070c0] text-white rounded-[32px] p-10 border-2 border-[#38BDF8]/40 shadow-2xl">
              <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block">
                Why Us
              </span>
              <h3 className="text-4xl font-bebas tracking-wide text-white mb-6">Why Choose Our CCTV Solutions?</h3>
              <div className="space-y-4">
                {WHY_CHOOSE.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-blue-100 font-inter">
                    <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
                    <span className="text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Call To Action */}
      <section className="py-20 bg-gradient-to-r from-sky-50 via-slate-50 to-sky-50 text-slate-900 border-t border-sky-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
            Start Your Project
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 mb-6">
            Ready to Install Smart CCTV Surveillance?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-inter mb-8">
            Contact our engineering experts today for a free site assessment and customized CCTV quotation.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-3 bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-xl tracking-wider uppercase px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
            >
              <span>Contact Us Today</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
