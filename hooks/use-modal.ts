"use client";

import { SetStateAction } from "jotai";
import { Dispatch, useEffect, useRef } from "react";

interface IUseModalProps {
  readonly setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function useModal({ setIsOpenModal }: IUseModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (e: Event) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpenModal(false);
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [modalRef]);

  return { modalRef };
}
