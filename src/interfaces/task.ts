import { ITopic } from "./topic";

export interface ITask {
  id: number;
  text: string;
  image?: string;
  tip?: string;
  topicId: number;
  topic: ITopic;
  createdAt: string;
  updatedAt: string;
}
