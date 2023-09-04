import React from 'react'
import EventPlanningIMG from '../../Images/WebImages/EventPlanning.jpg'
const EventPlanning = () => {
  return (
    <div className='w-screen h-screen overflow-auto max-h-min pt-28 bg-stone-900'>

      <div className='relative z-0 flex items-center justify-center w-screen h-full'>
        <img className='object-cover w-screen h-3/4' src={EventPlanningIMG} alt='EventPlanningIMG'></img>
      </div>
    </div>
  )
}

export default EventPlanning