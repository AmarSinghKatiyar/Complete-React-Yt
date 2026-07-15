import React, { useContext } from 'react'
import { themedatacontext } from '../Context/ThemeContext'

const Nav2 = () => {

  const [theme,settheme] = useContext(themedatacontext)
  // console.log(settheme);
  return (
    <div className='nav2 flex gap-5'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{theme}</h4>
    </div>
  )
}

export default Nav2