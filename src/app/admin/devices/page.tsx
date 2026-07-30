"use client";

import { useEffect, useState } from "react";
import { devicesApi } from "@/services/api/devicesApi";
import { DeviceItem } from "@/types/admin";
import { ConfirmModal } from "@/components/admin/ConfirmModal";
import { getMediaUrl } from "@/lib/axios";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  X
} from "lucide-react";

export default function AdminServiceCategoriesPage() {
  const [devices, setDevices] = useState<DeviceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<DeviceItem | null>(null);
  const [formLoading, setFormLoading] = useState(false);

  // Delete Modal
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Form Fields
  const [name, setName] = useState("");
  const [deviceCategory, setDeviceCategory] = useState("CCTV Surveillance");
  const [serviceSlug, setServiceSlug] = useState("cctv-installation");
  const [description, setDescription] = useState("");
  const [bestForInput, setBestForInput] = useState("");
  const [keyFeaturesInput, setKeyFeaturesInput] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const fetchDevices = async () => {
    try {
      setLoading(true);
      const res = await devicesApi.getDevices({ search, category });
      if (res.success && res.data) {
        setDevices(res.data.devices);
      }
    } catch (error) {
      console.error("Failed to fetch service categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, [search, category]);

  const handleOpenModal = (item?: DeviceItem) => {
    if (item) {
      setEditingItem(item);
      setName(item.name);
      setDeviceCategory(item.category);
      setServiceSlug(item.serviceSlug || "cctv-installation");
      setDescription(item.description || "");
      setBestForInput(Array.isArray(item.bestFor) ? item.bestFor.join(", ") : "");
      setKeyFeaturesInput(Array.isArray(item.keyFeatures) ? item.keyFeatures.join(", ") : "");
      setStatus(item.status);
    } else {
      setEditingItem(null);
      setName("");
      setDeviceCategory("CCTV Surveillance");
      setServiceSlug("cctv-installation");
      setDescription("");
      setBestForInput("");
      setKeyFeaturesInput("");
      setStatus("active");
    }
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", deviceCategory);
      formData.append("serviceSlug", serviceSlug);
      formData.append("description", description);
      formData.append("bestFor", bestForInput);
      formData.append("keyFeatures", keyFeaturesInput);
      formData.append("status", status);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      if (editingItem) {
        await devicesApi.updateDevice(editingItem.id, formData);
      } else {
        await devicesApi.createDevice(formData);
      }

      setIsModalOpen(false);
      fetchDevices();
    } catch (error) {
      alert("Failed to save service category details.");
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleteLoading(true);
    try {
      await devicesApi.deleteDevice(deleteId);
      setDeleteId(null);
      fetchDevices();
    } catch (error) {
      alert("Failed to delete category item.");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="space-y-6 font-inter">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bebas tracking-wide text-white">Service Categories & Hardware Specs</h1>
          <p className="text-slate-400 text-sm">Manage sub-service categories, camera types, guard deployments, biometric hardware, and equipment specs.</p>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="px-4 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369a1] text-white text-sm font-semibold flex items-center gap-2 shadow-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Category / Device</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search service categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#0284C7]"
          />
        </div>

        <div className="flex items-center gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none"
          >
            <option value="">All Categories</option>
            <option value="Security Guard Services">Security Guard Services</option>
            <option value="CCTV Surveillance">CCTV Surveillance</option>
            <option value="Access Control">Access Control</option>
            <option value="Fire Safety">Fire Safety</option>
            <option value="PA System">PA System</option>
          </select>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12 text-slate-500">
            Loading service categories...
          </div>
        ) : devices.length === 0 ? (
          <div className="col-span-full text-center py-12 text-slate-500">
            No service categories or devices found in catalog.
          </div>
        ) : (
          devices.map((item) => (
            <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-slate-700 transition-all">
              <div>
                <div className="h-48 bg-slate-950 relative overflow-hidden flex items-center justify-center p-4">
                  {item.imagePath ? (
                    <img src={getMediaUrl(item.imagePath)} alt={item.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <Cpu className="w-16 h-16 text-slate-700" />
                  )}

                  <span className="absolute top-3 left-3 bg-[#0284C7] text-white font-bold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-md">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bebas tracking-wide text-white">{item.name}</h3>
                  <p className="text-slate-400 text-xs line-clamp-2">{item.description || "No description provided."}</p>

                  {/* Best For Tags */}
                  {Array.isArray(item.bestFor) && item.bestFor.length > 0 && (
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold block mb-1">Best For:</span>
                      <div className="flex flex-wrap gap-1">
                        {item.bestFor.map((tag, idx) => (
                          <span key={idx} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features */}
                  {Array.isArray(item.keyFeatures) && item.keyFeatures.length > 0 && (
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold block mb-1">Key Features & Duties:</span>
                      <ul className="text-xs text-slate-300 space-y-0.5">
                        {item.keyFeatures.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-slate-400">
                            <CheckCircle2 className="w-3 h-3 text-[#38BDF8] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-800/60 flex items-center justify-between mt-4">
                <span className="text-xs text-slate-500 font-mono">{item.serviceSlug || "general"}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleOpenModal(item)} className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => setDeleteId(item.id)} className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative my-8">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bebas tracking-wide text-white mb-6">
              {editingItem ? "Edit Service Category / Device" : "Add New Service Category"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Category Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Industrial Security Guards or Dome Cameras"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Parent Service *</label>
                  <select
                    value={deviceCategory}
                    onChange={(e) => setDeviceCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                  >
                    <option value="Security Guard Services">Security Guard Services</option>
                    <option value="CCTV Surveillance">CCTV Surveillance</option>
                    <option value="Access Control">Access Control</option>
                    <option value="Fire Safety">Fire Safety</option>
                    <option value="PA System">PA System</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Associated Service Page</label>
                <select
                  value={serviceSlug}
                  onChange={(e) => setServiceSlug(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                >
                  <option value="security-guard-services">Security Guard Services</option>
                  <option value="cctv-installation">CCTV Installation & Live Surveillance</option>
                  <option value="fire-alarm-system">Fire Alarm & Detection Systems</option>
                  <option value="access-control-system">Access Control Systems</option>
                  <option value="public-address-system">Public Address (PA) Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Description</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Trained & vetted physical security personnel for industrial plants and commercial buildings."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Best For (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="Corporate Offices, Industrial Plants, Residential Societies, Events"
                  value={bestForInput}
                  onChange={(e) => setBestForInput(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Features & Duties (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="24/7 Gate Supervision, Access Register Management, Fire Safety Trained"
                  value={keyFeaturesInput}
                  onChange={(e) => setKeyFeaturesInput(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Category Image / Banner</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#0284C7] file:text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm border border-slate-700 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-[#0284C7] text-white"
                >
                  {formLoading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2" />}
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      <ConfirmModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Delete Service Category"
        description="Are you sure you want to delete this service category from catalog?"
        loading={deleteLoading}
      />
    </div>
  );
}
