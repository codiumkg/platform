import CodiumLogoSolo from "@/assets/codium_logo_solo.png";
import { ROUTES } from "@/constants/routes";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <div className="flex flex-col gap-8 flex-1 justify-center">
        <h1 className="text-[120px] font-extrabold flex items-center gap-4">
          4<img src={CodiumLogoSolo} className="w-[120px] h-[120px]" />4
        </h1>
        <h1 className="text-xl text-center">Страница не найдена.</h1>
      </div>
      <Button
        size="lg"
        color="secondary"
        onClick={() => navigate(ROUTES.HOME)}
        className="mb-10"
      >
        Перейти на главную страницу
      </Button>
    </div>
  );
}
