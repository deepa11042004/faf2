"use client";

import Image from "next/image";
import { Shield, Award, Cpu, Flame, Volume2 } from "lucide-react";

const BRAND_LOGOS = [
  { name: "Hikvision", image: "/images/brands/hikvision.jpg", category: "CCTV & Surveillance", icon: <Shield className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Dahua Technology", image: "/images/brands/dahua.jpg", category: "CCTV & Surveillance", icon: <Cpu className="w-4 h-4 text-[#0284C7]" /> },
  { name: "CP Plus", image: "/images/brands/CP-Plus.png", category: "CCTV & Surveillance", icon: <Shield className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Axis Communications", image: "/images/brands/axis communication.jpg", category: "IP Surveillance", icon: <Cpu className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Bosch", image: "/images/brands/bosch.jpg", category: "Security & Safety", icon: <Award className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Honeywell", image: "/images/brands/Honeywell-Logo.png", category: "Fire & Automation", icon: <Flame className="w-4 h-4 text-[#0284C7]" /> },
  { name: "ZKTeco", image: "/images/brands/zkteco.jpg", category: "Access Control & Biometrics", icon: <Award className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Suprema", image: "/images/brands/suprema.png", category: "Biometrics", icon: <Cpu className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Matrix Comsec", image: "/images/brands/Matrix.png", category: "Telecom & Security", icon: <Shield className="w-4 h-4 text-[#0284C7]" /> },
  { name: "TOA", image: "/images/brands/toa.png", category: "Public Address System", icon: <Volume2 className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Ahuja", image: "/images/brands/ahuja.png", category: "Public Address System", icon: <Volume2 className="w-4 h-4 text-[#0284C7]" /> },
  { name: "JBL Professional", image: "/images/brands/jbl.png", category: "Audio & PA Systems", icon: <Volume2 className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Panasonic", image: "/images/brands/Panasonic.jpg", category: "CCTV & Displays", icon: <Cpu className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Kidde Fire Systems", image: "/images/brands/kidde-fire-systems.png", category: "Fire Protection", icon: <Flame className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Tyco Fire Protection", image: "/images/brands/tyco-fire-protection.png", category: "Fire Protection", icon: <Flame className="w-4 h-4 text-[#0284C7]" /> },
  { name: "System Sensor", image: "/images/brands/system-sensor.png", category: "Fire Detectors", icon: <Flame className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Apollo Fire Detectors", image: "/images/brands/apollo-fire-detectors.png", category: "Fire Systems", icon: <Flame className="w-4 h-4 text-[#0284C7]" /> },
  { name: "Hochiki", image: "/images/brands/Hochiki_Corporation.jpg", category: "Fire Safety Systems", icon: <Flame className="w-4 h-4 text-[#0284C7]" /> }
];

export function TrustedBrandsSection() {
  return (
    <section className="py-20 bg-sky-50/90 border-y border-sky-200 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 text-center mb-12">
        <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
          BRANDS WE TRUST
        </span>
        <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-slate-900 leading-tight">
          SECURITY EQUIPMENT BRANDS WE USE
        </h2>
      </div>

      {/* Infinite Horizontal Auto-Marquee Slider */}
      <div className="relative flex overflow-hidden group py-6 select-none w-full">
        {/* Track 1 */}
        <div className="flex shrink-0 animate-brand-marquee items-center space-x-10 pr-10">
          {BRAND_LOGOS.map((brand, idx) => {
            const nameLower = brand.name.toLowerCase();
            const isSmallBrand =
              nameLower.includes("matrix") ||
              nameLower.includes("toa") ||
              nameLower.includes("tyco") ||
              nameLower.includes("system sensor") ||
              nameLower.includes("apollo") ||
              nameLower.includes("hochiki");

            const isCpPlus = nameLower.includes("cp plus");

            return (
              <div
                key={`b1-${idx}`}
                className="w-64 h-34 rounded-2xl bg-white border border-sky-200/80 shadow-sm hover:shadow-xl hover:border-[#0284C7] hover:scale-105 transition-all duration-300 flex items-center justify-center p-3 cursor-pointer shrink-0"
              >
                <div className="h-24 w-52 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} Logo`}
                    width={240}
                    height={110}
                    className={`w-auto h-auto object-contain transition-all duration-300 mix-blend-multiply ${
                      isSmallBrand
                        ? "max-h-12 max-w-[135px] scale-95"
                        : isCpPlus
                        ? "max-h-16 max-w-[195px] scale-105 hover:scale-110"
                        : "max-h-20 max-w-[200px] scale-125 hover:scale-130"
                    }`}
                    unoptimized
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Track 2 for Flawless Circular Loop */}
        <div className="flex shrink-0 animate-brand-marquee items-center space-x-10 pr-10" aria-hidden="true">
          {BRAND_LOGOS.map((brand, idx) => {
            const nameLower = brand.name.toLowerCase();
            const isSmallBrand =
              nameLower.includes("matrix") ||
              nameLower.includes("toa") ||
              nameLower.includes("tyco") ||
              nameLower.includes("system sensor") ||
              nameLower.includes("apollo") ||
              nameLower.includes("hochiki");

            const isCpPlus = nameLower.includes("cp plus");

            return (
              <div
                key={`b2-${idx}`}
                className="w-64 h-34 rounded-2xl bg-white border border-sky-200/80 shadow-sm hover:shadow-xl hover:border-[#0284C7] hover:scale-105 transition-all duration-300 flex items-center justify-center p-3 cursor-pointer shrink-0"
              >
                <div className="h-24 w-52 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} Logo`}
                    width={240}
                    height={110}
                    className={`w-auto h-auto object-contain transition-all duration-300 mix-blend-multiply ${
                      isSmallBrand
                        ? "max-h-12 max-w-[135px] scale-95"
                        : isCpPlus
                        ? "max-h-16 max-w-[195px] scale-105 hover:scale-110"
                        : "max-h-20 max-w-[200px] scale-125 hover:scale-130"
                    }`}
                    unoptimized
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes brandMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-brand-marquee {
          animation: brandMarquee 38s linear infinite;
        }
        .group:hover .animate-brand-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
