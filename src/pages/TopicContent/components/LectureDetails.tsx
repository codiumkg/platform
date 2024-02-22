import { ILecture } from "@/interfaces/lecture";

import "./Lecture.scss";

interface Props {
  lecture?: ILecture;
}

function LectureDetails({ lecture }: Props) {
  if (!lecture) return null;

  return (
    <div className="p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{lecture?.title}</h1>
      <div
        className="lecture-content"
        dangerouslySetInnerHTML={{ __html: lecture?.content || "" }}
      ></div>
    </div>
  );
}

export default LectureDetails;
