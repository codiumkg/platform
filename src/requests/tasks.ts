import { ApiConstants } from "@/constants/apiConstants";
import { ICheckAnswer } from "@/interfaces/task";
import axios from "axios";

export const checkAnswer = async (answerId: number): Promise<ICheckAnswer> => {
  return axios
    .get(ApiConstants.CHECK_ANSWER(answerId))
    .then(({ data }) => data);
};
