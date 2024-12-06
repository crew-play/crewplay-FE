import Calendar from "@/public/svg/calendar.svg";
import Participant from "@/public/svg/participant.svg";

export default function DateAndParticipantCount() {
  return (
    <div className="mt-[12px] flex flex-row-reverse items-center justify-center text-[14px] font-medium leading-[14px] text-gray-007 lg:mt-[20px] lg:flex-row lg:justify-normal lg:text-[16px] lg:leading-[16px]">
      <div className="flex items-center">
        <Calendar />
        <span className="ml-[6px] flex items-center">
          2024.11.25 - 2024.12.01
        </span>
      </div>
      <div className="mr-[16px] flex items-center lg:ml-[20px]">
        <Participant />
        <span className="ml-[6px] flex items-center">3,024명</span>
      </div>
    </div>
  );
}
