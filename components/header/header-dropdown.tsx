"use client";

import { THIS_WEEK_VOTE_LINKS } from "@/constants/this-week-vote-links";
import { SetStateAction } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch } from "react";

interface IHeaderDropdownProps {
  readonly setIsHover: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderDropdown({ setIsHover }: IHeaderDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();

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
