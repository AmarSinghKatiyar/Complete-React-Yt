import React from 'react'

const App = () => {

  function singleclick(){
    console.log('hello button click single time')
    alert('hello button click single time')
  }

  return (
    <div>
      <button onClick={singleclick}   >Click Me</button>
    </div>
  )
}

export default App