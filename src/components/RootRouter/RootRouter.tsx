import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "@/pages/Home/Home";
import RootLayout from "../RootLayout/RootLayout";
import SectionDetails from "@/pages/Section/SectionDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/section/:id" element={<SectionDetails />} />
    </Route>
  )
);

function RootRouter() {
  return <RouterProvider router={router} />;
}

export default RootRouter;
