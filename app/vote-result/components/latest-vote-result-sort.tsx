import { TSort } from "@/interface/vote";

interface ILatestVoteResultSortProps {
  readonly sort: TSort;
  readonly onClick: (_type: TSort) => void;
}

export default function LatestVoteResultSort({
  sort,
  onClick,
}: ILatestVoteResultSortProps) {
  return (
    <div className="mb-[40px] flex h-full items-center justify-between">
      <h2 className="text-[20px] font-bold leading-[28px] lg:text-[24px] lg:leading-[24px]">
        지난 투표 보기
      </h2>
      <div className="flex cursor-pointer items-center text-[14px] leading-[14px]">
        <span
          className={`${sort === "UP_TO_DATE" ? "bg-yellow-001 font-bold text-black-001" : "bg-white-001 text-gray-003"} flex h-[28px] w-[66px] items-center justify-center rounded-[40px] hover:bg-yellow-001`}
          onClick={() => {
            return onClick("UP_TO_DATE");
          }}
        >
          최신순
        </span>
        <span
          className={`${sort === "PARTICIPANT" ? "bg-yellow-001 font-bold text-black-001" : "bg-white-001 text-gray-003"} flex h-[28px] w-[66px] items-center justify-center rounded-[40px] hover:bg-yellow-001`}
          onClick={() => {
            return onClick("PARTICIPANT");
          }}
        >
          인기순
        </span>
      </div>
    </div>
  );
}
