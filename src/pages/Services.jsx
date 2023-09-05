import React from 'react'
import ServiceImage from '../Images/WebImages/ServiceImage.jpg'

const Services = () => {
  return (
    <div className='w-screen h-screen overflow-auto pt-28 bg-stone-900'>
      <div className='relative z-0 flex items-center justify-center w-screen h-full'>
        <img className='object-cover w-screen h-3/4' src={ServiceImage} alt='serviceImage'></img>
        <h1 className='absolute text-6xl text-white sm:pt-80 font-Italiana sm:left-60'>Services</h1>
      </div>

      <div className='flex flex-col items-center justify-center h-auto pb-20 my-20 text-white lg:px-12 font-Italiana'>
        <div className='w-3/4 space-y-4 text-left'>
          <div className='flex items-center justify-center text-8xl'>
            <h1>Services in Las Vegas</h1>
          </div>
          <p>At Warm Hospitality, our unwavering commitment is to uplift and redefine the hospitality industry through our innovative consulting services. With a wealth of experience and a team of seasoned professionals, we offer a diverse array of customized solutions crafted to empower hotels, resorts, restaurants, and various other players in the world of hospitality.</p>
          <p>Our service spectrum encompasses every facet of the hospitality sector, spanning strategic planning, operational excellence, revenue optimization, and the enhancement of the guest experience. We engage closely with our clients to gain a deep understanding of their distinct needs and challenges, ensuring that our recommendations are not only pragmatic but also aligned with their overarching business objectives.</p>
          <p>We provide comprehensive support to help your business shine as a paragon of hospitality excellence. Whether you're embarking on a new venture, seeking to rejuvenate an existing establishment, or aiming to bolster your financial performance, Warm Hospitality is your trusted partner in achieving enduring success within the ever-evolving landscape of the hospitality industry.</p>
        </div>
      </div>

        <div className='grid grid-cols-3'>
            <div>
              <img></img>
              <p></p>
            </div>
        </div>
      <div>
      
    </div>
    </div>
  )
}

export default Services