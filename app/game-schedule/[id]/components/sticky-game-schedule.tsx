import { atomFixtureData } from "@/jotai/fixture";
import { useAtomValue } from "jotai";

export default function StickyGameSchedule() {
  const fixtureData = useAtomValue(atomFixtureData);

  return (
    <div className="sticky left-0 top-[114px] ml-[33px] mt-[28px] hidden w-full rounded-[12px] border border-gray-012 bg-white-001 p-[24px] lg:block lg:basis-[370px]">
      <div className="mb-[26px] flex flex-col">
        <span className="mb-[10px] text-[18px] font-medium leading-[21.48px] text-gray-003">
          경기
        </span>
        <p className="text-[20px] font-bold leading-[23.87px] text-black-001">
          {fixtureData.awayClubName} VS {fixtureData.homeClubName}
        </p>
      </div>
      <div className="mb-[26px] flex flex-col">
        <span className="mb-[10px] text-[18px] font-medium leading-[21.48px] text-gray-003">
          경기장
        </span>
        <p className="text-[20px] font-bold leading-[23.87px] text-black-001">
          {fixtureData.stadium}
        </p>
      </div>
      <div className="mb-[26px] flex flex-col">
        <span className="mb-[10px] text-[18px] font-medium leading-[21.48px] text-gray-003">
          경기장 위치
        </span>
        <p className="text-[20px] font-bold leading-[23.87px] text-black-001">
          {fixtureData.stadiumAddress}
        </p>
      </div>
      <div className="mb-[33px] flex flex-col">
        <span className="mb-[10px] text-[18px] font-medium leading-[21.48px] text-gray-003">
          일시
        </span>
        <p className="text-[20px] font-bold leading-[23.87px] text-black-001">
          {fixtureData.fixtureDate}
        </p>
      </div>
      <button
        type="button"
        className="h-[64px] w-full rounded-[8px] bg-yellow-001 text-[18px] font-bold leading-[25.2px] text-black-001"
      >
        예매하러 가기
      </button>
    </div>
  );
}
