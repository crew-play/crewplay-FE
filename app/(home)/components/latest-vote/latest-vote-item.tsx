import Participant from "@/public/svg/participant.svg";
import { useState } from "react";
import RightArrow from "@/public/svg/right-arrow.svg";
import First from "@/public/svg/first.svg";

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
        className={`flex max-w-screen-xl justify-between rounded-t-[12px] ${isOpen ? "rounded-b-none border-black-001" : "rounded-b-[12px] border-white-005"} cursor-pointer border p-[18px] lg:p-[24px]`}
      >
        <div className="flex flex-col items-center text-black-001 lg:flex-row">
          <span className="mb-[6px] mr-auto rounded-[6px] bg-yellow-001 px-[8px] py-[4px] text-[14px] font-bold leading-[16.71px] lg:mb-0 lg:px-[8px] lg:py-[7.5px] lg:text-[18px] lg:leading-[21.48px]">
            2주차
          </span>
          <p className="line-clamp-1 text-[16px] font-semibold leading-[22.4px] lg:ml-[12px] lg:text-[20px] lg:font-bold lg:leading-[28px]">
            2024년 KBO에서 활약한 최고의 타자
          </p>
        </div>
        <div className="flex h-[12px] items-center lg:h-auto">
          <Participant className="h-[10px] w-[12px] lg:h-[14px] lg:w-[16px]" />
          <span className="ml-[4px] text-[12px] font-medium leading-[12px] text-gray-007 lg:ml-[6px] lg:text-[16px] lg:leading-[16px]">
            24명
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="flex items-center justify-between rounded-b-[12px] border border-x-white-005 border-b-white-005 bg-yellow-002 px-[18px] py-[32px] lg:p-[24px]">
          <div className="flex items-center">
            <First className="size-[24px]" />
            <span className="ml-[8px] text-[16px] font-bold leading-[22.4px] lg:ml-[12px] lg:text-[20px] lg:leading-[28px]">
              김태지 선수
            </span>
            <span className="ml-[8px] text-[14px] font-medium leading-[14px] text-gray-007 lg:ml-[12px] lg:text-[16px] lg:leading-[16px]">
              1,024표 획득
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[12px] font-medium leading-[12px] text-black-001 lg:text-[16px] lg:leading-[16px]">
              전체보기
            </span>
            <div className="ml-[2px] flex size-[16px] items-center justify-center lg:ml-0 lg:size-[24px]">
              <RightArrow className="size-[16px] lg:size-[20px]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
