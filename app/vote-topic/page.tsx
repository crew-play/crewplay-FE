"use client";

import Pagination from "@/components/pagination";
import RegisterVote from "@/components/register-vote";
import BestList from "./components/best-list";
import DeadlineTimer from "./components/deadline-timer";
import TopicList from "./components/topic-list";
import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function VoteTopicPage() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useAtom(atomIsOpenMobileMenu);

  useEffect(() => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  }, []);

  return (
    <>
      <div className="w-full px-[16px] lg:mx-auto lg:max-w-[1200px]">
        <h1 className="mt-[60px] w-full text-center text-[16px] font-medium leading-[16px] lg:mt-[80px] lg:text-[20px] lg:leading-[20px]">
          크루플레이 다음 주 주제 선정
        </h1>
        <DeadlineTimer />
        <div>
          <div className="mt-[32px] flex w-full items-center justify-between lg:mt-[60px]">
            <span className="text-[20px] font-bold leading-[20px] text-black-001 lg:text-[24px] lg:leading-[24px]">
              실시간 TOP 5
            </span>
            <span className="text-[12px] leading-[12px] text-gray-003 lg:text-[16px] lg:leading-[16px]">
              좋아요 순
            </span>
          </div>
          <BestList />
        </div>
        <div className="mt-[40px] lg:mt-[120px]">
          <div className="flex w-full">
            <span className="text-[20px] font-bold leading-[20px] text-black-001 lg:text-[24px] lg:leading-[24px]">
              투표 주제 선정
            </span>
          </div>
          <TopicList />
        </div>
        <Pagination />
      </div>
      <RegisterVote />
    </>
  );
}
