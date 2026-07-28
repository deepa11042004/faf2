"use client";

import { useEffect, useState } from "react";
import { applicationsApi } from "@/services/api/applicationsApi";
import { CareerApplicationItem } from "@/types/admin";
import { ConfirmModal } from "@/components/admin/ConfirmModal";
import { Search, Download, Trash2, Users, FileText } from "lucide-react";

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<CareerApplicationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await applicationsApi.getApplications();
      if (res.success && res.data) {
        setApplications(res.data.applications);
      }
    } catch (error) {
      console.error("Failed to fetch applications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await applicationsApi.deleteApplication(deleteId);
      setDeleteId(null);
      fetchApplications();
    } catch (error) {
      alert("Failed to delete application.");
    }
  };

  return (
    <div className="space-y-6 font-inter">
      <div>
        <h1 className="text-3xl font-bebas tracking-wide text-white">Career Applicants</h1>
        <p className="text-slate-400 text-sm">Review submitted resumes and candidate profiles.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950 text-slate-400 uppercase text-xs border-b border-slate-800">
            <tr>
              <th className="p-4">Applicant</th>
              <th className="p-4">Contact Info</th>
              <th className="p-4">Applied Job Role</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {loading ? (
              <tr><td colSpan={5} className="p-8 text-center text-slate-500">Loading candidate submissions...</td></tr>
            ) : applications.length === 0 ? (
              <tr><td colSpan={5} className="p-8 text-center text-slate-500">No applications received yet.</td></tr>
            ) : (
              applications.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40">
                  <td className="p-4 font-semibold text-white">{item.applicantName}</td>
                  <td className="p-4 text-xs text-slate-400">
                    <div>{item.email}</div>
                    <div>{item.phone}</div>
                  </td>
                  <td className="p-4 text-xs text-[#38BDF8] font-medium">{item.job?.jobTitle || item.appliedJob || "General Applicant"}</td>
                  <td className="p-4 text-xs text-slate-500">{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td className="p-4 text-right space-x-2">
                    {item.resumePath && (
                      <a href={`http://localhost:5001${item.resumePath}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-sky-500/10 text-[#38BDF8] hover:bg-sky-500/20 inline-flex items-center gap-1 text-xs">
                        <Download className="w-3.5 h-3.5" /> Resume
                      </a>
                    )}
                    <button onClick={() => setDeleteId(item.id)} className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <ConfirmModal isOpen={!!deleteId} onClose={() => setDeleteId(null)} onConfirm={handleDelete} title="Delete Application" description="Delete candidate submission?" />
    </div>
  );
}
