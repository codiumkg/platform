import { ApiConstants } from "@/constants/apiConstants";
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
    queryKey: [ApiConstants.SUBJECTS, params?.search],
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
    queryKey: [ApiConstants.SUBJECTS, id],
    enabled,
  });

  return {
    data,
    isLoading,
    isSuccess,
  };
};
