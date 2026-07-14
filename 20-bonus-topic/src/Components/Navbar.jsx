import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <button className='bg-amber-400 text-black' onClick={()=>{
            props.settheme(props.theme==='light'?'dark':'light')
        }}>change color</button>
    </div>
  )
}

export default Navbar