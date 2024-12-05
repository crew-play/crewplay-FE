import DeadlineTimer from "./components/deadline-timer";
import BestList from "./components/best-list";
import TopicList from "./components/topic-list";
import RegisterVote from "@/components/register-vote";
import Pagination from "@/components/pagination";

export default function VoteTopicPage() {
  return (
    <>
      <div className="mx-auto w-[1200px]">
        <h1 className="mt-[80px] w-full text-center text-[20px] font-medium leading-[20px]">
          크루플레이 다음 주 주제 선정
        </h1>
        <DeadlineTimer />
        <div>
          <div className="mt-[60px] flex w-full items-center justify-between">
            <span className="text-[24px] font-bold leading-[24px] text-black-001">
              실시간 TOP 5
            </span>
            <span className="text-[16px] leading-[16px] text-gray-003">
              좋아요 순
            </span>
          </div>
          <BestList />
        </div>
        <div className="mt-[120px]">
          <div className="flex w-full">
            <span className="text-[24px] font-bold leading-[24px] text-black-001">
              투표 주제 선정
            </span>
          </div>
          <TopicList />
        </div>
        <Pagination />
      </div>
      <RegisterVote />
    </>
  );
}
