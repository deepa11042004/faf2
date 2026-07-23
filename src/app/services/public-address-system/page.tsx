"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mic, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Volume2 
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProcessSection } from "@/components/sections/Process";

const PA_SERVICES = [
  "PA System Design",
  "Installation & Configuration",
  "Ceiling Speakers",
  "Horn Speakers",
  "Wall Speakers",
  "Wireless Microphones",
  "Amplifiers",
  "Audio Controllers",
  "Emergency Announcement Systems",
  "Zone-wise Audio Distribution"
];

const APPLICATIONS = [
  "Schools",
  "Colleges",
  "Hospitals",
  "Factories",
  "Hotels",
  "Shopping Malls",
  "Railway Stations",
  "Airports",
  "Office Buildings",
  "Industrial Plants"
];

const BENEFITS = [
  "Clear Communication",
  "Emergency Announcements",
  "Wide Audio Coverage",
  "High Sound Quality",
  "Easy Operation",
  "Reliable Performance"
];

export default function PASystemServicePage() {
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
              <span>Public Address System</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bebas tracking-wide text-white mb-6">
              Reliable Communication During <span className="text-[#38BDF8]">Everyday Operations & Emergencies</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-inter max-w-3xl mx-auto">
              Professionally designed Public Address Systems for routine voice communication, emergency evacuation broadcasting, and multi-zone audio management.
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
                Audio Distribution
              </span>
              <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-slate-900 leading-tight">
                Crystal Clear Audio & Emergency Broadcast Console
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-inter">
                A Public Address (PA) System plays a vital role in delivering clear voice announcements across large facilities. <strong className="text-slate-900">Family Anchor Facilities Pvt. Ltd.</strong> provides professionally designed PA systems for routine communication, emergency evacuation, public announcements, and event management.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed font-inter">
                We design customized audio distribution systems that ensure clear sound quality, wide coverage, and dependable performance.
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
                src="/about-pa-system.jpg" 
                alt="PA System Console Microphones" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 text-white">
                <div className="flex items-center gap-3 text-[#38BDF8] mb-1">
                  <Mic className="w-7 h-7" />
                  <span className="font-bebas text-2xl tracking-wide text-white">Multi-Zone Audio System</span>
                </div>
                <p className="text-xs text-slate-300 font-inter">
                  High-fidelity ceiling speakers, horn speakers, and digital amplifiers.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[url('/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight">
              Our PA System Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PA_SERVICES.map((sol, idx) => (
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

      {/* Applications & Benefits */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Applications */}
            <div className="bg-sky-50/80 rounded-[32px] p-10 border-2 border-sky-200">
              <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
                Deployment
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

            {/* Benefits */}
            <div className="bg-[#0070c0] text-white rounded-[32px] p-10 border-2 border-[#38BDF8]/40 shadow-2xl">
              <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block">
                Audio Advantages
              </span>
              <h3 className="text-4xl font-bebas tracking-wide text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {BENEFITS.map((ben, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-blue-100 font-inter">
                    <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
                    <span className="text-base font-medium">{ben}</span>
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
            Clear Sound Design
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 mb-6">
            Design Your Commercial PA Audio System
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-inter mb-8">
            Get in touch with our audio engineers for acoustics layout, speaker placement, and emergency announcement integration.
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
