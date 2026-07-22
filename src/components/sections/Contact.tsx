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
    <section id="contact" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
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
              <span className="text-[#4338CA] font-bebas text-lg tracking-widest uppercase mb-2 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0F172A] leading-tight mb-6">
                Ready to Secure Your World?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Contact our team of experts today for a free consultation. We are here to answer your 
                questions and provide the perfect security solution for your needs.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-emerald-50 rounded-full text-[#10B981] shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[#0F172A] mb-1">Phone</h4>
                  <p className="text-slate-600 text-lg">+1 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-emerald-50 rounded-full text-[#10B981] shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[#0F172A] mb-1">Email</h4>
                  <p className="text-slate-600 text-lg">info@familyanchor.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-emerald-50 rounded-full text-[#10B981] shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[#0F172A] mb-1">Headquarters</h4>
                  <p className="text-slate-600 text-lg">
                    123 Security Boulevard, Tech District <br />
                    New York, NY 10001
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
            className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[24px] shadow-2xl border border-slate-200/80 relative"
          >
            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#4338CA]/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-2xl font-poppins font-bold text-[#0F172A] mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 relative z-10">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <input
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4338CA] focus:ring-1 focus:ring-[#4338CA] transition-all text-[#0F172A]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    {...register("phone", { required: true })}
                    placeholder="Phone Number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4338CA] focus:ring-1 focus:ring-[#4338CA] transition-all text-[#0F172A]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <input
                  {...register("email", { required: true })}
                  placeholder="Email Address"
                  type="email"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4338CA] focus:ring-1 focus:ring-[#4338CA] transition-all text-[#0F172A]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <select
                  {...register("service")}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-600 focus:outline-none focus:border-[#4338CA] focus:ring-1 focus:ring-[#4338CA] transition-all"
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4338CA] focus:ring-1 focus:ring-[#4338CA] transition-all resize-none text-[#0F172A]"
                />
              </div>

              <Button type="submit" variant="premium" size="lg" className="w-full mt-2 gap-2 text-base h-14">
                Submit Message <Send className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
