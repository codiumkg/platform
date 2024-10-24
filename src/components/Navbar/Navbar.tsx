import CodiumLogo from "@/assets/codium_logo_solo.png";
import CodiumLogoFull from "@/assets/codium_logo_text.svg";
import { ROUTES } from "@/constants/routes";
import useAuth from "@/hooks/useAuth";
import { useUserData } from "@/queries/userdata";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";
import { useNavigate } from "react-router";
import { Icons } from "../Icons";
import { useTheme } from "@/hooks/useTheme";
import { Theme } from "@/constants/common";

function Navbar() {
  const { logout, checkIsLoggedIn } = useAuth();

  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const { data: userData } = useUserData({ enabled: checkIsLoggedIn() });

  return (
    <header className="h-20 w-screen fixed">
      <div className="flex h-full w-full items-center justify-between py-4 px-8 select-none backdrop-blur-md">
        <Image
          src={CodiumLogoFull}
          width={170}
          className="cursor-pointer"
          onClick={() => navigate(ROUTES.HOME)}
        />

        <div className="flex gap-3 items-center">
          <span
            className="text-2xl cursor-pointer bg-bgSecondary p-4 rounded-full"
            onClick={toggleTheme}
          >
            {theme === Theme.CODIUM_DARK ? <Icons.SUN /> : <Icons.MOON />}
          </span>
          {checkIsLoggedIn() && (
            <Dropdown aria-label="Dropdown">
              <DropdownTrigger aria-label="trigger">
                <div className="cursor-pointer bg-bgSecondary p-3 rounded-full">
                  <div className="flex flex-row items-center">
                    <img
                      src={CodiumLogo}
                      className={`w-5 h-5 md:w-8 md:h-8 ${
                        userData ? "mr-3" : ""
                      }`}
                    />
                    {userData?.username && (
                      <h1 className="text-sm">{userData?.username}</h1>
                    )}
                  </div>
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="menu">
                <DropdownItem onPress={() => navigate(ROUTES.PROFILE)}>
                  Профиль
                </DropdownItem>
                <DropdownItem onPress={logout} aria-label="Выйти">
                  Выйти
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
