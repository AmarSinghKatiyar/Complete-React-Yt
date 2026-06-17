import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function Increase(){
    setnum(num+1)
  }

  function Decrease(){
    setnum(num-1)
  }

  function IncreaseBy5(){
    setnum(num+5)
  }


  return (
    <div className='h-screen w-full bg-black py-30 px-25'>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-15 text-5xl text-center font-bold uppercase'>Play the Game</h1>
      <h1 className='text-white bg-blue-400  text-center text-9xl min-w-fit mb-20 rounded-2xl drop-shadow-[0_0_15px_#22d3ee]'>{num}</h1>
      <div className="flex gap-x-15">
        <button onClick={Increase} className='text-white bg-emerald-600 hover:bg-emerald-700 px-10 py-7 rounded-2xl font-semibold text-3xl hover:drop-shadow-[0_0_15px_lime] cursor-pointer w-100'>Increase</button>
        <button onClick={Decrease} className='text-white bg-purple-600 hover:bg-purple-700 px-10 py-7 rounded-2xl font-semibold text-3xl hover:drop-shadow-[0_0_15px_pink] cursor-pointer w-100'>Decrease</button>
        <button onClick={IncreaseBy5} className='text-white bg-blue-600 hover:bg-blue-700 px-10 py-7 rounded-2xl font-semibold text-3xl hover:drop-shadow-[0_0_15px_deepskyblue] cursor-pointer w-100'>Increase by 5</button>
      </div>
    </div>
  )
}

export default App