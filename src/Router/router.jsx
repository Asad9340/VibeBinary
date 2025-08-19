import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/SharedPages/ErrorPages/Error";
import Homepage from "../Pages/MainPages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path:'/',
        element:<Homepage/>
      }
    ]
  },
]);
export default router;