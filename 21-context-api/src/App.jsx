import React,{ useContext } from 'react'
import Navbar from './Components/Navbar'
import Button from './Components/Button'
import { themedatacontext } from './Context/ThemeContext'

const App = () => {

  const [theme] = useContext(themedatacontext)


  return (
    <div className={`h-screen w-full font-extrabold text-3xl ${
      theme==='light'?'bg-indigo-400 text-black':'bg-gray-800'
    }`}>
      <Navbar />
      <Button />
    </div>
  )
}

export default App