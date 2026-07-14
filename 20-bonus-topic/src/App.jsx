import React, { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {

  const [theme, settheme] = useState('dark')

  return (
    <div className={`h-screen w-full p-10 text-3xl ${
        theme === 'dark'
          ? 'bg-black text-white'
          : 'bg-white text-black'
    }`}>
      <h1>the color of theme is {theme}</h1>
      <Navbar theme={theme} settheme={settheme} />
    </div>
  )
}

export default App