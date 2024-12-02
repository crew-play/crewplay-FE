import { atom } from "jotai";

export interface ISignUpForm {
  readonly providerId: string;
  readonly nickname: string;
  readonly clubName: string;
}

export const atomSignUpStep = atom<string>("nickname");

export const atomSignUpForm = atom<ISignUpForm>({
  providerId: "",
  nickname: "",
  clubName: "",
});
