"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What areas do you provide security services in?",
    answer: "We provide comprehensive security and facility management services nationwide, with major operational hubs in all metropolitan cities. Our network ensures rapid deployment and localized support.",
  },
  {
    question: "Are your security personnel trained and certified?",
    answer: "Absolutely. All our security personnel undergo rigorous background checks and comprehensive training programs. They are certified in emergency response, first aid, and advanced security protocols.",
  },
  {
    question: "Do you offer 24/7 monitoring services?",
    answer: "Yes, our central command center operates 24/7/365. We provide continuous real-time monitoring for CCTV, fire alarms, and intrusion detection systems to ensure immediate response to any incidents.",
  },
  {
    question: "Can you customize a security system for my specific business?",
    answer: "Yes! We believe there is no one-size-fits-all in security. Our experts will conduct a detailed site survey and risk assessment to design a bespoke security architecture tailored exactly to your operational needs and budget.",
  },
  {
    question: "What is your response time for technical support?",
    answer: "For critical technical issues, our Rapid Response Team aims to be on-site within 2-4 hours. We also provide instant remote troubleshooting for software and configuration issues.",
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F8FAFC] relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-[#4338CA] font-bebas text-lg tracking-widest uppercase mb-2 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0F172A] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                key={idx}
                className={cn(
                  "rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md",
                  isOpen 
                    ? "border-2 border-[#4338CA] bg-white/90 shadow-2xl" 
                    : "border border-slate-200/80 bg-white/80 hover:border-[#4338CA]/40 shadow-xl"
                )}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className={cn(
                    "font-poppins font-semibold text-lg transition-colors",
                    isOpen ? "text-[#4338CA]" : "text-[#0F172A]"
                  )}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0",
                      isOpen && "transform rotate-180 text-[#4338CA]"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
