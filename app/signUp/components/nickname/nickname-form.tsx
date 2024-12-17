import { checkNickname } from "@/api/sign-up";
import NextStepButton from "@/components/next-step-button";
import { atomSignUpForm, atomSignUpStep } from "@/jotai/sign-up";
import Refresh from "@/public/svg/refresh-input.svg";
import { nicknameSchema } from "@/schema/sign-up-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAtom, useSetAtom } from "jotai";
import { useForm } from "react-hook-form";

interface INicknameForm {
  readonly nickname: string;
}

const CLASS_NAME =
  "mt-6 flex h-[52px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#002A5C] text-[14px] font-semibold leading-[14px] text-white-002";

export default function NicknameForm() {
  const setSignUpStep = useSetAtom(atomSignUpStep);
  const [signUpForm, setSignUpForm] = useAtom(atomSignUpForm);

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<INicknameForm>({
    defaultValues: {
      nickname: signUpForm.nickname === "" ? "" : signUpForm.nickname,
    },
    mode: "onChange",
    resolver: yupResolver(nicknameSchema),
  });

  const handleClearNickname = () => {
    setSignUpForm((prev) => {
      return { ...prev, nickname: "" };
    });
    setValue("nickname", "");
  };

  const handleCheckNicknameSubmit = async () => {
    const nickname = getValues("nickname");

    if (nickname.length === 0) {
      setError("nickname", {
        message: "닉네임 입력은 필수입니다.",
      });
      return;
    }

    if (errors.nickname) return;

    const { data } = await checkNickname(nickname);

    if (data) {
      clearErrors();
      setSignUpForm((prev) => {
        return { ...prev, nickname };
      });
      setSignUpStep("club");
    } else {
      setError("nickname", {
        message: "사용할 수 없는 닉네임입니다.",
      });
    }
  };

  return (
    <div className="mt-12">
      <form
        onSubmit={handleSubmit(handleCheckNicknameSubmit)}
        className={`flex h-[52px] w-full items-center rounded-lg border bg-white-001 ${errors.nickname ? "border-red-001" : "border-white-005"}`}
      >
        <input
          maxLength={10}
          type="text"
          className="w-full rounded-lg pl-[18px] leading-4 text-black-002 focus:outline-none"
          placeholder="닉네임을 입력해주세요."
          {...register("nickname")}
        />
        <button
          type="button"
          onClick={handleClearNickname}
          className="mr-2 flex size-9 items-center justify-center"
        >
          <Refresh />
        </button>
      </form>
      {errors.nickname && (
        <p className="mt-1 leading-[19.6px] text-red-001">
          {errors.nickname.message}
        </p>
      )}
      <NextStepButton
        className={CLASS_NAME}
        text="다음"
        onClick={handleCheckNicknameSubmit}
      />
    </div>
  );
}
