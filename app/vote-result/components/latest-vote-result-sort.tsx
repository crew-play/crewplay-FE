import { TSort } from "@/interface/vote";

interface ILatestVoteResultSortProps {
  readonly sort: TSort;
  readonly isExist: boolean;
  readonly onClick: (_type: TSort) => void;
}

export default function LatestVoteResultSort({
  sort,
  isExist,
  onClick,
}: ILatestVoteResultSortProps) {
  return (
    <div className="mb-[40px] flex h-full items-center justify-between">
      <h2 className="text-[20px] font-bold leading-[28px] lg:text-[24px] lg:leading-[24px]">
        지난 투표 보기
      </h2>
      {isExist && (
        <div className="flex cursor-pointer items-center text-[14px] leading-[14px]">
          <span
            className={`${sort === "latest" ? "bg-yellow-001 font-bold text-black-001" : "bg-white-001 text-gray-003"} flex h-[28px] w-[66px] items-center justify-center rounded-[40px] hover:bg-yellow-001`}
            onClick={() => {
              return onClick("latest");
            }}
          >
            최신순
          </span>
          <span
            className={`${sort === "popular" ? "bg-yellow-001 font-bold text-black-001" : "bg-white-001 text-gray-003"} flex h-[28px] w-[66px] items-center justify-center rounded-[40px] hover:bg-yellow-001`}
            onClick={() => {
              return onClick("popular");
            }}
          >
            인기순
          </span>
        </div>
      )}
    </div>
  );
}
