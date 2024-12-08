import CandidateItem from "./candidate-item";

const DUMMY_DATA = ["1", "2", "3", "4", "5"];

export default function CandidateList() {
  return (
    <div>
      {DUMMY_DATA.map((data, index) => {
        return (
          <CandidateItem
            isFirst={index === 0}
            key={data}
            candidate="최형우 (KIA)"
            percentage={50}
            count={50}
          />
        );
      })}
    </div>
  );
}
