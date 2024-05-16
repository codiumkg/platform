import axios from "axios";
import { ApiConstants } from "../../constants/apiConstants";
import { IUserData } from "../../interfaces/auth";
import { IPercentage } from "@/interfaces/common";

export async function getUserData(): Promise<IUserData> {
  return axios.get(ApiConstants.USERDATA).then(({ data }) => data);
}

export async function getUserProgress(): Promise<IPercentage> {
  return axios.get(ApiConstants.GET_USER_PROGRESS).then(({ data }) => data);
}
