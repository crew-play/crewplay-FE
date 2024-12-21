"use client";

import GameScheduleClubList from "./components/game-schedule-club-list/game-schedule-club-list";
import GameScheduleCalendar from "./components/game-schedule-calendar";
import TitleMonth from "./components/title-month";
import GameScheduleInformation from "./components/game-schedule-information/game-schedule-information";

export default function GameSchedulePage() {
  return (
    <div className="mx-auto rounded-[16px] bg-white-001 px-[24px] py-[48px] lg:max-w-screen-xl">
      <TitleMonth />
      <div className="w-full border-t-2 border-black" />
      <GameScheduleCalendar />
      <div className="w-full border-t border-white-005" />
      <GameScheduleClubList />
      <div className="w-full border-t border-white-005" />
      <GameScheduleInformation />
    </div>
  );
}
