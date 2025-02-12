import { IoIosLogOut } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { HiOutlineBanknotes } from 'react-icons/hi2';
import { CiSettings } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";





function Sidebar() {
   
    // console.log(user);

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Navigation Toggle */}
            <div className='flex justify-between items-center px-2 md:pr-10 '>
                <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600 px-2 py-2"
                    onClick={toggleSidebar}
                    aria-label="Toggle navigation"
                >
                    <span className="text-2xl"><IoMdMenu /></span>
                </button>
                <div>
                    <marquee>Welcome to our dashboard. You will update here all.</marquee>
                </div>

                <div className='flex gap-1 items-center '>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full ">
                                <img src='' alt="User Avatar" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="hover:text-red-500 flex">
                                    <span className='flex items-center gap-1'><HiOutlineBanknotes />xxx</span>
                                </a>
                            </li>
                            <li className="hover:text-red-500"><a><span className="text-xl"><CiSettings /></span>সেটিংস</a></li>
                            <Link className="hover:text-red-500 "><a className='flex ml-3 mt-1'><span><IoIosLogOut /></span>লগ আউট</a></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />

            {/* Sidebar */}
            <div
                id="docs-sidebar"
                className={`hs-overlay [--auto-close:lg] ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] text-black w-64 bg-[#841be7] border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700`}
            >
                <div className='flex justify-between px-4 my-2 items-center'>
               <Link to="/" className="flex items-center">
                       
                       <FcCustomerSupport className='text-xl'/>
              
                        <h1  className=" font-semibold  text-white drop-shadow-md">
                        CrimeRadar
                        </h1>
                      </Link>
                    <button onClick={toggleSidebar} className='text-xl text-black lg:hidden block'>
                        <IoCloseSharp />
                    </button>
                </div>
                <ul className="space-y-1.5 px-3 my-10">
                    <li>
                        <NavLink to='/admin-dashboard' className={({ isActive }) =>
                            isActive
                                ? ''
                                : ''
                        }>
                         
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink to='users' className={({ isActive }) =>
                            isActive
                                ? 'text-black px-3 py-1 rounded-md flex items-center gap-1 bg-base-100 my-5'
                                : 'text-white flex items-center gap-1 my-5'
                        }>
                           <FaUsers className="text-xl"/> Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='banned-users' className={({ isActive }) =>
                            isActive
                                ? 'text-black px-3 py-1 rounded-md flex items-center gap-1 bg-base-100 my-5'
                                : 'text-white flex items-center gap-1 my-5'
                        }>
                           <FaUsers className="text-xl"/> Banned-Users
                        </NavLink>
                    </li>
                   
                
                </ul>
            </div>
            {/* End Sidebar */}
        </>
    );
}

export default Sidebar;