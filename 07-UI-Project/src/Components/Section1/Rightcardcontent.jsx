import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-fullp-7 flex flex-col justify-between p-4">
            <h2 className='bg-white rounded-full h-13 w-13 flex items-center justify-center font-bold text-3xl'>{props.idx+1}</h2>
            <div className="flex flex-col justify-between gap-y-8">
                <p className='text-shadow-2xs text-xl text-white font-medium leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem accusamus animi mollitia, incidunt aperiam!</p>
                <div className="flex gap-15">
                    <button style={{backgroundColor:props.color}} className=' rounded-full text-2xl px-7 py-2.5 text-white'>{props.tag}</button>
                    <button className=' rounded-full text-2xl px-4 py-3 text-white '><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default Rightcardcontent