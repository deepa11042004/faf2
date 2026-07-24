"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Headset, 
  Eye, 
  Building2, 
  Home, 
  Factory, 
  GraduationCap, 
  HeartPulse, 
  Warehouse, 
  Landmark, 
  Hotel, 
  HelpCircle, 
  ChevronDown, 
  Send, 
  Sparkles, 
  Wifi, 
  Lock, 
  FileText, 
  Zap, 
  Video 
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// 1. Key Benefits
const KEY_BENEFITS = [
  "HD & 4K Ultra HD Video Quality",
  "24×7 Continuous Monitoring",
  "AI-Powered Video Analytics",
  "Mobile Remote Viewing",
  "Motion Detection Alerts",
  "Night Vision Surveillance",
  "Cloud & Local Storage",
  "Professional Installation",
  "Annual Maintenance Contracts",
  "24×7 Technical Support"
];

// 2. Camera Categories Data with images, descriptions, best for, and features
const CAMERA_CATEGORIES = [
  {
    title: "Dome Cameras",
    desc: "Ideal for indoor surveillance where aesthetics and wide-angle coverage are important.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    bestFor: ["Offices", "Retail Stores", "Hospitals", "Schools", "Hotels"],
    features: ["Compact Design", "Vandal Resistant", "Infrared Night Vision", "Wide Viewing Angle", "Indoor & Outdoor Models"]
  },
  {
    title: "Bullet Cameras",
    desc: "Designed for long-range outdoor surveillance with high-visibility deterrence.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    bestFor: ["Parking Areas", "Building Perimeters", "Warehouses", "Industrial Facilities"],
    features: ["Long-Distance Monitoring", "Weatherproof Housing", "HD Recording", "Infrared Night Vision", "Easy Wall Mounting"]
  },
  {
    title: "PTZ Cameras",
    desc: "Monitor large areas with remote control, motorized optical zoom, and intelligent tracking.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    bestFor: ["Airports", "Stadiums", "Industrial Plants", "Large Campuses"],
    features: ["360° Rotation", "Optical Zoom", "Auto Tracking", "Remote Operation", "Large Area Coverage"]
  },
  {
    title: "Turret Cameras",
    desc: "A versatile option for homes and businesses with flexible installation angles and zero IR reflection.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    bestFor: ["Homes", "Shops", "Offices"],
    features: ["Easy Angle Adjustment", "High Image Quality", "Low IR Reflection", "Compact Design"]
  },
  {
    title: "Fisheye Cameras",
    desc: "Capture 180° to 360° panoramic views with a single camera and digital dewarping.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    bestFor: ["Shopping Malls", "Conference Rooms", "Banks"],
    features: ["180°–360° Coverage", "Panoramic View", "Digital Dewarping"]
  },
  {
    title: "Box Cameras",
    desc: "Professional-grade cameras for high-security environments requiring custom specialized optics.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    bestFor: ["Banks", "Warehouses", "Critical Infrastructure"],
    features: ["Long-Distance Monitoring", "Interchangeable Lens", "High Performance"]
  },
  {
    title: "Wireless Cameras",
    desc: "Simple cable-free installation with direct Wi-Fi connectivity and mobile streaming.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    bestFor: ["Homes", "Small Offices"],
    features: ["Wi-Fi Connectivity", "Mobile Monitoring", "Cloud Recording", "Easy Installation"]
  },
  {
    title: "IP Cameras",
    desc: "Network-based PoE surveillance streaming 4K video with integrated AI analytics.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    bestFor: ["Corporate Offices", "Commercial Buildings", "Smart Campuses"],
    features: ["High Resolution", "Remote Monitoring", "PoE Support", "AI Integration"]
  }
];

// 3. Available CCTV Technologies
const TECHNOLOGIES = [
  "Analog CCTV",
  "HD Analog CCTV",
  "IP Surveillance",
  "Wireless CCTV",
  "PoE Cameras",
  "AI Smart Cameras",
  "Thermal Cameras",
  "Facial Recognition Cameras",
  "Number Plate Recognition (ANPR)",
  "Solar CCTV Systems",
  "Color Night Vision Cameras"
];

// 4. Smart AI Features
const SMART_AI_FEATURES = [
  "Motion Detection",
  "Human Detection",
  "Vehicle Detection",
  "Facial Recognition",
  "Number Plate Recognition",
  "Line Crossing Detection",
  "Intrusion Detection",
  "Auto Tracking",
  "Tamper Detection",
  "Privacy Masking",
  "Smart Notifications"
];

// 5. Industry Deployments
const INDUSTRIES_SOLUTIONS = [
  { title: "Residential Security", desc: "Protect homes, villas, apartments, and gated communities with reliable surveillance.", icon: <Home className="w-6 h-6 text-[#0284C7]" /> },
  { title: "Commercial Security", desc: "Monitor offices, retail stores, shopping malls, and business centers.", icon: <Building2 className="w-6 h-6 text-[#0284C7]" /> },
  { title: "Industrial Security", desc: "Secure factories, manufacturing units, warehouses, and logistics centers.", icon: <Factory className="w-6 h-6 text-[#0284C7]" /> },
  { title: "Educational Institutions", desc: "Ensure campus safety with surveillance and centralized monitoring.", icon: <GraduationCap className="w-6 h-6 text-[#0284C7]" /> },
  { title: "Healthcare Facilities", desc: "Protect patients, staff, and critical medical infrastructure.", icon: <HeartPulse className="w-6 h-6 text-[#0284C7]" /> },
  { title: "Hospitality", desc: "Monitor hotels, resorts, and banquet halls seamlessly.", icon: <Hotel className="w-6 h-6 text-[#0284C7]" /> },
  { title: "Warehouses & Logistics", desc: "Prevent theft and monitor inventory loading dock movement.", icon: <Warehouse className="w-6 h-6 text-[#0284C7]" /> },
  { title: "Government & Public", desc: "Reliable surveillance for administrative buildings and public infrastructure.", icon: <Landmark className="w-6 h-6 text-[#0284C7]" /> }
];

// 6. Installation Process Steps
const INSTALLATION_PROCESS = [
  { step: "01", title: "Requirement Consultation", desc: "Understanding your security needs, coverage area, and business objectives." },
  { step: "02", title: "Site Survey", desc: "Inspecting physical layout, lighting conditions, and identifying security vulnerabilities." },
  { step: "03", title: "Security Planning", desc: "Designing a customized CCTV layout with optimal camera placement and angle mapping." },
  { step: "04", title: "Professional Installation", desc: "Mounting cameras, laying conduit cabling, configuring NVR/DVR units, and network switches." },
  { step: "05", title: "Configuration & Testing", desc: "Setting up motion alerts, mobile remote access, cloud storage, and testing night vision." },
  { step: "06", title: "Training & Handover", desc: "Training your staff on system operation, live view playback, and delivering complete documentation." },
  { step: "07", title: "AMC & Support", desc: "Preventive maintenance, periodic lens cleaning, firmware updates, and 24/7 technical repair." }
];

// 7. Why Choose Family Anchor Facilities
const WHY_FAF = [
  { title: "Experienced Professionals", desc: "Certified technicians with extensive experience in CCTV installation and maintenance." },
  { title: "Premium Equipment", desc: "We work with top-tier trusted brands to ensure reliable performance and long-term durability." },
  { title: "Customized Solutions", desc: "Every project is tailored to your property's layout, risk level, and operational requirements." },
  { title: "End-to-End Service", desc: "From consultation and design to installation and maintenance, we provide complete security solutions." },
  { title: "Ongoing Support", desc: "Dedicated technical assistance, preventive health checks, and Annual Maintenance Contracts (AMC)." }
];

// 8. FAQ Accordion Items
const FAQS = [
  {
    q: "Which CCTV camera is best for my property?",
    a: "The right camera depends on your property size, lighting conditions, coverage requirements, and security objectives. Our experts conduct a free site survey to recommend the most suitable solution."
  },
  {
    q: "Can I monitor my CCTV cameras remotely?",
    a: "Yes. Most of our CCTV systems support secure remote viewing through mobile applications (iOS/Android) and web browsers, allowing you to monitor your property anytime, anywhere."
  },
  {
    q: "Do you provide maintenance services?",
    a: "Yes. We offer Annual Maintenance Contracts (AMC), preventive maintenance, repairs, firmware updates, lens cleaning, and 24/7 technical support."
  },
  {
    q: "How long are recordings stored?",
    a: "Storage duration depends on factors such as the number of cameras, recording resolution, recording mode (continuous vs motion-based), and hard drive capacity. We help configure a solution that meets your operational and compliance requirements."
  }
];

export default function CctvInstallationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0284C7] selection:text-white">
      <Navbar />

      {/* Hero Section */}
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
              Professional <span className="text-[#38BDF8]">CCTV Installation</span> Services
            </h1>
            
            <p className="text-[#38BDF8] font-bebas text-2xl tracking-wider uppercase mb-4">
              Protect What Matters Most with Intelligent Surveillance Solutions
            </p>
            
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-inter max-w-3xl mx-auto mb-8">
              Secure your home, office, factory, warehouse, or commercial property with advanced CCTV surveillance systems from <strong>Family Anchor Facilities Pvt. Ltd.</strong> We provide end-to-end CCTV solutions, including consultation, system design, installation, configuration, maintenance, and Annual Maintenance Contracts (AMC).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-xl tracking-wider uppercase px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
              >
                <span>Get Free Site Survey</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bebas text-xl tracking-wider uppercase px-8 py-4 rounded-full border border-white/20 backdrop-blur-md transition-all"
              >
                <span>Request a Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our CCTV Solutions? */}
      <section className="py-20 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
              Smart Surveillance
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 leading-tight">
              Why Choose Our CCTV Solutions?
            </h2>
            <p className="text-slate-600 text-lg font-inter mt-3">
              We combine advanced surveillance technology with professional installation services to deliver reliable and scalable CCTV systems for every environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {KEY_BENEFITS.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.4 }}
                className="bg-sky-50/80 p-5 rounded-2xl border border-sky-200 flex items-center gap-3 text-slate-800 font-inter font-medium shadow-sm hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0284C7] shrink-0" />
                <span className="text-sm font-semibold">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CCTV Camera Categories Section */}
      <section className="py-24 bg-[url('/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
              Hardware Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight">
              CCTV Camera Categories
            </h2>
            <p className="text-blue-100 text-lg font-inter mt-3">
              Choose the right camera based on your security requirements and property layout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {CAMERA_CATEGORIES.map((cam, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="group bg-white text-slate-900 rounded-[28px] overflow-hidden border-4 border-sky-300 shadow-xl hover:shadow-2xl hover:border-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-slate-100">
                    <img 
                      src={cam.image} 
                      alt={cam.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 z-20 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center font-bebas text-sm text-[#0284C7] font-bold shadow-md">
                      {idx + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bebas text-2xl tracking-wide text-slate-900 mb-2 group-hover:text-[#0284C7] transition-colors">
                      {cam.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-inter leading-relaxed mb-4">
                      {cam.desc}
                    </p>

                    <div className="mb-4">
                      <span className="font-bebas text-xs tracking-wider uppercase text-[#0284C7] block mb-1">Best For:</span>
                      <div className="flex flex-wrap gap-1">
                        {cam.bestFor.map((bf, bIdx) => (
                          <span key={bIdx} className="bg-sky-50 text-slate-700 font-inter text-[10px] px-2 py-0.5 rounded border border-sky-100">
                            {bf}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-bebas text-xs tracking-wider uppercase text-[#0284C7] block mb-1">Key Features:</span>
                      <ul className="space-y-1 font-inter text-[11px] text-slate-600">
                        {cam.features.map((ft, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#0284C7] shrink-0" />
                            <span>{ft}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CCTV Technologies & Smart Features Grid */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Technologies */}
            <div className="bg-sky-50/80 rounded-[32px] p-8 md:p-10 border-2 border-sky-200">
              <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
                Modern Equipment
              </span>
              <h3 className="text-4xl font-bebas tracking-wide text-slate-900 mb-6">CCTV Technologies</h3>
              <p className="text-slate-600 text-sm font-inter mb-6">
                We install modern surveillance systems equipped with state-of-the-art hardware and streaming protocols.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {TECHNOLOGIES.map((tech, tIdx) => (
                  <div key={tIdx} className="bg-white p-3.5 rounded-xl border border-sky-200 flex items-center gap-2.5 shadow-sm text-slate-800 font-inter text-xs font-semibold">
                    <Zap className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart AI Features */}
            <div className="bg-[#0070c0] text-white rounded-[32px] p-8 md:p-10 border-2 border-[#38BDF8]/40 shadow-2xl">
              <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block">
                Intelligent Security
              </span>
              <h3 className="text-4xl font-bebas tracking-wide text-white mb-6">Smart AI Features</h3>
              <p className="text-blue-100 text-sm font-inter mb-6">
                Modern surveillance systems include intelligent security features designed to improve monitoring accuracy and reduce false alarms.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {SMART_AI_FEATURES.map((ai, aIdx) => (
                  <div key={aIdx} className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 flex items-center gap-2.5 text-blue-100 font-inter text-xs font-medium">
                    <Sparkles className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>{ai}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CCTV Solutions by Industry */}
      <section className="py-24 bg-[url('/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
              Sector Coverage
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight">
              CCTV Solutions by Industry
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {INDUSTRIES_SOLUTIONS.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-white text-slate-900 p-6 rounded-[24px] border-4 border-sky-300 shadow-xl"
              >
                <div className="p-3 bg-sky-50 rounded-xl w-fit mb-4 border border-sky-200">
                  {ind.icon}
                </div>
                <h3 className="font-bebas text-2xl tracking-wide text-slate-900 mb-2">{ind.title}</h3>
                <p className="text-slate-600 text-xs font-inter leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our CCTV Installation Process */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
              Step-By-Step Workflow
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 leading-tight">
              Our CCTV Installation Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTALLATION_PROCESS.map((proc, idx) => (
              <div key={idx} className="bg-sky-50/80 p-6 rounded-2xl border border-sky-200 flex flex-col justify-between">
                <div>
                  <span className="font-bebas text-lg tracking-wider text-[#0284C7] font-bold block mb-2">Step {proc.step}</span>
                  <h3 className="font-bebas text-2xl tracking-wide text-slate-900 mb-2">{proc.title}</h3>
                  <p className="text-slate-600 text-xs font-inter leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Family Anchor Facilities Pvt. Ltd.? */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block">
              Trusted Excellence
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight">
              Why Choose Family Anchor Facilities?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {WHY_FAF.map((waf, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <ShieldCheck className="w-8 h-8 text-[#38BDF8] mb-4" />
                  <h3 className="font-bebas text-2xl tracking-wide text-white mb-2">{waf.title}</h3>
                  <p className="text-slate-300 text-xs font-inter leading-relaxed">{waf.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
              Clear Answers
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-sky-50/80 rounded-2xl border border-sky-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-bebas text-2xl tracking-wide text-slate-900"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-6 h-6 text-[#0284C7] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 text-slate-600 font-inter text-sm leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action CTA */}
      <section className="py-24 bg-gradient-to-r from-sky-50 via-slate-50 to-sky-50 text-slate-900 border-t border-sky-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
            High-Converting Security
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 mb-6">
            Secure Your Property with Professional CCTV Installation
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-inter mb-8">
            Protect your home or business with advanced surveillance solutions from <strong>Family Anchor Facilities Pvt. Ltd.</strong> Our experts are ready to design and install a CCTV system tailored to your specific security needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-xl tracking-wider uppercase px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
            >
              <span>Request a Free Site Survey</span>
            </Link>
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bebas text-xl tracking-wider uppercase px-8 py-4 rounded-full shadow-xl transition-all"
            >
              <span>Get a Custom Quote</span>
            </Link>
            <a 
              href="tel:9386126258"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bebas text-xl tracking-wider uppercase px-8 py-4 rounded-full shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call Our Security Experts</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
