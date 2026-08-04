"use client";

import { useEffect, useState } from "react";
import { settingsApi } from "@/services/api/settingsApi";
import { WebsiteSettingItem } from "@/types/admin";
import { Save, Building, Globe, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [alternatePhone, setAlternatePhone] = useState("");
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
      setErrorMsg("");
      const res = await settingsApi.getSettings();
      if (res.success && res.data) {
        const d = res.data;
        setCompanyName(d.companyName || "Family Anchor Facilities Pvt. Ltd.");
        setEmail(d.email || "info@familyanchor.in");
        setPhone(d.phone || "+91 9386126258");
        setAlternatePhone(d.alternatePhone || "");
        setWhatsapp(d.whatsapp || "+91 9386126258");
        setAddress(d.address || "");
        setWorkingHours(d.workingHours || "24/7 Operations");
        setFacebook(d.facebook || "");
        setInstagram(d.instagram || "");
        setLinkedin(d.linkedin || "");
        setTwitter(d.twitter || "");
      }
    } catch (error: any) {
      console.error("Failed to fetch settings:", error);
      setErrorMsg(error?.response?.data?.message || "Failed to load website settings.");
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
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const payload = {
        companyName,
        email,
        phone,
        alternatePhone,
        whatsapp,
        address,
        workingHours,
        facebook,
        instagram,
        linkedin,
        twitter
      };

      const res = await settingsApi.updateSettings(payload);
      if (res.success) {
        setSuccessMsg(res.message || "Website settings updated successfully!");
        setTimeout(() => setSuccessMsg(""), 4000);
      } else {
        setErrorMsg(res.message || "Failed to save settings.");
      }
    } catch (error: any) {
      console.error("Failed to update settings:", error);
      const msg = error?.response?.data?.message || error?.message || "Failed to save settings.";
      setErrorMsg(msg);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-slate-500 font-inter">Loading website settings...</div>;

  return (
    <div className="space-y-6 font-inter max-w-4xl pb-12">
      <div>
        <h1 className="text-3xl font-bebas tracking-wide text-white">Website Settings</h1>
        <p className="text-slate-400 text-sm">Configure corporate contact information, social profiles, and working hours.</p>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center gap-3 text-emerald-400 text-sm font-semibold shadow-lg">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center gap-3 text-red-400 text-sm font-semibold shadow-lg">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-8 shadow-2xl">
        {/* Company & Contact Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2 flex items-center gap-2">
            <Building className="w-5 h-5 text-[#38BDF8]" /> Company & Contact Information
          </h2>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Company Name *</label>
            <input 
              type="text" 
              required 
              value={companyName} 
              onChange={(e) => setCompanyName(e.target.value)} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Email Address *</label>
              <input 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Primary Phone Number *</label>
              <input 
                type="text" 
                required 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Alternate Mobile Number</label>
              <input 
                type="text" 
                value={alternatePhone} 
                onChange={(e) => setAlternatePhone(e.target.value)} 
                placeholder="e.g. +91 9876543210"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">WhatsApp Hotline</label>
              <input 
                type="text" 
                value={whatsapp} 
                onChange={(e) => setWhatsapp(e.target.value)} 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Working Hours</label>
              <input 
                type="text" 
                value={workingHours} 
                onChange={(e) => setWorkingHours(e.target.value)} 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]" 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Office Address</label>
            <textarea 
              rows={3} 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]" 
            />
          </div>
        </div>

        {/* Social Profiles */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2 flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#38BDF8]" /> Social Media Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Facebook URL</label>
              <input 
                type="text" 
                value={facebook} 
                onChange={(e) => setFacebook(e.target.value)} 
                placeholder="https://facebook.com/..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Instagram URL</label>
              <input 
                type="text" 
                value={instagram} 
                onChange={(e) => setInstagram(e.target.value)} 
                placeholder="https://instagram.com/..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">LinkedIn URL</label>
              <input 
                type="text" 
                value={linkedin} 
                onChange={(e) => setLinkedin(e.target.value)} 
                placeholder="https://linkedin.com/in/..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">X (Twitter) URL</label>
              <input 
                type="text" 
                value={twitter} 
                onChange={(e) => setTwitter(e.target.value)} 
                placeholder="https://x.com/..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]" 
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <div className="text-xs text-slate-400">
            Changes update site-wide footer, header & contact pages immediately.
          </div>
          <button 
            type="submit" 
            disabled={saving} 
            className="px-8 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369a1] active:scale-95 text-white font-bebas text-lg tracking-wider uppercase flex items-center gap-2.5 shadow-xl transition-all disabled:opacity-50 cursor-pointer"
          >
            {saving ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Saving Settings...</span>
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                <span>Save Settings</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
