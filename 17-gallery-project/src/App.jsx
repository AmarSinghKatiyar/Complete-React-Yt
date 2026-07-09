import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'

const App = () => {

  const [UserData, setUserData] = useState([])
  const [index, setindex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setUserData(response.data)
  }

  useEffect(() => {
    getdata()
  },[index])

  let printuser = <h3 className='text-gray-400 text-xs font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h3>
  if (UserData.length > 0) {
    printuser = UserData.map((elem, idx) => {
      // return elem.download_url
      return <div className='w-82 p-5' key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='h-screen w-full bg-gray-900 text-white overflow-auto scrollbar-none'>
      {/* <button className='bg-pink-400 px-13 py-7 m-15 active:scale-95 rounded-2xl' onClick={getdata}>Get Data</button> */}
      <div>
        {/* <h1 className='text-center font-bold text-8xl mt-4'>Pixora</h1> */}
        <h1 className="flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 via-blue-400 to-indigo-700 text-center mx-15 my-4 text-8xl font-bold border-2 border-blue-400 p-4 rounded-xl">
  Pixora
</h1>
      </div>
      <div className='flex flex-wrap gap-3'>
        {printuser}
      </div>
      <div className='flex justify-center align-center p-4 gap-4 mt-4'>
        <button style={{opacity:index==1?0.5:1}} className='bg-amber-400 text-black rounded-2xl px-4 py-2 font-bold text-2xl active:scale-95 cursor-pointer' onClick={()=>{
          if(index>1){
            setindex(index-1)
            setUserData([])
          }
          
        }}>
          Prev
        </button>
        <h4 className='font-bold text-2xl py-2 px-4'>Page {index}</h4>
        <button className='bg-amber-400 text-black rounded-2xl px-4 py-2 font-bold text-2xl active:scale-95 cursor-pointer' onClick={()=>{
          setindex(index+1)
          setUserData([])
          
        }}>
          Next
          </button>
      </div>

    </div>
  )
}

export default App