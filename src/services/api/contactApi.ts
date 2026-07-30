import apiClient from "@/lib/axios";
import { ApiResponse, ContactEnquiryItem } from "@/types/admin";

export const contactApi = {
  getEnquiries: async (params?: Record<string, any>) => {
    const res = await apiClient.get<ApiResponse<{ enquiries: ContactEnquiryItem[]; total: number; totalPages: number; currentPage: number }>>("/contact", { params });
    return res.data;
  },

  submitEnquiry: async (data: Record<string, any>) => {
    const res = await apiClient.post<ApiResponse<ContactEnquiryItem>>("/contact", data);
    return res.data;
  },

  getEnquiryById: async (id: number | string) => {
    const res = await apiClient.get<ApiResponse<ContactEnquiryItem>>(`/contact/${id}`);
    return res.data;
  },

  updateEnquiry: async (id: number | string, data: Record<string, any>) => {
    const res = await apiClient.put<ApiResponse<ContactEnquiryItem>>(`/contact/${id}`, data);
    return res.data;
  },

  deleteEnquiry: async (id: number | string) => {
    const res = await apiClient.delete<ApiResponse>(`/contact/${id}`);
    return res.data;
  }
};
