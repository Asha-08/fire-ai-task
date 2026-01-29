import React from "react";
import { BiEdit } from "react-icons/bi";

const EditProfile = () => {
  return (
    <div className="min-h-screen px-5">
      <div>
        <div className="flex gap-15 text-[#FFFFFF] text-2xl border-b border-[#192D71] mb-3 ">
          <p className="border-b border-[#87A2FF] ">Profile</p>
          <p>Password Settings</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-[#FFFFFF] text-xl pb-6">Profile Image</p>
        <div className="flex items-end relative">
          <img
            className="w-28 h-28 rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />

          <BiEdit className=" absolute left-22 w-9 h-9 text-[#FFFFFF] bg-[#7AA3CC] rounded-xl " />
        </div>
      </div>

       <div className="flex gap-20 ">
        <div className="mt-6 w-75">
        <h3 className="text-xl text-[#FFFFFF] pb-2">Full Name</h3>
        <input type="text" value="Jane D." placeholder="Type here" className="input bg-[#0A0A0F80] rounded-2xl border border-[#00FF8833] text-[#FFFFFF] " />

         <h3 className="text-xl text-[#FFFFFF] py-2">Store Name</h3>
        <input type="text" value="Ubreakfix Store" placeholder="Type here" className="input bg-[#0A0A0F80] rounded-2xl border border-[#00FF8833] text-[#FFFFFF]" />
      </div>

      <div className="mt-6 w-75">
        <h3 className="text-xl text-[#FFFFFF] pb-2">Email</h3>
        <input type="text" value="jane@gmail.com" placeholder="Type here" className="input bg-[#0A0A0F80] rounded-2xl border border-[#00FF8833] text-[#FFFFFF] " />

         <h3 className="text-xl text-[#FFFFFF] py-2">Store Address</h3>
        <input type="text" value="123 Main Street, New York" placeholder="Type here" className="input bg-[#0A0A0F80] rounded-2xl border border-[#00FF8833] text-[#FFFFFF]" />
      </div>
      
      </div>
      <div className="flex justify-center">
        <button className="text-[#FFFF] btn bg-[#00C950] my-8 text-center text-xl px-20 rounded-2xl border border-[#00C950]">Save</button>
      </div>
    </div>
  );
};

export default EditProfile;
