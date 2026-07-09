import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(0)

  function numchanging(){
    console.log("num li value change ho gayi");
  }

  function num2changing(){
    console.log("num2 ki value change ho gayi");
    
  }

  useEffect(function(){
    console.log("useEffect is running depend on num");
    numchanging()
  },[num])

  useEffect(() => {
    console.log("use effect runnning depend on num2");
  }, [num2])
  
  

  return (
    <div className='h-screen w-full bg-black text-white'>
      <h1>{num} {num2}</h1>
      <button className='bg-indigo-400' onClick={()=>{
        setnum(num+1)
      }}>click me</button>
      <button className='bg-indigo-400 ml-3' onClick={()=>{
        setnum2(num2+1)
      }}>click me</button>
    </div>
  )
}

export default App