import NotExist from "@/components/not-exist";
import useGetVoteTopic from "../hooks/use-get-vote-topics";
import TopicCard from "./topic-card";
import Spinner from "@/components/spinner";
import MainButton from "@/components/main-button";

export default function TopicList() {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useGetVoteTopic();

  if (isLoading) return <Spinner />;

  if (isError)
    return <NotExist text="에러가 발생하였습니다. 다시 조회해주세요." />;

  if (!data || !data.pages)
    return <NotExist text="등록된 투표 주제가 없습니다." />;

  const topics = data.pages.flatMap((page) => {
    if (!page.data) return [];
    return page.data.dataList;
  });
  const isExist = topics.length !== 0;

  const handleClickMoreButton = () => {
    fetchNextPage();
  };

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
          <div className="mb-[20px] lg:mb-[40px]">
            {topics.map((topic, index) => {
              return (
                <TopicCard
                  key={index}
                  createdAt={topic.createdAt}
                  topic={topic.topic}
                  recommendCount={topic.recommendCount}
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
        <NotExist text="등록된 투표 주제가 없습니다." />
      )}
    </div>
  );
}
