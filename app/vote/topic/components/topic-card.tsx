import EmptyHeart from "@/public/svg/topic/empty-heart.svg";

export default function TopicCard() {
  return (
    <>
      <div className="hidden h-[100px] border-b border-white-006 lg:flex">
        <span className="flex h-full w-[240px] items-center pl-[30px] text-[20px] leading-[32px]">
          2024.12.01
        </span>
        <p className="flex h-full grow items-center px-[30px] text-[22px] font-bold leading-[30.8px]">
          야구장에서 가장 짜릿했던 응원가 또는 응원곡은?
        </p>
        <div className="flex h-full w-[240px] items-center justify-center">
          <EmptyHeart />
          <span className={`ml-[6px] font-medium text-gray-004`}>268</span>
        </div>
      </div>
      <div className="mb-[8px] flex flex-col rounded-[6px] bg-gray-005 px-[20px] py-[24px] lg:hidden">
        <div className="mb-[8px] flex justify-between">
          <span className="flex size-full items-center text-[12px] leading-[12px]">
            2024.12.01
          </span>
          <div className="flex h-full items-center">
            <EmptyHeart />
            <span
              className={`ml-[6px] text-[12px] font-medium leading-[12px] text-gray-004`}
            >
              268
            </span>
          </div>
        </div>
        <p className="flex w-full items-center text-[16px] font-bold leading-[22.4px]">
          야구장에서 가장 짜릿했던 응원가 또는 응원곡은?
        </p>
      </div>
    </>
  );
}
