import useGetLatestBestVoteResult from "@/app/(home)/hooks/use-get-latest-best-vote-results";
import MainButton from "@/components/main-button";
import { TSort } from "@/interface/vote";
import LatestVoteResultItem from "./latest-vote-result-item";
import NotExist from "@/components/not-exist";
import { Dispatch, useEffect } from "react";
import { SetStateAction } from "jotai";

interface ILatestVoteResultListProps {
  readonly sort: TSort;
  readonly setIsExist: Dispatch<SetStateAction<boolean>>;
}

export default function LatestVoteResultList({
  sort,
  setIsExist,
}: ILatestVoteResultListProps) {
  const { data, isLoading, isError } = useGetLatestBestVoteResult();

  const handleClickMoreButton = () => {
    // eslint-disable-next-line no-console
    console.log("click");
  };

  useEffect(() => {
    if (data && data.data) {
      if (latestVoteResults.length !== 0) {
        setIsExist(true);
      } else {
        setIsExist(false);
      }
    }
  }, [data]);

  if (isLoading) return <div>로딩중</div>;

  if (isError) return <div>에러 발생</div>;

  if (!data || !data.data) return <NotExist text="지난 투표가 없습니다." />;

  const { dataList: latestVoteResults } = data.data;
  const isExist = latestVoteResults.length !== 0;

  return (
    <>
      {isExist ? (
        <>
          <div className="grid w-full grid-cols-1 justify-items-center gap-y-[20px]">
            {latestVoteResults.map((latestVote) => {
              return (
                <LatestVoteResultItem
                  key={latestVote.voteId}
                  latestVoteResultCandidates={latestVote.vote}
                  startDate={latestVote.startDate}
                  topic={latestVote.topic}
                  myVote={latestVote.myVote}
                  candidate={latestVote.vote}
                  endDate={latestVote.endDate}
                  totalCount={latestVote.totalVote}
                />
              );
            })}
          </div>
          <div className="mb-[58px] mt-[20px] lg:mb-[77px] lg:mt-[40px]">
            <MainButton text="더보기" onClick={handleClickMoreButton} />
          </div>
        </>
      ) : (
        <NotExist text="지난 투표가 없습니다." />
      )}
    </>
  );
}
