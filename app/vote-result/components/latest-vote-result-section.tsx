import { TSort } from "@/interface/vote";
import { useState } from "react";
import LatestVoteResultList from "./latest-vote-result-list";
import LatestVoteResultSort from "./latest-vote-result-sort";

export default function LatestVoteResultSection() {
  const [sort, setSort] = useState<TSort>("latest");

  const handleClickSort = (type: TSort) => {
    setSort(type);
  };

  return (
    <section className="mx-auto mt-[66px] w-full lg:w-[820px]">
      <LatestVoteResultSort sort={sort} onClick={handleClickSort} />
      <LatestVoteResultList sort={sort} />
    </section>
  );
}
