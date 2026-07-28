"use client";

import { create } from "zustand";
import { AdminUser } from "@/types/admin";

interface AuthState {
  token: string | null;
  user: AdminUser | null;
  isAuthenticated: boolean;
  setAuth: (token: string, user: AdminUser) => void;
  logout: () => void;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,

  setAuth: (token: string, user: AdminUser) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("faf_admin_token", token);
      localStorage.setItem("faf_admin_user", JSON.stringify(user));
    }
    set({ token, user, isAuthenticated: true });
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("faf_admin_token");
      localStorage.removeItem("faf_admin_user");
    }
    set({ token: null, user: null, isAuthenticated: false });
  },

  initializeAuth: () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("faf_admin_token");
      const userStr = localStorage.getItem("faf_admin_user");
      if (token && userStr) {
        try {
          const user = JSON.parse(userStr);
          set({ token, user, isAuthenticated: true });
        } catch {
          localStorage.removeItem("faf_admin_token");
          localStorage.removeItem("faf_admin_user");
        }
      }
    }
  }
}));
