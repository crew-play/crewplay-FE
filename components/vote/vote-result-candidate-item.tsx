"use client";

import First from "@/public/svg/first.svg";
import { replaceNumberFormat } from "@/utils/format-value";
import { useEffect, useRef, useState } from "react";

interface VoteResultBarProps {
  readonly candidate: string;
  readonly voteCount: number;
  readonly myVote: number;
  readonly candidateId: number;
  readonly isBestCandidateId: number;
  readonly totalVote: number;
}

export default function VoteResultCandidateItem({
  candidate,
  voteCount,
  myVote,
  candidateId,
  isBestCandidateId,
  totalVote,
}: VoteResultBarProps) {
  const [width, setWidth] = useState<number>(0);
  const candidatePercentageRef = useRef<HTMLDivElement>(null);

  const percentage = totalVote === 0 ? 0 : (voteCount / totalVote) * 100;

  const percentageWidth = `${width * Number((percentage / 100).toFixed(1))}px`;
  const isMyVote = myVote === candidateId;
  const isBest = candidateId === isBestCandidateId;

  useEffect(() => {
    const handleResize = () => {
      if (candidatePercentageRef.current) {
        setWidth(candidatePercentageRef.current.clientWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={candidatePercentageRef}
      className="relative mx-auto mb-[8px] h-[60px] w-full overflow-hidden rounded-[8px] lg:mb-[10px] lg:w-[720px]"
    >
      <div className="absolute z-[49] flex size-full items-center justify-between pl-[24px] pr-[30px]">
        <div className="flex items-center">
          {isBest && <First className="size-[24px]" />}
          <span className="ml-[6px] font-medium text-black-001 lg:ml-[4px]">
            {candidate}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-black-001">{percentage}%</span>
          <span className="ml-[10px] text-[12px] text-gray-004 lg:ml-[17px]">
            {replaceNumberFormat(voteCount)}명
          </span>
        </div>
      </div>
      <div
        className={`absolute z-[48] h-full ${percentageWidth} ${isMyVote ? "bg-yellow-001" : "bg-gray-006"}`}
        style={{ width: percentageWidth }}
      />
      <div className="absolute z-[47] size-full bg-gray-005" />
    </div>
  );
}
