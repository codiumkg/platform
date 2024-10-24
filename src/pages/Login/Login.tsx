import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@nextui-org/react";
import CustomInput from "@/components/CustomInput";
import { useNotification } from "@/hooks/useNotification";
import { ILogin, Role } from "@/interfaces/auth";
import loginRequest from "@/requests/auth/login";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

import useAuth from "@/hooks/useAuth";

const loginValidationSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Логин должен быть не менее 3 символов" })
    .max(32, { message: "Логин не должен быть более 32 символов" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не менее 6 символов" }),
});

type LoginSchemaType = z.infer<typeof loginValidationSchema>;

const initialValues = {
  username: "",
  password: "",
};

export default function Login() {
  const { checkIsLoggedIn, setTokenToStorage } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const { showErrorNotification, showSuccessNotification } = useNotification();

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = checkIsLoggedIn();

    if (isAuthenticated) {
      navigate(ROUTES.HOME, { replace: true });
    }
  }, [checkIsLoggedIn, navigate]);

  const loginForm = useForm<LoginSchemaType>({
    defaultValues: initialValues,
    resolver: zodResolver(loginValidationSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data: ILogin) => {
    setIsLoading(true);
    loginRequest(data)
      .then((res) => {
        if (res.user.role !== Role.STUDENT) {
          showErrorNotification("Нет доступа к данному ресурсу");

          return;
        }

        setTokenToStorage(res.token);

        navigate(ROUTES.HOME, { replace: true });
        showSuccessNotification();
      })
      .catch(() => {
        showErrorNotification("Неверный логин или пароль");
      })
      .finally(() => setIsLoading(false));
  };

  const { isDirty, isValid } = loginForm.formState;

  console.log(loginForm.formState.errors);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-4">
        <h1 className="text-2xl">
          Вход в <span className="text-primary font-bold">Codium Platform</span>
        </h1>
      </div>
      <div className="w-[280px] md:w-[360px]">
        <form
          onSubmit={loginForm.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <Controller
            name="username"
            control={loginForm.control}
            render={({ field }) => (
              <CustomInput
                label="Логин"
                placeholder="Введите логин..."
                errorMessage={loginForm.formState.errors.username?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={loginForm.control}
            render={({ field }) => (
              <CustomInput
                label="Пароль"
                placeholder="Введите пароль..."
                type="password"
                errorMessage={loginForm.formState.errors.password?.message}
                {...field}
              />
            )}
          />

          <Button
            type="submit"
            color="primary"
            isLoading={isLoading}
            isDisabled={!isValid || !isDirty || isLoading}
          >
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
}
