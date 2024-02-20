import axios from "axios";
import { API_GROUPS } from "../constants/apiConstants";
import { IGroup } from "@/interfaces/group";

export async function getGroups(): Promise<IGroup[]> {
  return axios.get(API_GROUPS).then(({ data }) => data);
}

export async function getGroupDetails(id: number) {
  return axios.get(`${API_GROUPS}${id}`).then(({ data }) => data);
}
