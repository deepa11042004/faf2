import apiClient from "@/lib/axios";
import { ApiResponse, CareerJobItem } from "@/types/admin";

export const jobsApi = {
  getJobs: async (params?: Record<string, any>) => {
    const res = await apiClient.get<ApiResponse<{ jobs: CareerJobItem[]; total: number; totalPages: number; currentPage: number }>>("/jobs", { params });
    return res.data;
  },

  createJob: async (data: Record<string, any>) => {
    const res = await apiClient.post<ApiResponse<CareerJobItem>>("/jobs", data);
    return res.data;
  },

  updateJob: async (id: number | string, data: Record<string, any>) => {
    const res = await apiClient.put<ApiResponse<CareerJobItem>>(`/jobs/${id}`, data);
    return res.data;
  },

  deleteJob: async (id: number | string) => {
    const res = await apiClient.delete<ApiResponse>(`/jobs/${id}`);
    return res.data;
  }
};
