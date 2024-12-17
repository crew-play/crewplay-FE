import Heart from "@/public/svg/heart.svg";
import { formattingDateTime } from "@/utils/format-value";
import useLikeVoteTopic from "../hooks/use-recommend-vote-topic";
import { atomUserAuth } from "@/jotai/user-auth";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";

interface ITopicCardProps {
  readonly createdAt: string;
  readonly topic: string;
  readonly topicId: number;
  readonly recommendCount: number;
  readonly isRecommended: boolean;
}

export default function TopicCard({
  createdAt,
  topic,
  topicId,
  recommendCount,
  isRecommended,
}: ITopicCardProps) {
  const userAuth = useAtomValue(atomUserAuth);
  const router = useRouter();

  const { mutate } = useLikeVoteTopic();

  const isLogin = userAuth.role !== "ANONYMOUS";

  const handleClickLikeButton = () => {
    if (!isLogin) {
      const result = confirm(
        "로그인 시 추천이 가능합니다. 로그인 하시겠습니까?",
      );

      if (!result) return;
      router.push("/login");
    } else {
      mutate(topicId);
    }
  };

  return (
    <>
      <div className="group hidden h-[100px] cursor-pointer border-b border-white-006 lg:flex lg:hover:bg-gray-005">
        <span className="flex h-full w-[240px] items-center pl-[30px] text-[20px] leading-[32px]">
          {formattingDateTime(createdAt)}
        </span>
        <p className="flex h-full grow items-center truncate px-[30px] text-[22px] font-bold leading-[30.8px]">
          {topic}
        </p>
        <div className="flex h-full w-[240px] items-center justify-center">
          <button
            type="button"
            className="flex h-[10px] w-[12px] items-center justify-center lg:h-[16px] lg:w-[20px]"
            onClick={handleClickLikeButton}
          >
            <Heart
              className={`${isRecommended ? "fill-red-002" : "fill-gray-004"}`}
            />
          </button>
          <span
            className={`ml-[6px] font-medium text-gray-004 group-hover:text-black-001`}
          >
            {recommendCount}
          </span>
        </div>
      </div>
      <div className="mb-[8px] flex flex-col rounded-[6px] bg-gray-005 px-[20px] py-[24px] lg:hidden">
        <div className="mb-[8px] flex justify-between">
          <span className="flex size-full items-center text-[12px] leading-[12px]">
            {formattingDateTime(createdAt)}
          </span>
          <div className="flex h-full items-center">
            <button
              type="button"
              className="h-[10px] w-[12px] lg:h-[16px] lg:w-[20px]"
              onClick={handleClickLikeButton}
            >
              <Heart
                className={`${isRecommended ? "fill-red-002" : "fill-gray-004"}`}
              />
            </button>
            <span
              className={`ml-[6px] text-[12px] font-medium leading-[12px] text-gray-004`}
            >
              {recommendCount}
            </span>
          </div>
        </div>
        <p className="flex w-full items-center text-[16px] font-bold leading-[22.4px]">
          {topic}
        </p>
      </div>
    </>
  );
}
