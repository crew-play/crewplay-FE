interface IMainActionButtonProps {
  readonly text: string;
  readonly onClick: () => void;
}

export default function MainActionButton({
  text,
  onClick,
}: IMainActionButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="h-[52px] w-full rounded-[8px] bg-yellow-001 text-[16px] font-bold leading-[19.09px] lg:h-[50px] lg:w-[141px] lg:rounded-[30.5px] lg:border lg:border-black-001 lg:bg-white-001 lg:px-[40px] lg:py-[16px] lg:text-[18px] lg:font-semibold lg:leading-[18px] lg:hover:bg-yellow-001"
      >
        {text}
      </button>
    </div>
  );
}
