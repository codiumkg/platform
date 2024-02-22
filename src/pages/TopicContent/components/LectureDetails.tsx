import { ILecture } from "@/interfaces/lecture";

import "./Lecture.scss";

interface Props {
  lecture?: ILecture;
}

function LectureDetails({ lecture }: Props) {
  return (
    <div className="p-8 bg-secondary rounded-xl">
      <h1 className="text-3xl font-bold mb-6">{lecture?.title}</h1>
      <div
        className="lecture-content"
        dangerouslySetInnerHTML={{ __html: lecture?.content || "" }}
      ></div>
    </div>
  );
}

export default LectureDetails;
