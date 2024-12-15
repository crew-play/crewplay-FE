"use client";

import RegisterVote from "@/components/register-vote";
import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
import { useAtom } from "jotai";
import { useEffect } from "react";
import BestVoteSection from "./components/best-vote/best-vote-section";
import LatestVoteResultSection from "./components/latest-vote/latest-vote-result-section";
import Marquee from "./components/marquee";
import ThisWeekVoteSection from "./components/this-week-vote/this-week-vote-section";

const Home = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useAtom(atomIsOpenMobileMenu);

  useEffect(() => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  }, []);

  return (
    <>
      <ThisWeekVoteSection />
      <Marquee />
      <BestVoteSection />
      <RegisterVote />
      <LatestVoteResultSection />
    </>
  );
};

export default Home;
