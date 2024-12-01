import { atom } from "jotai";

export interface ISignUpForm {
  readonly providerId: string;
  readonly nickname: string;
  readonly clubId: number;
  readonly clubName: string;
}

export const atomSignUpStep = atom<string>("nickname");

export const atomSignUpForm = atom<ISignUpForm>({
  providerId: "",
  nickname: "",
  clubId: 0,
  clubName: "",
});
