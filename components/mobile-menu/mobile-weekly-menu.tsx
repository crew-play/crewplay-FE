import { THIS_WEEK_VOTE_LINKS } from "@/constants/this-week-vote-links";

interface IMobileWeeklyMenu {
  readonly onClick: (_url: string) => void;
}

export default function MobileWeeklyMenu({ onClick }: IMobileWeeklyMenu) {
  return (
    <div className="mb-[10px] border-b border-b-gray-003 pb-[10px]">
      <ul>
        {THIS_WEEK_VOTE_LINKS.map((thisWeekVoteLink) => {
          return (
            <li
              key={thisWeekVoteLink.url}
              className="cursor-pointer bg-white-001 px-[36px] py-[16px] text-[16px] font-bold leading-[22.4px] hover:bg-gray-005"
              onClick={() => onClick(thisWeekVoteLink.url)}
            >
              {thisWeekVoteLink.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
