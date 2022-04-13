import Album from "./Pages/Album";
import Photos from "./Pages/PhotoBig";
import NotFound from "./Pages/NotFound";
import DashBoard from "./Pages/DashBoard";
import { useRoutes } from "react-router-dom";

const RoutesList = () => {
  return useRoutes([
    { path: "/", element: <DashBoard /> },
    { path: "/albums/:id", element: <Album /> },
    { path: "/photos/:id", element: <Photos /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default RoutesList;
