import React from 'react'

const LeftSide = () => {
  return (
    <div className='bg-[#0F172B80] rounded-xl p-4'>
    <h3 className='text-[#FFFFFF] pb-3 text-xl'>Recent Activity</h3>

    <div className='flex flex-col gap-5'>

        <div className='flex gap-3 bg-[#1D293D80] p-3 rounded-xl'>
          <div className='w-2 h-2 rounded-full mt-1.5 '
                style={{ backgroundColor: '#05DF72' }} />
          <div className='flex-1'>
            <h2 className='text-[#FFFFFF] text-sm'>AI booked appointment for iPhone 13 screen repair</h2>
            <p className='text-[#6B7280] text-xs mt-1'>2 min ago</p>
          </div>
        </div>

        <div className='flex gap-3 bg-[#1D293D80] p-3 rounded-xl'>
          <div className='w-2 h-2 rounded-full mt-1.5 '
                style={{ backgroundColor: '#FF8904' }} />
          <div className='flex-1'>
            <h2 className='text-[#FFFFFF] text-sm'>Warm transfer to technician - Software issue</h2>
            <p className='text-[#6B7280] text-xs mt-1'>5 min ago</p>
          </div>
        </div>
        <div className='flex gap-3 bg-[#1D293D80] p-3 rounded-xl'>
          <div className='w-2 h-2 rounded-full mt-1.5 '
                style={{ backgroundColor: '#05DF72' }} />
          <div className='flex-1'>
            <h2 className='text-[#FFFFFF] text-sm'>Quote provided for iPad battery replacement</h2>
            <p className='text-[#6B7280] text-xs mt-1'>8 min ago</p>
          </div>
        </div>
        <div className='flex gap-3 bg-[#1D293D80] p-3 rounded-xl'>
          <div className='w-2 h-2 rounded-full mt-1.5 '
                style={{ backgroundColor: '#FF6467' }} />
          <div className='flex-1'>
            <h2 className='text-[#FFFFFF] text-sm'>Call dropped after 12 seconds</h2>
            <p className='text-[#6B7280] text-xs mt-1'>15 min ago</p>
          </div>
        </div>
        
    </div>
    </div>
  )
}

export default LeftSide