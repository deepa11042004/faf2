import apiClient from "@/lib/axios";
import { ApiResponse, ProjectItem } from "@/types/admin";

export const projectsApi = {
  getProjects: async (params?: Record<string, any>) => {
    const res = await apiClient.get<ApiResponse<{ projects: ProjectItem[]; total: number; totalPages: number; currentPage: number }>>("/projects", { params });
    return res.data;
  },

  getProjectById: async (id: number | string) => {
    const res = await apiClient.get<ApiResponse<ProjectItem>>(`/projects/${id}`);
    return res.data;
  },

  createProject: async (formData: FormData) => {
    const res = await apiClient.post<ApiResponse<ProjectItem>>("/projects", formData);
    return res.data;
  },

  updateProject: async (id: number | string, formData: FormData) => {
    const res = await apiClient.put<ApiResponse<ProjectItem>>(`/projects/${id}`, formData);
    return res.data;
  },

  deleteProject: async (id: number | string) => {
    const res = await apiClient.delete<ApiResponse>(`/projects/${id}`);
    return res.data;
  }
};
