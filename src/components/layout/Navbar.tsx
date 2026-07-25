"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition navbar style when scrolling past the top hero video section
      const heroHeight = window.innerHeight - 100;
      setIsScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800 shadow-2xl py-3 text-white"
          : "bg-transparent py-5 border-b border-transparent text-slate-900"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Family Anchor Facilities"
              width={140}
              height={70}
              className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className={cn(
              "flex items-center gap-6 px-7 py-2 rounded-full border transition-all duration-500 shadow-md backdrop-blur-md",
              isScrolled 
                ? "border-slate-700/70 bg-slate-800/80 text-white" 
                : "border-slate-300/80 bg-white/90 text-slate-900"
            )}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-bebas text-lg tracking-wider uppercase transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all font-medium",
                      isScrolled ? "text-slate-100 hover:text-[#38BDF8] after:bg-[#38BDF8]" : "text-slate-900 hover:text-[#0284C7] after:bg-[#0284C7]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="outline" className={cn(
                "font-bebas text-base tracking-wider uppercase transition-colors",
                isScrolled ? "border-slate-700 bg-slate-800/80 text-white hover:bg-slate-700" : "border-slate-300 bg-white/90 text-slate-900 hover:bg-white"
              )}>
                Call Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-base tracking-wider uppercase px-5 shadow-lg">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-white hover:text-[#38BDF8]" : "text-slate-900 hover:text-[#0284C7]"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 shadow-2xl p-6 lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block font-bebas text-xl tracking-wider uppercase text-slate-100 hover:text-[#38BDF8] py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-6">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-slate-700 bg-slate-800 text-white hover:bg-slate-700 font-bebas text-lg">
                  Call Now
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-lg">
                  Get Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
