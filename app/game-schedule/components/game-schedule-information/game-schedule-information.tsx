import GameScheduleList from "./game-schedule-list";

export default function GameScheduleInformation() {
  return (
    <div>
      <div
        className="hidden px-[16px] lg:block"
        aria-description="game-schedule-header"
      >
        <div className="flex h-[49px] text-[14px] leading-[16.71px]">
          <div className="flex w-full basis-[300px] items-center justify-center">
            <span>시간/구장</span>
          </div>
          <div className="flex w-full basis-[540px] items-center justify-center">
            <div className="flex w-full max-w-[180px] items-center justify-center">
              <span>원정팀</span>
            </div>
            <div className="w-full basis-[180px]" />
            <div className="flex w-full basis-[180px] items-center justify-center">
              <span>홈팀</span>
            </div>
          </div>
          <div className="flex w-full basis-[180px] items-center justify-center">
            <span>구분</span>
          </div>
          <div className="w-full basis-[180px]" />
        </div>
      </div>
      <GameScheduleList />
    </div>
  );
}
