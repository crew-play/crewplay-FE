import { IResponse } from "@/interface/response";
import { instance } from "./interceptor";
import { isAxiosError } from "axios";
import { IUserProfile } from "@/interface/user-profile";

export const getUserProfile = async (): Promise<IResponse<IUserProfile>> => {
  try {
    const { data } = await instance.get("/api/v1/users");

    return {
      status: "success",
      data: data.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        status: "error",
        error: error.message,
      };
    }

    return {
      status: "error",
      error: "알 수 없는 오류가 발생하였습니다.",
    };
  }
};

export const updateUserNickname = async (nickname: string) => {
  const response = await instance.put(`/api/v1/users/${nickname}`);
  return response;
};

export const deleteFavoriteClub = async (clubName: string) => {
  const response = await instance.delete(`/api/v1/support/${clubName}`);
  return response;
};

export const registerFavoriteClub = async (clubName: string) => {
  const response = await instance.post(`/api/v1/support/${clubName}`);
  return response;
};

export const secession = async () => {
  const response = await instance.delete("/api/v1/auth");
  return response;
};
