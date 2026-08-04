import axios from "axios";

const sanitizeUrl = (rawUrl: string) => {
  if (!rawUrl) return "";
  let trimmed = rawUrl.trim();
  // Strip any repeating protocol prefixes like http://http:// or https://http://
  const hasHttps = /^https:\/\//i.test(trimmed);
  trimmed = trimmed.replace(/^(https?:\/\/)+/i, "");
  return `${hasHttps ? "https://" : "http://"}${trimmed}`;
};

export const getApiBaseUrl = () => {
  let url = "";

  if (typeof window !== "undefined") {
    const { protocol, hostname, port } = window.location;
    const customUrl = localStorage.getItem("faf_custom_api_url");
    
    if (customUrl && customUrl.trim() !== "") {
      const trimmed = customUrl.trim();
      const isLocalHost = hostname === "localhost" || hostname === "127.0.0.1";
      const isRemoteCustomUrl = trimmed.includes("sslip.io") || trimmed.includes("187.127.177.77");

      // On localhost, don't use remote production URL stored in localStorage
      if (!isLocalHost || !isRemoteCustomUrl) {
        url = trimmed;
      }
    }

    if (!url && process.env.NEXT_PUBLIC_API_URL) {
      url = process.env.NEXT_PUBLIC_API_URL;
    }

    if (!url && hostname !== "localhost" && hostname !== "127.0.0.1") {
      // In production deployment (e.g. Coolify), dynamically construct API endpoint
      url = `${protocol}//${hostname}${port ? `:${port}` : ""}/api/v1`;
    }
  }

  if (!url) {
    url = "http://localhost:5005/api/v1";
  }

  return sanitizeUrl(url);
};

export const getMediaUrl = (imagePath?: string) => {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  const apiBase = getApiBaseUrl();
  const rootServerUrl = apiBase.replace(/\/api\/v1\/?$/, "");
  return `${rootServerUrl}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
};

export const apiClient = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

// Request Interceptor: Attach dynamic baseURL and JWT token from localStorage
apiClient.interceptors.request.use(
  (config) => {
    config.baseURL = getApiBaseUrl();
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("faf_admin_token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    // If the body is FormData, remove Content-Type so the browser
    // can set the correct multipart/form-data boundary automatically.
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
      delete config.headers["content-type"];
      if (typeof config.headers.delete === "function") {
        config.headers.delete("Content-Type");
        config.headers.delete("content-type");
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Auto logout on 401 Unauthorized
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("faf_admin_token");
        localStorage.removeItem("faf_admin_user");
        if (!window.location.pathname.includes("/admin/login")) {
          window.location.href = "/admin/login";
        }
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
