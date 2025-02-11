import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import MobileNavbar from "../Pages/Home/Navbar/MobileNavbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <MobileNavbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
