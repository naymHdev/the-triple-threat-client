import { useState, useEffect } from "react";

// import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
// import { FcBiohazard } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#37225B]  shadow  w-full  py-3 -mb-8 hidden md:block">
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between  px-6 transition-shadow ${
          shadow ? "" : ""
        }`}
      >
        <Link to="/" className="flex items-center">
          <FcCustomerSupport className="text-xl" />

          <h1 className=" font-semibold  text-white drop-shadow-md">
            CrimeRadar
          </h1>
        </Link>

        <ul className="flex items-center text-white gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'font-inter text-base  py-1 text-[14px] relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-[#78b0ff]'
                  : "font-inter text-base hover:text-[#78b0ff] text-[14px] "
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/all-reports"
              className={({ isActive }) =>
                isActive
                  ? 'font-inter text-base  py-1 text-[14px] relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-[#78b0ff]'
                  : "font-inter text-base hover:text-[#78b0ff] text-[14px]"
              }
            >
              All Reports
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/report-crime"
              className={({ isActive }) =>
                isActive
                  ? 'font-inter text-base  py-1 text-[14px] relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-[#78b0ff]'
                  : "font-inter text-base hover:text-[#78b0ff] text-[14px]"
              }
            >
              Report Crime
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/report"
              className={({ isActive }) =>
                isActive
                  ? 'font-inter text-base  py-1 text-[14px] relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-[#78b0ff]'
                  : "font-inter text-base hover:text-[#78b0ff] text-[14px] "
              }
            >
              Post Details
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/leaderboard"
              className={({ isActive }) =>
                isActive
                  ? 'font-inter text-base  py-1 text-[14px] relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-[#78b0ff]'
                  : "font-inter text-base hover:text-[#78b0ff] text-[14px] "
              }
            >
              Leaderboard
            </NavLink>
          </li>
        </ul>

        <Link
          to={"/login"}
          className="px-2 py-2 bg-[#9333ea] rounded-md text-white text-[14px] cursor-pointer"
        >
          Sign In
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
