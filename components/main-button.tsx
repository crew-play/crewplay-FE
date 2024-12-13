interface IMainActionButtonProps {
  readonly text: string;
  readonly isDisabled?: boolean;
  readonly onClick: () => void;
}

export default function MainButton({
  text,
  isDisabled = false,
  onClick,
}: IMainActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className="mx-auto flex h-[52px] w-full items-center justify-center rounded-[8px] bg-yellow-001 font-bold text-black-001 hover:bg-white-003 disabled:border-none disabled:bg-white-005 disabled:text-gray-003 lg:size-auto lg:rounded-[40px] lg:border lg:border-black-001 lg:bg-white-001 lg:px-[32px] lg:py-[16px] lg:text-[16px] lg:font-medium lg:leading-[19.09px]"
    >
      {text}
    </button>
  );
}
