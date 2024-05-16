import { Icons } from "@/components/Icons";
import { ApiConstants } from "@/constants/apiConstants";
import { useNotification } from "@/hooks/useNotification";
import { IAnswer, ITask } from "@/interfaces/task";
import { useCheckAnswer, useSaveCustomAnswer } from "@/queries/tasks";
import { Button, Textarea } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface Props {
  task?: ITask;
}

function TaskDetails({ task }: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswer | null>(
    task?.userAnswer?.answer || null
  );

  const [customAnswer, setCustomAnswer] = useState(
    task?.userAnswer?.text || ""
  );

  const { showSuccessNotification, showErrorNotification } = useNotification();

  const queryClient = useQueryClient();

  const isButtonDisabled = !task?.isUserAnswer
    ? !selectedAnswer
    : !customAnswer;

  const { mutate: checkAnswer, isPending } = useCheckAnswer({
    onSuccess: (data) => {
      if (data.isCorrect) {
        showSuccessNotification("Вы ответили верно!");
      }

      showErrorNotification("Ответ неверный");
    },
  });

  const { mutate: saveCustomAnswer, isPending: isSaving } = useSaveCustomAnswer(
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [ApiConstants.TOPIC_CONTENT, task?.id],
          refetchType: "all",
        });
        showSuccessNotification("Ответ успешно сохранен");
      },
    }
  );

  const getButtonStyles = (answer: IAnswer) => {
    if (selectedAnswer?.id === answer.id) {
      if (task?.isCompleted) {
        return selectedAnswer?.isCorrectAnswer
          ? "bg-secondary text-background"
          : "bg-danger";
      }

      return "bg-secondary text-background";
    }

    if (answer.isCorrectAnswer) return "bg-secondary text-background";
  };

  const handleOptionSelect = (answer: IAnswer) => {
    if (task?.isCompleted) return;

    setSelectedAnswer(answer);
  };

  const handleCheckAnswer = () => {
    if (!task?.isUserAnswer) {
      if (!selectedAnswer) return;

      checkAnswer(selectedAnswer.id);
    } else {
      saveCustomAnswer({ id: task.id, text: customAnswer });
    }
  };

  useEffect(() => {
    if (task?.userAnswer) {
      if (task.isUserAnswer) {
        setCustomAnswer(task.userAnswer.text);
      } else {
        setSelectedAnswer(task.userAnswer.answer);
      }
    }
  }, [task?.userAnswer, task?.isUserAnswer]);

  if (!task) return null;

  return (
    <div className="flex flex-col gap-4 items-center justify-center py-10">
      <div className="flex flex-col gap-4 lg:w-[45%]">
        {!!task.correctAnswerExplanation && task.isCompleted && (
          <div className="flex gap-2 p-4 text-secondary w-full bg-bgSecondary rounded-xl border-1 border-secondary">
            {<Icons.EXCLAMATION className="text-xl" />}{" "}
            {task.correctAnswerExplanation}
          </div>
        )}
        <div className="flex flex-col items-center p-6 bg-bgSecondary rounded-xl w-full">
          <div dangerouslySetInnerHTML={{ __html: task?.text || "" }} />
        </div>
        {!task.isUserAnswer ? (
          <div className="grid w-full gap-4 grid-cols-2">
            {task.answers.map((answer) => (
              <Button
                key={answer.id}
                onPress={() => handleOptionSelect(answer)}
                className={getButtonStyles(answer)}
                isDisabled={task?.isCompleted}
              >
                {answer.text}
              </Button>
            ))}
          </div>
        ) : (
          <div className="flex">
            <Textarea
              label="Ваш ответ"
              placeholder="Введите ваш ответ..."
              classNames={{ input: "min-h-32" }}
              isDisabled={task.isCompleted}
              value={customAnswer}
              onChange={(e) => setCustomAnswer(e.target.value)}
              autoFocus
            />
          </div>
        )}
        {!task.isCompleted && (
          <Button
            color="primary"
            isDisabled={isButtonDisabled}
            isLoading={isPending || isSaving}
            onPress={handleCheckAnswer}
          >
            Подтвердить
          </Button>
        )}
      </div>
    </div>
  );
}

export default TaskDetails;
