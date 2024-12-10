import MainButton from "@/components/main-button";
import LatestVoteList from "./latest-vote-list";

export default function LatestVoteResultSection() {
  const handleClickButton = () => {
    // eslint-disable-next-line no-console
    console.log("asd");
  };

  return (
    <section className="mx-auto my-[40px] w-full px-[16px] text-black-001 lg:my-[120px] lg:max-w-screen-xl">
      <div className="mb-[20px] lg:mb-[24px]">
        <span className="mb-[4px] text-[14px] leading-[19.6px] lg:text-[24px] lg:leading-[33.6px]">
          참여자가 많았던
        </span>
        <h2 className="text-[24px] font-bold leading-[33.6px] lg:text-[48px] lg:leading-[67.2px]">
          지난 투표 결과
        </h2>
      </div>
      <LatestVoteList />
      <div className="mt-[30px]">
        <MainButton
          text="전체 투표 결과 보러가기"
          onClick={handleClickButton}
        />
      </div>
    </section>
  );
}
