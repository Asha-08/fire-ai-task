import React from "react";
import { BiCheckCircle, BiPhone } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

const LeftSection = () => {
  const callList = [
    {
      id: 1,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "AI Resolved",
      action: "Quote Provided",
      category: "Screen",
    },
    {
      id: 2,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "Warm Transfer",
      action: "Escalated to technician",
      category: "Software",
    },
    {
      id: 3,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "Appointment",
      action: "Appointment Booked",
      category: "Battery",
    },
    {
      id: 4,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "Dropped",
      action: "Call Dropped",
      category: "UnKnown",
    },
    {
      id: 5,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "AI Resolved",
      action: "Quote Provided",
      category: "Screen",
    },
  ];
  return (
    <div className="bg-[#0F172B80] rounded-xl p-4 border border-[#2B7FFF33]">
      <h3 className="text-[#FFFFFF] text-xl font-semibold mb-6 pb-4 border-b border-[#2B7FFF33]">
        Call List
      </h3>
      <div className="flex flex-col ">
        {callList.map((calls) => (
          <div
            key={calls.id}
            className="p-4 border-b border-[#1e3a5f]"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#3b82f6] p-2 rounded-lg">
                  <BiPhone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[#FFFFFF] text-base font-medium">
                    {calls.phone}
                  </h4>
                  <p className="text-[#6B7280] text-xs mt-1">
                    {calls.date} • {calls.time}
                  </p>
                </div>
              </div>
              <span
                className={`text-xs px-4 py-1 rounded-xl ${
                  calls.status === "AI Resolved"
                    ? "bg-linear-to-b from-[#00C95033] to-[#00BC7D33] text-[#05DF72] border border-[#00C9504D]"
                    : calls.status === "Warm Transfer"
                      ? "bg-linear-to-b from-[#FF690033] to-[#FB2C3633] text-[#FF8904] border border-[#FF69004D]"
                      : calls.status === "Appointment"
                        ? "bg-linear-to-b from-[#2B7FFF33] to-[#00B8DB33] text-[#51A2FF] border border-[#2B7FFF4D]"
                        : "bg-linear-to-b from-[#FF150033] to-[#FB2C3633] text-[#FF0404] border border-[#FF69004D]"
                }`}
              >
                {calls.status}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-[#9CA3AF]">
              <div className="flex items-center gap-1">
                <BsClock className="w-4 h-4" />
                <span>{calls.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <BiCheckCircle className="w-4 h-4" />
                <span>{calls.action}</span>
              </div>
              <span className="bg-[#3b82f633] text-[#3b82f6] px-2 py-1 rounded">
                {calls.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
