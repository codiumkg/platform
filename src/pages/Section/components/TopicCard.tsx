import { ITopic } from "@/interfaces/topic";
import { HiOutlineMap } from "react-icons/hi2";

interface Props {
  topic: ITopic;
}

function TopicCard({ topic }: Props) {
  return (
    <div className="p-8 min-h-32 bg-secondary border border-highlight hover:border-highlight-secondary duration-200 rounded-xl">
      <HiOutlineMap className="text-2xl mb-3" />
      <h1 className="font-bold">{topic.title}</h1>
      <h3 className="text-sm text-highlight-secondary font-thin">
        {topic.section.title}
      </h3>
    </div>
  );
}

export default TopicCard;
