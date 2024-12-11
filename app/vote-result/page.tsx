"use client";

import CandidateList from "@/components/candidate/candidate-list";
import Divider from "@/components/divider";
import DateAndParticipantCount from "../vote-history/components/date-and-participant-count";
import LastVoteResultList from "../vote-history/components/latest-vote-result-list";
import MainButton from "@/components/main-button";
import { useState } from "react";

type TSort = "latest" | "popular";

export default function VoteHistoryPage() {
  const [sort, setSort] = useState<TSort>("latest");

  const handleClickSort = (type: TSort) => {
    setSort(type);
  };

  const handleClickMoreButton = () => {
    // eslint-disable-next-line no-console
    console.log("click");
  };

  return (
    <>
      <h1 className="mt-[60px] w-full text-center text-[16px] font-medium leading-[16px] lg:mt-[80px] lg:text-[20px] lg:leading-[20px]">
        크루플레이 38주차 투표 결과
      </h1>
      <section className="mx-auto mb-[40px] mt-[6px] w-full lg:mb-[60px] lg:mt-[22px] lg:w-[720px]">
        <h2 className="mb-[32px] text-center text-[30px] font-bold leading-[42px] lg:mb-[65px] lg:text-[60px] lg:leading-[84px]">
          2024년 KBO에서 <br /> 활약한 최고의 타자는?
        </h2>
        <CandidateList />
        <DateAndParticipantCount />
      </section>
      <Divider />
      <section className="mx-auto mt-[66px] w-full lg:w-[820px]">
        <div className="mb-[40px] flex h-full items-center justify-between">
          <h2 className="text-[20px] font-bold leading-[28px] lg:text-[24px] lg:leading-[24px]">
            지난 투표 보기
          </h2>
          <div className="flex cursor-pointer items-center text-[14px] leading-[14px]">
            <span
              className={`${sort === "latest" ? "bg-yellow-001 font-bold text-black-001" : "bg-white-001 text-gray-003"} flex h-[28px] w-[66px] items-center justify-center rounded-[40px] hover:bg-yellow-001`}
              onClick={() => {
                return handleClickSort("latest");
              }}
            >
              최신순
            </span>
            <span
              className={`${sort === "popular" ? "bg-yellow-001 font-bold text-black-001" : "bg-white-001 text-gray-003"} flex h-[28px] w-[66px] items-center justify-center rounded-[40px] hover:bg-yellow-001`}
              onClick={() => {
                return handleClickSort("popular");
              }}
            >
              인기순
            </span>
          </div>
        </div>
        <LastVoteResultList />
      </section>
      <div className="mb-[58px] mt-[20px] lg:mb-[77px] lg:mt-[40px]">
        <MainButton text="더보기" onClick={handleClickMoreButton} />
      </div>
    </>
  );
}
