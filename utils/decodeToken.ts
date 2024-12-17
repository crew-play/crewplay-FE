import { decode } from "js-base64";

export const decodeToken = (token: string) => {
  const payload = token.split(".")[1];
  const decodePayload = decode(payload);
  const payloadObj = JSON.parse(decodePayload);

  return {
    nickname: payloadObj.nickname || "닉네임",
    role: payloadObj.role,
  };
};
