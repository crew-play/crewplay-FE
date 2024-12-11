export interface ICandidate {
  readonly candidateId: number;
  readonly example: string;
  readonly voteCount: number;
}

export interface IVote {
  readonly voteId: string;
  readonly startDate: string;
  readonly topic: string;
  readonly vote: ICandidate[];
}

export interface IThisWeekVoteResult {
  readonly voteId: string;
  readonly startDate: string;
  readonly topic: string;
  readonly vote: ICandidate[];
}

export interface ILatestVoteResult {
  readonly voteId: string;
  readonly startDate: string;
  readonly topic: string;
  readonly vote: ICandidate[];
}

export type TSort = "latest" | "popular";
