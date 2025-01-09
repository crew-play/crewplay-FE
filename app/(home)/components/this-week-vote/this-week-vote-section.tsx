import { formatWeekNumber } from "@/utils/format-value";
import ThisWeekVoteCandidate from "../../../../components/vote/this-week-vote-candidate";

const date = new Date();
const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export default function ThisWeekVoteSection() {
  return (
    <>
      <section className="relative overflow-hidden px-[16px] pb-[100px] pt-[80px] lg:pb-[140px]">
        <div className="relative z-50 mx-auto w-full rounded-[20px] px-[16px] py-[40px] custom-style lg:max-w-screen-xl lg:px-0">
          <h1 className="w-full text-center text-[16px] font-medium leading-[16px] lg:text-[20px] lg:leading-[20px]">
            {`크루플레이 ${formatWeekNumber(dateString)}주차 투표 결과`}
          </h1>
          <ThisWeekVoteCandidate />
        </div>
      </section>
    </>
  );
}
