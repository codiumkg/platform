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
import { getLastViewedContentId, setLastViewedContentId } from "@/utils/common";

function TopicContent() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [activeContent, setActiveContent] = useState<
    ITopicContent | undefined
  >();

  const { data: topicContent, isLoading } = useTopicContent({ id: +id! });

  useEffect(() => {
    const lastViewedContentId = getLastViewedContentId();

    if (lastViewedContentId) {
      const lastViewedContent = topicContent?.find(
        (content) => content.id === +lastViewedContentId
      );

      setActiveContent(lastViewedContent);

      return;
    }

    setActiveContent(topicContent?.[0]);
  }, [topicContent]);

  const handleTopicContentClick = (content: ITopicContent) => {
    setActiveContent(content);
    setLastViewedContentId(content.id);
  };

  return (
    <PageLayout title="Задачи и лекции" onBackClick={() => navigate(-1)}>
      <div className="flex w-full overflow-x-scroll max-h-30 p-8 gap-4">
        {isLoading && (
          <>
            {Array.from(Array(12)).map((_, index) => (
              <TopicContentCardShimmer key={index} />
            ))}
          </>
        )}
        {!isLoading &&
          topicContent?.map((content) => (
            <TopicContentCard
              key={content.id}
              isActive={content.id === activeContent?.id}
              type={content.type}
              contentNumber={content.orderNumber}
              onClick={() => handleTopicContentClick(content)}
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
