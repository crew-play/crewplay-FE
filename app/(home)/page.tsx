"use client";

import RegisterVote from "@/components/register-vote";
import BestRestaurantList from "./components/best-restaurant-list";
import BestVoteSection from "./components/best-vote-section";
import LatestVoteResultSection from "./components/latest-vote-result-section";
import ThisWeekVoteSection from "./components/this-week-vote-section";
import Marquee from "./components/marquee";

const Home = () => {
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
