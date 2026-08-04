import apiClient from "@/lib/axios";
import { ApiResponse, WebsiteSettingItem } from "@/types/admin";

export const settingsApi = {
  getSettings: async () => {
    const res = await apiClient.get<ApiResponse<WebsiteSettingItem>>("/settings");
    return res.data;
  },

  updateSettings: async (data: FormData | Record<string, any>) => {
    const res = await apiClient.put<ApiResponse<WebsiteSettingItem>>("/settings", data);
    return res.data;
  }
};
