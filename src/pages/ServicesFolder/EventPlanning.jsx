import React from 'react'
import EventPlanningIMG from '../../Images/WebImages/EventPlanning.jpg'
const EventPlanning = () => {
  return (
    <div className='w-screen h-screen overflow-auto max-h-min pt-28 bg-stone-900'>

      <div className='relative z-0 flex items-center justify-center w-screen h-full'>
        <img className='object-cover w-screen h-3/4' src={EventPlanningIMG} alt='EventPlanningIMG'></img>
        <h1 className='absolute text-6xl text-white sm:pt-80 font-Italiana sm:left-60'>Event Planning</h1>
      </div>
    </div>
  )
}

export default EventPlanning