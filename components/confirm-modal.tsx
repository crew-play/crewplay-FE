import useModal from "@/hooks/use-modal";
import { Dispatch, SetStateAction, useEffect } from "react";

interface IConfirmModalProps {
  readonly confirmText: string;
  readonly setIsOpenConfirmModal: Dispatch<SetStateAction<boolean>>;
  readonly onClickConfirm: () => void;
  readonly onClickCancel: () => void;
}

export default function ConfirmModal({
  confirmText,
  setIsOpenConfirmModal,
  onClickConfirm,
  onClickCancel,
}: IConfirmModalProps) {
  const { modalRef } = useModal({ setIsOpenModal: setIsOpenConfirmModal });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black-001-opacity">
      <div
        ref={modalRef}
        className="rounded-[12px] bg-white-001 px-[28px] py-[44px] shadow-[0_4px_20px_0px_rgba(0,0,0,0.4)]"
      >
        <p className="mb-[24px] text-center text-[20px] font-semibold leading-[28px]">
          {confirmText}
        </p>
        <button
          type="button"
          onClick={onClickConfirm}
          className="mr-[16px] h-[64px] w-[135px] rounded-[8px] bg-yellow-001 text-[18px] font-bold leading-[25.2px] text-black-001 lg:w-[180px]"
        >
          네
        </button>
        <button
          type="button"
          onClick={onClickCancel}
          className="h-[64px] w-[135px] rounded-[8px] bg-gray-013 text-[18px] font-bold leading-[25.2px] text-gray-003 lg:w-[180px]"
        >
          아니오
        </button>
      </div>
    </div>
  );
}
