"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Cctv, 
  Flame, 
  Fingerprint, 
  Mic, 
  Shield, 
  Layers, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Sliders, 
  Cpu, 
  Award, 
  Wrench, 
  Headset, 
  FileCheck 
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProcessSection } from "@/components/sections/Process";

const COMPLETED_PROJECTS_LIST = [
  "CCTV Surveillance System Installations",
  "Fire Alarm System Deployments",
  "Access Control System Implementations",
  "Public Address (PA) System Installations",
  "Professional Security Guard Services",
  "Integrated Security Solutions"
];

const GALLERY_IMAGES = [
  { title: "CCTV Camera Installations", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80" },
  { title: "Control Room Setups", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" },
  { title: "Fire Alarm System Installations", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { title: "Access Control Devices", image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80" },
  { title: "Public Address Systems", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" },
  { title: "Security Guard Deployment", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
  { title: "Commercial Building Security", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
  { title: "Residential Security Projects", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" },
  { title: "Industrial Security Solutions", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" },
  { title: "Warehouse Surveillance Systems", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" }
];

const EXECUTION_STEPS = [
  "Requirement Analysis",
  "Site Inspection",
  "Security Risk Assessment",
  "Solution Design",
  "Equipment Selection",
  "Professional Installation",
  "System Configuration",
  "Testing & Commissioning",
  "Client Training",
  "Ongoing Maintenance & Support"
];

const LOCATIONS = [
  "Delhi",
  "Noida",
  "Greater Noida",
  "Gurugram",
  "Faridabad",
  "Ghaziabad",
  "Sonipat",
  "Bahadurgarh",
  "Nearby cities and industrial zones"
];

const CATEGORIES = [
  {
    title: "CCTV Installation",
    desc: "Advanced surveillance systems for residential, commercial, and industrial properties.",
    icon: <Cctv className="w-7 h-7 text-[#0070c0]" />
  },
  {
    title: "Fire Alarm System",
    desc: "Comprehensive fire detection and alarm solutions designed to protect lives and property.",
    icon: <Flame className="w-7 h-7 text-[#0070c0]" />
  },
  {
    title: "Access Control System",
    desc: "Modern biometric, RFID, and smart access solutions for secure entry management.",
    icon: <Fingerprint className="w-7 h-7 text-[#0070c0]" />
  },
  {
    title: "Public Address (PA) System",
    desc: "Professional audio communication systems for announcements, emergency alerts, and public information.",
    icon: <Mic className="w-7 h-7 text-[#0070c0]" />
  },
  {
    title: "Security Guard Services",
    desc: "Deployment of trained and professional security personnel for residential, commercial, industrial, and institutional facilities.",
    icon: <Shield className="w-7 h-7 text-[#0070c0]" />
  },
  {
    title: "Integrated Security Solutions",
    desc: "Complete security infrastructure combining surveillance, access control, fire safety, communication systems, and on-site security personnel into a single, unified solution.",
    icon: <Layers className="w-7 h-7 text-[#0070c0]" />
  }
];

const WHY_TRUST_PROJECTS = [
  "Customized Security Solutions",
  "Professional Project Planning",
  "Experienced Installation Team",
  "High-Quality Equipment",
  "On-Time Project Delivery",
  "Industry Standard Installation Practices",
  "Comprehensive Testing & Quality Assurance",
  "Dedicated After-Sales Support",
  "Annual Maintenance Services (AMC)",
  "Long-Term Customer Relationships"
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0284C7] selection:text-white">
      <Navbar />

      {/* Hero Header Banner */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/dark-waves.png')] bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none z-0" />
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
              <span>Our Projects</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bebas tracking-wide text-white mb-6">
              Delivering Trusted Security Solutions Across <span className="text-[#38BDF8]">Diverse Industries</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-inter max-w-3xl mx-auto">
              At Family Anchor Facilities Pvt. Ltd., every project reflects our commitment to quality, reliability, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Intro Section */}
      <section className="py-20 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
            End-To-End Execution
          </span>
          <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-slate-900 mb-6">
            Proven Security Infrastructures & Turnkey Deployments
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-inter mb-4">
            We have successfully delivered customized security and facility management solutions for residential communities, commercial establishments, industrial facilities, educational institutions, healthcare organizations, hospitality businesses, warehouses, and government sectors.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed font-inter">
            Our experienced team manages every stage of the project—from site assessment and solution design to installation, testing, and ongoing support.
          </p>
        </div>
      </section>

      {/* Completed Projects Highlight Section */}
      <section className="py-24 bg-[url('/images/backgrounds/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight">
              Completed Projects
            </h2>
            <p className="text-blue-100/90 text-lg font-inter mt-3">
              Each project demonstrates our expertise in delivering reliable security systems and professional services with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {COMPLETED_PROJECTS_LIST.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border-2 border-sky-300 text-slate-900 flex items-center gap-4 shadow-lg hover:shadow-2xl hover:border-white transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] shrink-0 font-bebas text-lg">
                  {idx + 1}
                </div>
                <span className="font-bebas text-xl tracking-wide text-slate-900">{proj}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Grid */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
              Visual Showcase
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 leading-tight">
              Project Gallery
            </h2>
            <p className="text-slate-600 text-lg font-inter mt-3">
              Each image highlights our installation quality, equipment excellence, and field deployment standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {GALLERY_IMAGES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="group relative h-64 rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 hover:border-[#0284C7] transition-all"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 flex items-end">
                  <span className="font-bebas text-lg tracking-wide text-white drop-shadow">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Description & Execution Methodology */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block">
                Execution Quality
              </span>
              <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-white mb-6">
                Thorough Security Risk Assessment & Custom Deployment
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-inter mb-6">
                Each project begins with a thorough understanding of the client's security requirements. Our team conducts a detailed site survey, identifies potential risks, and designs a customized security solution that aligns with operational needs and industry standards.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed font-inter">
                Whether it's a single-site installation or a comprehensive multi-location security deployment, we focus on delivering dependable, scalable, and future-ready security solutions.
              </p>
            </div>

            <div className="bg-zinc-950 p-8 md:p-10 rounded-[32px] border border-zinc-800 shadow-2xl">
              <h3 className="font-bebas text-3xl tracking-wide text-[#38BDF8] mb-6">
                Our Project Execution Process
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {EXECUTION_STEPS.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-200 text-sm font-inter">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Project Locations */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-sky-50/80 rounded-[32px] p-10 md:p-12 border-2 border-sky-200 shadow-xl text-center">
            <div className="inline-flex items-center justify-center p-4 bg-[#0284C7] text-white rounded-2xl mb-4 shadow-md">
              <MapPin className="w-8 h-8" />
            </div>
            <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
              Regional Coverage
            </span>
            <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-slate-900 mb-6">
              Serving Delhi NCR & Surrounding Regions
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-inter mb-8">
              We proudly provide security solutions across Delhi NCR and surrounding regions, serving businesses, institutions, and residential communities with reliable and professional security services.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {LOCATIONS.map((loc, idx) => (
                <span 
                  key={idx}
                  className="bg-white border border-sky-300 text-slate-800 font-bebas text-lg tracking-wider uppercase px-5 py-2 rounded-full shadow-sm"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories Grid */}
      <section className="py-24 bg-[url('/images/backgrounds/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
              Specializations
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight">
              Project Categories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white text-slate-900 p-8 rounded-[28px] border-4 border-sky-300 shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="p-4 rounded-2xl bg-sky-50 text-[#0070c0] w-fit mb-6 shadow-md border border-sky-200 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-bebas text-2xl tracking-wide text-slate-900 mb-3">{cat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-inter">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Project Approach */}
      <ProcessSection />

      {/* Why Clients Trust Our Projects */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
              Proven Track Record
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 leading-tight">
              Why Clients Trust Our Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {WHY_TRUST_PROJECTS.map((trust, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-sky-50/80 p-5 rounded-2xl border border-sky-200 flex items-center gap-3 text-slate-800 font-inter font-medium"
              >
                <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0" />
                <span>{trust}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-50 via-slate-50 to-sky-50 text-slate-900 border-t border-sky-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
            Build Together
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 mb-6">
            Let's Build a Safer Future Together
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-inter mb-8">
            Every project we complete reflects our commitment to delivering reliable, technology-driven, and customer-focused security solutions.
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
