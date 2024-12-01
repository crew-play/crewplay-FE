import { useRef, useState } from "react";

export const useDebounce = (delay: number = 1000) => {
  const [debounceValue, setDebounceValue] = useState<string>("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const changeValue = (value: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
  };

  return { debounceValue, changeValue };
};
