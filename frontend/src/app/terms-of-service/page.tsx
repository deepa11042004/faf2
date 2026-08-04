"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText, Mail, Phone, MapPin, Globe, ArrowLeft, CheckCircle2 } from "lucide-react";
import { settingsApi } from "@/services/api/settingsApi";
import { WebsiteSettingItem } from "@/types/admin";

export default function TermsOfServicePage() {
  const [siteSettings, setSiteSettings] = useState<WebsiteSettingItem | null>(null);

  useEffect(() => {
    settingsApi.getSettings()
      .then((res) => {
        if (res.success && res.data) {
          setSiteSettings(res.data);
        }
      })
      .catch(() => {});
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#0284C7] selection:text-white">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 bg-[url('/images/backgrounds/services-blue-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284C7]/20 border border-[#0284C7]/40 text-[#38BDF8] font-bebas text-sm tracking-widest uppercase mb-6">
            <FileText className="w-4 h-4" />
            <span>Legal Framework</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-300 font-inter text-sm md:text-base max-w-2xl mx-auto">
            Effective Date: <span className="text-[#38BDF8] font-medium">27/07/2026</span> &nbsp;|&nbsp; Last Updated: <span className="text-[#38BDF8] font-medium">27/07/2026</span>
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="py-16 md:py-24 bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#38BDF8] hover:text-white font-inter font-medium mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl space-y-10 text-slate-300 font-inter leading-relaxed text-sm md:text-base">
            
            {/* Intro */}
            <div className="p-6 bg-slate-800/60 rounded-2xl border border-slate-700/50 text-slate-200">
              <p>
                Welcome to <strong className="text-white">Family Anchor Facilities Pvt. Ltd.</strong> ("Company", "we", "our", or "us"). These Terms of Service ("Terms") govern your access to and use of our website and the services we provide. By accessing or using our website, you agree to comply with these Terms. If you do not agree, please discontinue use of the website.
              </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">1.</span> About Us
              </h2>
              <p>
                Family Anchor Facilities Pvt. Ltd. provides professional security and facility management solutions, including but not limited to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-slate-400 text-sm pl-2">
                <li>CCTV Installation</li>
                <li>Fire Alarm & Fire Safety Systems</li>
                <li>Access Control Systems</li>
                <li>Public Address (PA) Systems</li>
                <li>Security Guard Services</li>
                <li>Annual Maintenance Contracts (AMC)</li>
                <li>Security Consultation</li>
                <li>Technical Support & Maintenance</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">2.</span> Acceptance of Terms
              </h2>
              <p className="text-slate-300 text-sm">
                By accessing our website, submitting an enquiry, requesting a quotation, or using our services, you confirm that you have read, understood, and agreed to these Terms of Service.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">3.</span> Use of the Website
              </h2>
              <p>You agree to use this website only for lawful purposes and in accordance with these Terms.</p>
              <p className="font-bold text-white text-xs uppercase tracking-wider">You agree not to:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1.5 pl-2">
                <li>Violate any applicable laws or regulations.</li>
                <li>Upload or transmit malicious software or harmful code.</li>
                <li>Attempt unauthorized access to our systems or networks.</li>
                <li>Interfere with the website's operation or security.</li>
                <li>Copy, reproduce, or distribute website content without written permission.</li>
                <li>Use the website for fraudulent or misleading activities.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">4.</span> Service Enquiries & Quotations
              </h2>
              <p className="text-slate-300 text-sm">
                Any enquiry or quotation submitted through our website is for informational purposes only and does not constitute a binding agreement. Project pricing, timelines, scope of work, and deliverables will be confirmed through a formal proposal, quotation, purchase order, or signed agreement.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">5.</span> Project Execution
              </h2>
              <p>For projects undertaken by Family Anchor Facilities Pvt. Ltd.:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1.5 pl-2">
                <li>Work will commence after mutual agreement and confirmation.</li>
                <li>Project timelines may vary depending on site readiness, client approvals, material availability, and other external factors.</li>
                <li>Any additional work outside the agreed scope may require a revised quotation and timeline.</li>
                <li>Clients are responsible for providing accurate project requirements and timely approvals.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">6.</span> Payments
              </h2>
              <p>Payment terms will be specified in the official quotation or agreement. Unless otherwise agreed:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1.5 pl-2">
                <li>Payments shall be made according to the agreed schedule.</li>
                <li>Delayed payments may affect project timelines.</li>
                <li>Taxes and statutory charges, where applicable, will be charged separately unless otherwise stated.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">7.</span> Installation & Maintenance
              </h2>
              <p>Our installation and maintenance services are subject to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-slate-400 text-sm pl-2">
                <li>Site accessibility</li>
                <li>Safety compliance</li>
                <li>Availability of required utilities</li>
                <li>Scheduled maintenance visits</li>
                <li>Applicable warranty terms</li>
              </ul>
              <p className="text-xs text-slate-400 italic pt-1">
                Clients are responsible for providing safe access to the installation site.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">8.</span> Product Information
              </h2>
              <p>We strive to provide accurate information about products, services, specifications, and technical details. However:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1.5 pl-2">
                <li>Product images are for illustration purposes only.</li>
                <li>Actual products may vary depending on manufacturer updates.</li>
                <li>Specifications may change without prior notice.</li>
                <li>Availability depends on suppliers and manufacturers.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">9.</span> Intellectual Property
              </h2>
              <p>
                All content available on this website, including but not limited to Text, Graphics, Logos, Icons, Images, Videos, Website Design, Source Code, and Documents, is the property of Family Anchor Facilities Pvt. Ltd. or its respective owners and is protected under applicable intellectual property laws.
              </p>
              <p className="text-xs text-slate-400 italic">
                No content may be copied, modified, distributed, or reproduced without prior written permission.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">10.</span> Third-Party Brands
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our website may reference third-party brands such as CCTV, fire safety, access control, and public address equipment manufacturers. All trademarks, logos, and brand names remain the property of their respective owners and are used solely for identification, compatibility, or informational purposes.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">11.</span> Limitation of Liability
              </h2>
              <p>To the maximum extent permitted by law, Family Anchor Facilities Pvt. Ltd. shall not be liable for:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-slate-400 text-sm pl-2">
                <li>Indirect or consequential damages</li>
                <li>Loss of profits</li>
                <li>Business interruption</li>
                <li>Loss of data</li>
                <li>Delays caused by third parties</li>
                <li>Force majeure events</li>
                <li>Website downtime or temporary unavailability</li>
              </ul>
              <p className="text-xs text-slate-400">
                Our total liability shall be limited to the extent permitted under applicable law and any specific contractual agreement.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">12.</span> Warranties
              </h2>
              <p>Warranty coverage for products and services is subject to:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1.5 pl-2">
                <li>Manufacturer warranty policies</li>
                <li>Product-specific warranty terms</li>
                <li>Service agreements</li>
                <li>Annual Maintenance Contracts (AMC), where applicable</li>
              </ul>
              <p className="text-xs text-slate-400 italic">
                Damage resulting from misuse, unauthorized modifications, accidents, natural disasters, or improper maintenance is generally not covered unless stated otherwise.
              </p>
            </section>

            {/* Section 13 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">13.</span> User Responsibilities
              </h2>
              <p>Users and clients agree to:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1.5 pl-2">
                <li>Provide accurate information.</li>
                <li>Cooperate during project execution.</li>
                <li>Protect login credentials (if applicable).</li>
                <li>Use installed systems responsibly.</li>
                <li>Follow operational and safety instructions provided by our team.</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">14.</span> Privacy
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Your use of our website is also governed by our{" "}
                <Link href="/privacy-policy" className="text-[#38BDF8] underline hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                , which explains how we collect, use, and protect your personal information.
              </p>
            </section>

            {/* Section 15 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">15.</span> Third-Party Links
              </h2>
              <p>Our website may include links to external websites for convenience or additional information. We are not responsible for:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1.5 pl-2">
                <li>Third-party content</li>
                <li>External website availability</li>
                <li>Privacy practices</li>
                <li>Services offered by third parties</li>
              </ul>
            </section>

            {/* Section 16 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">16.</span> Changes to Services
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We reserve the right to modify website content, update service offerings, change product information, improve website functionality, or update pricing where applicable without prior notice.
              </p>
            </section>

            {/* Section 17 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">17.</span> Suspension or Termination
              </h2>
              <p>We may suspend or terminate access to the website if a user:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1.5 pl-2">
                <li>Violates these Terms.</li>
                <li>Attempts unauthorized access.</li>
                <li>Uses the website for unlawful purposes.</li>
                <li>Disrupts website functionality or security.</li>
              </ul>
            </section>

            {/* Section 18 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">18.</span> Governing Law
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                These Terms shall be governed by and interpreted in accordance with the laws of <strong className="text-white">India</strong>. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the competent courts in the location where <strong className="text-white">Family Anchor Facilities Pvt. Ltd.</strong> has its registered office, unless otherwise agreed in writing.
              </p>
            </section>

            {/* Section 19 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">19.</span> Changes to These Terms
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We may revise these Terms of Service from time to time. Updated versions will be published on this page with the revised Last Updated date. Continued use of the website after such updates constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* Section 20 - Contact Us */}
            <section className="space-y-6 pt-4 border-t border-slate-800">
              <h2 className="text-2xl font-bebas tracking-wider text-white flex items-center gap-3">
                <span className="text-[#38BDF8]">20.</span> Contact Us
              </h2>
              <p className="text-sm">
                If you have any questions regarding these Terms of Service, please contact us:
              </p>

              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-4">
                <h3 className="font-bebas text-xl text-white tracking-wide">{siteSettings?.companyName || "Family Anchor Facilities Pvt. Ltd."}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider">Address</strong>
                      {siteSettings?.address || "A-8A & A-8B, First Floor, Vishwakarma Colony, Pul Pehladpur, M.B Road, New Delhi 110044, India"}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider">Phone</strong>
                      <a href={`tel:${siteSettings?.phone || "8826632363"}`} className="hover:text-[#38BDF8] transition-colors">{siteSettings?.phone || "+91 8826632363"}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider">Email</strong>
                      <a href={`mailto:${siteSettings?.email || "familyanchorfacilities@gmail.com"}`} className="hover:text-[#38BDF8] transition-colors">{siteSettings?.email || "familyanchorfacilities@gmail.com"}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider">Website</strong>
                      <Link href="/" className="hover:text-[#38BDF8] transition-colors">Family Anchor Facilities</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Acknowledgement */}
            <div className="p-6 bg-[#0284C7]/10 rounded-2xl border border-[#0284C7]/30 text-[#38BDF8] font-medium text-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#38BDF8]" />
              <p>
                <strong className="text-white block font-bebas text-lg tracking-wide uppercase mb-1">Acknowledgement</strong>
                By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these Terms, please refrain from using the website or our services.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
