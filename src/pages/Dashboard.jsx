import React from 'react'
import { BiBot, BiCalendar, BiPhone, BiShuffle, BiXCircle } from "react-icons/bi";

import StatCard from '../components/DasboardComponent/StatCard';
import Rechart from '../components/DasboardComponent/Rechart';
import { BsClock } from 'react-icons/bs';
import LeftSide from '../components/DasboardComponent/LeftSide';
import RightSide from '../components/DasboardComponent/RightSide';

const stats = [
  { title: "Total Calls Today", value: 127, change: "+12%", icon: BiPhone, color: "bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] text-white" },

  { title: "AI-Handled Calls", value: 98, change: "+77%", icon: BiBot, color: "bg-linear-to-b from-[#AD46FF] to-[#F6339A] text-white" },

  { title: "Warm Transfer", value: 23, change: "+18%", icon: BiShuffle, color: "bg-linear-to-b from-[#FF6900] to-[#FB2C36] text-white" },

  { title: "Appointments Booked", value: 34, change: "+8%", icon: BiCalendar, color: "bg-linear-to-b from-[#00C950] to-[#00BC7D] text-white" },

  { title: "Missed/Failed Calls", value: 6, change: "-3%", icon: BiXCircle, color: "bg-linear-to-b from-[#FB2C36] to-[#FF2056] text-white" },
  { title: "Avg Call Duration", value: "3:42", change: "+15%", icon: BsClock, color: "bg-linear-to-b from-[#615FFF] to-[#2B7FFF] text-white" }
];

const Dashboard = () => {
  return (
    <div className="px-5 h-full">
      

      {/* Grid layout for cards */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
      <div>
        <Rechart></Rechart>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-3  my-6'>
        <LeftSide></LeftSide>
        <RightSide></RightSide>

      </div>
    </div>
  )
}

export default Dashboard