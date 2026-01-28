import React from "react";
import { FiFileText, FiPlayCircle } from "react-icons/fi";

const RightSection = () => {
  return (
    <div className="bg-[#0F172B80] rounded-xl p-4 border border-[#2B7FFF33]">
      <h3 className="text-[#FFFFFF] text-xl font-semibold mb-6 pb-4 border-b border-[#2B7FFF33]">
        Call Details
      </h3>
      <div className="grid grid-cols-2 py-3">
        <div>
          <p className="text-[#90A1B9] text-sm">Phone Number</p>
          <h3 className="text-[#FFFFFF]">+1 (555) 123-4567</h3>
        </div>

        <div>
          <p className="text-[#90A1B9] text-sm">Duration</p>
          <h3 className="text-[#FFFFFF]">4:32</h3>
        </div>
      </div>
      <div className="grid grid-cols-2  py-3">
        <div>
          <p className="text-[#90A1B9] text-sm">Date & Time</p>
          <h3 className="text-[#FFFFFF]">2025-12-16 10:45 AM</h3>
        </div>

        <div>
          <p className="text-[#90A1B9] text-sm">Issue Type</p>
          <h3 className="text-[#FFFFFF]">Screen</h3>
        </div>
      </div>
      <div className="py-3">
        <p className="text-[#90A1B9] text-sm">Call Type</p>
        <div>
          <span className="bg-linear-to-b from-[#00C95033] to-[#00BC7D33] text-[#05DF72] border border-[#00C9504D] text-xs px-4 py-1 rounded-xl ">
            AI Resolved
          </span>
        </div>
      </div>
      <div className="py-3">
        <p className="text-[#90A1B9] text-sm">Outcome</p>
        <h3 className="text-[#FFFFFF]">Quote provided</h3>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-linear-to-b from-[#AD46FF33] to-[#F6339A33] text-[#C27AFF] border border-[#AD46FF4D] py-3 rounded-xl ">
        <FiPlayCircle className="w-6 h-6" />
        Play Audio Recording
      </button>

        <h3 className="flex items-center text-[#FFFFFF] mt-6 pb-4 gap-2">
            <FiFileText className="w-5 h-5 text-[#51A2FF] " />Conversation Transcript</h3>
      <div className="bg-[#1D293D80] rounded-xl px-4">
          <div className="py-2">
            <p className="text-[#05DF72]">AI Assistant:</p>
            <p className="text-sm text-[#FFFFFF]">Thank you for calling UBreakiFix! How can I help you today?</p>
          </div>

          <div className="py-2">
            <p className="text-[#51A2FF]"> Customer:</p>
            <p className="text-sm text-[#FFFFFF]">Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</p>
          </div>

          <div className="py-2">
            <p className="text-[#05DF72]">AI Assistant:</p>
            <p className="text-sm text-[#FFFFFF]">I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?</p>
          </div>

          <div className="py-2">
            <p className="text-[#51A2FF]">Customer:</p>
            <p className="text-sm text-[#FFFFFF]">Yes, please! When are you available?</p>
          </div>

          <div className="py-2">
            <p className="text-[#05DF72]">AI Assistant:</p>
            <p className="text-sm text-[#FFFFFF]">Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?</p>
          </div>
      </div>
    </div>
  );
};

export default RightSection;
