import CodiumLogo from "@/assets/codium_logo_solo.png";
import useAuth from "@/hooks/useAuth";
import { useUserData } from "@/queries/userdata";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

function Navbar() {
  const { logout, checkIsLoggedIn } = useAuth();

  const { data: userData } = useUserData({ enabled: checkIsLoggedIn() });

  return (
    <div className="fixed flex justify-end w-screen p-3 select-none">
      {checkIsLoggedIn() && (
        <Dropdown aria-label="Dropdown">
          <DropdownTrigger aria-label="trigger">
            <div className="h-16 bg-bgSecondary border border-highlight rounded-full p-4">
              <div className="flex flex-row items-center">
                <img
                  src={CodiumLogo}
                  className={`w-8 h-8 ${userData ? "mr-3" : ""}`}
                />
                {userData?.username && (
                  <h1 className="text-sm">{userData?.username}</h1>
                )}
              </div>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="menu">
            <DropdownItem onPress={logout} aria-label="Выйти">
              Выйти
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  );
}

export default Navbar;
