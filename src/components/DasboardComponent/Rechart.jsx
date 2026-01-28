import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { day: "Mon", calls: 65 },
  { day: "Tue", calls: 68 },
  { day: "Wed", calls: 72 },
  { day: "Thu", calls: 75 },
  { day: "Fri", calls: 95 },
  { day: "Sat", calls: 88 },
  { day: "Sun", calls: 82 },
];

const Rechart = () => {
  return (
    <div className="w-full  bg-[#0F172B80] rounded-xl p-4 my-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-[#FFFFFF] ">Call Trends - This Week</h3>
          <p className="text-[#90A1B9]">Total: 472 calls</p>
        </div>
        <div className="dropdown dropdown-bottom dropdown-center">
          <div tabIndex={0} role="button" className="btn btn-outline border-[#2B7FFF33] text-white m-1">
            This Week <RiArrowDropDownFill />
          </div>
          
        </div>
      </div>
      <AreaChart
        style={{ width: "100%", maxHeight: "35vh", aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis width="auto" />
        <Tooltip />
        <Area type="monotone" dataKey="calls" stroke="#8884d8" fill="#3B82F6" />
        {/* <RechartsDevtools /> */}
      </AreaChart>
    </div>
  );
};

export default Rechart;
