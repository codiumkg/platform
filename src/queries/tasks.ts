import { ICheckAnswer } from "@/interfaces/task";
import { checkAnswer, saveCustomAnswer } from "@/requests/tasks";
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

export const useSaveCustomAnswer = (params?: { onSuccess?: () => void }) => {
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, text }: { id: number; text: string }) =>
      saveCustomAnswer(id, text),
    onSuccess: params?.onSuccess,
  });

  return {
    mutate,
    isPending,
  };
};
