interface IMainActionButtonProps {
  readonly text: string;
  readonly margin?: {
    readonly top?: string;
    readonly bottom?: string;
  };
  readonly onClick: () => void;
}

export default function MainActionButton({
  text,
  margin,
  onClick,
}: IMainActionButtonProps) {
  return (
    <div
      className="flex justify-center"
      style={margin && { marginTop: margin.top, marginBottom: margin.bottom }}
    >
      <button
        type="button"
        onClick={onClick}
        className="rounded-[30.5px] border border-black-001 px-[40px] py-[16px] text-[18px] font-semibold leading-[18px] hover:bg-yellow-001"
      >
        {text}
      </button>
    </div>
  );
}
