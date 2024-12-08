import { TSelectedMenu } from "../page";

interface ITodayNewsMenuProps {
  selectedMenu: TSelectedMenu;
  onClick: (_type: TSelectedMenu) => void;
}

export default function TodayNewsMenu({
  selectedMenu,
  onClick,
}: ITodayNewsMenuProps) {
  return (
    <div className="mx-auto my-[30px] flex h-[48px] w-[278px] justify-between text-[18px] font-bold leading-[18px] lg:my-[40px] lg:w-[262px] lg:text-[20px] lg:leading-[20px]">
      <span
        onClick={() => {
          return onClick("news");
        }}
        className={`${selectedMenu === "news" ? "border-b-[3px] border-b-black-001 text-black-001" : "text-gray-004"} flex grow cursor-pointer items-center justify-center hover:text-black-001 lg:px-[16px]`}
      >
        오늘의 뉴스
      </span>
      <span
        onClick={() => {
          return onClick("video");
        }}
        className={`${selectedMenu === "video" ? "border-b-[3px] border-b-black-001 text-black-001" : "text-gray-004"} flex grow cursor-pointer items-center justify-center hover:text-black-001 lg:px-[16px]`}
      >
        오늘의 영상
      </span>
    </div>
  );
}
