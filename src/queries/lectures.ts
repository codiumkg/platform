import { QUERY_KEYS } from "@/constants/queryKeys";
import { ILecture } from "@/interfaces/lecture";
import { getLectureDetails, getLectures } from "@/requests/lectures";
import { useQuery } from "@tanstack/react-query";

export const useLecturesQuery = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => getLectures(),
    queryKey: [QUERY_KEYS.LECTURES],
    refetchOnWindowFocus: false,
    staleTime: 30 * 1000,
  });

  return {
    data,
    isLoading,
  };
};

interface QueryParams {
  enabled?: boolean;
}

export const useLectureDetailsQuery = (
  id: number,
  { enabled }: QueryParams
) => {
  const { data, isLoading, isSuccess } = useQuery<ILecture>({
    queryFn: () => getLectureDetails(id),
    queryKey: [QUERY_KEYS.LECTURES, id],
    enabled,
  });

  return {
    data,
    isLoading,
    isSuccess,
  };
};
