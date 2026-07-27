"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Mail, Phone, MapPin, Globe, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#0284C7] selection:text-white">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 bg-[url('/images/backgrounds/services-blue-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284C7]/20 border border-[#0284C7]/40 text-[#38BDF8] font-bebas text-sm tracking-widest uppercase mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Legal & Transparency</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight mb-4">
            Privacy Policy
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
                Welcome to <strong className="text-white">Family Anchor Facilities Pvt. Ltd.</strong> ("Company," "we," "our," or "us"). We value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="mt-3 text-slate-300 text-sm">
                By using our website, you agree to the practices described in this Privacy Policy.
              </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">1.</span> Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>
              
              <div className="space-y-4 pl-4 border-l-2 border-[#0284C7]">
                <div>
                  <h3 className="font-bold text-white mb-2">Personal Information</h3>
                  <p className="mb-2">When you contact us or request our services, we may collect:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-slate-400 text-sm">
                    <li>Full Name</li>
                    <li>Company Name</li>
                    <li>Email Address</li>
                    <li>Mobile Number</li>
                    <li>Office Address</li>
                    <li>City & State</li>
                    <li>Project Requirements</li>
                    <li>Forms Submitted Voluntarily</li>
                  </ul>
                </div>

                <div className="pt-3">
                  <h3 className="font-bold text-white mb-2">Technical Information</h3>
                  <p className="mb-2">When you visit our website, we may automatically collect:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-slate-400 text-sm">
                    <li>IP Address</li>
                    <li>Browser Type</li>
                    <li>Device Information</li>
                    <li>Operating System</li>
                    <li>Date & Time of Visit</li>
                    <li>Pages Visited</li>
                    <li>Website Usage Statistics</li>
                    <li>Cookies & Analytics Data</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">2.</span> How We Use Your Information
              </h2>
              <p>Your information may be used to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside text-slate-300 text-sm pl-2">
                <li>Respond to enquiries</li>
                <li>Provide quotations</li>
                <li>Deliver requested services</li>
                <li>Schedule site surveys</li>
                <li>Process service requests</li>
                <li>Improve our website</li>
                <li>Enhance customer support</li>
                <li>Send service updates</li>
                <li>Share promotional offers (with consent)</li>
                <li>Maintain security & prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">3.</span> Cookies
              </h2>
              <p>Our website may use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1 pl-2">
                <li>Improve website performance</li>
                <li>Remember user preferences</li>
                <li>Analyse website traffic</li>
                <li>Enhance browsing experience</li>
                <li>Measure marketing effectiveness</li>
              </ul>
              <p className="text-xs text-slate-400 italic pt-2">
                You can disable cookies through your browser settings. However, some website features may not function properly if cookies are disabled.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">4.</span> Information Sharing
              </h2>
              <p>We respect your privacy and do not sell or rent your personal information.</p>
              <p>We may share information only with:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1 pl-2">
                <li>Authorized employees</li>
                <li>Service providers assisting with our operations</li>
                <li>Government authorities where legally required</li>
                <li>Law enforcement agencies when required by law</li>
              </ul>
              <p className="text-xs text-slate-400">
                All third parties are expected to protect your information appropriately.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">5.</span> Data Security
              </h2>
              <p>
                We implement reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-slate-400 text-sm pl-2">
                <li>Secure servers</li>
                <li>Encrypted communications</li>
                <li>Access controls</li>
                <li>Regular security monitoring</li>
                <li>Restricted access to authorized personnel</li>
              </ul>
              <p className="text-xs text-slate-400 italic">
                While we strive to protect your information, no method of internet transmission or electronic storage is completely secure.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">6.</span> Third-Party Services
              </h2>
              <p>Our website may contain links to third-party websites, including:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1 pl-2">
                <li>Google Maps</li>
                <li>Social Media Platforms</li>
                <li>Equipment Manufacturers</li>
                <li>Business Partners</li>
              </ul>
              <p className="text-xs text-slate-400">
                We are not responsible for the privacy practices or content of third-party websites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">7.</span> Data Retention
              </h2>
              <p>We retain personal information only for as long as necessary to:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1 pl-2">
                <li>Provide our services</li>
                <li>Fulfil contractual obligations</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes</li>
                <li>Maintain business records</li>
              </ul>
              <p className="text-xs text-slate-400">
                When information is no longer required, it will be securely deleted or anonymised where appropriate.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">8.</span> Your Rights
              </h2>
              <p>Depending on applicable laws, you may have the right to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-slate-400 text-sm pl-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent where applicable</li>
                <li>Object to processing activities</li>
                <li>Request a copy of your information</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">9.</span> Children's Privacy
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our website and services are intended for business and general audiences. We do not knowingly collect personal information from children under the age required by applicable law without appropriate consent. If you believe such information has been provided, please contact us so we can take appropriate action.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bebas tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-3">
                <span className="text-[#38BDF8]">10.</span> Changes to This Privacy Policy
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or services. Any updates will be posted on this page with a revised Last Updated date.
              </p>
            </section>

            {/* Section 11 - Contact Us */}
            <section className="space-y-6 pt-4 border-t border-slate-800">
              <h2 className="text-2xl font-bebas tracking-wider text-white flex items-center gap-3">
                <span className="text-[#38BDF8]">11.</span> Contact Us
              </h2>
              <p className="text-sm">
                If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your information, please contact us:
              </p>

              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-4">
                <h3 className="font-bebas text-xl text-white tracking-wide">Family Anchor Facilities Pvt. Ltd.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider">Address</strong>
                      HIG DDA JASOLA, DELHI
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider">Phone</strong>
                      <a href="tel:9386126258" className="hover:text-[#38BDF8] transition-colors">+91 9386126258</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider">Email</strong>
                      <a href="mailto:familyanchorfacilities@gmail.com" className="hover:text-[#38BDF8] transition-colors">familyanchorfacilities@gmail.com</a>
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

            {/* Section 12 - Consent */}
            <section className="space-y-4 pt-4 border-t border-slate-800">
              <h2 className="text-2xl font-bebas tracking-wider text-white flex items-center gap-3">
                <span className="text-[#38BDF8]">12.</span> Consent
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                By accessing and using this website, you acknowledge that you have read, understood, and agreed to this Privacy Policy and our practices regarding the collection, use, and protection of your information.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
