import apiClient from "@/lib/axios";
import { DeviceItem } from "@/types/admin";

export interface DevicesResponse {
  success: boolean;
  message: string;
  data: {
    devices: DeviceItem[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface DeviceDetailResponse {
  success: boolean;
  message: string;
  data: DeviceItem;
}

export const devicesApi = {
  getDevices: async (params?: { search?: string; category?: string; serviceSlug?: string; status?: string; page?: number; limit?: number }) => {
    const response = await apiClient.get<DevicesResponse>("/devices", { params });
    return response.data;
  },

  getDeviceById: async (id: number) => {
    const response = await apiClient.get<DeviceDetailResponse>(`/devices/${id}`);
    return response.data;
  },

  createDevice: async (formData: FormData) => {
    const response = await apiClient.post<DeviceDetailResponse>("/devices", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return response.data;
  },

  updateDevice: async (id: number, formData: FormData) => {
    const response = await apiClient.put<DeviceDetailResponse>(`/devices/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return response.data;
  },

  deleteDevice: async (id: number) => {
    const response = await apiClient.delete<{ success: boolean; message: string }>(`/devices/${id}`);
    return response.data;
  }
};
