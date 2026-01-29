import React from "react";
import { CgCalendar } from "react-icons/cg";
import { FiCheckCircle } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import BookingTable from "../components/DasboardComponent/AppoinmentsComponents/BookingTable";

const Appointments = () => {
  return (
    <div className="min-h-screen px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
        <div className="bg-[#0F172B80] rounded-xl ">
          <p className="flex items-center text-[#90A1B9]  p-4 gap-2 text-sm">
            <CgCalendar className="w-5 h-5 text-[#51A2FF] " />
            Total Booked
          </p>
          <h3 className="text-[#FFFFFF] text-3xl px-4">34</h3>
          <p className="text-xs text-[#05DF72] px-4 py-3">+8 this week</p>
        </div>
        <div className="bg-[#0F172B80] rounded-xl ">
          <p className="flex items-center text-[#90A1B9]  p-4 gap-2 text-sm">
            <FiCheckCircle className="w-5 h-5 text-[#05DF72] " />
            AI Booked
          </p>
          <h3 className="text-[#FFFFFF] text-3xl px-4">28</h3>
          <p className="text-xs text-[#90A1B9] px-4 py-3">82% of total</p>
        </div>
        <div className="bg-[#0F172B80] rounded-xl ">
          <p className="flex items-center text-[#90A1B9]  p-4 gap-2 text-sm">
            <MdErrorOutline className="w-5 h-5 text-[#FDC700] " />
            Pending
          </p>
          <h3 className="text-[#FFFFFF] text-3xl px-4">3</h3>
          <p className="text-xs text-[#90A1B9] px-4 py-3">
            Awaiting confirmation
          </p>
        </div>
      </div>

      <div className="bg-linear-to-b from-[#1A1A2E] to-[#16213E] rounded-2xl mt-4">
        <p className="text-[#FFFFFF] text-sm p-4">Booking Link</p>

        <div className="flex justify-between pb-4">
            <label className="input validator bg-[#0A0A0F80] rounded-2xl border border-[#00FF8833] w-full">
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
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </g>
          </svg>
          <input
          className="text-[#FFFFFF]"
            type="url"
            required
            placeholder="https://techstore.com/book?id=store123"
            value="https://techstore.com/book?id=store123"
            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
            title="Must be valid URL"
          />
        </label>
        <p className="validator-hint">Must be valid URL</p>

        <button className="btn bg-linear-to-b from-[#152252] to-[#111B3C] rounded-2xl text-[#FFFFFF] shadow-[#D2EAFF]">Copy Link</button>
        </div>
      </div>

      <div className="">
        <BookingTable></BookingTable>
      </div>
    </div>
  );
};

export default Appointments;
