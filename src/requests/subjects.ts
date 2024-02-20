import axios from "axios";
import { API_SUBJECTS } from "../constants/apiConstants";
import { ISubject } from "../interfaces/subject";

export async function getSubjects(search?: string): Promise<ISubject[]> {
  return axios
    .get(API_SUBJECTS, {
      params: {
        title: search,
      },
    })
    .then(({ data }) => data);
}

export async function getSubjectDetails(id: number): Promise<ISubject> {
  return axios.get(`${API_SUBJECTS}${id}`).then(({ data }) => data);
}
