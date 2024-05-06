import { ITopic } from "./topic";

export interface ITask {
  id: number;
  text: string;
  image?: string;
  tip?: string;
  topicId: number;
  topic: ITopic;
  answers: IAnswer[];
  createdAt: string;
  updatedAt: string;
}

export interface IAnswer {
  id: number;
  taskId: number;
  text: string;
  isCorrectAnswer: boolean;
}
