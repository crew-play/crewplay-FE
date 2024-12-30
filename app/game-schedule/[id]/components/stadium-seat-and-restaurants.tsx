import { IRestaurant, ITips } from "@/interface/game-schedule";
import Link from "next/link";
import Restaurant from "./restaurant/restaurant";
import StadiumSeat from "./stadium-seat/stadium-seat";

interface IStadiumSeatProps {
  readonly tips: ITips[];
  readonly restaurants: IRestaurant[];
  readonly siteUrl: string;
}

export default function StadiumSeatAndRestaurants({
  tips,
  restaurants,
  siteUrl,
}: IStadiumSeatProps) {
  return (
    <>
      <section className="mt-[40px] w-full lg:mt-[48px] lg:basis-[880px]">
        <StadiumSeat stadiumSeats={tips} />
        <Restaurant restaurants={restaurants} />
      </section>
      <div className="fixed bottom-0 left-0 flex h-[107px] w-full items-center justify-center bg-white-001 px-[40px] lg:hidden">
        <Link
          href={siteUrl}
          target="_blank"
          className="flex h-[64px] w-full items-center justify-center rounded-[8px] border border-black-001 bg-yellow-001 text-[18px] font-bold leading-[25.2px]"
        >
          예매하러 가기
        </Link>
      </div>
    </>
  );
}
