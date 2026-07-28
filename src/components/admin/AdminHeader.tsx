"use client";

import { Menu, User, Bell, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";

interface AdminHeaderProps {
  setIsMobileOpen: (value: boolean) => void;
}

export function AdminHeader({ setIsMobileOpen }: AdminHeaderProps) {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 text-slate-100 px-4 md:px-6 flex items-center justify-between sticky top-0 z-30 shadow-md">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="hidden sm:flex items-center gap-2 text-sm text-slate-400">
          <span className="text-slate-200 font-semibold">Corporate Portal</span>
          <span>/</span>
          <span className="text-[#38BDF8]">Dashboard</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Live Site Preview Link */}
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
        >
          <span>View Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>

        {/* User Info Badge */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
          <div className="w-9 h-9 rounded-full bg-[#0284C7] flex items-center justify-center text-white font-bold text-sm shadow-md">
            {user?.name ? user.name.charAt(0).toUpperCase() : "A"}
          </div>
          <div className="hidden md:block">
            <div className="text-sm font-semibold text-white leading-tight">
              {user?.name || "Super Admin"}
            </div>
            <div className="text-xs text-slate-400">
              {user?.email || "admin@familyanchor.in"}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
