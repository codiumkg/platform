import { StorageKeys } from "@/constants/storageKeys";
import { ILastVisitedContent } from "@/interfaces/common";

export function setLastVisitedContent(content: ILastVisitedContent) {
  const allContent = getAllLastVisitedContents();
  const existingContent = getLastVisitedContent(content.topicId);

  if (!allContent) {
    localStorage.setItem(
      StorageKeys.LAST_VISITED_CONTENT,
      JSON.stringify([content])
    );
    return;
  }

  if (existingContent) {
    allContent[
      allContent.findIndex((el) => el.topicId === content.topicId)
    ].contentId = content.contentId;
  } else {
    allContent.push(content);
  }

  localStorage.setItem(
    StorageKeys.LAST_VISITED_CONTENT,
    JSON.stringify(allContent || [])
  );
}

export function getAllLastVisitedContents() {
  const content = localStorage.getItem(StorageKeys.LAST_VISITED_CONTENT);

  return (JSON.parse(content!) as ILastVisitedContent[]) || null;
}

export function getLastVisitedContent(
  topicId: number
): ILastVisitedContent | null {
  const lastVisitedContent = localStorage.getItem(
    StorageKeys.LAST_VISITED_CONTENT
  );

  if (lastVisitedContent) {
    const content = JSON.parse(lastVisitedContent) as ILastVisitedContent[];

    return content.find((content) => content.topicId === topicId) || null;
  }

  return null;
}
