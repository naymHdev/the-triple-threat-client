import  { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { IoIosArrowDown } from 'react-icons/io';
import { FcCustomerSupport } from 'react-icons/fc';

const MobileNavbar = ({ active }) => {
  const [shadow, setShadow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && !sidebar.contains(event.target) && !event.target.closest('.menu-icon')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  const handleLinkClick = () => {
    setDropdownOpen(false); // Close the dropdown when a link is clicked
  };

  return (
    <>
      <div className="bg-[#37225B]  py-4 ">
        <nav
          className={`items-center flex md:hidden justify-between z-50 px-6  sticky top-0 transition-shadow ${
            shadow ? 'shadow-lg' : ''
          }`}
        >
        <Link to="/" className="flex items-center">
                
                <FcCustomerSupport className='text-xl'/>
       
                 <h1  className=" font-semibold  text-white drop-shadow-md">
                 CrimeRadar
                 </h1>
               </Link>
               

          <div className="flex items-center gap-[16px]">
          <Link to='/login' className="px-2 py-2 bg-[#9333ea] rounded-md text-white text-[14px] cursor-pointer">
         Sign In
        </Link>
            <AiOutlineMenu
              onClick={() => setIsSidebarOpen(true)}
              className="text-[1.6rem] text-white  menu-icon"
            />
          </div>
        </nav>

        <aside
          id="sidebar"
          className={`${
            isSidebarOpen ? 'translate-x-0 opacity-100 z-[999]' : 'translate-x-[300px] opacity-0 z-[-1]'
          } w-[80%] md:w-[50%] h-screen overflow-y-auto p-[20px] fixed top-0 right-0 transition-all duration-300`}
        >
          <div className="bg-[#37225B] text-white shadow rounded-md md:-mt-5 -mr-5 -mt-5 lg:hidden block">
            <RxCross1
              onClick={() => setIsSidebarOpen(false)}
              className="text-[2rem] text-white mt-5  p-[5px] float-right hover:bg-gray-100 rounded-full"
            />

            <ul className="flex flex-col gap-[30px] py-5  ml-6">
            <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? 'font-inter text-base  py-1 text-[14px] relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-[#78b0ff]'
        : 'font-inter text-base hover:text-[#78b0ff] text-[14px] '
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
        ? 'font-inter text-base  py-1 text-[14px]relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-[#78b0ff]'
        : 'font-inter text-base hover:text-[#78b0ff] text-[14px]'
    }
  >
 All Reports
  </NavLink>
</li>
<li>
  <NavLink
    to="/report"
    className={({ isActive }) =>
      isActive
        ? 'font-inter text-base  py-1 text-[14px] relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-[#78b0ff]'
        : 'font-inter text-base hover:text-[#78b0ff] text-[14px]'
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
        : 'font-inter text-base hover:text-[#78b0ff] text-[14px] '
    }
  >
Post Details
  </NavLink>
</li>

        <li>
  <NavLink
    to="/report"
    className={({ isActive }) =>
      isActive
        ? 'font-inter text-base  py-1 text-[14px] relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-[#78b0ff]'
        : 'font-inter text-base hover:text-[#78b0ff] text-[14px] '
    }
  >
 Leaderboard
  </NavLink>
</li>

{/* <button className="px-2 py-2 bg-[#9333ea] rounded-md text-white text-[14px] cursor-pointer">
         Sign In
        </button> */}

            
             
                   
      
            </ul>

          </div>
        </aside>
      </div>
    </>
  );
};

export default MobileNavbar;