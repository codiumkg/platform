import { IChangePassword, IUserData } from "@/interfaces/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserData, getUserProgress } from "../requests/auth/userdata";
import { ApiConstants } from "@/constants/apiConstants";
import { useLocation, useNavigate } from "react-router";
import { ApiError } from "@/requests/request";
import { ROUTES } from "@/constants/routes";
import { useNotification } from "@/hooks/useNotification";
import { changePassword } from "@/requests/auth/changePassword";

interface Params {
  enabled?: boolean;
}

export const useUserData = (params?: Params) => {
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
    enabled: params?.enabled,
  });

  return {
    data,
    isFetching,
    isSuccess,
    isError,
  };
};

export const useUserProgress = () => {
  const { data, isLoading } = useQuery({
    queryFn: getUserProgress,
    queryKey: [ApiConstants.GET_USER_PROGRESS],
  });

  return {
    data,
    isLoading,
  };
};

export const useChangePassword = (params?: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (data: IChangePassword) => changePassword(data),
    onSuccess: params?.onSuccess,
    onError: params?.onError,
  });

  return {
    mutate,
    isPending,
  };
};
