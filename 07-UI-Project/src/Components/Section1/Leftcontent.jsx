import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Herotext from './Herotext'
import Arrowtext from './Arrowtext'

const Leftcontent = () => {
  return (
    <div className='h-full w-1/4 flex flex-col items-left justify-between'>
        <Herotext />
        <Arrowtext />
    </div>
  )
}

export default Leftcontent