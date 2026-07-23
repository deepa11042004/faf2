"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, Target, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const aboutSlides = [
  {
    title: "CCTV Surveillance System",
    alt: "Advanced CCTV Surveillance Cameras",
    image: "/about-cctv.png",
  },
  {
    title: "Access Control System",
    alt: "Smart Biometric Access Control Fingerprint Reader",
    image: "/about-access-control.png",
  },
  {
    title: "Public Address System",
    alt: "Commercial PA System Microphones & Broadcast Console",
    image: "/about-pa-system.jpg",
  },
  {
    title: "Fire Alarm System",
    alt: "Modern Ceiling Smoke Detector Fire Alarm System",
    image: "/about-fire-alarm.jpg",
  },
  {
    title: "Security Guard Services",
    alt: "Professional Security Guard Officer",
    image: "/about-security-officer.jpg",
  },
];

export function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden relative">
      {/* Abstract dark waves background texture */}
      <div 
        className="absolute inset-0 bg-[url('/dark-waves.png')] bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none z-0" 
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Left Side - Slider */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[650px] lg:h-[720px] w-full rounded-[32px] overflow-hidden shadow-2xl border border-zinc-800 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img 
                    src={aboutSlides[currentSlide].image} 
                    alt={aboutSlides[currentSlide].alt}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Title Tag */}
              <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="text-xs font-bebas tracking-wider text-white uppercase">
                  {aboutSlides[currentSlide].title}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#38BDF8] hover:border-[#38BDF8] hover:text-black transition-all shadow-xl opacity-90 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#38BDF8] hover:border-[#38BDF8] hover:text-black transition-all shadow-xl opacity-90 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 right-8 z-30 flex items-center gap-2">
                {aboutSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx 
                        ? "w-8 bg-[#38BDF8]" 
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-10 left-10 z-20 bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-zinc-800 max-w-[250px] hidden sm:block"
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
