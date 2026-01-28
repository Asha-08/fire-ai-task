import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { CiCalendar, CiSettings } from 'react-icons/ci'
import { FaHome } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { IoCallOutline } from 'react-icons/io5'
import { RiHome4Fill } from 'react-icons/ri'
import { RxLightningBolt } from 'react-icons/rx'
import { TiHomeOutline } from 'react-icons/ti'
import { NavLink } from 'react-router'

const Sidebar = ({ isOpen, setIsOpen, isMobile }) => {
  return (
    <aside
      className={`
        bg-[#111B3C] text-white
        flex flex-col h-full
        ${isMobile
          ? `fixed top-0 left-0 w-64 z-40 transition-transform duration-300 
             ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`
          : "w-full"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 px-6 py-5">
        <div className="w-14 h-14 rounded-lg bg-linear-to-b from-[#00FF88] to-[#00D4FF] flex items-center justify-center font-bold text-black">
          <RxLightningBolt className='text-2xl' />
        </div>
        
      </div>

      {/* Menu */}
      <ul className=" space-y-2 flex-1 ">
        <li>
           <NavLink to="/" end className={({ isActive }) => isActive ? "flex items-center gap-3 bg-white/10 backdrop-blur-md shadow-inner rounded-lg w-full  py-3 border " : "flex items-center gap-3 hover:bg-white/5 rounded-lg py-3" } >
         <RiHome4Fill className="text-2xl" /> Dashboard Overview </NavLink>
          </li>

          <li> <NavLink to="/calls" className={({ isActive }) => isActive ?"flex items-center gap-3 bg-white/10 backdrop-blur-md shadow-inner rounded-lg w-full  py-3 border" : "flex items-center gap-3 hover:bg-white/5 rounded-lg py-3" } >
         <IoCallOutline className="text-2xl" /> Call Logs </NavLink>
          </li>

          <li> <NavLink to="/appointments" className={({ isActive }) => isActive ? "flex items-center gap-3 bg-white/10 backdrop-blur-md shadow-inner rounded-lg w-full py-3 border" : "flex items-center gap-3 hover:bg-white/5 rounded-lg py-3" } >
         <CiCalendar className="text-2xl" /> Appointments </NavLink>
          </li>
          <li> <NavLink to="/settings" className={({ isActive }) => isActive ? "flex items-center gap-3 bg-white/10 backdrop-blur-md shadow-inner rounded-lg w-full  py-3 border" : "flex items-center gap-3 hover:bg-white/5 rounded-lg py-3" } >
         <CiSettings className="text-2xl" /> Settings </NavLink>
          </li>

      </ul>

      {/* Logout */}
      <div className="px-6 py-4 mb-8">
        <button className="flex items-center gap-3 text-red-400 text-sm">
          <BiLogOut size={18} />
          Log Out
        </button>
      </div>
    </aside>
  );
};


export default Sidebar
