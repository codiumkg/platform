import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

function TopicContentCardShimmer() {
  return (
    <div className="p-4 rounded-full bg-bgSecondary">
      <div className="text-xl text-highlight">
        <LoadingSpinner color="var(--highlight)" />
      </div>
    </div>
  );
}

export default TopicContentCardShimmer;
