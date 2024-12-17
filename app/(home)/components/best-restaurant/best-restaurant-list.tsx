import Divider from "@/components/divider";
import { useState } from "react";
import { CLUBS } from "../../constant/club-list";
import ClubList from "./club-list";
import RestaurantList from "./restaurant-list";

export default function BestRestaurantList() {
  const [isSelectedClub, setIsSelectedClub] = useState<string>(
    CLUBS["기아 타이거즈"],
  );

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
        <ClubList
          isSelectedClub={isSelectedClub}
          setIsSelectedClub={setIsSelectedClub}
        />
        <RestaurantList />
      </div>
    </section>
  );
}
