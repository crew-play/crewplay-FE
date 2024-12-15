"use client";

import Divider from "@/components/divider";
import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
import { useAtom } from "jotai";
import { useEffect } from "react";
import LatestVoteResultSection from "./components/latest-vote-result-section";
import ThisWeekVoteSection from "./components/this-week-vote-section";

export default function VoteResultPage() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useAtom(atomIsOpenMobileMenu);

  useEffect(() => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  }, []);

  return (
    <>
      <ThisWeekVoteSection />
      <Divider />
      <LatestVoteResultSection />
    </>
  );
}
