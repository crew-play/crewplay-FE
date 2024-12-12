"use client";

import RegisterVote from "@/components/register-vote";
import BestRestaurantList from "./components/best-restaurant/best-restaurant-list";
import BestVoteSection from "./components/best-vote/best-vote-section";
import LatestVoteResultSection from "./components/latest-vote/latest-vote-result-section";
import Marquee from "./components/marquee";
import ThisWeekVoteSection from "./components/this-week-vote/this-week-vote-section";
import { useAtom } from "jotai";
import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
import { useEffect } from "react";

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
      <BestRestaurantList />
    </>
  );
};

export default Home;
