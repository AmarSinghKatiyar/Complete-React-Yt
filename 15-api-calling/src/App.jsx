import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  // async function getdata(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }

  // const getdata = async () =>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()

  //   // console.log(response);
  //   console.log(data)
    
  // }

  const [data, setdata] = useState([])

  const getdata =async () =>{
    const {data} =await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data);

    // const {data} =await axios.get('https://picsum.photos/30')
    // console.log(data);

    setdata(data)
  }

  return (
    <div className='h-screen w-full text-white bg-black'>
      <button onClick={getdata} className='bg-gray-500'>DATA AA GAYA</button>
      <div>
        {data.map(function(elem,idx){
          return <h3 key={idx}>hello {elem.name} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App