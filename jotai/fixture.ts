import { atom } from "jotai";

interface IFixtureData {
  readonly season: string;
  readonly fixtureId: number;
  readonly fixtureTime: string;
  readonly fixtureDate: string;
  readonly homeClubName: string;
  readonly awayClubName: string;
  readonly homeScore: number;
  readonly awayScore: number;
  readonly stadium: string;
}

export const atomFixtureData = atom<IFixtureData>({
  season: "",
  fixtureId: 0,
  fixtureTime: "",
  fixtureDate: "",
  homeClubName: "",
  awayClubName: "",
  homeScore: 0,
  awayScore: 0,
  stadium: "",
});
