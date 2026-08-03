import apiClient from "@/lib/axios";
import { ApiResponse, DashboardMetrics } from "@/types/admin";

export const dashboardApi = {
  getDashboard: async () => {
    const res = await apiClient.get<ApiResponse<DashboardMetrics>>("/dashboard");
    return res.data;
  }
};
