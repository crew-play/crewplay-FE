import { ILatestVoteResult, IVote } from "@/interface/vote-result";
import LastVoteResultItem from "./latest-vote-result-item";

interface ILatestVoteResultListProps {
  readonly latestVoteResults?: ILatestVoteResult[];
  readonly isLoading: boolean;
  readonly isError: boolean;
}

export default function LatestVoteResultList({
  latestVoteResults,
  isLoading,
  isError,
}: ILatestVoteResultListProps) {
  if (isLoading) return <div>로딩중</div>;

  if (isError) return <div>에러 발생</div>;

  if (!latestVoteResults) return <div>데이터 없음</div>;
  return (
    <div className="grid w-full grid-cols-1 justify-items-center gap-y-[20px]">
      {latestVoteResults.map((latestVote, index) => {
        return (
          <LastVoteResultItem
            key={latestVote.voteId}
            candidateList={latestVote.vote}
            startDate={latestVote.startDate}
            topic={latestVote.topic}
          />
        );
      })}
    </div>
  );
}
