import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  subtitle?: string;
  trend?: string;
}

export function StatCard({ title, value, icon: Icon, subtitle }: StatCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-slate-700 transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className="text-slate-400 font-medium text-sm">{title}</span>
        <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8] flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="text-3xl font-bold text-white font-bebas tracking-wide mb-1">
        {value}
      </div>
      {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
    </div>
  );
}
