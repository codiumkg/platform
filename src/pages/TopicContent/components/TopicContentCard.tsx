import { BiTask, BiSolidBook } from "react-icons/bi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import cn from "classnames";

import { TopicContentType } from "@/interfaces/common";

interface Props {
  isActive: boolean;
  isCompleted: boolean;
  type: TopicContentType;
  contentNumber: number;
  onClick: () => void;
}

const ICON_BY_TYPE = {
  LECTURE: <BiSolidBook />,
  TASK: <BiTask />,
};

function TopicContentCard({
  type,
  contentNumber,
  isActive,
  isCompleted,
  onClick,
}: Props) {
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <div
        className={cn(
          "p-4 rounded-full bg-bgSecondary border hover:border-primary duration-300 relative",
          isActive ? "border-primary" : "border-transparent"
        )}
      >
        <div
          className={cn(
            "text-xl relative",
            isCompleted ? (!isActive ? "text-secondary" : "") : "",
            isActive ? "text-primary" : "text-highlight"
          )}
        >
          {!isCompleted ? ICON_BY_TYPE[type] : <IoMdCheckmarkCircle />}
        </div>
      </div>
      <div
        className={cn(
          "mt-2 text-sm font-thin",
          isActive ? "text-primary" : isCompleted ? "text-secondary" : ""
        )}
      >
        {contentNumber}
      </div>
    </div>
  );
}

export default TopicContentCard;
