"use client";

import { useState } from "react";
import { authApi } from "@/services/api/authApi";
import { useAuthStore } from "@/store/authStore";
import { User, Lock, KeyRound, CheckCircle2 } from "lucide-react";

export default function AdminProfilePage() {
  const user = useAuthStore((state) => state.user);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await authApi.changePassword({ currentPassword, newPassword });
      setSuccess(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to change password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 font-inter max-w-3xl">
      <div>
        <h1 className="text-3xl font-bebas tracking-wide text-white">Admin Security & Profile</h1>
        <p className="text-slate-400 text-sm">Manage administrative credentials and security settings.</p>
      </div>

      {/* Account Info */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-[#0284C7] flex items-center justify-center text-white text-2xl font-bold font-bebas shadow-lg">
          {user?.name ? user.name.charAt(0).toUpperCase() : "A"}
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{user?.name || "Super Admin"}</h2>
          <p className="text-slate-400 text-sm">{user?.email || "admin@familyanchor.in"}</p>
          <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-[#38BDF8] border border-sky-500/20 uppercase">
            {user?.role || "administrator"}
          </span>
        </div>
      </div>

      {/* Change Password Form */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
          <KeyRound className="w-5 h-5 text-[#38BDF8]" />
          <span>Change Account Password</span>
        </h3>

        {success && (
          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3 text-emerald-400 text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>Your password has been changed successfully!</span>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Current Password</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">New Password</label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Confirm New Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#0284C7]"
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369a1] text-white font-semibold text-sm flex items-center gap-2 shadow-lg"
            >
              {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
              <span>Update Password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
