import { ITask } from "@/interfaces/task";

interface Props {
  task?: ITask;
}

function TaskDetails({ task }: Props) {
  if (!task) return null;

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="flex flex-col items-center p-6 bg-secondary rounded-xl min-w-96">
        <div dangerouslySetInnerHTML={{ __html: task?.text || "" }} />
      </div>
    </div>
  );
}

export default TaskDetails;
