import { IoRocketSharp } from "react-icons/io5";

function NoDataPlaceholder() {
  return (
    <div className="flex flex-col items-center gap-10">
      <IoRocketSharp className="text-7xl" />
      <h1 className="text-xl">Нет результатов</h1>
    </div>
  );
}

export default NoDataPlaceholder;
