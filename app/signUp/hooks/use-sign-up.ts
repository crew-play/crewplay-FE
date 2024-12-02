import { signUp } from "@/api/sign-up";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useSignUp() {
  const router = useRouter();

  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: signUp,
    onSuccess: () => {
      router.push("/signUp/success");
    },
    onError: () => {
      alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
    },
  });
}
