import React from 'react'

const App = () => {
  
  //localStorage.clear()
  //sessionStorage.clear()
  // localStorage.setItem('user','chotta-bheem')
  // localStorage.setItem('age','18')
  // const user = localStorage.getItem('user')
  // localStorage.removeItem('age')
  // const age = localStorage.getItem('age')

  localStorage.clear()

  const array = {
    user:'bheem',
    age:18,
    college:'MPEC'
  }

  localStorage.setItem('user',JSON.stringify(array))
  // const user=localStorage.getItem('user')
  const user=JSON.parse(localStorage.getItem('user'))

  // console.log(typeof(user));
  console.log(user);
  
  

  return (
    <div>App</div>
  )
}

export default App