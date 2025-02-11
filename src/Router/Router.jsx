import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import CrimeDetails from "../Components/CrimeDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/crime-details/:id',
        element:<CrimeDetails/>
      },{
        path:'/login',
        element:<Login/>
      },{
        path:'/register',
        element:<Register/>
      }
    ],
  },
]);
