export interface IUserProfile {
  readonly email: string;
  readonly nickname: string;
  readonly clubName: string;
  readonly emblemImg: string;
}

export type TUserProfileSelectedMenu = "editProfile" | "voteManage";
