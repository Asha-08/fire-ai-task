import React from 'react'
import { BiBot, BiCalendar, BiPhone, BiShuffle, BiXCircle } from 'react-icons/bi';
import { CiLock } from 'react-icons/ci';

 const stats = [
  {
    title: "Total Calls Today",
    value: 127,
    change: "+12%",
    icon: BiPhone,
    color: "bg-blue-500/20 text-blue-400"
  },
  {
    title: "AI-Handled Calls",
    value: 98,
    change: "+77%",
    icon: BiBot,
    color: " bg-linear-to-b from-[#AD46FF] to-[#F6339A] text-white"
  },
  {
    title: "Warm Transfer",
    value: 23,
    change: "+18%",
    icon: BiShuffle,
    color: "bg-orange-500/20 text-orange-400"
  },
  {
    title: "Appointments Booked",
    value: 34,
    change: "+8%",
    icon: BiCalendar,
    color: "bg-green-500/20 text-green-400"
  },
  {
    title: "Missed/Failed Calls",
    value: 6,
    change: "-3%",
    icon: BiXCircle,
    color: "bg-red-500/20 text-red-400"
  },
  {
    title: "Avg Call Duration",
    value: "3:42",
    change: "+15%",
    icon: CiLock,
    color: "bg-indigo-500/20 text-indigo-400"
  }
];

const StatCard = ({ title, value, change,icon, color   }) => {
const Icon = icon
  return (
     <div className="bg-[#0F172B80] backdrop-blur-md border border-[#2B7FFF33] rounded-xl p-5 text-white">
      
      {/* Top */}
      <div className="flex  justify-between">
        {/* Content */}
      <div className="mt-4">
        <h4 className="text-sm text-white/70">{title}</h4>
        <p className="text-2xl font-semibold mt-1">{value}</p>
         <span
          className={`text-xs font-medium ${
            change.startsWith("-") ? "text-red-400" : "text-green-400"
          }`}
        >
          {change}
        </span>
      </div>

        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
          {Icon && <Icon size={20} />}
        </div>

       
      </div>

      
    </div>
  )
}

export default StatCard