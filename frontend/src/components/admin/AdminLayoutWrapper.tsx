"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";

export function AdminLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { isAuthenticated, initializeAuth } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    initializeAuth();
    setMounted(true);
  }, [initializeAuth]);

  useEffect(() => {
    if (mounted) {
      if (!isAuthenticated && !pathname.includes("/admin/login")) {
        router.push("/admin/login");
      }
    }
  }, [mounted, isAuthenticated, pathname, router]);

  // Render Login page directly without layout wrapper
  if (pathname.includes("/admin/login")) {
    return <>{children}</>;
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-[#0284C7] border-t-transparent rounded-full animate-spin" />
          <span>Loading Admin Console...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-inter">
      <AdminSidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div
        className={cn(
          "flex-1 flex flex-col transition-all duration-300",
          isCollapsed ? "lg:pl-20" : "lg:pl-64"
        )}
      >
        <AdminHeader setIsMobileOpen={setIsMobileOpen} />
        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
