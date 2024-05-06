import { IUserData } from "@/interfaces/auth";
import { useQuery } from "@tanstack/react-query";
import getUserData from "../requests/auth/getUserData";
import { ApiConstants } from "@/constants/apiConstants";

export const useUserData = () => {
  const { data, isFetching, isSuccess, isError } = useQuery<IUserData>({
    queryKey: [ApiConstants.USERDATA],
    queryFn: getUserData,
  });

  return {
    data,
    isFetching,
    isSuccess,
    isError,
  };
};
