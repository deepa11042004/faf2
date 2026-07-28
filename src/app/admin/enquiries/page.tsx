"use client";

import { useEffect, useState } from "react";
import { contactApi } from "@/services/api/contactApi";
import { ContactEnquiryItem } from "@/types/admin";
import { ConfirmModal } from "@/components/admin/ConfirmModal";
import { Search, Trash2, MessageSquare, Eye, X } from "lucide-react";

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<ContactEnquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState<ContactEnquiryItem | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const res = await contactApi.getEnquiries();
      if (res.success && res.data) {
        setEnquiries(res.data.enquiries);
      }
    } catch (error) {
      console.error("Failed to fetch enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await contactApi.deleteEnquiry(deleteId);
      setDeleteId(null);
      fetchEnquiries();
    } catch (error) {
      alert("Failed to delete enquiry.");
    }
  };

  return (
    <div className="space-y-6 font-inter">
      <div>
        <h1 className="text-3xl font-bebas tracking-wide text-white">Contact Enquiries & Leads</h1>
        <p className="text-slate-400 text-sm">Manage inbound security service quotes and customer questions.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950 text-slate-400 uppercase text-xs border-b border-slate-800">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Interested Service</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {loading ? (
              <tr><td colSpan={5} className="p-8 text-center text-slate-500">Loading enquiries...</td></tr>
            ) : enquiries.length === 0 ? (
              <tr><td colSpan={5} className="p-8 text-center text-slate-500">No enquiries received yet.</td></tr>
            ) : (
              enquiries.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40">
                  <td className="p-4 font-semibold text-white">{item.name}</td>
                  <td className="p-4 text-xs text-slate-400">
                    <div>{item.email}</div>
                    <div>{item.phone}</div>
                  </td>
                  <td className="p-4 text-xs text-[#38BDF8] font-medium">{item.interestedService || "General Query"}</td>
                  <td className="p-4 text-xs text-slate-500">{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td className="p-4 text-right space-x-2">
                    <button onClick={() => setSelectedEnquiry(item)} className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200">
                      <Eye className="w-3.5 h-3.5" />
                    </button>
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

      {/* Details Drawer Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full relative">
            <button onClick={() => setSelectedEnquiry(null)} className="absolute top-5 right-5 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bebas text-white mb-4">Enquiry Details</h2>
            <div className="space-y-3 text-sm">
              <div><span className="text-xs text-slate-500 block">Name</span> <span className="font-semibold text-white">{selectedEnquiry.name}</span></div>
              <div><span className="text-xs text-slate-500 block">Email & Phone</span> <span className="text-slate-300">{selectedEnquiry.email} &bull; {selectedEnquiry.phone}</span></div>
              <div><span className="text-xs text-slate-500 block">Interested Service</span> <span className="text-[#38BDF8]">{selectedEnquiry.interestedService || "N/A"}</span></div>
              <div><span className="text-xs text-slate-500 block">Message</span> <p className="p-3 rounded-xl bg-slate-950 text-slate-300 text-xs mt-1 border border-slate-800">{selectedEnquiry.message}</p></div>
            </div>
          </div>
        </div>
      )}

      <ConfirmModal isOpen={!!deleteId} onClose={() => setDeleteId(null)} onConfirm={handleDelete} title="Delete Enquiry" description="Delete enquiry record?" />
    </div>
  );
}
