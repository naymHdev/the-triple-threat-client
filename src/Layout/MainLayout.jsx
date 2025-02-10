import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import MobileNavbar from "../Pages/Home/Navbar/MobileNavbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <MobileNavbar/>
         <Outlet/>
        </div>
    );
};

export default MainLayout;