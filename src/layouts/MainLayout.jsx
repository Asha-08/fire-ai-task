import { NavLink, Outlet, Link } from "react-router";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";



const MainLayout = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="grid grid-cols-12 bg-[#07224e] ">
    
     <div className="col-span-2 hidden md:block">
      <Sidebar></Sidebar>
     </div>
      {/* Main Area */}
      <div className="col-span-12 md:col-span-10 flex flex-col">
        <Topbar onHamburgerClick={() => setIsSidebarOpen(true)} />

        <main className="flex-1 overflow-auto p-6 ">
          <Outlet />
        </main>
      </div>
      <Sidebar
        isMobile
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      
    </div>
  );
};

export default MainLayout;