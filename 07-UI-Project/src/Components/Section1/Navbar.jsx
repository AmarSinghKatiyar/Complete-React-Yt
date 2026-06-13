import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-4'>
      <h4 className='bg-black text-white rounded-full text-1.5xl px-6 py-2 uppercase cursor-pointer'>Target Audience</h4>
      <button className='bg-gray-400 text-white text-1.5xl px-6 py-2 rounded-full uppercase tracking-widest cursor-pointer'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar