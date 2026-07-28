import apiClient from "@/lib/axios";
import { ApiResponse, ServiceItem } from "@/types/admin";

export const servicesApi = {
  getServices: async (params?: Record<string, any>) => {
    const res = await apiClient.get<ApiResponse<{ services: ServiceItem[]; total: number; totalPages: number; currentPage: number }>>("/services", { params });
    return res.data;
  },

  getServiceById: async (id: number | string) => {
    const res = await apiClient.get<ApiResponse<ServiceItem>>(`/services/${id}`);
    return res.data;
  },

  createService: async (formData: FormData) => {
    const res = await apiClient.post<ApiResponse<ServiceItem>>("/services", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data;
  },

  updateService: async (id: number | string, formData: FormData) => {
    const res = await apiClient.put<ApiResponse<ServiceItem>>(`/services/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data;
  },

  deleteService: async (id: number | string) => {
    const res = await apiClient.delete<ApiResponse>(`/services/${id}`);
    return res.data;
  }
};
