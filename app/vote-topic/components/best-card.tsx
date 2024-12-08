import First from "@/public/svg/topic/first.svg";
import Second from "@/public/svg/topic/second.svg";
import Third from "@/public/svg/topic/third.svg";
import EmptyHeart from "@/public/svg/topic/empty-heart.svg";
import FillHeart from "@/public/svg/topic/fill-heart.svg";
import { ReactNode } from "react";

interface ITopicBestCardProps {
  readonly ranking: number;
}

const RANKING: { [key: number]: ReactNode | string } = {
  1: <First />,
  2: <Second />,
  3: <Third />,
  4: "4",
  5: "5",
};

export default function BestCard({ ranking }: ITopicBestCardProps) {
  const isFirst = ranking === 1;

  return (
    <div
      className={`flex h-[60px] items-center lg:h-[100px] ${isFirst ? "bg-white-004" : "border-b border-b-white-006"} ${ranking === 1}`}
    >
      <div className="flex h-full w-[102px] items-center justify-center">
        {typeof RANKING[ranking] === "string" ? (
          <span className="flex items-center justify-center text-[14px] font-semibold leading-[14px] text-gray-003 lg:text-[20px] lg:leading-[20px]">
            {RANKING[ranking]}
          </span>
        ) : (
          <div className="flex items-center justify-center">
            {RANKING[ranking]}
          </div>
        )}
      </div>
      <div className="flex h-full grow items-center">
        <p className="truncate text-[14px] font-bold leading-[19.6px] text-black-001 lg:text-[22px] lg:leading-[22px]">
          이번 시즌 가장 기대되는 선수는?
        </p>
      </div>
      <div className="flex h-full w-[100px] items-center justify-center">
        {ranking === 1 ? <FillHeart /> : <EmptyHeart />}
        <span
          className={`ml-[6px] font-medium ${ranking === 1 ? "text-black-001" : "text-gray-004"} text-[12px] leading-[16px] lg:text-[16px] lg:leading-[16px]`}
        >
          268
        </span>
      </div>
    </div>
  );
}
