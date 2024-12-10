import useClubList from "@/app/signUp/hooks/use-club-list";
import Divider from "@/components/divider";
import Image from "next/image";

const CLUBS: { [key: string]: string } = {
  "기아 타이거즈": "KIA",
  "삼성 라이온즈": "삼성",
  "LG 트윈스": "LG",
  "두산 베어스": "두산",
  "KT 위즈": "KT",
  "SSG 랜더스": "SSG",
  "롯데 자이언츠": "롯데",
  "한화 이글스": "한화",
  "NC 다이노스": "NC",
  "키움 히어로즈": "키움",
};

const ARR = ["1", "2", "3"];

export default function BestRestaurantList() {
  const { data, isLoading } = useClubList();

  if (isLoading) return <div>로딩중</div>;

  if (!data || !data.data) return <div>asd</div>;

  return (
    <section className="w-full bg-black-001 px-[16px] pb-[54px] pt-[70px] lg:w-screen lg:py-[112px] lg:pt-[120px]">
      <div className="mx-auto w-full lg:max-w-screen-xl">
        <h2 className="mb-[14px] text-[14px] leading-[19.6px] text-white-001 lg:mb-[24px] lg:text-[28px] lg:leading-[39.2px]">
          야구팬들이 생각한 <br />
          <span className="text-[24px] font-bold leading-[33.6px] text-yellow-001 lg:text-[48px] lg:leading-[67.2px]">
            구단 맛집리스트
          </span>
        </h2>
        <div className="hidden lg:block">
          <Divider isBgBlack />
        </div>
        <div className="mb-[20px] flex overflow-hidden lg:my-[24px]">
          {data.data.map((club) => {
            return (
              <div
                className="mr-[12px] flex h-[26px] w-[53px] shrink-0 items-center justify-center rounded-[36px] border border-gray-003 text-[14px] leading-[14px] text-gray-003 lg:h-[46px] lg:w-[80px] lg:text-[16px] lg:leading-[19.09px]"
                key={club.clubName}
              >
                <span>{CLUBS[club.clubName]}</span>
              </div>
            );
          })}
        </div>
        <div className="flex w-full overflow-hidden rounded-[12px]">
          {ARR.map((_, index) => {
            return (
              <div key={index} className="relative shrink-0">
                <div className="rounded-[12px]">
                  <span className="absolute left-0 top-0 ml-[10px] mt-[10px] flex size-[36px] items-center justify-center rounded-[6px] bg-yellow-001 text-[20px] font-bold leading-[23.87px] text-black">
                    {index + 1}
                  </span>
                  <Image
                    src="/"
                    alt="image"
                    width={410}
                    height={210}
                    className="rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col p-[16px] text-white-001">
                  <span className="mb-[12px] text-[20px] font-bold leading-[28px]">
                    태민 양꼬치
                  </span>
                  <span className="text-[16px] leading-[22.4px]">
                    송파 백제고분로
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
