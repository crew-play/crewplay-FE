import { IGameSchedule } from "@/interface/game-schedule";
import { IResponse } from "@/interface/response";
import { instance } from "./interceptor";
import { isAxiosError } from "axios";

interface IGetGameSchedulesParam {
  readonly fixtureDate: string;
  readonly clubName: string;
}

export const getGameSchedules = async ({
  fixtureDate,
  clubName,
}: IGetGameSchedulesParam): Promise<IResponse<IGameSchedule[]>> => {
  try {
    const { data } = await instance.get(
      `/api/v1/fixture/club?date=${fixtureDate}&clubName=${clubName}`,
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
