import useGetVoteTopic from "../hooks/use-get-vote-topics";
import TopicCard from "./topic-card";

export default function TopicList() {
  const { data, isLoading, isError } = useGetVoteTopic();

  if (isLoading) return <div>로딩중</div>;

  if (isError) return <div>에러 방생</div>;

  if (!data || !data.data) return <div>데이터 없음</div>;

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
      {data.data.dataList.map((topic, index) => (
        <TopicCard
          key={index}
          createdAt={topic.createdAt}
          topic={topic.topic}
          recommendCount={topic.recommendCount}
        />
      ))}
    </div>
  );
}
