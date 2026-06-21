import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10)

  const btnClicked = () => {
    setnum(prev => prev + 1)
    setnum(prev => prev + 1)
    setnum(prev => prev + 1)
    //increase value 3 times

  }

  const btnreset =() =>{
    setnum(prev=>0)
  }

  // function btnClicked(){
  //   setnum(num+1)
  // }
  // do same work as arrow function 

  return (

    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Get Value</button>
      <button onClick={btnreset}>RESET TO 0</button>
    </div>
  )
}

export default App