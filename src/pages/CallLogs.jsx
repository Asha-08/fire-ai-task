import React from "react";
import LeftSection from "../components/CallLogsComponent/LeftSection";
import RightSection from "../components/CallLogsComponent/RightSection";
import { RiArrowDropDownFill } from "react-icons/ri";

const CallLogs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
        <label className="input bg-[#0F172B80] text-[#62748E] border border-[#2B7FFF33]">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search by phone number, issue type..."
          />
        </label>
       <div className="flex gap-6">
        <div className="dropdown dropdown-bottom dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#111B3D] border-[#2B7FFF33] text-white m-1"
          >
            All Type <RiArrowDropDownFill />
          </div>
        </div>

        <div className="dropdown dropdown-bottom dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#111B3D] border-[#2B7FFF33] text-white m-1"
          >
            All Issues <RiArrowDropDownFill />
          </div>
        </div>

        <div className="dropdown dropdown-bottom dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#111B3D] border-[#2B7FFF33] text-white m-1"
          >
            Today <RiArrowDropDownFill />
          </div>
        </div>
       </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-3  my-6">
        <LeftSection></LeftSection>
        <RightSection></RightSection>
      </div>
    </div>
  );
};

export default CallLogs;
