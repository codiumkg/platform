import { ApiConstants } from "@/constants/apiConstants";
import { ILecture } from "@/interfaces/lecture";
import {
  completeLecture,
  getLectureDetails,
  getLectures,
} from "@/requests/lectures";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useLecturesQuery = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => getLectures(),
    queryKey: [ApiConstants.LECTURES],
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
    queryKey: [ApiConstants.LECTURES, id],
    enabled,
  });

  return {
    data,
    isLoading,
    isSuccess,
  };
};

interface MutationParams {
  onSuccess?: () => void;
  onError?: () => void;
}

export const useLectureComplete = ({ onSuccess, onError }: MutationParams) => {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (id: number) => completeLecture(id),
    onSuccess,
    onError,
  });

  return {
    mutate,
    isPending,
    isSuccess,
  };
};
