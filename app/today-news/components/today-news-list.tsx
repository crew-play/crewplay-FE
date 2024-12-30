import { INews } from "@/api/today-news";
import TodayNewsCard from "./today-news-card";
import MainButton from "@/components/main-button";
import NotExist from "@/components/not-exist";

interface ITodayNewsListProps {
  readonly todayIssueList: INews[];
  readonly isExist: boolean;
  readonly hasNextPage: boolean;
  readonly handleClickMoreButton: () => void;
}

export default function TodayNewsList({
  todayIssueList,
  isExist,
  hasNextPage,
  handleClickMoreButton,
}: ITodayNewsListProps) {
  return isExist ? (
    <div>
      <div className="grid grid-cols-1 justify-items-center gap-y-[20px] lg:grid-cols-3 lg:justify-items-start lg:gap-[40px]">
        {todayIssueList.map((issue, index) => {
          return (
            <TodayNewsCard
              key={issue + String(index)}
              headline={issue.headline}
              newsDateTime={issue.newsDateTime}
              newsLink={issue.newsLink}
              thumbnail={issue.thumbnail}
            />
          );
        })}
      </div>
      {hasNextPage && (
        <div className="mb-[40px] mt-[20px] lg:mb-[106px] lg:mt-[60px]">
          <MainButton text="더보기" onClick={handleClickMoreButton} />
        </div>
      )}
    </div>
  ) : (
    <div className="flex min-h-[calc(100vh-164px)] items-center">
      <NotExist text="등록된 뉴스가 없습니다." />
    </div>
  );
}
