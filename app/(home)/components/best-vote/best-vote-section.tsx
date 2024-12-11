import BestList from "@/app/vote-topic/components/best-list";
import MainButton from "@/components/main-button";
import { useRouter } from "next/navigation";

export default function BestVoteSection() {
  const router = useRouter();

  const handleClickButton = () => {
    router.push("/vote-topic");
  };

  return (
    <section className="mx-auto my-[40px] w-full px-[16px] lg:my-[120px] lg:max-w-screen-xl">
      <span className="mb-[4px] text-[14px] leading-[19.6px] text-black-001 lg:mb-0 lg:text-[24px] lg:leading-[33.6px]">
        다음 투표 주제는?
      </span>
      <h2 className="mb-[20px] text-[24px] font-bold leading-[33.6px] text-black-001 lg:mb-[24px] lg:text-[48px] lg:leading-[67.2px]">
        실시간 TOP 5
      </h2>
      <BestList />
      <div className="mx-auto mt-[30px]">
        <MainButton text="바로가기" onClick={handleClickButton} />
      </div>
    </section>
  );
}
