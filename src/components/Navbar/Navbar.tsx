import CodiumLogo from "@/assets/codium_logo_solo.png";
import { useUserData } from "@/queries/userdata";

function Navbar() {
  const { data: userData } = useUserData();

  return (
    <div className="fixed flex justify-end w-screen p-3">
      <div className="h-16 bg-secondary border border-highlight rounded-full p-4">
        <div className="flex flex-row items-center">
          <img src={CodiumLogo} className="w-8 h-8 mr-3" />
          <h1 className="text-sm">{userData?.username}</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
