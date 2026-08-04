import apiClient from "@/lib/axios";
import { ApiResponse } from "@/types/admin";

export interface TeamMember {
  id: number;
  uuid: string;
  name: string;
  role: string;
  description: string | null;
  photo: string | null;
  status: "active" | "inactive";
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export const teamApi = {
  getMembers: async (params?: Record<string, any>) => {
    const res = await apiClient.get<ApiResponse<{ rows: TeamMember[]; count: number }>>("/team", { params });
    return res.data;
  },

  getMemberById: async (id: number | string) => {
    const res = await apiClient.get<ApiResponse<TeamMember>>(`/team/${id}`);
    return res.data;
  },

  createMember: async (formData: FormData) => {
    const res = await apiClient.post<ApiResponse<TeamMember>>("/team", formData);
    return res.data;
  },

  updateMember: async (id: number | string, formData: FormData) => {
    const res = await apiClient.put<ApiResponse<TeamMember>>(`/team/${id}`, formData);
    return res.data;
  },

  deleteMember: async (id: number | string) => {
    const res = await apiClient.delete<ApiResponse>(`/team/${id}`);
    return res.data;
  }
};
