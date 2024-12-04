import EmptyHeart from "@/public/svg/topic/empty-heart.svg";

export default function TopicCard() {
  return (
    <div className="flex h-[100px] border-b border-white-006">
      <span className="flex h-full w-[240px] items-center pl-[30px] text-[20px] leading-[32px]">
        2024.12.01
      </span>
      <span className="flex h-full grow items-center px-[30px] text-[22px] font-bold leading-[30.8px]">
        야구장에서 가장 짜릿했던 응원가 또는 응원곡은?
      </span>
      <div className="flex h-full w-[240px] items-center justify-center">
        <EmptyHeart />
        <span className={`ml-[6px] font-medium text-gray-004`}>268</span>
      </div>
    </div>
  );
}
