import { ITopic, ITopicContent } from "../interfaces/topic";
import { ApiConstants } from "../constants/apiConstants";
import axios from "axios";

export async function getTopics(
  search?: string,
  sectionId?: number
): Promise<ITopic[]> {
  return axios
    .get(ApiConstants.TOPICS, {
      params: {
        title: search,
        sectionId: sectionId,
      },
    })
    .then(({ data }) => data);
}

export async function getTopicDetails(id: number) {
  return axios.get(`${ApiConstants.TOPICS}${id}`).then(({ data }) => data);
}

export async function getTopicContent(id: number): Promise<ITopicContent[]> {
  return axios
    .get(`${ApiConstants.TOPICS}${id}/get-content/`)
    .then(({ data }) => data);
}
