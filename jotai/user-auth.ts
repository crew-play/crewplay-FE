import { atom } from "jotai";

interface IUserInformation {
  readonly nickname: string;
  readonly role: "USER" | "ADMIN" | "ANONYMOUS";
}

export const atomUserAuth = atom<IUserInformation>({
  nickname: "",
  role: "ANONYMOUS",
});
