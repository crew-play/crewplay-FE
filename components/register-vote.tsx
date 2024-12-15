"use client";

import { registerTopicSchema } from "@/schema/register-topic";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import MainButton from "./main-button";
import useRegisterVoteTopic from "@/app/vote-topic/hooks/use-register-vote-topic";
import { useAtomValue } from "jotai";
import { atomUserAuth } from "@/jotai/user-auth";

interface IRegisterTopicForm {
  readonly topic: string;
}

export default function RegisterVote() {
  const { mutate } = useRegisterVoteTopic();
  const userAuth = useAtomValue(atomUserAuth);

  const isLogin = userAuth.role !== "ANONYMOUS";

  const { register, handleSubmit, getValues } = useForm<IRegisterTopicForm>({
    defaultValues: {
      topic: "",
    },
    mode: "onChange",
    resolver: yupResolver(registerTopicSchema),
  });

  const handleClickRegisterButton = () => {
    const topic = getValues("topic");

    if (topic.length === 0) {
      alert("주제를 입력해주세요");
      return;
    }

    mutate(topic);
  };

  return (
    <section className="flex h-[368px] w-screen items-center justify-center bg-black-001 lg:h-[425px]">
      <div className="w-full px-[16px] lg:w-[660px] lg:px-0">
        <div className="flex flex-col text-center">
          <span className="mb-[10px] text-[14px] leading-[14px] text-white-001 lg:mb-[20px] lg:text-[24px] lg:leading-[24px]">
            유저들이 선정하고 투표하는 크루플레이
          </span>
          <span className="mb-[20px] text-[24px] font-bold leading-[33.6px] text-yellow-001 lg:mb-[32px] lg:text-[38px] lg:leading-[38px]">
            지금 바로 새로운 투표를 등록해 보세요!
          </span>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(handleClickRegisterButton)}
            className="flex flex-col rounded-[8px] px-[14px] py-[9px] lg:flex-row lg:justify-between lg:rounded-[120px] lg:bg-white-001"
          >
            <input
              type="text"
              id="topic"
              className="mb-[12px] h-[52px] grow rounded-[8px] bg-white-001 px-[16px] text-center text-[16px] font-medium leading-[16px] placeholder:text-gray-004 focus:outline-none lg:mb-0 lg:h-auto lg:rounded-[120px] lg:text-start lg:text-[24px] lg:leading-[24px]"
              placeholder={
                isLogin
                  ? "새로운 주제를 등록해보세요!"
                  : "로그인 후 이용해주세요."
              }
              {...register("topic")}
            />
            <MainButton
              text="등록하기"
              onClick={handleClickRegisterButton}
              isDisabled={!isLogin}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
