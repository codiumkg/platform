import { ApiConstants } from "@/constants/apiConstants";
import { ITopic, ITopicContent } from "@/interfaces/topic";
import { getTopicContent, getTopicDetails, getTopics } from "@/requests/topics";
import { useQuery } from "@tanstack/react-query";

interface QueryParams {
  params?: any;
  enabled?: boolean;
  id?: number;
}

export const useTopicsQuery = ({ params, enabled }: QueryParams) => {
  const { data, isLoading, refetch } = useQuery({
    queryFn: () => getTopics(params?.search || "", params?.sectionId),
    queryKey: [ApiConstants.TOPICS, params?.title, params?.sectionId],
    refetchOnWindowFocus: false,
    enabled,
  });

  return {
    data,
    isLoading,
    refetch,
  };
};

export const useTopicDetailsQuery = (id: number, { enabled }: QueryParams) => {
  const { data, isLoading, isSuccess } = useQuery<ITopic>({
    queryFn: () => getTopicDetails(id),
    queryKey: [ApiConstants.TOPICS, id],
    enabled,
  });

  return {
    data,
    isLoading,
    isSuccess,
  };
};

export const useTopicContent = ({ id }: QueryParams) => {
  const { data, isLoading } = useQuery<ITopicContent[]>({
    queryFn: () => getTopicContent(id!),
    queryKey: [ApiConstants.TOPIC_CONTENT(id!)],
  });

  return {
    data,
    isLoading,
  };
};
