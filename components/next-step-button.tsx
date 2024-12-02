interface INextStepButtonProps {
  readonly className: string;
  readonly text: string;
  readonly disabled?: boolean;
  readonly onClick?: () => void;
}

export default function NextStepButton({
  className,
  text,
  disabled,
  onClick,
}: INextStepButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </button>
  );
}
