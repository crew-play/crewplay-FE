import { INews } from "@/api/today-news";
import TodayNewsCard from "./today-news-card";
import MainButton from "@/components/main-button";

interface ITodayNewsListProps {
  readonly todayIssueList: INews[];
}

export default function TodayNewsList({ todayIssueList }: ITodayNewsListProps) {
  const handleClickMoreButton = () => {
    // eslint-disable-next-line no-console
    console.log("!!");
  };

  return (
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
      <div className="mb-[40px] mt-[20px] lg:mb-[106px] lg:mt-[60px]">
        <MainButton text="더보기" onClick={handleClickMoreButton} />
      </div>
    </div>
  );
}
