"use client";

import CandidateList from "@/components/candidate/candidate-list";
import Divider from "@/components/divider";
import DateAndParticipantCount from "./components/date-and-participant-count";
import LatestVoteResultList from "./components/latest-vote-result-list";
import MainButton from "@/components/main-button";
import { useState } from "react";
import useGetVoteResults from "./hooks/use-get-vote-results";
import { TSort } from "@/interface/vote-result";
import LatestVoteResultSort from "./components/latest-vote-result-sort";

export default function VoteHistoryPage() {
  const [sort, setSort] = useState<TSort>("latest");

  const voteResults = useGetVoteResults();
  const thisWeekVoteResult = voteResults[0];
  const latestVoteResults = voteResults[1];

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
          {voteResults[0].data?.data?.topic || "이번주 투표 X"}
        </h2>
        <CandidateList
          candidateList={thisWeekVoteResult.data?.data?.vote}
          isLoading={thisWeekVoteResult.isLoading}
          isError={thisWeekVoteResult.isError}
        />
        <DateAndParticipantCount
          voteDate={thisWeekVoteResult.data?.data?.startDate || ""}
          totalParticipantCount={1000}
        />
      </section>
      <Divider />
      <section className="mx-auto mt-[66px] w-full lg:w-[820px]">
        <LatestVoteResultSort sort={sort} onClick={handleClickSort} />
        <LatestVoteResultList
          latestVoteResults={latestVoteResults.data?.data?.dataList}
          isLoading={latestVoteResults.isLoading}
          isError={latestVoteResults.isError}
        />
      </section>
      <div className="mb-[58px] mt-[20px] lg:mb-[77px] lg:mt-[40px]">
        <MainButton text="더보기" onClick={handleClickMoreButton} />
      </div>
    </>
  );
}
