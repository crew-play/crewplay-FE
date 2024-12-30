"use client";

import { use } from "react";
import GameScore from "./components/game-score";
import PageLocation from "./components/page-location";
import StadiumSeatAndRestaurants from "./components/stadium-seat-and-restaurants";
import StickyGameSchedule from "./components/sticky-game-schedule";
import useGetGameScheduleDetail from "./hooks/use-get-game-schedule-detail";
import Spinner from "@/components/spinner";
import NotExist from "@/components/not-exist";

interface IGameScheduleDetailPageProps {
  readonly params: Promise<{ id: string }>;
}

export default function GameScheduleDetailPage({
  params,
}: IGameScheduleDetailPageProps) {
  const { id } = use(params);

  const { data, isLoading } = useGetGameScheduleDetail(Number(id));

  if (isLoading) return <Spinner />;

  if (!data || !data) return <NotExist text="경기 일정이 존재하지 않습니다 " />;

  return (
    <div className="mx-auto max-w-screen-xl lg:px-[16px]">
      <PageLocation />
      <div className="flex pb-[26px] lg:pb-0">
        <div className="w-full lg:basis-[880px]">
          <GameScore />
          <StadiumSeatAndRestaurants
            restaurants={data.restaurants}
            siteUrl={data.siteUrl}
            tips={data.tips}
          />
        </div>
        <StickyGameSchedule />
      </div>
    </div>
  );
}
