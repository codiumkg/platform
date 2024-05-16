import { IProgress } from "./common";
import { ISubject } from "./subject";

export interface ISection {
  id: number;
  title: string;
  progress: IProgress;
  createdAt: string;
  updatedAt: string;
  subjectId: number;
  subject: ISubject;
}
