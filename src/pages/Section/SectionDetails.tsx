import { useSectionDetailsQuery } from "@/queries/sections";
import { useTopicsQuery } from "@/queries/topics";
import { useNavigate, useParams } from "react-router";
import TopicCard from "./components/TopicCard";
import TopicCardShimmer from "./components/TopicCardShimmer";
import NoDataPlaceholder from "@/components/NoDataPlaceholder/NoDataPlaceholder";
import PageLayout from "@/components/PageLayout/PageLayout";
import { ROUTES } from "@/constants/routes";

function SectionDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data: section, isPending } = useSectionDetailsQuery(+id!, {});

  const { data: topics, isLoading } = useTopicsQuery({
    params: { sectionId: id },
    enabled: !!id || !!section?.id,
  });

  return (
    <div className="pt-10">
      <PageLayout title="Топики" onBackClick={() => navigate(ROUTES.HOME)}>
        {!isLoading && !topics?.length && (
          <div className="flex flex-col justify-center items-center w-full min-h-screen">
            <NoDataPlaceholder />
          </div>
        )}
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
      </PageLayout>
    </div>
  );
}

export default SectionDetails;
