import Ball from "@/public/svg/marquee-ball.svg";
import Star from "@/public/svg/star.svg";
import Food from "@/public/svg/food.svg";

export default function Marquee() {
  return (
    <section className="overflow-hidden border-t border-t-black-001 text-[36px] leading-[36px]">
      <div className="flex animate-marquee overflow-hidden whitespace-nowrap py-[42px]">
        <div className="mr-[20px] flex items-center">
          <p className="mr-[20px] w-full">
            다양한 이벤트와 소식을 한 번에 받아보세요
          </p>
          <Star width="60" height="60" />
        </div>
        <div className="mr-[20px] flex w-full items-center">
          <p className="mr-[20px]">경기 일정과 주변 맛집 등을 확인하세요</p>
          <Food width="60" height="60" />
        </div>
        <div className="mr-[20px] flex w-full items-center">
          <p className="mr-[20px]">유저들과 함께 투표에 참여하는 크루 플레이</p>
          <Ball width="60" height="60" />
        </div>
      </div>
      <div className="flex animate-marquee-reverse overflow-hidden whitespace-nowrap py-[42px]">
        <div className="mr-[20px] flex w-full items-center">
          <p className="mr-[20px]">다양한 이벤트와 소식을 한 번에 받아보세요</p>
          <Star width="60" height="60" />
        </div>
        <div className="mr-[20px] flex items-center">
          <p className="mr-[20px] w-full">
            경기 일정과 주변 맛집 등을 확인하세요
          </p>
          <Food width="60" height="60" />
        </div>
        <div className="mr-[20px] flex items-center">
          <p className="mr-[20px] w-full">
            유저들과 함께 투표에 참여하는 크루 플레이
          </p>
          <Ball width="60" height="60" />
        </div>
      </div>
    </section>
  );
}
