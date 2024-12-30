import { ITips } from "@/interface/game-schedule";
import { MouseEvent, RefObject, TouchEvent } from "react";
import StadiumSeatItem from "./stadium-seat-item";

interface IStadiumSeatListProps {
  readonly stadiumSeats: ITips[];
  readonly sliderRef: RefObject<HTMLDivElement>;
  readonly trackRef: RefObject<HTMLDivElement>;
  readonly handleMouseMove: (_e: MouseEvent<HTMLDivElement>) => void;
  readonly handleMouseDown: (_e: MouseEvent<HTMLDivElement>) => void;
  readonly handleMouseUp: (_e: MouseEvent<HTMLDivElement>) => void;
  readonly handleTouchStart: (_e: TouchEvent<HTMLDivElement>) => void;
  readonly handleTouchMove: (_e: TouchEvent<HTMLDivElement>) => void;
  readonly handleTouchEnd: (_e: TouchEvent<HTMLDivElement>) => void;
}

export default function StadiumSeatList({
  stadiumSeats,
  sliderRef,
  trackRef,
  handleMouseMove,
  handleMouseDown,
  handleMouseUp,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
}: IStadiumSeatListProps) {
  return (
    <div className="relative">
      <div
        className="overflow-x-auto"
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="mt-[24px] flex w-full pl-[16px] lg:max-w-[880px] lg:px-0"
          ref={trackRef}
        >
          {stadiumSeats.map((seat, index) => {
            return (
              <StadiumSeatItem
                key={index}
                seatName={seat.seatName}
                theme={seat.theme}
                seatNum={seat.seatNum}
                isLast={index + 1 === stadiumSeats.length}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-gradient-custom absolute right-0 top-0 h-full w-[100px]" />
    </div>
  );
}
