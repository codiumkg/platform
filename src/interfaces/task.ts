import { ITopic } from "./topic";

export interface ITask {
  id: number;
  text: string;
  image?: string;
  tip?: string;
  topicId: number;
  topic: ITopic;
  isCompleted: boolean;
  correctAnswerExplanation: string | null;
  userAnswer: IUserAnswer | null;
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

export interface ICheckAnswer {
  isCorrect: boolean;
  correctAnswerExplanation: string;
}

export interface IUserAnswer {
  answer: IAnswer;
  userId: number;
  text: string;
  taskId: number;
}
