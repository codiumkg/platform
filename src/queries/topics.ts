import { QUERY_KEYS } from "@/constants/queryKeys";
import { ITopic } from "@/interfaces/topic";
import { getTopicDetails, getTopics } from "@/requests/topics";
import { useQuery } from "@tanstack/react-query";

interface QueryParams {
  params?: any;
  enabled?: boolean;
}

export const useTopicsQuery = ({ params, enabled }: QueryParams) => {
  const { data, isLoading, refetch } = useQuery({
    queryFn: () => getTopics(params?.search || "", params?.sectionId),
    queryKey: [QUERY_KEYS.TOPICS, params?.title, params?.sectionId],
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
    queryKey: [QUERY_KEYS.TOPICS, id],
    enabled,
  });

  return {
    data,
    isLoading,
    isSuccess,
  };
};
