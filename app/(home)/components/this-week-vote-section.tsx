import CandidateList from "@/components/candidate/candidate-list";
import ThisWeekVoteCandidateItem from "./this-week-vote-candidate-item";
import ThisWeekVoteCandidateList from "./this-week-vote-candidate-list";
import MainButton from "@/components/main-button";

export default function ThisWeekVoteSection() {
  const handleClickVoteButton = () => {
    // eslint-disable-next-line no-console
    console.log("!");
  };

  return (
    <section className="relative px-[16px]">
      <div className="mx-auto mt-[60px] h-[760px] w-full rounded-[20px] px-[16px] custom-style lg:mt-[80px] lg:max-w-screen-xl lg:px-0">
        <h1 className="w-full pt-[40px] text-center text-[16px] font-medium leading-[16px] lg:text-[20px] lg:leading-[20px]">
          크루플레이 38주차 투표 결과
        </h1>
        <h2 className="mb-[32px] mt-[22px] text-center text-[30px] font-bold leading-[42px] lg:mb-[50px] lg:text-[60px] lg:leading-[84px]">
          2024년 KBO에서 <br /> 활약한 최고의 타자는?
        </h2>
        {/* <CandidateList /> */}
        <ThisWeekVoteCandidateList />
        <div className="mt-[30px]">
          <MainButton text="투표하기" onClick={handleClickVoteButton} />
        </div>
      </div>
    </section>
  );
}
