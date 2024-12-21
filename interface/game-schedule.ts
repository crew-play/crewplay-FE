export interface IGameSchedule {
  readonly fixtureId: number;
  readonly season: string;
  readonly fixtureDate: string;
  readonly fixtureTime: string;
  readonly homeClubName: string;
  readonly awayClubName: string;
  readonly homeScore: number;
  readonly awayScore: number;
  readonly stadium: string;
  readonly stadiumAddress: string;
  readonly notes: string;
}
