import axios from "axios";

export const cleanUrlProtocol = (inputUrl?: string | null): string => {
  if (!inputUrl) return "";
  let str = inputUrl.trim();
  const isHttps = /^https:/i.test(str);
  // Completely strip ALL leading protocol patterns (http://, https://, http:/, etc.) repeatedly
  str = str.replace(/^(https?:\/\/+|https?:+|http:\/\/+)+/gi, "");
  str = str.replace(/^\/+/, "");
  str = str.replace(/\/+$/, "");

  // Guarantee /api/v1 suffix is present
  if (!str.endsWith("/api/v1")) {
    if (str.endsWith("/api")) {
      str = `${str}/v1`;
    } else {
      str = `${str}/api/v1`;
    }
  }

  return `${isHttps ? "https://" : "http://"}${str}`;
};

export const getApiBaseUrl = (): string => {
  let url = "";

  if (typeof window !== "undefined") {
    const { protocol, hostname, port } = window.location;
    const customUrl = localStorage.getItem("faf_custom_api_url");
    
    if (customUrl && customUrl.trim() !== "") {
      const cleanedCustom = cleanUrlProtocol(customUrl);
      if (cleanedCustom !== customUrl) {
        // Auto-fix any contaminated entry stored in localStorage
        localStorage.setItem("faf_custom_api_url", cleanedCustom);
      }

      const isLocalHost = hostname === "localhost" || hostname === "127.0.0.1";
      const isRemoteCustomUrl = cleanedCustom.includes("sslip.io") || cleanedCustom.includes("187.127.177.77");

      // On localhost, don't use remote production URL stored in localStorage
      if (!isLocalHost || !isRemoteCustomUrl) {
        url = cleanedCustom;
      }
    }

    if (!url && process.env.NEXT_PUBLIC_API_URL) {
      url = cleanUrlProtocol(process.env.NEXT_PUBLIC_API_URL);
    }

    if (!url && hostname !== "localhost" && hostname !== "127.0.0.1") {
      // In production deployment (e.g. Coolify), dynamically construct API endpoint
      url = `${protocol}//${hostname}${port ? `:${port}` : ""}/api/v1`;
    }
  }

  if (!url) {
    url = "http://localhost:5005/api/v1";
  }

  return cleanUrlProtocol(url);
};

export const getMediaUrl = (imagePath?: string): string => {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return cleanUrlProtocol(imagePath);
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
