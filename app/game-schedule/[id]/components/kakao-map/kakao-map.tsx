"use client";

import NotExist from "@/components/not-exist";
import Spinner from "@/components/spinner";
import { IRestaurant } from "@/interface/game-schedule";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

interface IKakaoMapProps {
  readonly restaurants: IRestaurant[];
}

export default function KakaoMap({ restaurants }: IKakaoMapProps) {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY as string,
    libraries: ["services", "clusterer", "drawing"],
  });

  if (loading) return <Spinner />;

  if (error) return <NotExist text="카카오 맵 로드에 실패하였습니다." />;

  return (
    <Map
      center={{ lat: restaurants[0].lat, lng: restaurants[0].lnt }}
      className="hidden w-full rounded-[12px] border border-gray-012 lg:block"
    >
      {restaurants.map((restaurant, index) => {
        return (
          <MapMarker
            key={restaurant.restaurantName + index}
            position={{ lat: restaurant.lat, lng: restaurant.lnt }}
          />
        );
      })}
    </Map>
  );
}
