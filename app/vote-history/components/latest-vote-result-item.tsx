import CandidateList from "@/components/candidate/candidate-list";
import BottomArrow from "@/public/svg/bottom-arrow.svg";
import { useRef, useState } from "react";
import DateAndParticipantCount from "./date-and-participant-count";

export default function LastVoteResultItem() {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);

  const handleClickOpenHistory = () => {
    setIsOpenDetail((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div
        className={`flex h-[100px] items-center border ${isOpenDetail ? "rounded-t-[12px] border-black-001" : "rounded-[12px] border-white-005"} bg-white-001 pl-[30px] pr-[40px] font-bold`}
      >
        <div className="flex h-[36px] w-full justify-between">
          <div className="flex h-full">
            <span className="flex items-center justify-center rounded-[6px] bg-yellow-001 px-[8px] py-[8.5px] text-[16px] leading-[19.09px]">
              32주 차
            </span>
            <p className="ml-[10px] flex items-center text-[24px] leading-[24px]">
              야구장에서 가장 짜릿했던 응원곡은?
            </p>
          </div>
          <button
            type="button"
            onClick={handleClickOpenHistory}
            className={`flex size-[24px] h-full items-center justify-center ${isOpenDetail ? "rotate-[180deg]" : "rotate-[360deg]"}`}
          >
            <BottomArrow />
          </button>
        </div>
      </div>
      {isOpenDetail && (
        <div className="rounded-b-[12px] border-x border-b px-[50px] pb-[50px] pt-[40px]">
          <CandidateList />
          <DateAndParticipantCount />
        </div>
      )}
    </div>
  );
}
