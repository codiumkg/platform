import axios from "axios";
import { ApiConstants } from "../constants/apiConstants";
import { IGroup } from "@/interfaces/group";

export async function getGroups(): Promise<IGroup[]> {
  return axios.get(ApiConstants.GROUPS).then(({ data }) => data);
}

export async function getGroupDetails(id: number) {
  return axios.get(`${ApiConstants.GROUPS}${id}`).then(({ data }) => data);
}
