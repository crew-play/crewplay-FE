import { tokenRefresh } from "@/api/token-refresh";
import axios from "axios";

export let accessToken: string | null = null;

let retryCount = 0;
const MAX_RETRY_COUNT = 3;

export const instance = axios.create({
  baseURL: process.env.API_URL,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer ${accessToken}`;

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
      case 403: {
        await tokenRefresh();

        error.config.headers.Authorization = `Bearer ${accessToken}`;
        return instance(error.config);
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
    }
  },
);

export const setAccessToken = (token: string) => {
  accessToken = token;
};
