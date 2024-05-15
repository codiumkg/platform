import { IUserData } from "@/interfaces/auth";
import { useQuery } from "@tanstack/react-query";
import getUserData from "../requests/auth/getUserData";
import { ApiConstants } from "@/constants/apiConstants";
import { useLocation, useNavigate } from "react-router";
import { ApiError } from "@/requests/request";
import { ROUTES } from "@/constants/routes";
import { useNotification } from "@/hooks/useNotification";

export const useUserData = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { showErrorNotification } = useNotification();

  const { data, isFetching, isSuccess, isError } = useQuery<IUserData>({
    queryKey: [ApiConstants.USERDATA],
    queryFn: async () => {
      try {
        return await getUserData();
      } catch (e) {
        if ((e as ApiError).statusCode === 401 && !pathname.includes("login")) {
          navigate(ROUTES.LOGIN);
          showErrorNotification("Пожалуйста авторизуйтесь");
        }

        return Promise.reject();
      }
    },
  });

  return {
    data,
    isFetching,
    isSuccess,
    isError,
  };
};
