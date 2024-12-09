import Participant from "@/public/svg/participant.svg";
import { useState } from "react";
import First from "@/public/svg/mobile/first.svg";
import RightArrow from "@/public/svg/right-arrow.svg";

export default function LatestVoteItem() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickLatestVoteItem = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <div
        onClick={handleClickLatestVoteItem}
        className={`flex max-w-screen-xl justify-between rounded-t-[12px] ${isOpen ? "rounded-b-none border-black-001" : "rounded-b-[12px] border-white-005"} cursor-pointer border p-[24px]`}
      >
        <div className="flex items-center text-black-001">
          <span className="rounded-[6px] bg-yellow-001 px-[8px] py-[7.5px] text-[18px] font-bold leading-[21.48px]">
            2주차
          </span>
          <p className="ml-[12px] text-[20px] font-bold leading-[28px]">
            2024년 KBO에서 활약한 최고의 타자
          </p>
        </div>
        <div className="flex items-center">
          <Participant />
          <span className="ml-[6px] text-[16px] font-medium leading-[16px] text-gray-007">
            24명
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="flex items-center justify-between rounded-b-[12px] border border-x-white-005 border-b-white-005 bg-yellow-002 p-[24px]">
          <div className="flex items-center">
            <First />
            <span className="ml-[12px] text-[20px] font-bold leading-[28px]">
              김태지 선수
            </span>
            <span className="ml-[12px] text-[16px] font-medium leading-[16px] text-gray-007">
              1,024표 획득
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[16px] font-medium leading-[16px] text-black-001">
              전체보기
            </span>
            <div className="flex size-[24px] items-center justify-center">
              <RightArrow />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
