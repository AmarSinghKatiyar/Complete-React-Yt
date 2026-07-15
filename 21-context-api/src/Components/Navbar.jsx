import React, { useContext } from 'react'
import Nav2 from './Nav2'
//import { themedatacontext } from '../Context/ThemeContext'

const Navbar = () => {

  // const data = useContext(themedatacontext)
  // console.log(data)

  return (
    <div className='nav flex justify-between p-10 bg-amber-300'>
      <h2>AMAR</h2>
      <Nav2/>
    </div>
  )
}

export default Navbar