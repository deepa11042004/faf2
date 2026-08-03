"use client";

import { useEffect, useState } from "react";
import { applicationsApi } from "@/services/api/applicationsApi";
import { CareerApplicationItem } from "@/types/admin";
import { ConfirmModal } from "@/components/admin/ConfirmModal";
import { getMediaUrl } from "@/lib/axios";
import { Search, Download, Trash2, Users, FileText } from "lucide-react";

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<CareerApplicationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [viewApp, setViewApp] = useState<CareerApplicationItem | null>(null);

  const parseDetails = (msg: string | null) => {
    if (!msg) return null;
    try {
      return JSON.parse(msg);
    } catch {
      // Legacy string format fallback
      const lines = msg.split('\n');
      const details: Record<string, string> = {};
      lines.forEach(line => {
        const [key, ...valParts] = line.split(':');
        if (key && valParts.length > 0) {
          const val = valParts.join(':').trim();
          if (val && val !== "undefined" && val !== "null") {
            // Filter out fields we no longer want in the UI if they're empty
            details[key.trim()] = val;
          }
        }
      });
      return Object.keys(details).length > 0 ? details : null;
    }
  };

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
                    <button onClick={() => setViewApp(item)} className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 inline-flex items-center gap-1 text-xs">
                      <FileText className="w-3.5 h-3.5" /> Details
                    </button>
                    {item.resumePath && (
                      <a href={getMediaUrl(item.resumePath)} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-sky-500/10 text-[#38BDF8] hover:bg-sky-500/20 inline-flex items-center gap-1 text-xs">
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
      
      {/* View Details Modal */}
      {viewApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bebas tracking-wide text-white">Application Details</h2>
              <button onClick={() => setViewApp(null)} className="text-slate-400 hover:text-white">&times;</button>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs text-slate-500 mb-1">Applicant</span>
                  <div className="text-sm text-white font-medium">{viewApp.applicantName}</div>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-1">Applied For</span>
                  <div className="text-sm text-[#38BDF8] font-medium">{viewApp.job?.jobTitle || viewApp.appliedJob}</div>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-1">Email</span>
                  <div className="text-sm text-white">{viewApp.email}</div>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-1">Phone</span>
                  <div className="text-sm text-white">{viewApp.phone}</div>
                </div>
              </div>
              
              <div className="mt-8">
                <span className="block text-xs text-[#38BDF8] mb-4 uppercase font-bold tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  Additional Information
                </span>
                
                {(() => {
                  const details = parseDetails(viewApp.message);
                  if (details) {
                    return (
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(details).map(([key, value]) => (
                          value && String(value).trim() !== "" && (
                            <div key={key} className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/60 shadow-inner">
                              <span className="block text-xs text-slate-500 mb-1.5 font-medium">{key}</span>
                              <div className="text-sm text-slate-200 font-semibold">{String(value)}</div>
                            </div>
                          )
                        ))}
                      </div>
                    );
                  }
                  
                  return (
                    <div className="bg-slate-950/50 rounded-xl p-5 border border-slate-800/60 shadow-inner text-sm text-slate-300 whitespace-pre-wrap leading-relaxed font-mono">
                      {viewApp.message || "No additional information provided."}
                    </div>
                  );
                })()}
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button onClick={() => setViewApp(null)} className="px-5 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
