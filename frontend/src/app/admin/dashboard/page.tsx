"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { dashboardApi } from "@/services/api/dashboardApi";
import { DashboardMetrics } from "@/types/admin";
import { StatCard } from "@/components/admin/StatCard";
import {
  ShieldCheck,
  Building2,
  Image as ImageIcon,
  Briefcase,
  Users,
  MessageSquare,
  Cpu,
  UserSquare2,
  Plus,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function DashboardPage() {
  const [data, setData] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const res = await dashboardApi.getDashboard();
      if (res.success && res.data) {
        setData(res.data);
      }
    } catch (err: any) {
      setError("Unable to connect to backend service. Ensure MySQL and backend server are running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-10 bg-slate-900 rounded-xl w-64" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-32 bg-slate-900 rounded-2xl border border-slate-800" />
          ))}
        </div>
      </div>
    );
  }

  const stats = data?.stats || {
    totalServices: 0,
    totalProjects: 0,
    totalGalleryImages: 0,
    totalCareerJobs: 0,
    totalApplications: 0,
    totalContactEnquiries: 0,
    totalCategories: 0,
    totalTeamMembers: 0
  };

  return (
    <div className="space-y-8 font-inter">
      {/* Page Title & Quick Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bebas tracking-wide text-white">
            System Overview & Analytics
          </h1>
          <p className="text-slate-400 text-sm">
            Live metric statistics and inbound requests for Family Anchor Facilities.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/admin/services"
            className="px-4 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Service</span>
          </Link>
          <Link
            href="/admin/projects"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border border-slate-700 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Project</span>
          </Link>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 text-sm">
          {error}
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Services"
          value={stats.totalServices}
          icon={ShieldCheck}
          subtitle="Configured Security Solutions"
        />
        <StatCard
          title="Service Categories"
          value={stats.totalCategories || 0}
          icon={Cpu}
          subtitle="Device & System Offerings"
        />
        <StatCard
          title="Portfolio Projects"
          value={stats.totalProjects}
          icon={Building2}
          subtitle="Completed Client Deployments"
        />
        <StatCard
          title="Gallery Assets"
          value={stats.totalGalleryImages}
          icon={ImageIcon}
          subtitle="Media Library Images"
        />
        <StatCard
          title="Our Team"
          value={stats.totalTeamMembers || 0}
          icon={UserSquare2}
          subtitle="Active Personnel Profiles"
        />
        <StatCard
          title="Active Careers"
          value={stats.totalCareerJobs}
          icon={Briefcase}
          subtitle="Open Staff Requirements"
        />
        <StatCard
          title="Job Applicants"
          value={stats.totalApplications}
          icon={Users}
          subtitle="Submitted Resume Profiles"
        />
        <StatCard
          title="Contact Enquiries"
          value={stats.totalContactEnquiries}
          icon={MessageSquare}
          subtitle="Client Lead Submissions"
        />
      </div>

      {/* Recent Submissions Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Contact Enquiries */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">Recent Contact Leads</h2>
              <p className="text-xs text-slate-400">Latest inbound customer inquiries</p>
            </div>
            <Link
              href="/admin/enquiries"
              className="text-xs text-[#38BDF8] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {data?.recentEnquiries && data.recentEnquiries.length > 0 ? (
              data.recentEnquiries.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="font-semibold text-slate-200 text-sm">{item.name}</div>
                    <div className="text-xs text-slate-400">{item.email} &bull; {item.phone}</div>
                    {item.interestedService && (
                      <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] bg-sky-500/10 text-[#38BDF8] font-medium border border-sky-500/20">
                        {item.interestedService}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 shrink-0">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-slate-500 text-sm">
                No recent enquiries found.
              </div>
            )}
          </div>
        </div>

        {/* Recent Job Applications */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">Recent Job Applications</h2>
              <p className="text-xs text-slate-400">Candidates applying for career roles</p>
            </div>
            <Link
              href="/admin/applications"
              className="text-xs text-[#38BDF8] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {data?.recentApplications && data.recentApplications.length > 0 ? (
              data.recentApplications.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="font-semibold text-slate-200 text-sm">{item.applicantName}</div>
                    <div className="text-xs text-slate-400">{item.email} &bull; {item.phone}</div>
                    <div className="text-xs text-[#38BDF8] mt-1 font-medium">
                      Applied for: {item.job?.jobTitle || item.appliedJob || "General Application"}
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 shrink-0">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-slate-500 text-sm">
                No recent applications found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
