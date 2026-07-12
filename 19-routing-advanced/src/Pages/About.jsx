import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const About = () => {

  // let navigate = useNavigate()

  // const clicked = () =>{
  //   navigate('/')
  // }

  return (
    <div className="h-[80%]">
      {/* Top Center Navigation */}
      {/* <div className="gap-2">
        <button onClick={()=>{
          navigate('/')
        }} className='bg-lime-700 font-bold text-2xl p-2 rounded-2xl m-2'>Return to home page</button>

        <button onClick={()=>{
          navigate(-1)
        }} className='bg-lime-700 font-bold text-2xl p-2 rounded-2xl m-2'>Return to Previous page</button>
      </div> */}
      <div className="flex justify-center items-center gap-10 pt-6">
        <Link className="text-3xl text-white hover:underline" to="/About/Men">
          Men
        </Link>
        <Link className="text-3xl text-white hover:underline" to="/About/Women">
          Women
        </Link>
        <Link className="text-3xl text-white hover:underline" to="/About/Kids">
          Kids
        </Link>
      </div>
      <Outlet />

      {/* Page Heading */}
      {/* <h1 className="flex justify-center items-center h-[80%] text-8xl font-bold underline text-white">
        About Page
      </h1> */}
    </div>
  )
}

export default About