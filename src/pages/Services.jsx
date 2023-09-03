import React from 'react'
import ServiceImage from '../Images/WebImages/ServiceImage.jpg'

const Services = () => {
  return (
    <div className='w-screen h-screen overflow-auto pt-28 bg-stone-900'>
      <div className='relative z-0 flex items-center justify-center w-screen h-full'>
        <img className='object-cover w-screen h-3/4' src={ServiceImage} alt='serviceImage'></img>
        <h1 className='absolute text-6xl text-white sm:pt-80 font-Italiana sm:left-60'>Services</h1>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Services