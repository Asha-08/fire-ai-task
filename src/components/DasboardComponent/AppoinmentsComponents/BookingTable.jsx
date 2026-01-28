import React from 'react'

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
    }
  ];
  return (
    <div>
        <div className="overflow-x-auto">
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
      {bookings.map((booking) => (
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
    </div>
  )
}

export default BookingTable