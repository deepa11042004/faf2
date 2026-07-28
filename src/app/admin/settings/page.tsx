"use client";

import { useEffect, useState } from "react";
import { settingsApi } from "@/services/api/settingsApi";
import { WebsiteSettingItem } from "@/types/admin";
import { Save, Building, Mail, Phone, MapPin, Globe, CheckCircle2 } from "lucide-react";

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const res = await settingsApi.getSettings();
      if (res.success && res.data) {
        const d = res.data;
        setCompanyName(d.companyName || "Family Anchor Facilities Pvt. Ltd.");
        setEmail(d.email || "info@familyanchor.in");
        setPhone(d.phone || "+91 9386126258");
        setWhatsapp(d.whatsapp || "+91 9386126258");
        setAddress(d.address || "");
        setWorkingHours(d.workingHours || "24/7 Operations");
        setFacebook(d.facebook || "");
        setInstagram(d.instagram || "");
        setLinkedin(d.linkedin || "");
        setTwitter(d.twitter || "");
      }
    } catch (error) {
      console.error("Failed to fetch settings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("companyName", companyName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("whatsapp", whatsapp);
      formData.append("address", address);
      formData.append("workingHours", workingHours);
      formData.append("facebook", facebook);
      formData.append("instagram", instagram);
      formData.append("linkedin", linkedin);
      formData.append("twitter", twitter);

      await settingsApi.updateSettings(formData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      alert("Failed to update settings.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-slate-500">Loading website settings...</div>;

  return (
    <div className="space-y-6 font-inter max-w-4xl">
      <div>
        <h1 className="text-3xl font-bebas tracking-wide text-white">Website & Branding Settings</h1>
        <p className="text-slate-400 text-sm">Configure corporate contact information, social links, and working hours.</p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3 text-emerald-400 text-sm">
          <CheckCircle2 className="w-5 h-5" />
          <span>Website settings updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Company Information</h2>
          <div>
            <label className="block text-xs text-slate-400 uppercase mb-1">Company Name</label>
            <input type="text" required value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 uppercase mb-1">Email Address</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 uppercase mb-1">Phone Number</label>
              <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 uppercase mb-1">WhatsApp Hotline</label>
              <input type="text" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 uppercase mb-1">Working Hours</label>
              <input type="text" value={workingHours} onChange={(e) => setWorkingHours(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm" />
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 uppercase mb-1">Office Address</label>
            <textarea rows={2} value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm" />
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Social Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 uppercase mb-1">Facebook URL</label>
              <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 uppercase mb-1">Instagram URL</label>
              <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 uppercase mb-1">LinkedIn URL</label>
              <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 uppercase mb-1">X (Twitter) URL</label>
              <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white text-sm" />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button type="submit" disabled={saving} className="px-6 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369a1] text-white font-semibold text-sm flex items-center gap-2 shadow-lg">
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
}
