"use client";

import RegisterVote from "@/components/register-vote";
import BestVoteSection from "./components/best-vote/best-vote-section";
import Marquee from "./components/marquee";
import ThisWeekVoteSection from "./components/this-week-vote/this-week-vote-section";
import LatestVoteResultSection from "./components/latest-vote/latest-vote-result-section";
import BestRestaurantList from "./components/best-restaurant/best-restaurant-list";

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
