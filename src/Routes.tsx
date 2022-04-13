import { Route, Routes, useRoutes } from "react-router-dom";
import Album from "./pages/Album";
import DashBoard from "./pages/DashBoard";
import NotFound from "./pages/NotFound";
import Photos from "./pages/Photos";

// <>
//   {/* <Routes>
//     <Route path="/" element={<DashBoard />} />
//     <Route path="/albums/:id" element={<Album />} />
//     <Route path="/photos/:id" element={<Photos />} />
//     <Route path="*" element={<NotFound />} />
//   </Routes> */}
// </>
const RoutesList = () => {
  return useRoutes([
    { path: "/", element: <DashBoard /> },
    { path: "/albums/:id", element: <Album /> },
    { path: "/photos/:id", element: <Photos /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default RoutesList;
