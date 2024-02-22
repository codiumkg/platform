import { BiTask, BiSolidBook } from "react-icons/bi";
import cn from "classnames";

import { TopicContentType } from "@/interfaces/common";

interface Props {
  isActive: boolean;
  type: TopicContentType;
  contentNumber: number;
  onClick: () => void;
}

const ICON_BY_TYPE = {
  LECTURE: <BiSolidBook />,
  TASK: <BiTask />,
};

function TopicContentCard({ type, contentNumber, isActive, onClick }: Props) {
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <div
        className={cn(
          "p-4 rounded-full bg-secondary border hover:border-accent duration-300",
          isActive ? "border-accent" : "border-transparent"
        )}
      >
        <div
          className={cn(
            "text-xl",
            isActive ? "text-accent" : "text-highlight-secondary"
          )}
        >
          {ICON_BY_TYPE[type]}
        </div>
      </div>
      <div
        className={cn(
          "mt-2 text-sm font-thin",
          isActive ? "text-accent" : "text-highlight-secondary"
        )}
      >
        {contentNumber}
      </div>
    </div>
  );
}

export default TopicContentCard;
