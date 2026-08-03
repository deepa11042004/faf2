import apiClient from "@/lib/axios";
import { ApiResponse, AdminUser } from "@/types/admin";

export const authApi = {
  login: async (credentials: Record<string, string>) => {
    const res = await apiClient.post<ApiResponse<{ token: string; admin: AdminUser }>>("/auth/login", credentials);
    return res.data;
  },

  logout: async () => {
    const res = await apiClient.post<ApiResponse>("/auth/logout");
    return res.data;
  },

  changePassword: async (passwords: Record<string, string>) => {
    const res = await apiClient.post<ApiResponse>("/auth/change-password", passwords);
    return res.data;
  },

  forgotPassword: async (email: string) => {
    const res = await apiClient.post<ApiResponse>("/auth/forgot-password", { email });
    return res.data;
  },

  resetPassword: async (data: Record<string, string>) => {
    const res = await apiClient.post<ApiResponse>("/auth/reset-password", data);
    return res.data;
  }
};
