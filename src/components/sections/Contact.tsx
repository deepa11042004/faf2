"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Message sent successfully! (Demo)");
  };

  return (
    <section id="contact" className="py-24 bg-[url('/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight mb-6">
                Ready to Secure Your World?
              </h2>
              <p className="text-blue-100/90 text-lg leading-relaxed font-inter">
                Contact our team of experts today for a free consultation. We are here to answer your 
                questions and provide the perfect security solution for your needs.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-full text-[#38BDF8] border border-white/20 shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bebas text-xl tracking-wide text-white mb-0.5">Phone</h4>
                  <a href="tel:9386126258" className="text-blue-100 text-lg font-inter hover:underline">9386126258</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-full text-[#38BDF8] border border-white/20 shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bebas text-xl tracking-wide text-white mb-0.5">Email</h4>
                  <a href="mailto:familyanchorfacilities@gmail.com" className="text-blue-100 text-lg font-inter hover:underline">familyanchorfacilities@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-full text-[#38BDF8] border border-white/20 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bebas text-xl tracking-wide text-white mb-0.5">Headquarters Address</h4>
                  <p className="text-blue-100 text-lg font-inter leading-relaxed">
                    HIG DDA JASOLA, DELHI
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[28px] shadow-2xl border border-sky-200 relative text-slate-900"
          >
            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0284C7]/20 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-3xl font-bebas tracking-wide text-slate-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 relative z-10 font-inter">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <input
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all text-slate-900"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    {...register("phone", { required: true })}
                    placeholder="Phone Number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all text-slate-900"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <input
                  {...register("email", { required: true })}
                  placeholder="Email Address"
                  type="email"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all text-slate-900"
                />
              </div>

              <div className="flex flex-col gap-1">
                <select
                  {...register("service")}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-600 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all"
                >
                  <option value="">Select a Service</option>
                  <option value="cctv">CCTV Installation</option>
                  <option value="fire">Fire Alarm System</option>
                  <option value="access">Access Control</option>
                  <option value="guard">Security Guard Services</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <textarea
                  {...register("message", { required: true })}
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all resize-none text-slate-900"
                />
              </div>

              <Button type="submit" variant="premium" size="lg" className="w-full mt-2 gap-2 text-base h-14 bg-[#0284C7] hover:bg-[#0369a1] text-white">
                Submit Message <Send className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
