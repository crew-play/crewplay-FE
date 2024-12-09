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
    <section className="w-full bg-black-001 px-[16px] py-[112px] pt-[120px] lg:w-screen">
      <div className="mx-auto w-full lg:max-w-screen-xl">
        <h2 className="mb-[24px] text-[28px] leading-[39.2px] text-white-001">
          야구팬들이 생각한 <br />
          <span className="text-[48px] font-bold leading-[67.2px] text-yellow-001">
            구단 맛집리스트
          </span>
        </h2>
        <Divider isBgBlack />
        <div className="my-[24px] flex">
          {data.data.map((club) => {
            return (
              <div
                className="mr-[12px] flex h-[46px] w-[80px] items-center justify-center rounded-[36px] border border-gray-003 text-[16px] leading-[19.09px] text-gray-003"
                key={club.clubName}
              >
                {CLUBS[club.clubName]}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-x-[24px] rounded-[12px]">
          {ARR.map((_, index) => {
            return (
              <div key={index} className="relative">
                <div className="overflow-hidden rounded-[12px]">
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
