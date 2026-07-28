import apiClient from "@/lib/axios";
import { ApiResponse, GalleryItem } from "@/types/admin";

export const galleryApi = {
  getGallery: async (params?: Record<string, any>) => {
    const res = await apiClient.get<ApiResponse<{ gallery: GalleryItem[]; total: number; totalPages: number; currentPage: number }>>("/gallery", { params });
    return res.data;
  },

  createGalleryItem: async (formData: FormData) => {
    const res = await apiClient.post<ApiResponse<GalleryItem>>("/gallery", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data;
  },

  updateGalleryItem: async (id: number | string, formData: FormData) => {
    const res = await apiClient.put<ApiResponse<GalleryItem>>(`/gallery/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data;
  },

  deleteGalleryItem: async (id: number | string) => {
    const res = await apiClient.delete<ApiResponse>(`/gallery/${id}`);
    return res.data;
  }
};
