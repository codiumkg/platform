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
import { getLastVisitedContent, setLastVisitedContent } from "@/utils/common";
import { useLectureComplete } from "@/queries/lectures";
import { useNotification } from "@/hooks/useNotification";
import { Button } from "@nextui-org/react";
import { Icons } from "@/components/Icons";

function TopicContent() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [activeContent, setActiveContent] = useState<
    ITopicContent | undefined
  >();

  const { data: topicContent, isLoading } = useTopicContent({ id: +id! });

  const { showErrorNotification, showSuccessNotification } = useNotification();

  const { mutate: completeLecture } = useLectureComplete({
    onSuccess: () => {
      showSuccessNotification("Лекция успешно завершена");
    },
    onError: () => {
      showErrorNotification("Не удалось сохранить прогресс лекции");
    },
  });

  const isLastContent =
    (activeContent?.orderNumber ?? 1) >= (topicContent?.length ?? 0);

  useEffect(() => {
    const lastVisitedContent = getLastVisitedContent(+id!);

    if (lastVisitedContent) {
      setActiveContent(
        topicContent?.find(
          (content) => content.id === lastVisitedContent.contentId
        )
      );

      return;
    }

    setActiveContent(topicContent?.[0]);
  }, [topicContent, id]);

  const handleTopicContentClick = (content: ITopicContent) => {
    setActiveContent(content);
    setLastVisitedContent({ contentId: content.id, topicId: content.topicId });
  };

  const handleLectureComplete = () => {
    if (
      activeContent &&
      activeContent.type === TopicContentType.LECTURE &&
      activeContent.lecture &&
      !activeContent.lecture.isCompleted
    ) {
      completeLecture(activeContent.lecture.id);
    }
  };

  const handleNextClick = () => {
    if (!isLastContent && activeContent) {
      handleLectureComplete();

      setActiveContent(
        topicContent?.find(
          (content) => content.orderNumber === activeContent.orderNumber + 1
        )
      );
    }
  };

  return (
    <PageLayout title="Задачи и лекции" onBackClick={() => navigate(-1)}>
      <div
        className="flex justify-center w-full overflow-x-scroll max-h-30 py-8 gap-4"
        style={{ scrollbarWidth: "none" }}
      >
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
              isCompleted={
                content.lecture?.isCompleted ||
                content.task?.isCompleted ||
                false
              }
              isActive={content.id === activeContent?.id}
              type={content.type}
              contentNumber={content.orderNumber}
              onClick={() => handleTopicContentClick(content)}
            />
          ))}
      </div>

      <div className="w-full">
        {activeContent?.type === TopicContentType.LECTURE ? (
          <LectureDetails lecture={activeContent?.lecture} />
        ) : (
          <TaskDetails task={activeContent?.task} />
        )}
      </div>

      {!isLastContent && (
        <div className="flex justify-center p-10">
          <Button
            onPress={handleNextClick}
            startContent={<Icons.ARROW_FORWARD />}
            color="primary"
            variant="light"
            size="lg"
          >
            Дальше
          </Button>
        </div>
      )}
    </PageLayout>
  );
}

export default TopicContent;
