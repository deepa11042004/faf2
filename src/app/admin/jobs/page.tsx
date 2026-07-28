"use client";

import { useEffect, useState } from "react";
import { jobsApi } from "@/services/api/jobsApi";
import { CareerJobItem } from "@/types/admin";
import { ConfirmModal } from "@/components/admin/ConfirmModal";
import { Plus, Search, Edit2, Trash2, Briefcase, X } from "lucide-react";

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<CareerJobItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<CareerJobItem | null>(null);
  const [formLoading, setFormLoading] = useState(false);

  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("Ranchi / Corporate Office");
  const [employmentType, setEmploymentType] = useState("Full Time");
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

  const handleOpenModal = (item?: CareerJobItem) => {
    if (item) {
      setEditingItem(item);
      setJobTitle(item.jobTitle);
      setDepartment(item.department || "");
      setLocation(item.location);
      setEmploymentType(item.employmentType);
      setExperience(item.experience || "");
      setSalary(item.salary || "");
      setDescription(item.description || "");
      setStatus(item.status);
    } else {
      setEditingItem(null);
      setJobTitle("");
      setDepartment("");
      setLocation("Ranchi / Corporate Office");
      setEmploymentType("Full Time");
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
      const payload = { jobTitle, department, location, employmentType, experience, salary, description, status };
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

  return (
    <div className="space-y-6 font-inter">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bebas tracking-wide text-white">Career Openings Management</h1>
          <p className="text-slate-400 text-sm">Post job opportunities for guards, supervisors, and engineers.</p>
        </div>

        <button onClick={() => handleOpenModal()} className="px-4 py-2.5 rounded-xl bg-[#0284C7] text-white text-sm font-semibold flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Post Job Opening</span>
        </button>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12 text-slate-500">Loading jobs...</div>
        ) : jobs.length === 0 ? (
          <div className="col-span-full text-center py-12 text-slate-500">No active job listings.</div>
        ) : (
          jobs.map((item) => (
            <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#38BDF8] bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20 font-semibold">{item.department || "Operations"}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${item.status === "active" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-slate-800 text-slate-400"}`}>{item.status}</span>
                </div>
                <h3 className="text-2xl font-bebas tracking-wide text-white mb-1">{item.jobTitle}</h3>
                <div className="text-xs text-slate-400 mb-4">{item.location} &bull; {item.employmentType} &bull; Exp: {item.experience}</div>
                <p className="text-slate-300 text-xs line-clamp-3 leading-relaxed mb-4">{item.description}</p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-800">
                <button onClick={() => handleOpenModal(item)} className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => setDeleteId(item.id)} className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bebas text-white mb-4">{editingItem ? "Edit Job" : "Post Job Opening"}</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs text-slate-400 uppercase mb-1">Job Title *</label>
                <input type="text" required value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 uppercase mb-1">Department</label>
                  <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 uppercase mb-1">Location *</label>
                  <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase mb-1">Description</label>
                <textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white text-sm" />
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-slate-700 text-slate-300 rounded-xl text-xs">Cancel</button>
                <button type="submit" disabled={formLoading} className="px-5 py-2 bg-[#0284C7] text-white rounded-xl text-xs font-semibold">Save Job</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmModal isOpen={!!deleteId} onClose={() => setDeleteId(null)} onConfirm={handleDelete} title="Delete Job Opening" description="Delete this career listing?" loading={deleteLoading} />
    </div>
  );
}
