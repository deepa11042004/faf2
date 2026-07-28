import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal - Family Anchor Facilities",
  description: "Enterprise SaaS Admin Console for Family Anchor Facilities Pvt. Ltd."
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutWrapper>{children}</AdminLayoutWrapper>;
}
