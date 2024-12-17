import ThisWeekVoteCandidate from "@/components/vote/this-week-vote-candidate";
import { formatWeekNumber } from "@/utils/format-value";

const date = new Date();
const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export default function ThisWeekVoteSection() {
  return (
    <section className="mx-auto mb-[40px] mt-[6px] w-full lg:mb-[60px] lg:mt-[22px] lg:w-[720px]">
      <h1 className="mt-[60px] w-full text-center text-[16px] font-medium leading-[16px] lg:mt-[80px] lg:text-[20px] lg:leading-[20px]">
        {`크루플레이 ${formatWeekNumber(dateString)}주차 투표 결과`}
      </h1>
      <ThisWeekVoteCandidate />
    </section>
  );
}
