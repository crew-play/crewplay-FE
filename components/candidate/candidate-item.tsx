import MediumFirst from "@/public/svg/topic/medium-first.svg";

interface VoteResultBarProps {
  readonly candidate: string;
  readonly percentage: number;
  readonly count: number;
  readonly isFirst: boolean;
}

export default function CandidateItem({
  candidate,
  percentage,
  count,
  isFirst,
}: VoteResultBarProps) {
  const percentageWidth = `${720 * Number((percentage / 100).toFixed(1))}px`;

  return (
    <div className="relative mx-auto mb-[10px] h-[60px] w-[720px] overflow-hidden rounded-[8px]">
      <div className="absolute z-[49] flex size-full items-center justify-between pl-[24px] pr-[30px]">
        <div className="flex items-center">
          {isFirst && <MediumFirst className="size-[24px]" />}
          <span className="ml-[4px] font-medium text-black-001">
            {candidate}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-black-001">{percentage}%</span>
          <span className="ml-[17px] text-[12px] text-gray-004">{count}명</span>
        </div>
      </div>
      <div
        className={`absolute z-[48] h-full ${percentageWidth} ${isFirst ? "bg-yellow-001" : "bg-gray-006"}`}
        style={{ width: percentageWidth }}
      />
      <div className="absolute z-[47] size-full bg-gray-005" />
    </div>
  );
}
