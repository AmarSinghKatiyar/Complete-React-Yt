import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setname] = useState('')
  const [pass, setpass] = useState(1234567890)

  const eventHandler = (e) =>{
    e.preventDefault()
    alert(`Successfully SignIn Welcome ${name}`)
    setname('')
    setpass()
  }

  return (
    <div className='main'>
      <form onSubmit={(e) =>{
        eventHandler(e)
      }}>
        <label htmlFor="name">Name:- </label>
        <input type="text" id='name' placeholder='abc...' required value={name} onChange={(e) =>{
          setname(e.target.value)
        }}/><br />
        <label htmlFor="pass">Password:- </label>
        <input type="password" id='pass' required value={pass} onChange={(e) =>{
          setpass(e.target.value)
        }}/><br />
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default App