import NotExist from "@/components/not-exist";
import useGetBestVoteTopic from "../hooks/use-get-best-vote-topic";
import BestCard from "./best-card";

export default function BestList() {
  const { data, isLoading, isError } = useGetBestVoteTopic();

  if (isLoading) return <div>로딩중</div>;

  if (isError) return <div>에러 발생</div>;

  if (!data || !data.data) return <NotExist text="진행된 투표가 없습니다." />;

  const isExist = data.data.length === 0;

  return (
    <div className="mt-[14px] w-full border-t-2 border-b-gray-003 border-t-black-001 lg:mt-[24px]">
      {isExist ? (
        <>
          {data.data.map((bestTopic, index) => {
            return (
              <BestCard
                key={bestTopic.topic + String(index + 1)}
                ranking={index + 1}
                topic={bestTopic.topic}
                voteCount={bestTopic.voteCount}
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
