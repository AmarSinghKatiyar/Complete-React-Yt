import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetail = () => {

  const params = useParams()
  // use params is a hook used for dynamic routing

  return (
    <div className='flex justify-center items-center h-[80%] text-8xl font-bold underline'>
      <h1>{params.id} Project Details Page</h1>
      {/* anything that we written in search url we get that is called dynamic routing */}
    </div>
  )
}

export default ProjectDetail