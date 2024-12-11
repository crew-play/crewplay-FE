import { getDeadline } from "@/utils/getDeadline";
import { useEffect, useState } from "react";

export default function DeadlineTimer() {
  const [remainingTime, setRemainingTime] = useState(getDeadline());

  useEffect(() => {
    // 첫 번째 타이머 상태 설정
    setRemainingTime(getDeadline());

    // setInterval로 1초마다 남은 시간 업데이트
    const intervalId = setInterval(() => {
      const time = getDeadline();
      setRemainingTime(time);

      // 타이머 종료 조건: 남은 시간이 모두 0일 때
      if (
        time.days === 0 &&
        time.hours === 0 &&
        time.minutes === 0 &&
        time.seconds === 0
      ) {
        clearInterval(intervalId); // 타이머 종료
      }
    }, 1000);

    // 클린업 함수: 컴포넌트 언마운트 시 타이머 정리
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
