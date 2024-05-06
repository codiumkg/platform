import { IAnswer, ITask } from "@/interfaces/task";
import { Button } from "@nextui-org/react";
import { useState } from "react";

interface Props {
  task?: ITask;
}

function TaskDetails({ task }: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswer | null>(null);

  if (!task) return null;

  return (
    <div className="flex flex-col gap-4 items-center justify-center p-10 min-w-96">
      <div className="flex flex-col items-center p-6 bg-bgSecondary rounded-xl w-full">
        <div dangerouslySetInnerHTML={{ __html: task?.text || "" }} />
      </div>
      <div className="grid w-full gap-4 grid-cols-2">
        {task.answers.map((answer) => (
          <Button
            onPress={() => setSelectedAnswer(answer)}
            className={
              selectedAnswer === answer ? "bg-secondary text-background" : ""
            }
          >
            {answer.text}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default TaskDetails;
