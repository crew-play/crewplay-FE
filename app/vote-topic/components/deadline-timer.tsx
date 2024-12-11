import { getDeadline } from "@/utils/getDeadline";
import { useEffect, useLayoutEffect, useState } from "react";

export default function DeadlineTimer() {
  const [remainingTime, setRemainingTime] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setRemainingTime(getDeadline());

    const intervalId = setInterval(() => {
      const time = getDeadline();
      setRemainingTime(time);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-[6px] w-full lg:mt-[22px]">
      <div className="mx-auto flex w-[294px] flex-col items-center text-center text-[30px] font-bold leading-[42px] text-black-001 lg:w-[584px] lg:text-[60px] lg:leading-[84px]">
        <span>주제 선정 마감까지</span>
        <span className="flex h-[40px] w-full items-center justify-center bg-black-001 text-yellow-001 lg:h-[91px]">
          {remainingTime.days}일 {remainingTime.hours}시간{" "}
          {remainingTime.minutes}분 {remainingTime.seconds}초
        </span>
      </div>
    </div>
  );
}
