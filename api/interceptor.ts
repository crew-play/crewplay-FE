import { tokenRefresh } from "@/api/token-refresh";
import axios from "axios";

let retryCount = 0;
const MAX_RETRY_COUNT = 3;

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = instance.defaults.headers.common["Authorization"];

    if (accessToken) {
      config.headers["Authorization"] = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { status } = error.response;

    switch (status) {
      case 401: {
        try {
          const accessToken = await tokenRefresh();
          error.config.headers.Authorization = `Bearer ${accessToken}`;
          return instance(error.config);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
      case 500: {
        if (retryCount < MAX_RETRY_COUNT) {
          retryCount++;

          return new Promise((resolve) => {
            resolve(instance(error.config));
          });
        } else {
          retryCount = 0;
          alert("서버에 문제가 발생했습니다.");
          window.location.href = "/";
        }
      }
      default: {
        return Promise.reject(error);
      }
    }
  },
);
