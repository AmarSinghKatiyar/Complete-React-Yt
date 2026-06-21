import React from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    alert("DATA SUBMMITED SUCCESSFULLY")
  }

  return (
    <div className='main'>
      <form onSubmit={(e) => {
          submitHandler(e)
        }}>
        <label htmlFor="name">Name </label>
        <input type="text" id='name' placeholder='abc...' required /><br />
        <label htmlFor="pass">Password </label>
        <input type="password" id='pass' required /><br />
        <label htmlFor="email">Email </label>
        <input type="email" id='email' placeholder='abc@gmail.com' required />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default App