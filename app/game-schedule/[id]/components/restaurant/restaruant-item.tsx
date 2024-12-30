interface IRestaurantItemProps {
  readonly restaurantName: string;
  readonly restaurantAddress: string;
  readonly index: number;
  readonly isLast: boolean;
}

export default function RestaurantItem({
  restaurantName,
  restaurantAddress,
  index,
  isLast,
}: IRestaurantItemProps) {
  return (
    <div
      className={`flex py-[12px] ${!isLast && "mb-[10px] border-b border-gray-012"}`}
    >
      <div className="mr-[14px] flex size-[24px] items-center justify-center rounded-[6px] bg-yellow-001">
        <span className="flex items-center justify-center text-[12px] font-bold leading-[14.32px] text-black lg:text-[20px]">
          {index}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="mb-[6px] text-[16px] font-bold leading-[19.09px] text-black-001 lg:text-[20px] lg:leading-[23.87px]">
          {restaurantName}
        </span>
        <p className="text-[14px] font-medium leading-[16.71px] text-gray-010 lg:text-[16px] lg:leading-[19.09px]">
          {restaurantAddress}
        </p>
      </div>
    </div>
  );
}
