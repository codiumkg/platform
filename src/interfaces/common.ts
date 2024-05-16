export interface IOption {
  label?: string;
  value?: string;
}

export enum TopicContentType {
  TASK = "TASK",
  LECTURE = "LECTURE",
}

export interface IProgress {
  completed: number;
  toComplete: number;
}

export interface IPercentage {
  percent: number;
}
