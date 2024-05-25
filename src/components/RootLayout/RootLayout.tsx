import { Outlet, useLocation, useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { ROUTES } from "@/constants/routes";
import cn from "classnames";

function RootLayout() {
  const navigate = useNavigate();

  const { checkIsLoggedIn, logout } = useAuth();

  const { pathname } = useLocation();

  useEffect(() => {
    if (!checkIsLoggedIn() && !pathname.includes("login")) {
      navigate(ROUTES.LOGIN);
      logout();
    }
  }, [navigate, checkIsLoggedIn, logout, pathname]);

  return (
    <div className="flex flex-col w-screen items-center text-text px-4 md:px-20 lg:px-64">
      <Navbar />
      <div
        className={cn(
          "w-full min-h-screen",
          !pathname.endsWith("login") ? "py-20" : ""
        )}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
