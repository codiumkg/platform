import { TopicContentType } from "./common";
import { ILecture } from "./lecture";
import { ISection } from "./section";
import { ITask } from "./task";

export interface ITopic {
  id: number;
  title: string;
  sectionId: number;
  section: ISection;
  createdAt: string;
  updatedAt: string;
}

export interface ITopicContent {
  id: number;
  type: TopicContentType;
  orderNumber: number;
  topicId: number;
  topic: ITopic;
  taskId?: number;
  lectureId?: number;
  lecture?: ILecture;
  task?: ITask;
}
