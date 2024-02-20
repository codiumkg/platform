import { HiOutlineMap } from "react-icons/hi2";

function TopicCardShimmer() {
  return (
    <div className="p-8 min-h-32 bg-secondary rounded-xl">
      <HiOutlineMap className="text-2xl mb-3 text-secondary-dark" />
      <div className="w-full bg-secondary-dark rounded-full h-4 mb-2" />
      <div className="w-12 bg-secondary-dark rounded-full h-3" />
    </div>
  );
}

export default TopicCardShimmer;
