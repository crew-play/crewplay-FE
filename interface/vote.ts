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

export interface ILatestVoteResult {
  readonly voteId: string;
  readonly startDate: string;
  readonly topic: string;
  readonly vote: ICandidate[];
  readonly endDate: string;
  readonly myVote: number;
  readonly totalVote: number;
}

export interface IThisWeekVote {
  readonly voteId: string;
  readonly startDate: string;
  readonly topic: string;
  readonly vote: ICandidate[];
}

export interface IThisWeekVoteResult extends IThisWeekVote {
  readonly resultType: "VOTE" | "RESULT";
  readonly endDate: string;
  readonly totalVote: number;
  readonly myVote: number;
}

export interface IHasUserVoted {
  readonly voted: boolean;
}

export interface IVoteRequestData {
  readonly voteId: string;
  readonly candidateId: number;
}

export type TSort = "UP_TO_DATE" | "PARTICIPANT";
