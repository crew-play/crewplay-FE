import { getGameScheduleDetail } from "@/api/game-schedule";
import { IGameScheduleDetail } from "@/interface/game-schedule";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";

export default function useGetGameScheduleDetail(fixtureId: number) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<IGameScheduleDetail | null>(null);

  const getScheduleDetail = async () => {
    try {
      const { data } = await getGameScheduleDetail(fixtureId);

      if (data) {
        setData(data);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        setData(null);
        return error;
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getScheduleDetail();
  }, [fixtureId]);

  return { data, isLoading };
}
