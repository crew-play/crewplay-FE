import TopicCard from "./topic-card";

export default function TopicList() {
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
      {Array.from({ length: 10 }, (_, index: number) => {
        return <TopicCard key={index} />;
      })}
    </div>
  );
}
