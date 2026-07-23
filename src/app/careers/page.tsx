"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Send, 
  Upload, 
  UserCheck, 
  Award, 
  TrendingUp, 
  Shield, 
  FileText 
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const WHAT_WE_OFFER = [
  "Professional and Respectful Work Environment",
  "Career Growth Opportunities",
  "Skill Development & Training Programs",
  "Performance-Based Recognition",
  "Competitive Salary Packages",
  "Job Stability",
  "Team-Oriented Culture",
  "Safe and Secure Working Environment",
  "Opportunities to Work on Diverse Projects"
];

const OPENINGS = [
  {
    id: "security-guard",
    title: "Security Guard",
    location: "Delhi NCR",
    type: "Full-Time",
    responsibilities: [
      "Monitor premises and ensure safety.",
      "Control entry and exit points.",
      "Conduct regular patrols.",
      "Respond to emergencies.",
      "Maintain security logs and reports."
    ],
    requirements: [
      "Minimum 10th/12th Pass (preferred)",
      "Physically fit and disciplined",
      "Good communication skills",
      "Prior experience preferred (Freshers may also apply)"
    ]
  },
  {
    id: "cctv-technician",
    title: "CCTV Installation Technician",
    location: "Delhi NCR",
    type: "Full-Time",
    responsibilities: [
      "Install and configure CCTV systems.",
      "Troubleshoot technical issues.",
      "Perform maintenance and servicing.",
      "Test and commission security equipment."
    ],
    requirements: [
      "ITI/Diploma or relevant technical experience",
      "Knowledge of CCTV and networking",
      "Basic electrical knowledge",
      "Problem-solving skills"
    ]
  },
  {
    id: "fire-alarm-technician",
    title: "Fire Alarm System Technician",
    location: "Delhi NCR",
    type: "Full-Time",
    responsibilities: [
      "Install and maintain fire alarm systems.",
      "Conduct testing and inspections.",
      "Troubleshoot system issues.",
      "Ensure compliance with safety standards."
    ],
    requirements: [
      "Technical background",
      "Experience with fire alarm systems preferred",
      "Basic electrical knowledge"
    ]
  },
  {
    id: "access-control-technician",
    title: "Access Control & Security System Technician",
    location: "Delhi NCR",
    type: "Full-Time",
    responsibilities: [
      "Install biometric and access control systems.",
      "Configure devices and software.",
      "Perform maintenance and troubleshooting."
    ],
    requirements: [
      "Knowledge of access control systems",
      "Networking basics",
      "Technical troubleshooting skills"
    ]
  },
  {
    id: "field-service-engineer",
    title: "Field Service Engineer",
    location: "Delhi NCR",
    type: "Full-Time",
    responsibilities: [
      "Visit client locations for installation and support.",
      "Perform preventive maintenance.",
      "Resolve technical issues.",
      "Coordinate with the technical team."
    ],
    requirements: [
      "Technical qualification",
      "Good communication skills",
      "Willingness to travel locally"
    ]
  },
  {
    id: "bde-executive",
    title: "Sales & Business Development Executive",
    location: "Delhi NCR",
    type: "Full-Time",
    responsibilities: [
      "Generate new business opportunities.",
      "Meet prospective clients.",
      "Prepare quotations and proposals.",
      "Maintain customer relationships."
    ],
    requirements: [
      "Excellent communication skills",
      "Sales experience preferred",
      "Customer-focused attitude"
    ]
  }
];

const ROLES_TREE = [
  {
    category: "Technical Roles",
    roles: ["CCTV Installation Engineer", "Fire Alarm Technician", "Access Control Engineer", "Networking Technician", "Service Engineer", "Maintenance Technician"]
  },
  {
    category: "Security Services",
    roles: ["Security Guard", "Security Supervisor", "Site In-Charge", "Security Officer", "Control Room Operator"]
  },
  {
    category: "Corporate Roles",
    roles: ["Sales Executive", "Business Development Executive", "Customer Support Executive", "HR Executive", "Operations Coordinator", "Administrative Executive"]
  },
  {
    category: "Leadership Roles",
    roles: ["Project Manager", "Operations Manager", "Technical Manager", "Branch Manager"]
  }
];

const HIRING_STEPS = [
  { step: "Step 1", title: "Application Submission", desc: "Submit your application and resume through our online career portal." },
  { step: "Step 2", title: "Application Review", desc: "Our HR team reviews your qualifications and experience based on the job requirements." },
  { step: "Step 3", title: "Interview", desc: "Shortlisted candidates are invited for a technical and HR interview." },
  { step: "Step 4", title: "Assessment (if applicable)", desc: "Certain technical roles may include a practical or skill-based assessment." },
  { step: "Step 5", title: "Offer & Onboarding", desc: "Successful candidates receive an offer letter and complete the onboarding process before joining." }
];

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    currentCity: "",
    dob: "",
    position: "Security Guard",
    totalExp: "",
    currentEmployer: "",
    currentSalary: "",
    expectedSalary: "",
    noticePeriod: "",
    highestQual: "",
    institution: "",
    passingYear: "",
    skills: "",
    certifications: "",
    coverLetter: "",
    declaration: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0284C7] selection:text-white">
      <Navbar />

      {/* Hero Header Banner */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('/dark-waves.png')] bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-sm text-[#38BDF8] font-bebas tracking-widest uppercase mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <span>Careers</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bebas tracking-wide text-white mb-6">
              Build a Rewarding Career with <span className="text-[#38BDF8]">Family Anchor Facilities</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-inter max-w-3xl mx-auto">
              At Family Anchor Facilities Pvt. Ltd., we believe our people are the foundation of our success. Join our team and grow in a supportive, professional environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
              Workplace Culture
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 leading-tight">
              Why Work With Us?
            </h2>
            <p className="text-slate-600 text-lg font-inter mt-3">
              We are committed to creating a workplace where employees can develop their skills, advance their careers, and contribute to meaningful projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHAT_WE_OFFER.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-sky-50/80 p-5 rounded-2xl border border-sky-200 flex items-center gap-3 text-slate-800 font-inter font-medium shadow-sm hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0284C7] shrink-0" />
                <span className="text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 bg-[url('/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
              Join Our Team
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight">
              Current Openings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {OPENINGS.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white text-slate-900 rounded-[28px] border-4 border-sky-300 shadow-xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                    <span className="font-bebas text-xs tracking-wider uppercase px-3 py-1 bg-sky-100 text-[#0284C7] rounded-full font-bold">
                      {job.type}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500 text-xs font-inter">
                      <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-slate-900 mb-4">
                    {job.title}
                  </h3>

                  <div className="mb-4">
                    <h4 className="font-bebas text-base tracking-wider text-[#0284C7] uppercase mb-2">Responsibilities</h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-inter">
                      {job.responsibilities.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bebas text-base tracking-wider text-[#0284C7] uppercase mb-2">Requirements</h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-inter">
                      {job.requirements.map((req, qIdx) => (
                        <li key={qIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a 
                  href="#apply-form"
                  onClick={() => setFormData({ ...formData, position: job.title })}
                  className="w-full text-center bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-lg tracking-wider uppercase py-3 rounded-full shadow-md transition-all inline-block"
                >
                  Apply For This Position
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section id="apply-form" className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
              Online Portal
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 leading-tight">
              Apply Now
            </h2>
            <p className="text-slate-600 text-lg font-inter mt-3">
              Fill in your personal, professional, and educational details below to submit your job application.
            </p>
          </div>

          {submitted ? (
            <div className="bg-sky-50 border-2 border-sky-300 p-10 rounded-[32px] text-center shadow-xl">
              <div className="w-16 h-16 bg-[#0284C7] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-bebas text-3xl text-slate-900 mb-2">Application Submitted Successfully!</h3>
              <p className="text-slate-600 font-inter text-base max-w-lg mx-auto mb-6">
                Thank you for applying. Our recruitment team is reviewing your details and will get in touch with you shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-[#0284C7] text-white font-bebas text-lg tracking-wider uppercase px-8 py-3 rounded-full shadow-md"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-sky-50/70 p-8 md:p-12 rounded-[32px] border-2 border-sky-200 shadow-2xl space-y-10">
              
              {/* Personal Information */}
              <div>
                <h3 className="font-bebas text-2xl tracking-wide text-[#0284C7] uppercase mb-6 pb-2 border-b border-sky-200 flex items-center gap-2">
                  <UserCheck className="w-6 h-6" /> Personal Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Mobile Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Current City *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. New Delhi"
                      value={formData.currentCity}
                      onChange={(e) => setFormData({ ...formData, currentCity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Date of Birth *</label>
                    <input 
                      type="date" 
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="font-bebas text-2xl tracking-wide text-[#0284C7] uppercase mb-6 pb-2 border-b border-sky-200 flex items-center gap-2">
                  <Briefcase className="w-6 h-6" /> Professional Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Position Applying For *</label>
                    <select 
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    >
                      {OPENINGS.map(j => (
                        <option key={j.id} value={j.title}>{j.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Total Experience *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 2 Years / Fresher"
                      value={formData.totalExp}
                      onChange={(e) => setFormData({ ...formData, totalExp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Current Employer</label>
                    <input 
                      type="text" 
                      placeholder="Company Name (if employed)"
                      value={formData.currentEmployer}
                      onChange={(e) => setFormData({ ...formData, currentEmployer: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Notice Period</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Immediate / 15 Days"
                      value={formData.noticePeriod}
                      onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Educational Qualification */}
              <div>
                <h3 className="font-bebas text-2xl tracking-wide text-[#0284C7] uppercase mb-6 pb-2 border-b border-sky-200 flex items-center gap-2">
                  <Award className="w-6 h-6" /> Educational Qualification
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Highest Qualification *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 12th / ITI / Diploma"
                      value={formData.highestQual}
                      onChange={(e) => setFormData({ ...formData, highestQual: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Institution Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="School / College Name"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Year of Passing *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 2021"
                      value={formData.passingYear}
                      onChange={(e) => setFormData({ ...formData, passingYear: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0284C7] bg-white font-inter text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Resume Upload & Declaration */}
              <div>
                <h3 className="font-bebas text-2xl tracking-wide text-[#0284C7] uppercase mb-6 pb-2 border-b border-sky-200 flex items-center gap-2">
                  <FileText className="w-6 h-6" /> Resume & Declaration
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-inter font-bold uppercase text-slate-700 mb-2">Upload Resume (PDF / DOC / DOCX - Max 5MB) *</label>
                    <div className="border-2 border-dashed border-sky-300 rounded-2xl p-6 bg-white text-center cursor-pointer hover:border-[#0284C7]">
                      <Upload className="w-8 h-8 text-[#0284C7] mx-auto mb-2" />
                      <span className="text-sm font-inter text-slate-600 block">Click to select resume file</span>
                      <input type="file" required accept=".pdf,.doc,.docx" className="hidden" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                    <input 
                      type="checkbox" 
                      required
                      id="declaration"
                      checked={formData.declaration}
                      onChange={(e) => setFormData({ ...formData, declaration: e.target.checked })}
                      className="mt-1 w-4 h-4 text-[#0284C7] rounded border-slate-300"
                    />
                    <label htmlFor="declaration" className="text-xs text-slate-700 font-inter leading-relaxed">
                      I confirm that the information provided is true and accurate to the best of my knowledge.
                    </label>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-2xl tracking-wider uppercase px-12 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

      {/* Career Opportunities Categories Tree */}
      <section className="py-24 bg-[url('/services-blue-bg.png')] bg-cover bg-center bg-no-repeat relative text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#38BDF8] font-bebas text-xl tracking-widest uppercase mb-2 block drop-shadow">
              Role Pathways
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-tight">
              Career Opportunities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ROLES_TREE.map((tree, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white text-slate-900 p-8 rounded-[28px] border-4 border-sky-300 shadow-xl"
              >
                <h3 className="font-bebas text-2xl tracking-wide text-[#0284C7] mb-4 pb-2 border-b border-sky-200">
                  {tree.category}
                </h3>
                <ul className="space-y-2 font-inter text-sm text-slate-700">
                  {tree.roles.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Hiring Process */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
              Transparent Selection
            </span>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 leading-tight">
              Our Hiring Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {HIRING_STEPS.map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-sky-50/80 p-6 rounded-2xl border border-sky-200 text-center flex flex-col justify-between"
              >
                <div>
                  <span className="font-bebas text-xs tracking-wider uppercase px-3 py-1 bg-[#0284C7] text-white rounded-full font-bold mb-3 inline-block">
                    {st.step}
                  </span>
                  <h4 className="font-bebas text-lg tracking-wide text-slate-900 mb-2">{st.title}</h4>
                  <p className="text-slate-600 text-xs font-inter leading-relaxed">{st.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-50 via-slate-50 to-sky-50 text-slate-900 border-t border-sky-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <span className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block">
            Future-Ready Growth
          </span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-slate-900 mb-6">
            Grow Your Career with Us
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-inter mb-8">
            At <strong>Family Anchor Facilities Pvt. Ltd.</strong>, we are committed to building a team of dedicated professionals who share our passion for safety, innovation, and excellence.
          </p>
          <div className="flex justify-center">
            <a 
              href="#apply-form" 
              className="inline-flex items-center gap-3 bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-xl tracking-wider uppercase px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
            >
              <span>Apply Online Today</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
