import axios from "axios";
import { ApiConstants } from "../constants/apiConstants";
import { ISubject } from "../interfaces/subject";

export async function getSubjects(search?: string): Promise<ISubject[]> {
  return axios
    .get(ApiConstants.SUBJECTS, {
      params: {
        title: search,
      },
    })
    .then(({ data }) => data);
}

export async function getSubjectDetails(id: number): Promise<ISubject> {
  return axios.get(`${ApiConstants.SUBJECTS}${id}`).then(({ data }) => data);
}
