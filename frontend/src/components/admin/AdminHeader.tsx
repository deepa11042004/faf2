"use client";

import { useState, useEffect } from "react";
import { Menu, User, Bell, ExternalLink, Phone } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { settingsApi } from "@/services/api/settingsApi";

interface AdminHeaderProps {
  setIsMobileOpen: (value: boolean) => void;
}

export function AdminHeader({ setIsMobileOpen }: AdminHeaderProps) {
  const user = useAuthStore((state) => state.user);
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    settingsApi.getSettings()
      .then((res: any) => {
        if (res?.data) {
          setSettings(res.data);
        }
      })
      .catch(() => {});
  }, []);

  const rawWhatsapp = settings?.whatsapp || settings?.phone || "9324831576";
  const cleanWhatsapp = rawWhatsapp.replace(/\D/g, "");
  const formattedWhatsapp = cleanWhatsapp.length === 10 ? `91${cleanWhatsapp}` : cleanWhatsapp;

  const rawPhone = settings?.phone || "9324831576";
  const cleanPhone = rawPhone.replace(/[^\d+]/g, "");

  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 text-slate-100 px-4 md:px-6 flex items-center justify-between sticky top-0 z-40 shadow-md">
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

      <div className="flex items-center gap-2 sm:gap-3">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${formattedWhatsapp}?text=Hello%20Family%20Anchor%20Facilities,%20I%20would%20like%20to%20inquire%20about%20your%20security%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          title={`Contact on WhatsApp (${rawWhatsapp})`}
          className="p-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 transition-all flex items-center justify-center"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.707 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
          </svg>
        </a>

        {/* Phone Call Button */}
        <a
          href={`tel:${cleanPhone}`}
          title={`Direct Phone Call (${rawPhone})`}
          className="p-2 rounded-lg bg-sky-600/20 hover:bg-sky-600/30 text-sky-400 border border-sky-500/30 transition-all flex items-center justify-center"
        >
          <Phone className="w-4 h-4" />
        </a>

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
