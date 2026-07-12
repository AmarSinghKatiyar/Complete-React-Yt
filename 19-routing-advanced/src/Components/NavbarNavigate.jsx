import React from 'react'
import { useNavigate } from 'react-router-dom'


const NavbarNavigate = () => {

    let navigate = useNavigate()

  return (
    <div className="gap-2">
        <button onClick={()=>{
          navigate('/')
        }} className='bg-lime-700 font-bold text-2xl p-2 rounded-2xl m-2'>Return to home page</button>

        <button onClick={()=>{
          navigate(-1)
        }} className='bg-lime-700 font-bold text-2xl p-2 rounded-2xl m-2'>Return to Previous page</button>


        <button onClick={()=>{
          navigate(+1)
        }} className='bg-lime-700 font-bold text-2xl p-2 rounded-2xl m-2'>Return to Next page</button>
    </div>
  )
}

export default NavbarNavigate