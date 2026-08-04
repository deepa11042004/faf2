import apiClient from "@/lib/axios";
import { ApiResponse, CareerApplicationItem } from "@/types/admin";

export const applicationsApi = {
  getApplications: async (params?: Record<string, any>) => {
    const res = await apiClient.get<ApiResponse<{ applications: CareerApplicationItem[]; total: number; totalPages: number; currentPage: number }>>("/applications", { params });
    return res.data;
  },

  getApplicationById: async (id: number | string) => {
    const res = await apiClient.get<ApiResponse<CareerApplicationItem>>(`/applications/${id}`);
    return res.data;
  },

  deleteApplication: async (id: number | string) => {
    const res = await apiClient.delete<ApiResponse>(`/applications/${id}`);
    return res.data;
  },

  submitApplication: async (formData: FormData) => {
    const res = await apiClient.post<ApiResponse>("/applications", formData);
    return res.data;
  }
};
