"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@/services/api/authApi";
import { useAuthStore } from "@/store/authStore";
import { Shield, Lock, Mail, AlertCircle, ArrowRight, Settings, Server, Check } from "lucide-react";
import Image from "next/image";

import { getApiBaseUrl } from "@/lib/axios";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@familyanchor.in");
  const [password, setPassword] = useState("AdminPassword123!");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showApiConfig, setShowApiConfig] = useState(false);
  const [apiUrl, setApiUrl] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    setApiUrl(getApiBaseUrl());
  }, []);

  const handleSaveApiUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiUrl.trim()) {
      let cleaned = apiUrl.trim();
      // Fix duplicate protocols like http://http://
      cleaned = cleaned.replace(/^(https?:\/\/)+/i, "http://");
      // Strip trailing slashes
      cleaned = cleaned.replace(/\/+$/, "");
      // Ensure /api/v1 suffix is present
      if (!cleaned.endsWith("/api/v1")) {
        cleaned = `${cleaned}/api/v1`;
      }
      setApiUrl(cleaned);
      localStorage.setItem("faf_custom_api_url", cleaned);
      setSavedSuccess(true);
      setError("");
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  const handleResetApiUrl = () => {
    localStorage.removeItem("faf_custom_api_url");
    setApiUrl(getApiBaseUrl());
    setError("");
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authApi.login({ email, password });
      if (response.success && response.data) {
        setAuth(response.data.token, response.data.admin);
        router.push("/admin/dashboard");
      } else {
        setError(response.message || "Invalid credentials.");
      }
    } catch (err: any) {
      if (!err.response) {
        setError(`Network Error: Unable to reach backend server at ${getApiBaseUrl()}. Please verify your backend container URL.`);
        setShowApiConfig(true);
      } else {
        setError(err.response?.data?.message || "Invalid email or password.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 relative overflow-hidden font-inter">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0284C7]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        <div className="bg-slate-900/90 border border-slate-800 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img
                src="/logo.png"
                alt="FAF Logo"
                className="h-16 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <h1 className="text-3xl font-bebas tracking-wide text-white">
              Family Anchor Facilities
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Admin Portal Security Login
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl space-y-2 text-red-400 text-sm">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
              <button
                type="button"
                onClick={() => setShowApiConfig(!showApiConfig)}
                className="text-xs text-sky-400 hover:underline block pt-1 font-semibold"
              >
                {showApiConfig ? "Hide Backend Server Configuration" : "Configure Backend Server URL"}
              </button>
            </div>
          )}

          {/* Backend API Configuration Panel */}
          {showApiConfig && (
            <div className="mb-6 p-4 bg-slate-950/80 border border-sky-500/30 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-sky-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Server className="w-4 h-4" /> Backend Server Endpoint
                </span>
                {savedSuccess && (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Check className="w-3 h-3" /> Saved
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                If Coolify assigned a new URL to your backend container, paste it below (ending with <code className="text-sky-300">/api/v1</code>).
              </p>
              <form onSubmit={handleSaveApiUrl} className="space-y-2">
                <input
                  type="url"
                  required
                  value={apiUrl}
                  onChange={(e) => setApiUrl(e.target.value)}
                  placeholder="http://backend-domain.sslip.io/api/v1"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-[#0284C7]"
                />
                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleResetApiUrl}
                    className="text-[10px] text-slate-400 hover:text-slate-200 px-2 py-1"
                  >
                    Reset Default
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#0284C7] text-white text-xs font-semibold rounded-lg hover:bg-[#0369a1] transition-all"
                  >
                    Save & Retry
                  </button>
                </div>
              </form>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@familyanchor.in"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-[#0284C7] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-[#0284C7] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0284C7] hover:bg-[#0369a1] text-white font-bebas text-lg tracking-wider uppercase py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group mt-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In To Dashboard</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-between text-xs text-slate-500">
            <span>Protected & Encrypted Corporate Console &copy; {new Date().getFullYear()}</span>
            <button
              type="button"
              onClick={() => setShowApiConfig(!showApiConfig)}
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
              title="Backend Server Configuration"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
