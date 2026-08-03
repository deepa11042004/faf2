"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Layers, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { servicesApi } from "@/services/api/servicesApi";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const FALLBACK_VIEW_ALL = {
  label: "All Services Overview",
  href: "/services",
  desc: "Explore Our Full Range of Solutions",
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [serviceItems, setServiceItems] = useState<{ label: string; href: string; desc: string }[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight - 100;
      setIsScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    servicesApi.getServices({ status: "active", limit: 50 })
      .then((res: any) => {
        const list = res?.data?.services ?? res?.data ?? [];
        if (Array.isArray(list) && list.length > 0) {
          const items = list
            .sort((a: any, b: any) => {
              if (a.displayOrder !== b.displayOrder) {
                return (a.displayOrder ?? 0) - (b.displayOrder ?? 0);
              }
              const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
              const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
              return timeA - timeB;
            })
            .map((svc: any) => ({
              label: svc.title,
              href: `/services/${svc.slug}`,
              desc: svc.shortDescription ?? "",
            }));
          setServiceItems([...items, FALLBACK_VIEW_ALL]);
        }
      })
      .catch(() => {
        // Keep empty; fallback will show "All Services Overview" link only
      });
  }, []);

  const navServiceItems = serviceItems.length > 0
    ? serviceItems
    : [FALLBACK_VIEW_ALL];

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
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Family Anchor Facilities"
              width={140}
              height={70}
              className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
            <div className="hidden sm:flex flex-col mt-1">
              <span className="font-bebas text-xl md:text-2xl tracking-widest leading-none text-white drop-shadow-sm">
                FAMILY ANCHOR
              </span>
              <span className="font-bebas text-sm md:text-base tracking-[0.15em] leading-none mt-0.5 text-[#38BDF8] drop-shadow-sm">
                FACILITIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className={cn(
              "flex items-center gap-6 px-7 py-2 rounded-full border transition-all duration-500 shadow-md backdrop-blur-md relative",
              isScrolled 
                ? "border-slate-700/70 bg-slate-800/80 text-white" 
                : "border-slate-300/80 bg-white/90 text-slate-900"
            )}>
              {NAV_LINKS.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <li
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <div className="flex items-center gap-1 cursor-pointer py-1">
                        <Link
                          href={link.href}
                          className={cn(
                            "font-bebas text-lg tracking-wider uppercase transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all font-medium flex items-center gap-1",
                            isScrolled ? "text-slate-100 hover:text-[#38BDF8] after:bg-[#38BDF8]" : "text-slate-900 hover:text-[#0284C7] after:bg-[#0284C7]"
                          )}
                        >
                          {link.label}
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            isServicesHovered ? "rotate-180 text-[#38BDF8]" : ""
                          )} />
                        </Link>
                      </div>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full -left-20 pt-4 w-96 z-50"
                          >
                            <div className="bg-[#0284C7]/95 backdrop-blur-2xl border-2 border-sky-300/40 shadow-[0_20px_50px_rgba(2,132,199,0.4)] rounded-2xl p-3 grid grid-cols-1 gap-1 text-white">
                              {navServiceItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/15 transition-all duration-200 group"
                                  onClick={() => setIsServicesHovered(false)}
                                >
                                  <div className="p-2.5 bg-white/20 text-white rounded-xl border border-white/30 group-hover:bg-white group-hover:text-[#0284C7] transition-all shrink-0">
                                    {item.href === "/services"
                                      ? <Layers className="w-5 h-5" />
                                      : <Shield className="w-5 h-5" />
                                    }
                                  </div>
                                  <div>
                                    <div className="font-bebas text-lg tracking-wider text-white group-hover:text-amber-300 transition-colors leading-none">
                                      {item.label}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
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
                );
              })}
            </ul>
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://wa.me/919386126258?text=Hello%20Family%20Anchor%20Facilities,%20I%20would%20like%20to%20inquire%20about%20your%20security%20services." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className={cn(
                "font-bebas text-base tracking-wider uppercase transition-colors",
                isScrolled ? "border-slate-700 bg-slate-800/80 text-white hover:bg-slate-700" : "border-slate-300 bg-white/90 text-slate-900 hover:bg-white"
              )}>
                Call Now
              </Button>
            </a>
            <a 
              href="https://wa.me/919386126258?text=Hello%20Family%20Anchor%20Facilities,%20I%20would%20like%20to%20get%20a%20quote%20for%20security%20services." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-base tracking-wider uppercase px-5 shadow-lg">
                Get Quote
              </Button>
            </a>
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
            className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 shadow-2xl p-6 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <li key={link.label} className="border-b border-slate-800/60 pb-2">
                      <div className="flex items-center justify-between py-2">
                        <Link
                          href={link.href}
                          className="font-bebas text-xl tracking-wider uppercase text-slate-100 hover:text-[#38BDF8]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="p-1 text-slate-400 hover:text-[#38BDF8]"
                        >
                          <ChevronDown className={cn(
                            "w-5 h-5 transition-transform duration-300",
                            isMobileServicesOpen ? "rotate-180 text-[#38BDF8]" : ""
                          )} />
                        </button>
                      </div>

                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-2 border-l-2 border-[#0284C7] my-2"
                          >
                            {navServiceItems.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="block font-bebas text-lg tracking-wider text-slate-300 hover:text-[#38BDF8] py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={link.label} className="border-b border-slate-800/40 pb-1">
                    <Link
                      href={link.href}
                      className="block font-bebas text-xl tracking-wider uppercase text-slate-100 hover:text-[#38BDF8] py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-3 mt-6">
              <a 
                href="https://wa.me/919386126258?text=Hello%20Family%20Anchor%20Facilities,%20I%20would%20like%20to%20inquire%20about%20your%20security%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="outline" className="w-full border-slate-700 bg-slate-800 text-white hover:bg-slate-700 font-bebas text-lg">
                  Call Now
                </Button>
              </a>
              <a 
                href="https://wa.me/919386126258?text=Hello%20Family%20Anchor%20Facilities,%20I%20would%20like%20to%20get%20a%20quote%20for%20security%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-lg">
                  Get Quote
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
