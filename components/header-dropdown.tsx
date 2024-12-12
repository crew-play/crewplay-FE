"use client";

import { SetStateAction } from "jotai";
import { useRouter } from "next/navigation";
import { Dispatch } from "react";

const THIS_WEEK_VOTE_LINKS = [
  {
    title: "이번 주 투표",
    description: "투표에 참여하고 결과를 확인하세요",
    url: "/",
  },
  {
    title: "지난 투표",
    description: "지금까지 진행된 투표 결과 살펴보기",
    url: "/vote-result",
  },
  {
    title: "다음 주 주제 살펴보기",
    description: "크루 플레이 유저들이 만드는 주제",
    url: "vote-topic",
  },
];

interface IHeaderDropdownProps {
  readonly setIsHover: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderDropdown({ setIsHover }: IHeaderDropdownProps) {
  const router = useRouter();

  const { pathname } = window.location;

  const handleClickMenu = (url: string) => {
    setIsHover(false);
    router.push(url);
  };

  return (
    <div className="absolute bottom-[-365.5px] left-0 h-[364px] w-[300px]">
      <ul>
        {THIS_WEEK_VOTE_LINKS.map((thisWeekVoteLink) => {
          return (
            <li
              key={thisWeekVoteLink.url}
              className={`${thisWeekVoteLink.url === pathname ? "bg-black-001" : "border-b border-b-gray-009 bg-white-001 hover:bg-white-003"} h-[110px] w-[300px] cursor-pointer px-[24px]`}
            >
              <div
                onClick={() => {
                  return handleClickMenu(thisWeekVoteLink.url);
                }}
                className="flex size-full flex-col justify-center"
              >
                <span
                  className={`pb-[12px] text-[16px] font-bold leading-[22.4px] ${thisWeekVoteLink.url === pathname ? "text-yellow-001" : "text-black-001"}`}
                >
                  {thisWeekVoteLink.title}
                </span>
                <p
                  className={`text-[14px] leading-[19.6px] ${thisWeekVoteLink.url === pathname ? "text-yellow-001" : "text-gray-003"}`}
                >
                  {thisWeekVoteLink.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
