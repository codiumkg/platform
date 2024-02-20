import { useSectionDetailsQuery } from "@/queries/sections";
import { useTopicsQuery } from "@/queries/topics";
import { useParams } from "react-router";
import TopicCard from "./components/TopicCard";
import TopicCardShimmer from "./components/TopicCardShimmer";

function SectionDetails() {
  const { id } = useParams();

  const { data: section, isPending } = useSectionDetailsQuery(+id!, {});

  const { data: topics, isLoading } = useTopicsQuery({
    params: { sectionId: id },
    enabled: !!id || !!section?.id,
  });

  return (
    <div className="grid grid-cols-2 gap-8 mt-8">
      {isLoading && (
        <>
          <TopicCardShimmer />
          <TopicCardShimmer />
          <TopicCardShimmer />
          <TopicCardShimmer />
          <TopicCardShimmer />
          <TopicCardShimmer />
          <TopicCardShimmer />
          <TopicCardShimmer />
        </>
      )}
      {(!isLoading || !isPending) &&
        topics?.map((topic) => <TopicCard key={topic.id} topic={topic} />)}
    </div>
  );
}

export default SectionDetails;
