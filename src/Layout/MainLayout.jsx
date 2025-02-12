import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import MobileNavbar from "../Pages/Home/Navbar/MobileNavbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <div className=" min-h-screen mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
