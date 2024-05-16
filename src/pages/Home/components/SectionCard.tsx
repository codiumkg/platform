import { FaBook } from "react-icons/fa";
import { ISection } from "@/interfaces/section";

interface Props {
  section: ISection;
  onClick?: () => void;
}

function SectionCard({ section, onClick }: Props) {
  return (
    <div
      className="flex flex-col p-4 rounded-xl bg-bgSecondary border border-highlight hover:border-highlight-secondary duration-300"
      onClick={onClick}
    >
      <div>
        <h1 className="text-lg font-bold">{section.title}</h1>
        <h3 className="text-sm font-light text-highlight-secondary">
          {section.progress.completed} / {section.progress.toComplete}{" "}
        </h3>
      </div>

      <div className="flex w-full justify-end mt-10">
        <div className="p-4 rounded-full bg-secondary-dark border border-highlight">
          <FaBook className="text-2xl text-highlight-secondary" />
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
