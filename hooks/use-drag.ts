import { MouseEvent, TouchEvent, useRef } from "react";

export default function useDrag() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;

    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const currentX = e.clientX;
    handleMove(currentX);
  };

  const handleMouseUp = () => {
    endDrag();
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX; // 터치 시작 위치 저장
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const currentX = e.touches[0].clientX; // 현재 터치 위치
    handleMove(currentX);
  };

  const handleTouchEnd = () => {
    endDrag();
  };

  const handleMove = (currentX: number) => {
    const delta = currentX - startX.current;
    currentTranslate.current = prevTranslate.current + delta;

    const maxTranslate =
      (trackRef.current?.scrollWidth || 0) -
      (sliderRef.current?.offsetWidth || 0);

    if (currentTranslate.current > 0) {
      currentTranslate.current = 0; // 왼쪽 끝 제한
    }

    if (currentTranslate.current < -maxTranslate) {
      currentTranslate.current = -maxTranslate; // 오른쪽 끝 제한
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  const endDrag = () => {
    isDragging.current = false;
    prevTranslate.current = currentTranslate.current;

    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grab";
    }
  };

  return {
    sliderRef,
    trackRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
