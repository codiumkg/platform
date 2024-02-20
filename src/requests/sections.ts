import { ISection } from "@/interfaces/section";
import { API_SECTIONS } from "../constants/apiConstants";
import axios from "axios";

export async function getSections(search?: string): Promise<ISection[]> {
  return axios
    .get(API_SECTIONS, {
      params: {
        title: search,
      },
    })
    .then(({ data }) => data);
}

export async function getSectionDetails(id: number): Promise<ISection> {
  return axios.get(`${API_SECTIONS}${id}`).then(({ data }) => data);
}
