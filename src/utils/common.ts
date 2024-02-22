import { StorageKeys } from "@/constants/storageKeys";

export function setLastViewedContentId(id: number) {
  return localStorage.setItem(
    StorageKeys.LAST_VISITED_CONTENT_ID,
    id.toString()
  );
}

export function getLastViewedContentId() {
  return localStorage.getItem(StorageKeys.LAST_VISITED_CONTENT_ID);
}
