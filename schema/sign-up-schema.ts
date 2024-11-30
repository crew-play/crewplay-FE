import * as yup from "yup";

export const nicknameSchema = yup.object().shape({
  nickname: yup
    .string()
    .required("닉네임 입력은 필수입니다.")
    .min(2, "닉네임으로 사용하기엔 너무 짧아요")
    .matches(/^[a-zA-Z0-9가-힣]+$/, "한글, 영어, 숫자 입력만 가능합니다"),
});
