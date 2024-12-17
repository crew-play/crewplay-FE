import useDrag from "@/hooks/use-drag";
import Image from "next/image";

const ARR = ["1", "2", "3"];

export default function RestaurantList() {
  const {
    sliderRef,
    trackRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useDrag();

  return (
    <div
      ref={sliderRef}
      className="w-full overflow-auto"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div ref={trackRef} className="mr-[16px] flex w-full lg:mr-[24px]">
        {ARR.map((_, index) => {
          return (
            <div key={index} className="shrink-0">
              <div className="relative h-[160px] w-[265px] rounded-[8px] lg:h-[210px] lg:w-[410px] lg:rounded-[12px]">
                <span className="absolute left-0 top-0 ml-[10px] mt-[10px] flex size-[36px] items-center justify-center rounded-[6px] bg-yellow-001 text-[20px] font-bold leading-[23.87px] text-black">
                  {index + 1}
                </span>
                <Image
                  src="/"
                  alt="image"
                  fill
                  className="rounded-[8px] lg:rounded-[12px]"
                />
              </div>
              <div className="flex flex-col p-[16px] text-white-001">
                <span className="mb-[12px] text-[20px] font-bold leading-[28px]">
                  태민 양꼬치
                </span>
                <span className="text-[16px] leading-[22.4px]">
                  송파 백제고분로
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
