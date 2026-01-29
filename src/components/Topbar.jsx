import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router";

const pageTitles = {
  "/": "Dashboard Overview",
  "/calls": "Call Logs & History",
  "/appointments": "Appointments",
  "/settings": "Settings",
  "/edit": "Settings",
};
const Topbar = ({ onHamburgerClick }) => {
  const location = useLocation();

  return (
    <div className="navbar bg-[#111B3C] shadow-sm mx-auto">
  <div className="flex-1">
     <div className="flex items-center gap-2">
      <button
  className="md:hidden p-2 bg-white rounded"
  onClick={onHamburgerClick}
>
  <FaBars />
</button>
    <h1 className="text-lg font-semibold text-white">
        {pageTitles[location.pathname] || "Dashboard"}
      </h1>
     </div>
  </div>
  <div className="flex-none">
    <button className="btn btn-outline border-0 text-white">
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        
      </div>
    </button>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      
    </div>
  </div>
</div>
  );
};

export default Topbar;
