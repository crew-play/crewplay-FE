import * as yup from "yup";

export const registerTopicSchema = yup.object().shape({
  topic: yup.string().required("주제 입력은 필수입니다."),
});
