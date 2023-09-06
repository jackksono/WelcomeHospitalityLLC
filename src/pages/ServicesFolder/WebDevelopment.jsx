import React from 'react'
import WebDevelopmentIMG from '../../Images/WebImages/WebDevelopment.jpg'

const WebDevelopment = () => {
  return (
    <div className='w-screen h-screen overflow-auto max-h-min pt-28 bg-stone-900'>

      <div className='relative z-0 flex items-center justify-center w-screen h-full'>
        <img className='object-cover w-screen h-3/4' src={WebDevelopmentIMG} alt='WebDevelopmentIMG'></img>
        <h1 className='absolute text-6xl text-white sm:pt-80 font-Italiana sm:left-60'>Web Development</h1>
      </div>
    </div>
  )
}

export default WebDevelopment