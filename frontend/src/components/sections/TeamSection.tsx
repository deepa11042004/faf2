"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { teamApi, TeamMember } from "@/services/api/teamApi";
import { getMediaUrl } from "@/lib/axios";
import { User } from "lucide-react";

export function TeamSection() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await teamApi.getMembers({ status: "active" });
        if (res.success && res.data) {
          setMembers(res.data.rows);
        }
      } catch (error) {
        console.error("Failed to fetch team portfolio:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  if (loading || members.length === 0) return null;

  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0284C7] font-bebas text-xl tracking-widest uppercase mb-2 block"
          >
            Dedicated Professionals
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bebas tracking-wide text-slate-900 leading-tight"
          >
            Our Team
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#0284C7]/50 transition-all shadow-lg hover:shadow-2xl"
            >
              <div className="aspect-[4/5] relative bg-slate-100">
                {member.photo ? (
                  <img
                    src={getMediaUrl(member.photo)}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100">
                    <User className="w-20 h-20 text-slate-400" />
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bebas tracking-wide text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#38BDF8] font-bebas tracking-widest text-lg mb-3 uppercase">
                    {member.role}
                  </p>
                  
                  <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <p className="text-slate-200 text-sm font-inter leading-relaxed line-clamp-4">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
