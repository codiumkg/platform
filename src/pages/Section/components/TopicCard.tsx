import { ITopic } from "@/interfaces/topic";
import { HiOutlineMap } from "react-icons/hi2";

interface Props {
  topic: ITopic;
  onClick?: () => void;
}

function TopicCard({ topic, onClick }: Props) {
  return (
    <div
      className="p-8 min-h-32 bg-bgSecondary border border-highlight hover:border-highlight-secondary duration-200 rounded-xl"
      onClick={onClick}
    >
      <HiOutlineMap className="text-2xl mb-3" />
      <h1 className="font-bold">{topic.title}</h1>
      <h3 className="text-sm text-default-900 font-thin">
        {topic.section.title}
      </h3>
    </div>
  );
}

export default TopicCard;
