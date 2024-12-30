import { IRestaurant } from "@/interface/game-schedule";
import RestaurantItem from "./restaruant-item";

interface IRestaurantListProps {
  readonly restaurants: IRestaurant[];
}

export default function RestaurantList({ restaurants }: IRestaurantListProps) {
  return (
    <div className="w-full rounded-[12px] border border-gray-012 bg-white-001 p-[32px] lg:px-[24px]">
      <h3 className="mb-[24px] text-[18px] font-bold leading-[21.48px] text-black-001 lg:text-[24px] lg:leading-[28.64px]">
        🍚 맛집리스트
      </h3>
      <div className="h-[355px] overflow-auto lg:h-[405px]">
        {restaurants.map((restaurant, index) => {
          return (
            <RestaurantItem
              key={index}
              restaurantName={restaurant.restaurantName}
              restaurantAddress={restaurant.restaurantAddress}
              index={index + 1}
              isLast={index + 1 === restaurants.length}
            />
          );
        })}
      </div>
    </div>
  );
}
