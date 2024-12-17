import NotExist from "@/components/not-exist";
import useGetBestVoteTopic from "../../app/vote-topic/hooks/use-get-best-vote-topic";
import BestCard from "./best-card";
import Spinner from "@/components/spinner";

export default function BestList() {
  const { data, isLoading, isError } = useGetBestVoteTopic();

  if (isLoading) return <Spinner />;

  if (isError)
    return <NotExist text="에러가 발생하였습니다. 다시 조회해주세요." />;

  if (!data || !data.data) return <NotExist text="진행된 투표가 없습니다." />;

  const isExist = data.data.length !== 0;

  return (
    <div className="mt-[14px] w-full border-t-2 border-b-gray-003 border-t-black-001 lg:mt-[24px]">
      {isExist ? (
        <>
          {data.data.map((bestTopic, index) => {
            return (
              <BestCard
                key={bestTopic.topic + String(index + 1)}
                topicId={bestTopic.topicId}
                ranking={index + 1}
                topic={bestTopic.topic}
                recommendCount={bestTopic.recommendCount}
                isRecommended={bestTopic.isRecommended}
              />
            );
          })}
        </>
      ) : (
        <NotExist text="진행된 투표가 없습니다." />
      )}
    </div>
  );
}
