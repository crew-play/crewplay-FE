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

export interface IRestaurant {
  readonly restaurantName: string;
  readonly restaurantAddress: string;
  readonly lat: number;
  readonly lnt: number;
}

export interface ITips {
  readonly seatName: string;
  readonly theme: string;
  readonly seatNum: string;
}

export interface IGameScheduleDetail {
  readonly restaurants: IRestaurant[];
  readonly tips: ITips[];
  readonly siteUrl: string;
}
