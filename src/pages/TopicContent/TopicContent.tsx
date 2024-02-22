import PageLayout from "@/components/PageLayout/PageLayout";
import { TopicContentType } from "@/interfaces/common";
import { useTopicContent } from "@/queries/topics";
import { useNavigate, useParams } from "react-router";

function TopicContent() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data: topicContent, isLoading } = useTopicContent({ id: +id! });

  return (
    <PageLayout title="Задачи и лекции" onBackClick={() => navigate(-1)}>
      <div>
        {topicContent?.map((content) => {
          if (content.type === TopicContentType.LECTURE) {
            return <div key={content.id}>{content.lecture?.title}</div>;
          } else {
            return <div key={content.id}>{content.task?.text}</div>;
          }
        })}
      </div>
    </PageLayout>
  );
}

export default TopicContent;
