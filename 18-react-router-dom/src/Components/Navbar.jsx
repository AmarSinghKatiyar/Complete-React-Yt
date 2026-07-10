import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav className='h-20 flex justify-between items-center px-10 py-2 font-bold bg-blue-500 text-3xl'>
                <h3 className='cursor-pointer'>AMAR</h3>
                <div className='flex gap-5'>
                    <Link to='/' className='cursor-pointer'>HOME</Link>
                    <Link to='/About' className='cursor-pointer'>ABOUT</Link>
                    <Link to='/Contact' className='cursor-pointer'>CONTACT</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar