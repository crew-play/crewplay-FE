interface IDividerProps {
  readonly isBgBlack?: boolean;
}

export default function Divider({ isBgBlack = false }: IDividerProps) {
  return (
    <div
      className={`h-px w-full border-t ${isBgBlack ? "border-t-white-006" : "border-t-white-001"}`}
    />
  );
}
