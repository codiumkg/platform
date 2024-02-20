import { QUERY_KEYS } from "../constants/queryKeys";
import { ISubject } from "../interfaces/subject";
import { getSubjectDetails, getSubjects } from "../requests/subjects";
import { useQuery } from "@tanstack/react-query";

interface QueryParams {
  params?: any;
  enabled?: boolean;
}

export const useSubjectsQuery = ({ params, enabled }: QueryParams) => {
  const { data, isFetching, isSuccess, isError, refetch } = useQuery<
    ISubject[]
  >({
    queryKey: [QUERY_KEYS.SUBJECTS, params?.search],
    queryFn: () => getSubjects(params?.search || ""),
    refetchOnWindowFocus: false,
    enabled,
  });

  return {
    data,
    isFetching,
    isSuccess,
    isError,
    refetch,
  };
};

export const useSubjectDetailsQuery = (
  id: number,
  { enabled }: QueryParams
) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => getSubjectDetails(id),
    queryKey: [QUERY_KEYS.SUBJECTS, id],
    enabled,
  });

  return {
    data,
    isLoading,
    isSuccess,
  };
};
