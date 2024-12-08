import LastVoteResultItem from "./latest-vote-result-item";

export default function LastVoteResultList() {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center gap-y-[20px]">
      {Array.from({ length: 10 }, (_, index: number) => {
        return <LastVoteResultItem key={index} />;
      })}
    </div>
  );
}
