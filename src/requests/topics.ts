import { ITopic } from "../interfaces/topic";
import { API_TOPICS } from "../constants/apiConstants";
import axios from "axios";

export async function getTopics(search?: string): Promise<ITopic[]> {
  return axios
    .get(API_TOPICS, {
      params: {
        title: search,
      },
    })
    .then(({ data }) => data);
}

export async function getTopicDetails(id: number) {
  return axios.get(`${API_TOPICS}${id}`).then(({ data }) => data);
}
