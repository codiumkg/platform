import axios from "axios";
import { ApiConstants } from "../../constants/apiConstants";
import { IUserData } from "../../interfaces/auth";

export default async function getUserData(): Promise<IUserData> {
  return axios.get(ApiConstants.USERDATA).then(({ data }) => data);
}
