import React from 'react'

const RightSide = () => {
  return (
    <div className='bg-[#0F172B80] rounded-xl p-4'>
        <h3 className='text-[#FFFFFF]'>Top Repair Requests</h3>
        <div className='flex justify-between p-4'>
            <p className='text-[#FFFFFF]'>Screen Repair</p>
            <p className='text-[#C0CCDD]'>156 requests</p>
        </div>
        <div className='w-full h-3 rounded-2xl bg-[#1D293D]'>
            <div className='w-55 h-full bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] rounded-2xl'></div>
        </div>
        <div className='flex justify-between p-4'>
            <p className='text-[#FFFFFF]'>Battery Replacement</p>
            <p className='text-[#C0CCDD]'>89 requests</p>
        </div>
        <div className='w-full h-3 rounded-2xl bg-[#1D293D]'>
            <div className='w-45 h-full bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] rounded-2xl'></div>
        </div>
        <div className='flex justify-between p-4'>
            <p className='text-[#FFFFFF]'>Back Glass Repair</p>
            <p className='text-[#C0CCDD]'>67 requests</p>
        </div>
        <div className='w-full h-3 rounded-2xl bg-[#1D293D]'>
            <div className='w-40 h-full bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] rounded-2xl'></div>
        </div>
        <div className='flex justify-between p-4'>
            <p className='text-[#FFFFFF]'>Software Issues</p>
            <p className='text-[#C0CCDD]'>45 requests</p>
        </div>
        <div className='w-full h-3 rounded-2xl bg-[#1D293D]'>
            <div className='w-25 h-full bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] rounded-2xl'></div>
        </div>
    </div>
  )
}

export default RightSide