import { checkNickname } from "@/api/sign-up";
import { useDebounce } from "@/hooks/useDebounce";
import Refresh from "@/public/svg/refresh-input.svg";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface ISignUpForm {
  readonly nickname: string;
}

interface IError {
  readonly isError: boolean;
  readonly errorMessage: string;
}

const signUpRegex = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[가-힣])/;

export default function NicknameForm() {
  const { debounceValue, changeValue } = useDebounce();
  const [error, setError] = useState<IError>({
    isError: false,
    errorMessage: "",
  });
  const isInit = useRef<boolean>(true);
  const router = useRouter();

  const isValid = debounceValue.length !== 0 && !error.isError;

  const handleCheckNicknameSubmit = async () => {
    const { data } = await checkNickname(debounceValue);

    if (data) {
      setError({ isError: false, errorMessage: "" });
    } else {
      setError({
        isError: true,
        errorMessage: "사용할 수 없는 닉네임입니다.",
      });
    }
  };

  const handleClickNextButton = () => {
    if (isValid) {
      handleCheckNicknameSubmit();
    } else {
      router.push("/signUp/club");
    }
  };

  const changeNickname = async () => {
    if (debounceValue.length === 0) {
      setError({
        isError: true,
        errorMessage: "닉네임 입력은 필수입니다.",
      });
      return;
    }

    if (debounceValue.length < 2) {
      setError({
        isError: true,
        errorMessage: "닉네임으로 사용하기엔 너무 짧아요",
      });
      return;
    }

    handleCheckNicknameSubmit();
  };

  useEffect(() => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }

    changeNickname();
  }, [debounceValue]);

  return (
    <div className="mt-[48px]">
      <form
        onClick={handleClickNextButton}
        className="flex h-[52px] w-full items-center rounded-lg border border-default-default bg-default-default"
      >
        <input
          maxLength={10}
          type="text"
          className="w-full rounded-lg pl-[18px] leading-[16px] text-default-default focus:outline-none"
          placeholder="닉네임을 입력해주세요."
          onChange={(e) => {
            return changeValue(e.target.value);
          }}
        />
        <button className="mr-2 flex size-[36px] items-center justify-center">
          <Refresh />
        </button>
      </form>
      {error && <p>{error.errorMessage}</p>}
      <button
        type="submit"
        disabled={isValid}
        className={`mt-[24px] flex h-[52px] w-full items-center justify-center rounded-lg bg-[#002A5C] text-[14px] font-semibold leading-[14px] text-neutral-onNeutral ${!isValid && "bg-black/20"}`}
      >
        다음
      </button>
    </div>
  );
}
