import { ILecture } from "../interfaces/lecture";
import { ApiConstants } from "../constants/apiConstants";
import axios from "axios";

export async function getLectures(): Promise<ILecture[]> {
  return axios.get(ApiConstants.LECTURES).then(({ data }) => data);
}

export async function getLectureDetails(id: number): Promise<ILecture> {
  return axios.get(`${ApiConstants.LECTURES}${id}`).then(({ data }) => data);
}

export async function completeLecture(id: number) {
  return axios
    .post(`${ApiConstants.LECTURES}${id}/complete`)
    .then(({ data }) => data);
}
