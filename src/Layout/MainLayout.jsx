import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import MobileNavbar from "../Pages/Home/Navbar/MobileNavbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div >
      <Navbar />
      <MobileNavbar />
    
        <Outlet />
 
      <Footer />
    </div>
  );
};

export default MainLayout;
