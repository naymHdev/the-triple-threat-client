import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import CrimeDetails from "../Components/CrimeDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllReports from "../Pages/AllReports/AllReports/AllReports";
import DashboardLayout from "../Layout/DashboardLayout";
import Users from "../Dashboard/Users/Users";
import BannedUsers from "../Dashboard/BannedUsers/BannedUsers";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard";

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
      },{
        path:'/all-reports',
        element:<AllReports/>
      },{
        path:'/leaderboard',
        element:<LeaderBoard/>
      }
    ],
  },{
    path:'/admin-dashboard',
    element:<DashboardLayout/>,
    children:[
      {
        path:"",
        element:<h1 className="text-center">Home Dashboard</h1>
      },{
        path:'users',
        element:<Users/>
      },{
        path:'banned-users',
        element:<BannedUsers/>
      },
    ]
  }
]);
