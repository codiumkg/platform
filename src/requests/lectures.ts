import { ILecture } from "../interfaces/lecture";
import { API_LECTURES } from "../constants/apiConstants";
import axios from "axios";

export async function getLectures(): Promise<ILecture[]> {
  return axios.get(API_LECTURES).then(({ data }) => data);
}

export async function getLectureDetails(id: number): Promise<ILecture> {
  return axios.get(`${API_LECTURES}${id}`).then(({ data }) => data);
}
