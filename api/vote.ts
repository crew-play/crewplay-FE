import { IPagination } from "@/interface/pagination";
import { IResponse } from "@/interface/response";
import {
  IHasUserVoted,
  ILatestVoteResult,
  IThisWeekVoteResult,
  IVoteRequestData,
  TSort,
} from "@/interface/vote";
import axios, { isAxiosError } from "axios";
import { instance } from "./interceptor";

export const getLatestBestVoteResult = async (): Promise<
  IResponse<IPagination & { dataList: ILatestVoteResult[] }>
> => {
  try {
    const { data } = await axios.get(
      "/api/v1/vote/result/prev?sortType=PARTICIPANT&page=0&size=5",
    );

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

export const getLatestVoteResults = async (
  pageParam: number,
  sort: TSort,
): Promise<IResponse<IPagination & { dataList: ILatestVoteResult[] }>> => {
  try {
    const { data } = await axios.get(
      `/api/v1/vote/result/prev?sortType=${sort}&page=${pageParam}&size=6`,
    );
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

export const hasUserVoted = async (): Promise<IResponse<IHasUserVoted>> => {
  try {
    const { data } = await instance.get("/api/v1/vote/user");

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

export const getThisWeekVoteResult = async (): Promise<
  IResponse<IThisWeekVoteResult>
> => {
  try {
    const { data } = await instance.get("/api/v1/vote/result");

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

export const getThisWeekVoteCandidates = async (): Promise<
  IResponse<IThisWeekVoteResult>
> => {
  const isLogin = localStorage.getItem("access");

  try {
    if (isLogin) {
      const { data } = await instance.get("/api/v1/vote");
      return {
        status: "success",
        data: data.data,
      };
    } else {
      const { data } = await axios.get("/api/v1/vote");
      return {
        status: "success",
        data: data.data,
      };
    }
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

export const thisWeekVote = async ({
  voteId,
  candidateId,
}: IVoteRequestData) => {
  const response = await instance.post(
    `/api/v1/vote/${voteId}/candidate/${candidateId}`,
  );
  return response;
};
