import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState("")
  const [details, setdetails] = useState("")
  const [task, settask] = useState([])

  const eventhandler = (e) => {
    e.preventDefault()
    const copy=[...task];
    copy.push({title,details})
    settask(copy)
    settitle("")
    setdetails("")
  }

  return (
    <div className='h-screen w-full bg-black text-white flex'>
      <form className='flex flex-col items-start gap-2 p-10 w-1/2' onSubmit={(e)=>{
        eventhandler(e)
      }}>
        <h1 className='text-7xl font-bold'>Add Notes</h1>
        <label htmlFor="title"></label>
        <input className='h-25 text-4xl border-2 rounded-xl p-4 w-full' type="text" id='title' required placeholder='Title' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}
        />
        <label htmlFor="detail"></label>
        <textarea className='h-60 text-4xl border-2 rounded-xl p-4 w-full' name="text" id="detail" required placeholder='Enter notes heading' value={details} onChange={(e)=>{
          setdetails(e.target.value)
        }}></textarea>
        <button className='h-20 className=text-2xl rounded-xl p-2 w-full bg-white text-black font-bold text-4xl active:scale-95 cursor-pointer'>Add Notes</button>
      </form>
      <div className="w-1/2 p-10">
        <h1 className='text-7xl font-bold'>Recent Notes</h1>
        <div className="mt-4 flex gap-4 flex-wrap h-75 w-60 bg-white rounded-xl">
          {task.map(function(elem,idx){
            return <div key={idx} className="h-75 w-60 bg-white rounded-xl flex justify-between flex-col items-start relative">
              <div>
                <h3 className='text-black flex-wrap text-2xl font-bold leading-tight'>{elem.title}</h3>
                <p className='mt-4 text-black text-xl font-semibold leading-tight'>{elem.details}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App