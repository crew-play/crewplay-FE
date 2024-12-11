import { useQuery } from "@tanstack/react-query";
import LatestVoteItem from "./latest-vote-item";
import useGetLatestBestVoteResult from "../../hooks/use-get-latest-best-vote-resulst";

const ARR = ["1", "2", "3", "4"];

export default function LatestVoteList() {
  const { data, isLoading, isError } = useGetLatestBestVoteResult();

  if (isLoading) return <div>로딩중</div>;

  if (isError) return <div>에러 발생</div>;

  if (!data || !data.data) return <div>데이터 없음</div>;

  return (
    <div className="grid grid-cols-1 gap-y-[24px]">
      {data.data.dataList.map((bestVote, index) => {
        return (
          <LatestVoteItem
            key={index}
            startDate={bestVote.startDate}
            topic={bestVote.topic}
            bestCandidate={bestVote.vote[0]}
            voteCount={0}
          />
        );
      })}
    </div>
  );
}
