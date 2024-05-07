import { ICheckAnswer } from "@/interfaces/task";
import { checkAnswer } from "@/requests/tasks";
import { useMutation } from "@tanstack/react-query";

interface MutationParams {
  onSuccess?: (data: ICheckAnswer) => void;
}

export const useCheckAnswer = ({ onSuccess }: MutationParams) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (id: number) => checkAnswer(id),
    onSuccess,
  });

  return {
    mutate,
    isPending,
  };
};
