import LatestVoteItem from "./latest-vote-item";

const ARR = ["1", "2", "3", "4"];

export default function LatestVoteList() {
  return (
    <div className="grid grid-cols-1 gap-y-[24px]">
      {ARR.map((data, index) => {
        return <LatestVoteItem key={index} />;
      })}
    </div>
  );
}
