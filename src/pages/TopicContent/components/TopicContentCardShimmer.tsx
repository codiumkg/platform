import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

function TopicContentCardShimmer() {
  return (
    <div className="p-4 rounded-full bg-secondary">
      <div className="text-xl text-highlight-secondary">
        <LoadingSpinner color="var(--highlight)" />
      </div>
    </div>
  );
}

export default TopicContentCardShimmer;
