import { MouseEvent, RefObject, useRef } from "react";

interface IUseDragProps {
  readonly sliderRef: RefObject<HTMLDivElement>;
  readonly trackRef: RefObject<HTMLDivElement>;
}

export default function useDrag() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false); // useRef로 상태 관리
  const startX = useRef(0); // useRef로 상태 관리
  const currentTranslate = useRef(0); // useRef로 상태 관리
  const prevTranslate = useRef(0); // useRef로 상태 관리

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
    const delta = currentX - startX.current;
    currentTranslate.current = prevTranslate.current + delta;

    const maxTranslate =
      (trackRef.current?.scrollWidth || 0) -
      (sliderRef.current?.offsetWidth || 0);

    if (currentTranslate.current > 0) {
      currentTranslate.current = 0; // 왼쪽 끝으로 스크롤 제한
    }

    if (currentTranslate.current < -maxTranslate) {
      currentTranslate.current = -maxTranslate; // 오른쪽 끝으로 스크롤 제한
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  const handleMouseUp = () => {
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
  };
}
