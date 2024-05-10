import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

function RootLayout() {
  return (
    <div className="flex flex-col w-screen items-center text-text px-4 md:px-20 lg:px-64">
      <Navbar />
      <div className="w-full min-h-screen py-20">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
