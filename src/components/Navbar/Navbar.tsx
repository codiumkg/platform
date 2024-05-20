import CodiumLogo from "@/assets/codium_logo_solo.png";
import CodiumLogoFull from "@/assets/codium_logo.png";
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

function Navbar() {
  const { logout, checkIsLoggedIn } = useAuth();

  const navigate = useNavigate();

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

        {checkIsLoggedIn() && (
          <Dropdown aria-label="Dropdown">
            <DropdownTrigger aria-label="trigger">
              <div className="cursor-pointer">
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
    </header>
  );
}

export default Navbar;
