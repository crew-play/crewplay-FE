"use client";

import First from "@/public/svg/first.svg";

interface VoteResultBarProps {
  readonly candidate: string;
  readonly percentage: number;
  readonly voteCount: number;
  readonly isFirst: boolean;
}

export default function VoteResultCandidateItem({
  candidate,
  percentage,
  voteCount,
  isFirst,
}: VoteResultBarProps) {
  const percentageWidth = `${720 * Number((percentage / 100).toFixed(1))}px`;

  return (
    <div className="relative mx-auto mb-[8px] h-[60px] w-full overflow-hidden rounded-[8px] lg:mb-[10px] lg:w-[720px]">
      <div className="absolute z-[49] flex size-full items-center justify-between pl-[24px] pr-[30px]">
        <div className="flex items-center">
          {isFirst && <First className="size-[24px]" />}
          <span className="ml-[6px] font-medium text-black-001 lg:ml-[4px]">
            {candidate}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-black-001">{percentage}%</span>
          <span className="ml-[10px] text-[12px] text-gray-004 lg:ml-[17px]">
            {voteCount}명
          </span>
        </div>
      </div>
      <div
        className={`absolute z-[48] h-full ${percentageWidth} ${isFirst ? "bg-yellow-001" : "bg-gray-006"}`}
        style={{ width: percentageWidth }}
      />
      <div className="absolute z-[47] size-full bg-gray-005" />
    </div>
  );
}
