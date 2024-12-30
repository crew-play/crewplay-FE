"use client";

import GameScheduleCalendar from "./components/game-schedule-calendar";
import TitleMonth from "./components/title-month";
import GameScheduleInformation from "./components/game-schedule-information/game-schedule-information";
import GameScheduleClubList from "./components/game-schedule-club-list/game-schedule-club-list";
import useDrag from "@/hooks/use-drag";

export default function GameSchedulePage() {
  const {
    sliderRef,
    trackRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useDrag();

  return (
    <div className="mx-auto rounded-[16px] bg-white-001 px-[24px] py-[48px] lg:max-w-screen-xl">
      <TitleMonth sliderRef={sliderRef} />
      <div className="w-full border-t-2 border-black" />
      <GameScheduleCalendar
        sliderRef={sliderRef}
        trackRef={trackRef}
        handleMouseDown={handleMouseDown}
        handleMouseMove={handleMouseMove}
        handleMouseUp={handleMouseUp}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
      />
      <div className="w-full border-t border-white-005" />
      <GameScheduleClubList />
      <div className="w-full border-t border-white-005" />
      <GameScheduleInformation />
    </div>
  );
}
