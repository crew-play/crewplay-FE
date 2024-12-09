interface IMainActionButtonProps {
  readonly text: string;
  readonly onClick: () => void;
}

export default function MainButton({ text, onClick }: IMainActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mx-auto flex h-[52px] w-full items-center justify-center rounded-[8px] bg-yellow-001 font-bold text-black-001 lg:size-auto lg:rounded-[40px] lg:border lg:border-black-001 lg:bg-white-001 lg:px-[32.5px] lg:py-[17px] lg:text-[16px] lg:font-medium lg:leading-[19.09px]"
    >
      {text}
    </button>
  );
}
