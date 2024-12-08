import TodayNewsCard from "./today-news-card";

export default function TodayNewsList() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-y-[20px] lg:grid-cols-3 lg:justify-items-start lg:gap-[40px]">
      {Array.from({ length: 9 }, (_, index: number) => {
        return <TodayNewsCard key={index} />;
      })}
      <div>asd</div>
    </div>
  );
}
