"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Flame, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  AlertTriangle 
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProcessSection } from "@/components/sections/Process";

const FIRE_SOLUTIONS = [
  "Fire Alarm System Installation",
  "Smoke Detectors",
  "Heat Detectors",
  "Manual Call Points",
  "Fire Alarm Control Panels",
  "Sounders & Sirens",
  "Emergency Exit Notifications",
  "Fire Safety Inspections",
  "Preventive Maintenance",
  "Annual Maintenance Contracts"
];

const INDUSTRIES = [
  "Commercial Buildings",
  "Hospitals",
  "Educational Institutions",
  "Hotels",
  "Warehouses",
  "Manufacturing Plants",
  "Retail Stores",
  "Residential Complexes"
];

const BENEFITS = [
  "Early Fire Detection",
  "Fast Emergency Response",
  "Reliable Alarm Systems",
  "Compliance with Safety Standards",
  "Reduced Property Damage",
  "Improved Occupant Safety"
];

export default function FireAlarmServicePage() {
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
              <span>Fire Alarm System</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bebas tracking-wide text-white mb-6">
              Intelligent Fire Detection & <span className="text-[#38BDF8]">Early Warning Solutions</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-inter max-w-3xl mx-auto">
              Advanced fire detection systems designed to detect smoke, heat, and fire hazards at the earliest stage to protect lives and property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
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
                Fire Protection & Compliance
              </span>
              <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-slate-900 leading-tight">
                Early Hazard Detection & Instant Alerting
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-inter">
                Protecting lives and property begins with early fire detection. <strong className="text-slate-900">Family Anchor Facilities Pvt. Ltd.</strong> offers advanced fire alarm systems that detect smoke, heat, and fire hazards at the earliest stage, allowing occupants to respond quickly and minimize potential damage.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed font-inter">
                We design, install, test, and maintain reliable fire detection systems that comply with industry standards and are suitable for commercial, industrial, and residential environments.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed font-inter border-l-4 border-[#0284C7] pl-4 italic bg-sky-50/80 py-3 rounded-r-xl">
                Our solutions integrate advanced sensors, control panels, alarm devices, and notification systems to provide comprehensive fire protection.
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
                src="/about-fire-alarm.jpg" 
                alt="Fire Alarm Smoke Detector System" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 text-white">
                <div className="flex items-center gap-3 text-[#38BDF8] mb-1">
                  <Flame className="w-7 h-7" />
                  <span className="font-bebas text-2xl tracking-wide text-white">Smoke & Heat Sensors</span>
                </div>
                <p className="text-xs text-slate-300 font-inter">
                  Instant audible alert triggers & central panel emergency broadcasting.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-[url('/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
              Offerings
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight">
              Our Fire Safety Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {FIRE_SOLUTIONS.map((sol, idx) => (
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

      {/* Industries & Benefits */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Industries */}
            <div className="bg-sky-50/80 rounded-[32px] p-10 border-2 border-sky-200">
              <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
                Sectors
              </span>
              <h3 className="text-4xl font-bebas tracking-wide text-slate-900 mb-6">Industries We Serve</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {INDUSTRIES.map((ind, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700 font-inter">
                    <CheckCircle2 className="w-5 h-5 text-[#0284C7] shrink-0" />
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#0070c0] text-white rounded-[32px] p-10 border-2 border-[#38BDF8]/40 shadow-2xl">
              <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block">
                Key Advantages
              </span>
              <h3 className="text-4xl font-bebas tracking-wide text-white mb-6">Benefits of Fire Alarm Systems</h3>
              <div className="space-y-4">
                {BENEFITS.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-blue-100 font-inter">
                    <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
                    <span className="text-base font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <ProcessSection />

      {/* Call To Action */}
      <section className="py-20 bg-gradient-to-r from-sky-50 via-slate-50 to-sky-50 text-slate-900 border-t border-sky-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
            Safety Compliance
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 mb-6">
            Ensure Fire Safety Compliance for Your Building
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-inter mb-8">
            Speak with our fire protection specialists today for system inspections, installation, and AMC support.
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
