import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="flex flex-col w-screen items-center text-text md:px-20 lg:px-64">
      <div className="w-full min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
