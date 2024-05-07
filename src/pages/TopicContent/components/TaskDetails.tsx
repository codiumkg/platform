import { Icons } from "@/components/Icons";
import { useNotification } from "@/hooks/useNotification";
import { IAnswer, ITask } from "@/interfaces/task";
import { useCheckAnswer } from "@/queries/tasks";
import { Button } from "@nextui-org/react";
import { useState } from "react";

interface Props {
  task?: ITask;
}

function TaskDetails({ task }: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswer | null>(null);

  const { showSuccessNotification, showErrorNotification } = useNotification();

  const { mutate: checkAnswer, isPending } = useCheckAnswer({
    onSuccess: (data) => {
      if (data.isCorrect) {
        showSuccessNotification("Вы ответили верно!");
      }

      showErrorNotification("Ответ неверный");
    },
  });

  const handleCheckAnswer = () => {
    if (!selectedAnswer) return;

    checkAnswer(selectedAnswer.id);
  };

  if (!task) return null;

  return (
    <div className="flex flex-col gap-4 items-center justify-center py-10">
      <div className="flex flex-col gap-4">
        {!!task.correctAnswerExplanation && task.isCompleted && (
          <div className="flex gap-2 p-4 text-secondary w-full bg-bgSecondary rounded-xl border-1 border-secondary">
            {<Icons.EXCLAMATION className="text-xl" />}{" "}
            {task.correctAnswerExplanation}
          </div>
        )}
        <div className="flex flex-col items-center p-6 bg-bgSecondary rounded-xl w-full">
          <div dangerouslySetInnerHTML={{ __html: task?.text || "" }} />
        </div>
        <div className="grid w-full gap-4 grid-cols-2">
          {task.answers.map((answer) => (
            <Button
              key={answer.id}
              onPress={() => setSelectedAnswer(answer)}
              className={
                selectedAnswer === answer ? "bg-secondary text-background" : ""
              }
            >
              {answer.text}
            </Button>
          ))}
        </div>
        {!task.isCompleted && (
          <Button
            color="primary"
            isDisabled={!selectedAnswer}
            isLoading={isPending}
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
