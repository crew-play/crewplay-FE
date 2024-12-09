"use client";

import RegisterVote from "@/components/register-vote";
import BestRestaurantList from "./components/best-restaurant-list";
import BestVoteSection from "./components/best-vote-section";
import LatestVoteResultSection from "./components/latest-vote-result-section";
import ThisWeekVoteSection from "./components/this-week-vote-section";

const Home = () => {
  return (
    <>
      <ThisWeekVoteSection />
      <BestVoteSection />
      <RegisterVote />
      <LatestVoteResultSection />
      <BestRestaurantList />
    </>
  );
};

export default Home;
