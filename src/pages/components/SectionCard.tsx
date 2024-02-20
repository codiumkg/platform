import { FaBook } from "react-icons/fa";
import { ISection } from "@/interfaces/types/section";

interface Props {
  section: ISection;
}

function SectionCard({ section }: Props) {
  return (
    <div className="flex flex-col p-4 rounded-xl bg-secondary border border-highlight">
      <div>
        <h1 className="text-lg font-bold">{section.title}</h1>
        <h3 className="text-sm font-light text-highlight-secondary">1 / 4</h3>
      </div>

      <div className="flex w-full justify-end mt-10">
        <div className="p-4 rounded-full bg-secondary-dark border border-highlight">
          <FaBook className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
