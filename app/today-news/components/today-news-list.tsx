import TodayNewsCard from "./today-news-card";

export default function TodayNewsList() {
  return (
    <div className="grid grid-cols-3 gap-[40px]">
      {Array.from({ length: 9 }, (_, index: number) => {
        return <TodayNewsCard key={index} />;
      })}
      <div>asd</div>
    </div>
  );
}
