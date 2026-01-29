import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const BookingTable = () => {

    const bookings = [
    {
      id: 1,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '09:00'
    },
    {
      id: 2,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '10:00'
    },
    {
      id: 3,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '11:00'
    },
    {
      id: 4,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '12:00'
    },
    {
      id: 5,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '02:00'
    },
    {
      id: 6,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '03:00'
    },
    {
      id: 7,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '03:00'
    },
    {
      id: 8,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '03:00'
    },
    {
      id: 9,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '03:00'
    },
    {
      id: 10,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '03:00'
    },
    {
      id: 11,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '03:00'
    },
    {
      id: 12,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '03:00'
    },
    {
      id: 13,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '03:00'
    },
    {
      id: 14,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '03:00'
    },
    {
      id: 15,
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slot: 1,
      startTime: '03:00'
    },
  ];

  const tablePerPage = 5;
  const [bookingPage,setBookingPage] = useState(1);
const lastdata = bookingPage * tablePerPage;
const firstdata = lastdata - tablePerPage;

const showBookings = bookings.slice(firstdata,lastdata);

const allPages = Math.ceil(bookings.length / tablePerPage);

const handlePreviousPage = () =>{
  if (bookingPage > 1){
    setBookingPage(bookingPage -1);
  }
};

const handleNextPage = () =>{
  if (bookingPage < allPages){
    setBookingPage(bookingPage + 1);
  }
};

  return (
    <div>
        <div className="overflow-x-auto bg-[#111B3B] my-4 p-4 border border-[#162F61] rounded-2xl">
  <table className="table">
    <thead className='text-[#FFFFFF]'>
      <tr>
        <th>Client Name</th>
            <th>Client Phone</th>
            <th>Client mail</th>
            <th>Device</th>
            <th>Repair Type</th>
            <th>Date</th>
            <th>Slot no</th>
            <th>Start Time</th>
      </tr>
    </thead>
    <tbody>
      {showBookings.map((booking) => (
            <tr key={booking.id} className="text-[#FFFFFF] ">
              
              <td className='text-[#51A2FF]'>{booking.clientName}</td>
              <td>{booking.phone}</td>
              <td>{booking.email}</td>
              <td>{booking.device}</td>
              <td>{booking.repairType}</td>
              <td>{booking.date}</td>
              <td>{booking.slot}</td>
              <td>{booking.startTime}</td>
            </tr>
          ))}

    </tbody>
    
  </table>
</div>
    <div className="flex justify-center gap-2 mt-6">

      <button
    onClick={handlePreviousPage}
    disabled={bookingPage === 1}
    className={`
      ${bookingPage === 1
        ? 'text-[#697077] cursor-not-allowed'
        : 'text-[#0F62FE]'
      }`}
  >
   <span className=' flex items-end gap-2 '><IoIosArrowBack className='w-5 h-5' /> Previous </span>
  </button>

  {[...Array(allPages)].map((_, index) => (
    <button
      key={index}
      onClick={() =>setBookingPage (index + 1)}
      className={`px-4 py-2 
        ${bookingPage === index + 1
          ? 'bg-[#A6C8FF] text-[#0F62FE]'
          : 'text-[#0F62FE] '
        }`}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={handleNextPage}
    disabled={bookingPage === allPages}
    className={`
      ${bookingPage === allPages
        ? 'text-[#697077] cursor-not-allowed'
        : 'text-[#0F62FE]'
      }`}
  >
    <span className='flex items-end gap-2 '>Next <IoIosArrowForward className='w-5 h-5' /></span>
  </button>
</div>
    </div>
  )
}

export default BookingTable