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
    <div className='h-screen w-full bg-gradient-to-br from-slate-950 via-zinc-900 to-fuchsia-950 text-white flex'>
      <div className="w-1/2 p-5 ">
        <form className=' flex flex-col items-start gap-2 p-10 w-full h-180 bg-gradient-to-br from-slate-800 to-slate-900 border border-fuchsia-400/20 rounded-3xl' onSubmit={(e)=>{
        eventhandler(e)
      }}>
        <h1 className='text-7xl font-bold text-amber-300'>Add Notes</h1>
        <label htmlFor="title"></label>
        <input className='h-25 text-4xl border-2 rounded-xl p-4 w-full bg-slate-900/80 border-amber-400/40 text-white placeholder:text-slate-400' type="text" id='title' required placeholder='Title' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}
        />
        <label htmlFor="detail"></label>
        <textarea className='h-60 text-4xl border-2 rounded-xl p-4 w-full bg-slate-900/80 border-amber-400/40 text-white placeholder:text-slate-400' name="text" id="detail" required placeholder='Enter notes heading' value={details} onChange={(e)=>{
          setdetails(e.target.value)
        }}></textarea>
        <button className='h-20 className=text-2xl rounded-xl p-2 w-full bg-gradient-to-r from-amber-400 to-pink-500 hover:from-amber-300 hover:to-pink-400 text-slate-950 font-bold text-4xl active:scale-95 cursor-pointer mt-4'>Add Notes</button>
      </form>
      </div>
      <div className="w-1/2 p-14">
        <h1 className='text-7xl font-bold text-amber-300'>Recent Notes</h1>
        <div className="mt-5 flex items-start justify-start flex-wrap gap-4 w-full h-[90%] overflow-auto overflow-y-scroll scrollbar-none">
          {task.map(function(elem,idx){
            return <div key={idx} className="h-[50%] w-60 rounded-3xl flex flex-col justify-between flex-wrap  items-start relative overflow-y-auto bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover  pt-9 pl-5 overflow-auto overflow-y-scroll scrollbar-none">
              <div className='flex-wrap'>
                <h3 className='text-black flex-wrap text-2xl font-bold leading-tight'>{elem.title}</h3>
                <p className='mt-4 text-black text-xl font-semibold leading-tight '>{elem.details}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App