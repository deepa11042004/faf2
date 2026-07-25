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
          Authorized Technology Partners
        </span>
        <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-slate-900 leading-tight">
          Trusted Brands We Work With
        </h2>
      </div>

      {/* Infinite Horizontal Auto-Marquee Slider */}
      <div className="relative flex overflow-x-hidden group py-4">
        <div className="flex w-[200%] animate-brand-marquee">
          <div className="flex w-1/2 justify-around items-center space-x-6 px-4">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, idx) => (
              <div
                key={idx}
                className="w-60 h-32 rounded-2xl bg-white border-2 border-sky-200 shadow-md hover:shadow-2xl hover:scale-105 hover:border-[#0284C7] transition-all duration-300 flex items-center justify-center p-3 cursor-pointer shrink-0"
              >
                <div className="h-24 w-48 flex items-center justify-center relative">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} Logo`}
                    width={200}
                    height={90}
                    className="max-h-20 max-w-[170px] w-auto h-auto object-contain transition-all duration-300 transform scale-100 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes brandMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-brand-marquee {
          animation: brandMarquee 35s linear infinite;
        }
        .group:hover .animate-brand-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
