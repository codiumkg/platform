import axios from "axios";
import { ApiConstants } from "../../constants/apiConstants";
import { ILogin, ILoginResponse } from "../../interfaces/auth";

export default function loginRequest(data: ILogin): Promise<ILoginResponse> {
  return axios.post(ApiConstants.LOGIN, data).then(({ data }) => data);
}
