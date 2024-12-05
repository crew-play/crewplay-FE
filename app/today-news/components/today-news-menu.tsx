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
    <div className="mx-auto my-[40px] flex h-[48px] w-[262px] justify-between text-[20px] font-bold leading-[20px]">
      <span
        onClick={() => {
          return onClick("news");
        }}
        className={`${selectedMenu === "news" ? "border-b-[3px] border-b-black-001 text-black-001" : "text-gray-004"} flex cursor-pointer items-center justify-center px-[16px] hover:text-black-001`}
      >
        오늘의 뉴스
      </span>
      <span
        onClick={() => {
          return onClick("video");
        }}
        className={`${selectedMenu === "video" ? "border-b-[3px] border-b-black-001 text-black-001" : "text-gray-004"} flex cursor-pointer items-center justify-center px-[16px] hover:text-black-001`}
      >
        오늘의 영상
      </span>
    </div>
  );
}
