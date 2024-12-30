import { IRestaurant } from "@/interface/game-schedule";
import RestaurantList from "./restaurant-list";
import KakaoMap from "../kakao-map/kakao-map";

interface IRestaurantProps {
  readonly restaurants: IRestaurant[];
}

export default function Restaurant({ restaurants }: IRestaurantProps) {
  return (
    <section className="mt-[40px] w-full px-[16px] lg:mt-[48px] lg:basis-[880px] lg:px-0">
      <h2 className="mb-[10px] text-[20px] font-bold leading-[28px] text-black-001 lg:mb-[24px] lg:text-[30px] lg:leading-[35.8px]">
        맛집 정보 한눈에 보기
      </h2>
      <div className="grid w-full grid-cols-1 gap-x-[20px] lg:basis-[880px] lg:grid-cols-2">
        <KakaoMap restaurants={restaurants} />
        <RestaurantList restaurants={restaurants} />
      </div>
    </section>
  );
}
