import React, { useContext } from 'react'
import { themedatacontext } from '../Context/ThemeContext';

const Button = () => {

  const [theme,settheme] = useContext(themedatacontext)

  const change = () =>{
    theme==='light'?settheme('dark'):settheme("light")
  }

  return (
    <div >
      <button className='bg-cyan-400 p-4 m-10' onClick={change}>Click here {theme}</button>
    </div>
  )
}

export default Button