import { tokenRefresh } from "@/api/token";
import { setToken } from "@/utils/token";
import axios from "axios";

let retryCount = 0;
const MAX_RETRY_COUNT = 3;

export const instance = axios.create({
  baseURL: process.env.API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

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
        const { newAccessToken, newRefreshToken } = await tokenRefresh();

        setToken({ type: "accessToken", token: newAccessToken });
        setToken({ type: "refreshToken", token: newRefreshToken });

        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
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
