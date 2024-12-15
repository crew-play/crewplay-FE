import axios from "axios";
import { reissueToken } from "./reissue-token";
import { getToken, removeToken } from "@/utils/token";

let retryCount = 0;
const MAX_RETRY_COUNT = 3;

export const instance = axios.create({
  baseURL: "/",
});

instance.interceptors.request.use(
  (config) => {
    config.headers["access"] = localStorage.getItem("access");
    console.log(config);
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
          const accessToken = await reissueToken();
          error.config.headers["access"] = accessToken;
          return instance(error.config);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
      case 403: {
        if (retryCount < MAX_RETRY_COUNT) {
          retryCount++;

          const accessToken = await reissueToken();
          localStorage.setItem("access", accessToken);

          error.config.headers["access"] = accessToken;

          return new Promise((resolve) => {
            resolve(instance(error.config));
          });
        } else {
          retryCount = 0;
          localStorage.removeItem("access");
          await removeToken("refresh");

          alert("재 로그인이 필요합니다. 로그인 화면으로 이동합니다.");

          window.location.href = "/login";
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
