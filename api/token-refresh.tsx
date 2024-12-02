import { instance } from "@/api/interceptor";
import axios from "axios";

export const tokenRefresh = async () => {
  const response = await axios.get("/api/v1/auth/reissue-token", {
    withCredentials: true,
  });

  if (response.status === 200) {
    const accessToken = response.headers["access"];
    instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    return response.data.accessToken;
  }

  if (response.status === 401) {
    alert("재로그인 해주세요.");
    window.location.href = "/";
  }
};
