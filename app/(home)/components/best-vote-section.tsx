import BestList from "@/app/vote-topic/components/best-list";
import MainButton from "@/components/main-button";

export default function BestVoteSection() {
  const handleClickButton = () => {
    // eslint-disable-next-line no-console
    console.log("asd");
  };

  return (
    <section className="mx-auto w-full px-[16px] lg:max-w-screen-xl">
      <span className="text-[24px] leading-[33.6px] text-black-001">
        다음 투표 주제는?
      </span>
      <h2 className="mb-[24px] text-[48px] font-bold leading-[67.2px] text-black-001">
        실시간 TOP 5
      </h2>
      <BestList />
      <div className="mx-auto mt-[30px]">
        <MainButton text="바로가기" onClick={handleClickButton} />
      </div>
    </section>
  );
}
