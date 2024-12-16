import MainButton from "@/components/main-button";
import NotExist from "@/components/not-exist";
import { TSort } from "@/interface/vote";
import useGetLatestVoteResults from "../hooks/use-get-latest-vote-results";
import LatestVoteResultItem from "./latest-vote-result-item";
import Spinner from "@/components/spinner";

interface ILatestVoteResultListProps {
  readonly sort: TSort;
}

export default function LatestVoteResultList({
  sort,
}: ILatestVoteResultListProps) {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetLatestVoteResults(sort);

  const handleClickMoreButton = () => {
    fetchNextPage();
  };

  if (isLoading) return <Spinner />;

  if (isError)
    return <NotExist text="에러가 발생하였습니다. 다시 조회해주세요." />;

  if (!data || !data.pages) return <NotExist text="지난 투표가 없습니다." />;

  const latestVoteResults = data.pages.flatMap((page) => {
    if (!page.data) return [];
    return page.data.dataList;
  });
  const isExist = latestVoteResults.length !== 0;

  return (
    <>
      {isExist ? (
        <>
          <div className="mb-[20px] grid w-full grid-cols-1 justify-items-center gap-y-[20px] lg:mb-[40px]">
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
          {hasNextPage && (
            <div className="mb-[58px] lg:mb-[77px]">
              <MainButton text="더보기" onClick={handleClickMoreButton} />
            </div>
          )}
        </>
      ) : (
        <NotExist text="지난 투표가 없습니다." />
      )}
    </>
  );
}
