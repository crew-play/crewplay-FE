interface IStadiumSeatItemProps {
  readonly seatName: string;
  readonly theme: string;
  readonly seatNum: string;
  readonly isLast: boolean;
}

export default function StadiumSeatItem({
  seatName,
  theme,
  seatNum,
  isLast,
}: IStadiumSeatItemProps) {
  return (
    <div
      className={`${!isLast && "mr-[10px] lg:mr-[20px]"} flex h-[292px] min-w-[260px] flex-col justify-between rounded-[12px] border border-gray-012 bg-white-001 p-[24px] lg:h-[329px] lg:min-w-[306px] lg:pb-[23px] lg:pl-[26px] lg:pr-[30px] lg:pt-[25px]`}
    >
      <div>
        <div className="py-[4px]">
          <span className="rounded-[15px] border border-black-001 px-[11px] py-[4px] text-[16px] leading-[19.09px] text-black-001 lg:text-[18px] lg:leading-[21.48px]">
            {seatName}
          </span>
        </div>
        <p className="mt-[8px] text-[18px] font-bold leading-[25.2px] text-black-001 lg:mt-[16px] lg:text-[20px] lg:leading-[28px]">
          {theme}
        </p>
      </div>

      <div className="flex flex-col">
        <div className="mb-[8px]">
          <span className="border-b border-black pb-[5px] text-[18px] font-bold leading-[25.2px]">
            좌석블록
          </span>
        </div>
        <div>
          <p className="truncate text-[16px] font-medium leading-[22.4px] text-gray-010 lg:text-[18px] lg:leading-[25.2px]">
            {seatNum}
          </p>
        </div>
      </div>
    </div>
  );
}
