import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full w-2/3  p-4 flex flex-nowrap gap-5 overflow-x-auto rounded-4xl'>
        {props.users.map(function(ele,idx){

            return <RightCard key={idx} idx={idx} img={ele.img} intro={ele.intro} color={ele.color} tag={ele.tag} />
        })}
    </div>
  )
}

export default Rightcontent