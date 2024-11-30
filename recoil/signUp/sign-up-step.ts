import { atom } from "recoil";

interface ISignUpForm {
  readonly providerId: string;
  readonly nickname: string;
  readonly club: string;
}

export const signUpStep = atom<string>({
  key: "signUpStep",
  default: "nickname",
});

export const atomSignUpForm = atom<ISignUpForm>({
  key: "signUpForm",
  default: {
    providerId: "",
    nickname: "",
    club: "",
  },
});
