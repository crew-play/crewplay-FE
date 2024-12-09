interface IThisWeekVoteCandidateItem {
  readonly index: number;
  readonly isSelected: number;
  readonly onClick: (_index: number) => void;
}

export default function ThisWeekVoteCandidateItem({
  index,
  isSelected,
  onClick,
}: IThisWeekVoteCandidateItem) {
  return (
    <div
      className={`flex h-[52px] w-full cursor-pointer items-center rounded-[6px] px-[24px] lg:h-[60px] ${isSelected === index ? "bg-yellow-001" : "bg-gray-005 hover:bg-white-006"} text-[16px] font-medium leading-[16px]`}
      onClick={() => {
        return onClick(index);
      }}
    >
      <input
        type="radio"
        name="candidate"
        id="candidate"
        className="size-[16px]"
        onClick={() => {
          return onClick(index);
        }}
      />
      <label
        htmlFor={String(index)}
        className="ml-[12px] flex h-full grow items-center"
      >
        최형우 (KIA)
      </label>
    </div>
  );
}
