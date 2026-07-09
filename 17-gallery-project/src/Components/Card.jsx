import React from 'react'

const Card = (props) => {

    // console.log(props);
    

  return (
    <div>
        <a href={props.elem.url} target='_blank'>
          <div className='h-55 bg-white overflow-hidden rounded-xl'>
          <img className='h-full w-full object-cover cursor-pointer' src={props.elem.download_url} alt="image not found" />
        </div>
        <h3 className='mt-1.5 text-xl font-bold'>{props.elem.author}</h3>
        </a>

        
    </div>
  )
}

export default Card 