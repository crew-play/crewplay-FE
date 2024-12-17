interface INotExistProps {
  readonly text: string;
}

export default function NotExist({ text }: INotExistProps) {
  return (
    <div className="flex h-[200px] w-full items-center justify-center">
      <p className="text-center text-black-001">{text}</p>
    </div>
  );
}
