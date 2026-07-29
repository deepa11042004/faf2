"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShieldCheck,
  Building2,
  Image as ImageIcon,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Shield,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/authStore";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Services", href: "/admin/services", icon: ShieldCheck },
  { label: "Devices Catalog", href: "/admin/devices", icon: Cpu },
  { label: "Projects", href: "/admin/projects", icon: Building2 },
  { label: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { label: "Career Jobs", href: "/admin/jobs", icon: Briefcase },
  { label: "Applications", href: "/admin/applications", icon: Users },
  { label: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
  { label: "Settings", href: "/admin/settings", icon: Settings },
  { label: "Profile", href: "/admin/profile", icon: User }
];

interface AdminSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (value: boolean) => void;
}

export function AdminSidebar({
  isCollapsed,
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen
}: AdminSidebarProps) {
  const pathname = usePathname();
  const logout = useAuthStore((state) => state.logout);

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed top-0 left-0 bottom-0 z-50 bg-slate-900 text-slate-100 border-r border-slate-800 transition-all duration-300 flex flex-col justify-between shadow-2xl",
          isCollapsed ? "w-20" : "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Brand Header */}
        <div>
          <div className="flex items-center justify-between p-4 border-b border-slate-800">
            <Link href="/admin/dashboard" className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#0284C7] flex items-center justify-center text-white shrink-0 shadow-lg">
                <Shield className="w-6 h-6" />
              </div>
              {!isCollapsed && (
                <div className="font-bebas tracking-wide text-xl text-white truncate">
                  FAF Admin
                </div>
              )}
            </Link>

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
          </div>

          {/* Nav Links */}
          <nav className="p-3 space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3.5 py-3 rounded-xl font-medium text-sm transition-all group relative",
                    isActive
                      ? "bg-[#0284C7] text-white shadow-md font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                  )}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className={cn("w-5 h-5 shrink-0 transition-transform group-hover:scale-110", isActive ? "text-white" : "text-slate-400 group-hover:text-white")} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Logout */}
        <div className="p-3 border-t border-slate-800">
          <button
            onClick={logout}
            className={cn(
              "w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all group"
            )}
            title={isCollapsed ? "Logout" : undefined}
          >
            <LogOut className="w-5 h-5 shrink-0 transition-transform group-hover:-translate-x-0.5" />
            {!isCollapsed && <span>Logout Account</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
