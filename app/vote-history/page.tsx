"use client";

import CandidateList from "@/components/candidate/candidate-list";
import Divider from "@/components/divider";
import DateAndParticipantCount from "./components/date-and-participant-count";
import LastVoteResultList from "./components/latest-vote-result-list";
import MainActionButton from "@/components/main-action-button";
import { useState } from "react";

type TSort = "latest" | "popular";

export default function VoteHistoryPage() {
  const [sort, setSort] = useState<TSort>("latest");

  const handleClickMoreButton = () => {
    console.log("click !");
  };

  return (
    <div className="mx-auto lg:w-[880px]">
      <h1 className="mt-[80px] w-full text-center text-[20px] font-medium leading-[20px]">
        크루플레이 38주차 투표 결과
      </h1>
      <section className="mx-auto mb-[60px] mt-[22px] w-[720px]">
        <h2 className="mb-[65px] text-center text-[60px] font-bold leading-[84px]">
          2024년 KBO에서 <br /> 활약한 최고의 타자는?
        </h2>
        <CandidateList />
        <DateAndParticipantCount />
      </section>
      <Divider />
      <section className="mx-auto mt-[66px] w-[820px]">
        <div className="mb-[40px] flex h-full items-center justify-between">
          <h2 className="text-[24px] font-bold leading-[24px]">
            지난 투표 보기
          </h2>
          <div className="flex cursor-pointer items-center text-[14px] leading-[14px]">
            <span
              className={`${sort === "latest" ? "bg-yellow-001 font-bold text-black-001" : "bg-gray-005 text-gray-003"} flex h-[28px] w-[66px] items-center justify-center rounded-l-[6px]`}
            >
              최신순
            </span>
            <span
              className={`${sort === "popular" ? "bg-yellow-001 font-bold text-black-001" : "bg-gray-005 text-gray-003"} flex h-[28px] w-[66px] items-center justify-center rounded-r-[6px]`}
            >
              인기순
            </span>
          </div>
        </div>
        <LastVoteResultList />
      </section>
      <div className="mb-[77px] mt-[40px]">
        <MainActionButton
          text="더보기"
          margin={{ top: "40px", bottom: "77px" }}
          onClick={handleClickMoreButton}
        />
      </div>
    </div>
  );
}
