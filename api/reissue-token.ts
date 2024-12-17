import axios from "axios";

export const reissueToken = async () => {
  const { headers, status } = await axios.get("/api/v1/auth/reissue-token", {
    withCredentials: true,
  });

  if (status === 200) {
    const accessToken = headers["access"];
    return accessToken;
  }

  if (status === 401 || status === 403) {
    alert("재로그인 해주세요.");
    window.location.href = "/";
  }
};
