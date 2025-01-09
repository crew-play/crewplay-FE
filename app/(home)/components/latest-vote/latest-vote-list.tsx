import MainButton from "@/components/main-button";
import NotExist from "@/components/not-exist";
import LatestVoteSkeleton from "@/components/skeleton/latest-vote-skeleton";
import { useRouter } from "next/navigation";
import useGetLatestBestVoteResult from "../../hooks/use-get-latest-best-vote-results";
import LatestVoteItem from "./latest-vote-item";

export default function LatestVoteList() {
  const { data, isLoading, isError } = useGetLatestBestVoteResult();
  const router = useRouter();

  if (isLoading) return <LatestVoteSkeleton />;

  if (isError)
    return <NotExist text="에러가 발생하였습니다. 다시 조회해주세요." />;

  if (!data || !data.data) return <NotExist text="진행된 투표가 없습니다." />;

  const isExist = data.data.dataList.length !== 0;

  const handleClickButton = () => {
    router.push("/vote-result");
  };

  return (
    <>
      {isExist ? (
        <>
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
          <div className="mt-[30px]">
            <MainButton
              text="전체 투표 결과 보러가기"
              onClick={handleClickButton}
            />
          </div>
        </>
      ) : (
        <NotExist text="진행된 투표가 없습니다." />
      )}
    </>
  );
}
