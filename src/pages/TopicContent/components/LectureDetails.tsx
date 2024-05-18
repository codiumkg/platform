import { ILecture } from "@/interfaces/lecture";

import "./Lecture.scss";
import { Button } from "@nextui-org/react";
import { useLectureComplete } from "@/queries/lectures";
import { useNotification } from "@/hooks/useNotification";
import { useQueryClient } from "@tanstack/react-query";
import { ApiConstants } from "@/constants/apiConstants";
import { Icons } from "@/components/Icons";
import python from "highlight.js/lib/languages/python";
import hljs from "highlight.js";
import { useEffect } from "react";

hljs.registerLanguage("python", python);
interface Props {
  lecture?: ILecture;
}

function LectureDetails({ lecture }: Props) {
  const queryClient = useQueryClient();

  const { showSuccessNotification, showErrorNotification } = useNotification();

  const { mutate: completeLecture } = useLectureComplete({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ApiConstants.LECTURES, lecture?.id],
        refetchType: "all",
      });
      showSuccessNotification("Лекция успешно завершена");
    },
    onError: () => {
      showErrorNotification("Не удалось сохранить прогресс лекции");
    },
  });

  useEffect(() => {
    const nodes = document.querySelectorAll("pre code");

    nodes.forEach((node) => hljs.highlightBlock(node as HTMLElement));
  }, []);

  if (!lecture) return null;

  return (
    <div className="flex flex-col w-full">
      {lecture.isCompleted && (
        <div className="flex items-center gap-2 mb-2 text-secondary font-light">
          <Icons.CHECKMARK_CIRCLE className="text-xl" />
          Лекция завершена
        </div>
      )}
      <h1 className="text-4xl md:text-5xl font-bold mb-3">{lecture?.title}</h1>
      <div
        className="lecture-content"
        dangerouslySetInnerHTML={{ __html: lecture?.content || "" }}
      ></div>

      {!lecture.isCompleted && (
        <div className="flex justify-center w-full mt-10">
          <Button color="primary" onPress={() => completeLecture(lecture.id)}>
            Завершить
          </Button>
        </div>
      )}
    </div>
  );
}

export default LectureDetails;
