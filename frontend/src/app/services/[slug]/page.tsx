"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Shield,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { servicesApi } from "@/services/api/servicesApi";
import { devicesApi } from "@/services/api/devicesApi";
import { getMediaUrl } from "@/lib/axios";

// ─── Image Slider ───────────────────────────────────────────────────────────────
function CardSlider({ images, categoryTitle }: { images: string[]; categoryTitle: string }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const safeIndex = images.length > 0 ? current % images.length : 0;

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const t = setInterval(() => {
      setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
    }, 3000);
    return () => clearInterval(t);
  }, [images.length, isPaused]);

  if (images.length === 0) {
    return (
      <div className="relative w-full h-[340px] md:h-full min-h-[340px] bg-slate-100 flex items-center justify-center border-b border-slate-100 md:border-b-0 md:border-r border-slate-200">
        <Shield className="w-20 h-20 text-slate-300" />
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-[340px] md:h-full min-h-[340px] overflow-hidden bg-white border-b border-slate-100 md:border-b-0 md:border-r border-slate-200 group/slider"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={safeIndex}
          src={getMediaUrl(images[safeIndex])}
          alt={`${categoryTitle} - Photo ${safeIndex + 1}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-contain object-center absolute inset-0 p-6 z-10"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-[#0284C7] text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-md"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1))}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-[#0284C7] text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-md"
            aria-label="Next Image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      <div className="absolute bottom-3 right-4 z-30 flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              safeIndex === idx ? "w-6 bg-[#38BDF8]" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Helpers ────────────────────────────────────────────────────────────────────
function parseJsonField(val: any): string[] {
  if (Array.isArray(val)) return val;
  if (typeof val === "string") {
    try { return JSON.parse(val); } catch { return val.split(",").map((s: string) => s.trim()).filter(Boolean); }
  }
  return [];
}

// ─── Dynamic Service Slug Page ───────────────────────────────────────────────────
export default function DynamicServicePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [service, setService] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [loadingService, setLoadingService] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Fetch service details by slug
  useEffect(() => {
    if (!slug) return;
    setLoadingService(true);
    setNotFound(false);

    servicesApi.getServices({ status: "active", limit: 50 })
      .then((res: any) => {
        const list: any[] = res?.data?.services ?? res?.data ?? [];
        const found = list.find((s: any) => s.slug === slug);
        if (!found) {
          setNotFound(true);
        } else {
          setService(found);
        }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoadingService(false));
  }, [slug]);

  // Fetch service categories (devices) for this slug
  useEffect(() => {
    if (!slug) return;
    devicesApi.getDevices({ serviceSlug: slug, limit: 100 })
      .then((res: any) => {
        if (res?.success && res.data?.devices) {
          const sorted = [...res.data.devices].sort((a: any, b: any) => {
            const oA = a.displayOrder > 0 ? a.displayOrder : 999;
            const oB = b.displayOrder > 0 ? b.displayOrder : 999;
            if (oA !== oB) return oA - oB;
            return (a.id || 0) - (b.id || 0);
          });
          setCategories(sorted);
        }
      })
      .catch(() => {});
  }, [slug]);

  const bannerImg = service?.bannerImage ? getMediaUrl(service.bannerImage) : null;

  if (loadingService) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-[#38BDF8] animate-spin" />
        </div>
        <Footer />
      </main>
    );
  }

  if (notFound || !service) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 py-32 px-4">
          <Shield className="w-20 h-20 text-[#0284C7] opacity-50" />
          <h1 className="text-4xl md:text-6xl font-bebas tracking-wide text-white text-center">
            Service Not Found
          </h1>
          <p className="text-slate-400 font-inter text-lg text-center max-w-md">
            The service you're looking for doesn't exist or may have been removed.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-lg tracking-wider uppercase px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0284C7] selection:text-white">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-36 pb-24 bg-black overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/dark-waves.png')] bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none z-0" />
        {bannerImg ? (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={bannerImg}
              alt={service.title}
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none z-0" />
        )}

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
              <span>{service.title}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bebas tracking-wide text-white mb-6 leading-tight">
              {service.title}
            </h1>
            {service.shortDescription && (
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-inter max-w-3xl mx-auto">
                {service.shortDescription}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── About This Service ── */}
      {service.description && (
        <section className="py-16 bg-white text-slate-900">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 text-lg leading-relaxed font-inter whitespace-pre-line">
                {service.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── Service Categories / Equipment Cards ── */}
      {categories.length > 0 && (
        <section className="py-24 bg-[url('/images/backgrounds/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight">
                {service.title} Categories
              </h2>
              <p className="text-blue-100/80 font-inter text-lg mt-4">
                Explore our range of specialized {service.title.toLowerCase()} solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto">
              {categories.map((cat: any, idx: number) => {
                const cardImages = (Array.isArray(cat.images) && cat.images.length > 0)
                  ? cat.images
                  : cat.imagePath ? [cat.imagePath] : [];
                const bestFor = parseJsonField(cat.bestFor);
                const features = parseJsonField(cat.keyFeatures);

                return (
                  <motion.div
                    key={cat.id ?? idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04, duration: 0.5 }}
                    className="group bg-white text-slate-900 rounded-[32px] overflow-hidden border-4 border-sky-300 shadow-2xl hover:border-[#0284C7] transition-all grid md:grid-cols-2 md:h-[420px]"
                  >
                    {/* Left: Image Slider */}
                    <CardSlider images={cardImages} categoryTitle={cat.name} />

                    {/* Right: Details */}
                    <div className="p-6 md:p-8 flex flex-col justify-between bg-white overflow-hidden">
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <h3 className="font-bebas text-3xl md:text-4xl tracking-wide text-slate-900 group-hover:text-[#0284C7] transition-colors leading-tight">
                            {cat.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs font-bebas tracking-wider uppercase text-[#0284C7] font-bold bg-sky-50 border border-sky-200 px-3 py-1 rounded-full shrink-0">
                            <Shield className="w-4 h-4 text-[#0284C7]" />
                            <span>Professional</span>
                          </div>
                        </div>

                        {cat.description && (
                          <p className="text-slate-600 text-xs md:text-sm font-inter leading-relaxed mb-4 line-clamp-3">
                            {cat.description}
                          </p>
                        )}

                        {bestFor.length > 0 && (
                          <div className="mb-4">
                            <span className="font-bebas text-xs tracking-wider uppercase text-[#0284C7] block mb-1.5 font-bold">
                              Best For:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {bestFor.map((bf: string, bIdx: number) => (
                                <span key={bIdx} className="bg-sky-50 text-slate-800 font-inter text-[11px] px-2.5 py-0.5 rounded-full border border-sky-200 font-medium">
                                  {bf}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {features.length > 0 && (
                          <div>
                            <span className="font-bebas text-xs tracking-wider uppercase text-[#0284C7] block mb-1.5 font-bold">
                              Key Features:
                            </span>
                            <ul className="grid grid-cols-2 gap-1.5 font-inter text-xs text-slate-700">
                              {features.map((ft: string, fIdx: number) => (
                                <li key={fIdx} className="flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                                  <span className="truncate">{ft}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-sky-50 via-slate-50 to-sky-50 text-slate-900 border-t border-sky-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 mb-6">
            Ready to Secure Your Premises?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-inter mb-8">
            Contact our team to discuss your {service.title} requirements and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-xl tracking-wider uppercase px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 border-2 border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white font-bebas text-xl tracking-wider uppercase px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
            >
              <span>All Services</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
