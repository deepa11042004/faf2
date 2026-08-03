"use client";

import { useEffect, useState } from "react";
import { jobsApi } from "@/services/api/jobsApi";
import { CareerJobItem } from "@/types/admin";
import { ConfirmModal } from "@/components/admin/ConfirmModal";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Briefcase,
  MapPin,
  CheckCircle2,
  XCircle,
  X,
  ListChecks,
  FileCheck
} from "lucide-react";

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<CareerJobItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<CareerJobItem | null>(null);
  const [formLoading, setFormLoading] = useState(false);

  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Form Fields matching Career Cards Structure
  const [jobTitle, setJobTitle] = useState("");
  const [employmentType, setEmploymentType] = useState("Full-Time");
  const [location, setLocation] = useState("Delhi NCR");
  const [department, setDepartment] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [requirements, setRequirements] = useState("");
  const [experience, setExperience] = useState("1-3 Years");
  const [salary, setSalary] = useState("Negotiable");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await jobsApi.getJobs();
      if (res.success && res.data) {
        setJobs(res.data.jobs);
      }
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleOpenModal = (item?: CareerJobItem) => {
    if (item) {
      setEditingItem(item);
      setJobTitle(item.jobTitle);
      setEmploymentType(item.employmentType || "Full-Time");
      setLocation(item.location || "Delhi NCR");
      setDepartment(item.department || "");
      setResponsibilities(item.responsibilities || "");
      setRequirements(item.requirements || "");
      setExperience(item.experience || "1-3 Years");
      setSalary(item.salary || "Negotiable");
      setDescription(item.description || "");
      setStatus(item.status);
    } else {
      setEditingItem(null);
      setJobTitle("");
      setEmploymentType("Full-Time");
      setLocation("Delhi NCR");
      setDepartment("");
      setResponsibilities("");
      setRequirements("");
      setExperience("1-3 Years");
      setSalary("Negotiable");
      setDescription("");
      setStatus("active");
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const payload = {
        jobTitle,
        employmentType,
        location,
        department,
        responsibilities,
        requirements,
        experience,
        salary,
        description,
        status
      };

      if (editingItem) {
        await jobsApi.updateJob(editingItem.id, payload);
      } else {
        await jobsApi.createJob(payload);
      }
      setIsModalOpen(false);
      fetchJobs();
    } catch (error) {
      alert("Failed to save job posting.");
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleteLoading(true);
    try {
      await jobsApi.deleteJob(deleteId);
      setDeleteId(null);
      fetchJobs();
    } catch (error) {
      alert("Failed to delete job.");
    } finally {
      setDeleteLoading(false);
    }
  };

  // Helper to convert responsibilities/requirements text or bullet strings into arrays
  const parseLines = (text?: string): string[] => {
    if (!text) return [];
    return text
      .split(/\r?\n|\. /)
      .map((s) => s.trim().replace(/^[-•*]\s*/, ""))
      .filter((s) => s.length > 0);
  };

  const filteredJobs = jobs.filter((item) => {
    const matchesSearch =
      search === "" ||
      item.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
      (item.department && item.department.toLowerCase().includes(search.toLowerCase())) ||
      item.location.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 font-inter">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bebas tracking-wide text-white">Career Openings Management</h1>
          <p className="text-slate-400 text-sm">Post and manage job opportunities visible on the Careers page.</p>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="px-4 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369a1] text-white text-sm font-semibold flex items-center gap-2 shadow-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Post New Job Opening</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search job titles, locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#0284C7]"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none"
          >
            <option value="">All Statuses</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>

          <span className="text-xs text-slate-400 font-semibold">Total: {filteredJobs.length} Jobs</span>
        </div>
      </div>

      {/* Jobs Grid - Styled identically to Careers Page Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12 text-slate-500">Loading job listings...</div>
        ) : filteredJobs.length === 0 ? (
          <div className="col-span-full text-center py-12 text-slate-500">No career listings found.</div>
        ) : (
          filteredJobs.map((item) => {
            const respList = parseLines(item.responsibilities);
            const reqList = parseLines(item.requirements);

            return (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between group hover:border-slate-700 transition-all"
              >
                <div>
                  {/* Top Card Bar: Type Badge & Location */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                    <span className="font-bebas text-xs tracking-wider uppercase px-3 py-1 bg-sky-500/10 text-[#38BDF8] border border-sky-500/20 rounded-full font-bold">
                      {item.employmentType || "Full-Time"}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{item.location || "Delhi NCR"}</span>
                    </div>
                  </div>

                  {/* Job Title */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <h3 className="font-bebas text-2xl tracking-wide text-white leading-tight">
                      {item.jobTitle}
                    </h3>
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        item.status === "active"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Responsibilities Section */}
                  <div className="mb-4">
                    <h4 className="font-bebas text-xs tracking-wider text-[#38BDF8] uppercase mb-2 flex items-center gap-1">
                      <ListChecks className="w-3.5 h-3.5" /> Responsibilities
                    </h4>
                    {respList.length > 0 ? (
                      <ul className="space-y-1 text-xs text-slate-300">
                        {respList.slice(0, 4).map((res, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 shrink-0" />
                            <span className="line-clamp-2">{res}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-slate-500 italic">No responsibilities listed.</p>
                    )}
                  </div>

                  {/* Requirements Section */}
                  <div className="mb-4">
                    <h4 className="font-bebas text-xs tracking-wider text-[#38BDF8] uppercase mb-2 flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5" /> Requirements
                    </h4>
                    {reqList.length > 0 ? (
                      <ul className="space-y-1 text-xs text-slate-300">
                        {reqList.slice(0, 4).map((req, qIdx) => (
                          <li key={qIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                            <span className="line-clamp-2">{req}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-slate-500 italic">No requirements listed.</p>
                    )}
                  </div>
                </div>

                {/* Bottom Actions Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 mt-2">
                  <span className="text-[11px] text-slate-500">
                    {item.department ? `Dept: ${item.department}` : "General Operations"}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                      title="Edit Job Opening"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteId(item.id)}
                      className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                      title="Delete Job Opening"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Post / Edit Job Opening Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bebas tracking-wide text-white mb-6">
              {editingItem ? "Edit Job Opening Details" : "Post New Job Opening"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Job Title & Employment Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Security Guard or CCTV Technician"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Job Type *
                  </label>
                  <select
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              {/* Location & Department */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi NCR or Noida, Uttar Pradesh"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Department
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Security, Technical, Housekeeping"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
              </div>

              {/* Responsibilities Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Responsibilities (One per line) *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={"Monitor premises and ensure safety.\nControl entry and exit points.\nConduct regular patrols."}
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7] leading-relaxed"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">Enter each responsibility point on a new line. These will render as bullet points on the Careers card.</span>
              </div>

              {/* Requirements Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Requirements & Qualifications (One per line) *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={"Minimum 10th/12th Pass (preferred).\nPhysically fit and disciplined.\nGood communication skills."}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7] leading-relaxed"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">Enter each requirement on a new line. These will render as bullet points on the Careers card.</span>
              </div>

              {/* Experience, Salary, Status */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Experience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1-3 Years"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. As per Industry Standards"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as "active" | "inactive")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                  >
                    <option value="active">Active (Visible)</option>
                    <option value="inactive">Inactive (Hidden)</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 border border-slate-700 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="px-6 py-2.5 bg-[#0284C7] hover:bg-[#0369a1] text-white rounded-xl text-xs font-semibold shadow-lg transition-all"
                >
                  {formLoading ? "Saving..." : "Save Job Opening"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Delete Job Opening"
        description="Are you sure you want to delete this career listing from the website?"
        loading={deleteLoading}
      />
    </div>
  );
}
