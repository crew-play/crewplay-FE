import NotExist from "@/components/not-exist";
import useGetVoteTopic from "../hooks/use-get-vote-topics";
import TopicCard from "./topic-card";
import Spinner from "@/components/spinner";

export default function TopicList() {
  const { data, isLoading, isError } = useGetVoteTopic();

  if (isLoading) return <Spinner />;

  if (isError)
    return <NotExist text="에러가 발생하였습니다. 다시 조회해주세요." />;

  if (!data || !data.data)
    return <NotExist text="등록된 투표 주제가 없습니다." />;

  const isExist = data.data.dataList.length === 0;

  return (
    <div className="mb-[40px] mt-[24px] w-full">
      <div className="hidden h-[100px] justify-center rounded-[12px] bg-gray-005 text-[24px] font-bold leading-[24px] lg:flex">
        <span className="flex h-full w-[240px] items-center justify-center">
          작성일
        </span>
        <span className="flex h-full grow items-center justify-center">
          내용
        </span>
        <span className="flex h-full w-[240px] items-center justify-center">
          좋아요
        </span>
      </div>
      {isExist ? (
        <>
          {data.data.dataList.map((topic, index) => {
            return (
              <TopicCard
                key={index}
                createdAt={topic.createdAt}
                topic={topic.topic}
                recommendCount={topic.recommendCount}
              />
            );
          })}
        </>
      ) : (
        <NotExist text="등록된 투표 주제가 없습니다." />
      )}
    </div>
  );
}
