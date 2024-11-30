import { checkNickname } from "@/api/sign-up";
import Refresh from "@/public/svg/refresh-input.svg";
import { atomSignUpForm } from "@/recoil/signUp/sign-up-step";
import { nicknameSchema } from "@/schema/sign-up-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

interface INicknameForm {
  readonly nickname: string;
}

export default function NicknameForm() {
  const router = useRouter();
  const setSignUpForm = useSetRecoilState(atomSignUpForm);

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<INicknameForm>({
    defaultValues: {
      nickname: "",
    },
    mode: "onChange",
    resolver: yupResolver(nicknameSchema),
  });

  const handleCheckNicknameSubmit = async () => {
    const nickname = getValues("nickname");

    if (nickname.length === 0) return;

    const { data } = await checkNickname(nickname);

    if (data) {
      clearErrors();
      setSignUpForm((prev) => ({ ...prev, nickname }));
      router.push("/signUp/club");
    } else {
      setError("nickname", {
        message: "사용할 수 없는 닉네임입니다.",
      });
    }
  };

  const handleClearNickname = () => {
    reset();
  };

  return (
    <div className="mt-12">
      <form
        onSubmit={handleSubmit(handleCheckNicknameSubmit)}
        className={`flex h-[52px] w-full items-center rounded-lg border bg-default-default ${errors.nickname ? "border-danger-secondary" : "border-default-default"}`}
      >
        <input
          maxLength={10}
          type="text"
          className="w-full rounded-lg pl-[18px] leading-4 text-default-default focus:outline-none"
          placeholder="닉네임을 입력해주세요."
          {...register("nickname")}
        />
        <button
          onClick={handleClearNickname}
          className="mr-2 flex size-9 items-center justify-center"
        >
          <Refresh />
        </button>
      </form>
      {errors.nickname && (
        <p className="text-danger-secondary mt-1 leading-[19.6px]">
          {errors.nickname.message}
        </p>
      )}
      <button
        type="submit"
        onClick={handleCheckNicknameSubmit}
        className="mt-6 flex h-[52px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#002A5C] text-[14px] font-semibold leading-[14px] text-neutral-onNeutral"
      >
        다음
      </button>
    </div>
  );
}
