import { ISection } from "@/interfaces/section";
import SectionCard from "./SectionCard";

const SECTIONS: ISection[] = [
  {
    id: 1,
    title: "Основы",
    subjectId: 1,
    subject: {
      id: 1,
      title: "PYTHON",
      createdAt: "",
      updatedAt: "",
    },
    createdAt: "",
    updatedAt: "",
  },
  {
    id: 2,
    title: "Профи",
    subjectId: 1,
    subject: {
      id: 1,
      title: "PYTHON",
      createdAt: "",
      updatedAt: "",
    },
    createdAt: "",
    updatedAt: "",
  },
  {
    id: 3,
    title: "Senior",
    subjectId: 1,
    subject: {
      id: 1,
      title: "PYTHON",
      createdAt: "",
      updatedAt: "",
    },
    createdAt: "",
    updatedAt: "",
  },
];

function Sections() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {SECTIONS.map((section, index) => (
        <SectionCard key={index} section={section} />
      ))}
    </div>
  );
}

export default Sections;
