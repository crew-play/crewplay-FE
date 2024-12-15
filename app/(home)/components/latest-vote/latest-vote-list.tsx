import NotExist from "@/components/not-exist";
import useGetLatestBestVoteResult from "../../hooks/use-get-latest-best-vote-results";
import LatestVoteItem from "./latest-vote-item";

export default function LatestVoteList() {
  const { data, isLoading, isError } = useGetLatestBestVoteResult();

  if (isLoading) return <div>로딩중</div>;

  if (isError) return <div>에러 발생</div>;

  if (!data || !data.data) return <NotExist text="진행된 투표가 없습니다." />;

  const isExist = data.data.dataList.length !== 0;

  return (
    <>
      {isExist ? (
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
      ) : (
        <NotExist text="진행된 투표가 없습니다." />
      )}
    </>
  );
}
