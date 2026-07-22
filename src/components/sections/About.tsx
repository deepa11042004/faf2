"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Target, Eye } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-[32px] overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="https://placehold.co/800x1200/282425/11bdf2?text=Security+Professionals" 
                alt="Security Team"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-10 left-10 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-200 max-w-[250px]"
              >
                <div className="flex items-center gap-4 text-[#10B981] mb-2">
                  <ShieldCheck className="w-10 h-10" />
                  <span className="text-3xl font-bold font-poppins text-[#0F172A]">10+</span>
                </div>
                <p className="text-sm font-medium text-slate-600">
                  Years of excellence in security and facility management
                </p>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#4338CA]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#10B981]/10 rounded-full blur-3xl -z-10" />
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
              <span className="text-[#4338CA] font-bebas text-lg tracking-widest uppercase mb-2 block">
                About Our Company
              </span>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0F172A] leading-tight mb-6">
                Trusted Security Solutions Since Day One
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Family Anchor Facilities Pvt. Ltd. is a premier provider of comprehensive security
                and facility management services. We specialize in protecting what matters most
                through advanced technology, rigorous training, and unwavering dedication.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                From high-end residential complexes to sprawling industrial facilities, we deliver
                peace of mind tailored to your unique requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {/* Mission */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-200/80 hover:shadow-2xl transition-all">
                <Target className="w-8 h-8 text-[#4338CA] mb-4" />
                <h3 className="text-xl font-poppins font-semibold text-[#0F172A] mb-2">Our Mission</h3>
                <p className="text-slate-600 text-sm">
                  To provide unparalleled security solutions that ensure safety, protect assets, and build trust.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-200/80 hover:shadow-2xl transition-all">
                <Eye className="w-8 h-8 text-[#10B981] mb-4" />
                <h3 className="text-xl font-poppins font-semibold text-[#0F172A] mb-2">Our Vision</h3>
                <p className="text-slate-600 text-sm">
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
                <li key={idx} className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
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
