import { ISection } from "@/interfaces/section";
import { ApiConstants } from "../constants/apiConstants";
import axios from "axios";

export async function getSections(search?: string): Promise<ISection[]> {
  return axios
    .get(ApiConstants.SECTIONS, {
      params: {
        title: search,
      },
    })
    .then(({ data }) => data);
}

export async function getSectionDetails(id: number): Promise<ISection> {
  return axios.get(`${ApiConstants.SECTIONS}${id}`).then(({ data }) => data);
}
