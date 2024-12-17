import { IPagination } from "@/interface/pagination";
import { IResponse } from "@/interface/response";
import { IBestTopic, ITopic } from "@/interface/vote-topic";
import { isAxiosError } from "axios";
import { instance } from "./interceptor";

export const getBestVoteTopic = async (): Promise<IResponse<IBestTopic[]>> => {
  try {
    const { data } = await instance.get("/api/v1/topic/top5");

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

export const getTopics = async (
  pageParam: number,
): Promise<IResponse<IPagination & { dataList: ITopic[] }>> => {
  try {
    const { data } = await instance.get(
      `/api/v1/topic?page=${pageParam}&size=${10}`,
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

export const registerTopic = async (topic: string) => {
  const response = await instance.post("/api/v1/topic", {
    topic,
  });

  return response;
};

export const recommendTopic = async (topicId: number) => {
  const response = await instance.post(`/api/v1/topic/${topicId}/recommend`);
  return response;
};
