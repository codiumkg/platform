import { ApiConstants } from "@/constants/apiConstants";
import { IChangePassword } from "@/interfaces/auth";
import axios from "axios";

export async function changePassword(data: IChangePassword) {
  return axios
    .post(ApiConstants.CHANGE_PASSWORD, data)
    .then(({ data }) => data);
}
