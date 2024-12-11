export interface IBestTopic {
  readonly userTopicId: number;
  readonly topic: string;
  readonly createdAt: string;
  readonly voteCount: number;
  readonly isAuthor: boolean;
}

export interface ITopic {
  readonly topicId: number;
  readonly topic: string;
  readonly createdAt: string;
  readonly recommendCount: number;
  readonly isAuthor: boolean;
}
