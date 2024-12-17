import VoteResultCandidateList from "@/components/vote/vote-result-candidate-list";
import { ICandidate } from "@/interface/vote";
import Participant from "@/public/mobile/participant.svg";
import BottomArrow from "@/public/svg/bottom-arrow.svg";
import { useState } from "react";
import DateAndParticipantCount from "./date-and-participant-count";
import { formatWeekNumber } from "@/utils/format-value";

interface ILastVoteResultItemProps {
  readonly startDate: string;
  readonly endDate: string;
  readonly topic: string;
  readonly latestVoteResultCandidates: ICandidate[];
  readonly myVote: number;
  readonly candidate: ICandidate[];
  readonly totalCount: number;
}

export default function LatestVoteResultItem({
  startDate,
  endDate,
  topic,
  latestVoteResultCandidates,
  myVote,
  totalCount,
  candidate,
}: ILastVoteResultItemProps) {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);

  const handleClickOpenHistory = () => {
    setIsOpenDetail((prev) => {
      return !prev;
    });
  };

  const isBestCandidate =
    candidate.length === 0
      ? { candidateId: -1 }
      : candidate.reduce((max, current) => {
          return current.voteCount > max.voteCount ? current : max;
        });

  return (
    <div className="w-full cursor-pointer" onClick={handleClickOpenHistory}>
      <div
        className={`flex items-center border lg:h-[100px] ${isOpenDetail ? "rounded-t-[12px] border-black-001" : "rounded-[12px] border-white-005"} bg-white-001 p-[18px] font-bold lg:pl-[30px] lg:pr-[40px]`}
      >
        <div className="flex w-full justify-between lg:h-[36px]">
          <div className="flex size-full flex-col lg:w-auto lg:flex-row">
            <div className="flex items-center justify-between">
              <span className="flex items-center justify-center rounded-[6px] bg-yellow-001 px-[8px] py-[4px] text-[11px] leading-[16.71px] lg:px-[8px] lg:py-[8.5px] lg:text-[16px] lg:leading-[19.09px]">
                {`${formatWeekNumber(startDate)}주차`}
              </span>
              <div className="flex h-[12px] items-center justify-center lg:hidden">
                <Participant className="size-[12px]" />
                <span className="ml-[4px] text-[12px] font-medium leading-[12px] text-gray-007">
                  {totalCount}
                </span>
              </div>
            </div>
            <p className="mt-[6px] flex items-center text-[16px] leading-[22.4px] lg:ml-[10px] lg:mt-0 lg:text-[24px] lg:leading-[24px]">
              {topic}
            </p>
          </div>
          <div
            className={`hidden size-[24px] h-full lg:flex lg:items-center lg:justify-center ${isOpenDetail ? "rotate-180" : "rotate-[360deg]"}`}
          >
            <BottomArrow className="lg:h-[8px] lg:w-[16px]" stroke="#C3C3C3" />
          </div>
        </div>
      </div>
      {isOpenDetail && (
        <div className="rounded-b-[12px] border-x border-b px-[16px] py-[24px] lg:px-[50px] lg:pb-[50px] lg:pt-[40px]">
          <VoteResultCandidateList
            candidates={latestVoteResultCandidates}
            myVote={myVote}
            isBestCandidateId={isBestCandidate.candidateId || -1}
            totalVote={totalCount}
          />
          <DateAndParticipantCount
            totalParticipantCount={totalCount}
            voteDate={`${startDate} - ${endDate}`}
          />
        </div>
      )}
    </div>
  );
}
