import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden relative shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="bg-image" />
        <Rightcardcontent idx={props.idx} color={props.color} tag={props.tag} />
    </div>
  )
}

export default RightCard