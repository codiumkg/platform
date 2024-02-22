import PageLayout from "@/components/PageLayout/PageLayout";
import { useTopicContent } from "@/queries/topics";
import { useNavigate, useParams } from "react-router";
import TopicContentCard from "./components/TopicContentCard";
import TopicContentCardShimmer from "./components/TopicContentCardShimmer";
import { useEffect, useState } from "react";
import { ITopicContent } from "@/interfaces/topic";
import { TopicContentType } from "@/interfaces/common";
import LectureDetails from "./components/LectureDetails";
import TaskDetails from "./components/TaskDetails";

function TopicContent() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [activeContent, setActiveContent] = useState<
    ITopicContent | undefined
  >();

  const { data: topicContent, isLoading } = useTopicContent({ id: +id! });

  useEffect(() => {
    setActiveContent(topicContent?.[0]);
  }, [topicContent]);

  return (
    <PageLayout title="Задачи и лекции" onBackClick={() => navigate(-1)}>
      <div className="flex w-full overflow-x-scroll max-h-30 p-8 gap-4">
        {isLoading && (
          <>
            {Array.from(Array(12)).map(() => (
              <TopicContentCardShimmer />
            ))}
          </>
        )}
        {!isLoading &&
          topicContent?.map((content) => (
            <TopicContentCard
              isActive={content.id === activeContent?.id}
              type={content.type}
              contentNumber={content.orderNumber}
              onClick={() => setActiveContent(content)}
            />
          ))}
      </div>

      <div>
        {activeContent?.type === TopicContentType.LECTURE ? (
          <LectureDetails lecture={activeContent?.lecture} />
        ) : (
          <TaskDetails task={activeContent?.task} />
        )}
      </div>
    </PageLayout>
  );
}

export default TopicContent;
