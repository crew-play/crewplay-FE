import useClubList from "@/app/signUp/hooks/use-club-list";
import NotExist from "@/components/not-exist";
import Spinner from "@/components/spinner";
import { atomFixtureData } from "@/jotai/fixture";
import { useAtomValue } from "jotai";
import Image from "next/image";

export default function GameScore() {
  const { data, isLoading, isError } = useClubList();

  const fixtureData = useAtomValue(atomFixtureData);

  if (isLoading) return <Spinner />;

  if (isError || !data || !data.data)
    return (
      <section className="mt-[28px] w-full">
        <div className="flex items-center justify-center rounded-[12px] bg-black-001 pb-[32px] pt-[38px]">
          <NotExist text="경기 일정 정보가 없습니다." />
        </div>
      </section>
    );

  return (
    <section className="mt-0 lg:mt-[28px]">
      <div className="flex items-center justify-center bg-black-001 pb-[32px] pt-[38px] lg:rounded-[12px]">
        <div className="flex-col pb-[6px]">
          <div className="mx-auto mb-[20px] flex size-[60px] items-center justify-center rounded-[14.5px] bg-white-001 lg:size-[112px] lg:rounded-[36px]">
            <Image
              src={data.data[0].emblemImg}
              alt="club-image"
              className="h-[30.75px] w-[48px] lg:h-[58px] lg:w-[90px]"
              width={30}
              height={30}
            />
          </div>
          <div className="flex items-center justify-center">
            <span className="text-[18px] font-semibold leading-[21.48px] text-white-001 lg:text-[24px] lg:leading-[28.64px]">
              {fixtureData.awayClubName}
            </span>
          </div>
        </div>
        <div className="flex flex-col px-[8px] lg:px-[41px]">
          <div className="mx-auto inline rounded-[4px] bg-black-006 px-[12px] py-[2px] lg:px-[21.5px] lg:py-[1.5px]">
            <span className="text-[14px] font-medium leading-[19.6px] text-white-001 lg:text-[18px] lg:leading-[25.2px]">
              {fixtureData.season}
            </span>
          </div>
          <div className="mb-[2px] flex h-[91px] items-center justify-center">
            <span className="text-[40px] font-bold leading-[47.73px] text-white-001 lg:text-[50px] lg:leading-[59.67px]">
              -
            </span>
          </div>
          <div className="mb-[2px] flex items-center justify-center">
            <span className="text-[14px] leading-[16.71px] text-white-001 lg:text-[18px] lg:leading-[21.48px]">
              {fixtureData.fixtureDate}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-[14px] leading-[16.71px] text-gray-010 lg:text-[18px] lg:leading-[21.48px]">
              {fixtureData.stadium}
            </span>
          </div>
        </div>
        <div className="flex-col pb-[6px]">
          <div className="mx-auto mb-[20px] flex size-[60px] items-center justify-center rounded-[14.5px] bg-white-001 lg:size-[112px] lg:rounded-[36px]">
            <Image
              src={data.data[0].emblemImg}
              alt="club-image"
              className="h-[30.75px] w-[48px] lg:h-[58px] lg:w-[90px]"
              width={30}
              height={30}
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="mr-[4px] flex size-[20px] items-center justify-center rounded-[4px] bg-blue-002 lg:mr-[6px] lg:size-[29px]">
              <span className="text-[12px] leading-[14.32px] text-white-001 lg:text-[18px] lg:leading-[21.48px]">
                홈
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-[18px] font-semibold leading-[21.48px] text-white-001 lg:text-[24px] lg:leading-[28.64px]">
                {fixtureData.homeClubName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
