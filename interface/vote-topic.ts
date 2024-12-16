export interface IBestTopic {
  readonly topic: string;
  readonly topicId: number;
  readonly createdAt: string;
  readonly isRecommended: boolean;
  readonly isAuthor: boolean;
  readonly recommendCount: number;
}

export interface ITopic {
  readonly topicId: number;
  readonly topic: string;
  readonly createdAt: string;
  readonly recommendCount: number;
  readonly isAuthor: boolean;
  readonly isRecommended: boolean;
}
