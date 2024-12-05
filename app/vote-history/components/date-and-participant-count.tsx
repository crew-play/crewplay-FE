import Calendar from "@/public/svg/calendar.svg";
import Participant from "@/public/svg/participant.svg";

export default function DateAndParticipantCount() {
  return (
    <div className="text-gray-007 mt-[20px] flex font-medium">
      <div className="flex items-center">
        <Calendar />
        <span className="ml-[6px]">2024.11.25 - 2024.12.01</span>
      </div>
      <div className="ml-[20px] flex items-center">
        <Participant />
        <span className="ml-[6px]">3,024명</span>
      </div>
    </div>
  );
}
