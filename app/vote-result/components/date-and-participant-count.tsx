import Calendar from "@/public/svg/calendar.svg";
import Participant from "@/public/svg/participant.svg";
import { replaceNumberFormat } from "@/utils/format-value";

interface IDateAndParticipantCountProps {
  readonly voteDate: string;
  readonly totalParticipantCount: number;
}

export default function DateAndParticipantCount({
  voteDate,
  totalParticipantCount,
}: IDateAndParticipantCountProps) {
  return (
    <div className="mt-[12px] flex flex-row-reverse items-center justify-center text-[14px] font-medium leading-[14px] text-gray-007 lg:mt-[20px] lg:flex-row lg:justify-normal lg:text-[16px] lg:leading-[16px]">
      <div className="flex items-center">
        <Calendar className="size-[14px] lg:size-[16px]" />
        <span className="ml-[6px] flex items-center">{voteDate}</span>
      </div>
      <div className="mr-[16px] flex items-center lg:ml-[20px]">
        <Participant className="h-[11px] w-[14px] lg:h-[13px] lg:w-[16px]" />
        <span className="ml-[6px] flex items-center">
          {replaceNumberFormat(totalParticipantCount)}명
        </span>
      </div>
    </div>
  );
}
