import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "@/pages/Home/Home";
import RootLayout from "../RootLayout/RootLayout";
import SectionDetails from "@/pages/Section/SectionDetails";
import TopicContent from "@/pages/TopicContent/TopicContent";
import Login from "@/pages/Login/Login";
import ProfilePage from "@/pages/Profile/ProfilePage";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="section/:id" element={<SectionDetails />} />
      <Route path="topic/:id" element={<TopicContent />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function RootRouter() {
  return <RouterProvider router={router} />;
}

export default RootRouter;
