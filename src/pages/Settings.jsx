import React from 'react'

const Settings = () => {
    
  return (
    <div className='min-h-screen '>
        <div>
            <div className='flex gap-15 text-[#FFFFFF] text-2xl'>
                <p>Profile</p>
                <p>Password Settings</p>
            </div>
        </div>

        <div className='mt-8'>
            <p className='text-[#FFFFFF] text-xl pb-6'>Profile Image</p>
            <div className='flex items-end gap-2' >
          <img
          className="w-28 h-28 rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

            <button className="btn bg-linear-to-b from-[#152252] to-[#111B3C] rounded-2xl text-[#FFFFFF] shadow-[#D2EAFF] ">Edit Profile</button>
        </div>
        </div>

        <div className="grid grid-cols-2 py-4 border-b border-[#192D71] w-95">
        <div>
          <h3 className="text-[#FFFFFF]">Full Name:</h3>
        </div>

        <div>
          <h3 className="text-[#FFFFFF]">Jane D.</h3>
        </div>
      </div>

       <div className="grid grid-cols-2 py-4 border-b border-[#192D71] w-95">
        <div>
          <h3 className="text-[#FFFFFF]">Email:</h3>
        </div>

        <div>
          <h3 className="text-[#FFFFFF]">jane@gmail.com</h3>
        </div>
      </div>

       <div className="grid grid-cols-2 py-4 border-b border-[#192D71] w-95">
        <div>
          <h3 className="text-[#FFFFFF]">Store Name:</h3>
        </div>

        <div>
          <h3 className="text-[#FFFFFF]">Ubreakfix Store</h3>
        </div>
      </div>

       <div className="grid grid-cols-2 py-4 w-95">
        <div>
          <h3 className="text-[#FFFFFF]">Store Address:</h3>
        </div>

        <div>
          <h3 className="text-[#FFFFFF]">123 Main Street, New York, NY 10001</h3>
        </div>
      </div>
    </div>
  )
}

export default Settings