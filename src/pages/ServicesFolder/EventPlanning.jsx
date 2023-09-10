import React from 'react'
import EventPlanningIMG from '../../Images/WebImages/EventPlanning.jpg'
const EventPlanning = () => {
  return (
    <div className='w-screen h-screen overflow-auto max-h-min pt-28 bg-stone-900'>

      <div className='relative z-0 flex items-center justify-center w-screen h-full'>
        <img className='object-cover w-screen h-3/4' src={EventPlanningIMG} alt='EventPlanningIMG'></img>
        <h1 className='absolute text-6xl text-white sm:pt-80 font-Italiana sm:left-60'>Event Planning</h1>
      </div>

      <div className='flex flex-col items-center justify-center h-auto pb-20 my-20 text-lg text-white lg:px-12 font-Italiana'>
      <div className='w-3/4 space-y-4 text-left'>
        <div className='flex items-center justify-center text-8xl'>
          <h1>Event Planning Services in Las Vegas</h1>
        </div>
        <p>At Warm Hospitality, we are not just a destination for exceptional drinks and vibrant ambiance; we are your partners in crafting unforgettable events and celebrations. Our dedicated event planning services are designed to elevate your gatherings, ensuring they are stylish, memorable, and hassle-free.</p>

        <h2 className='pt-10 text-3xl'>Our comprehensive event planning services encompass a wide range of offerings to meet your every need:</h2>
        
        <p>Venue Selection:</p>
        <p>Our stylish and versatile bar and lounge provide the perfect backdrop for a variety of events, from intimate gatherings to large-scale celebrations. Whether you're hosting a birthday party, corporate mixer, engagement soirée, or any special occasion, we have the ideal space to accommodate your guests.</p>

        <p>Customizable Menus:</p>
        <p>Our experienced culinary team crafts delectable menus that can be tailored to suit your event's theme and preferences. From tantalizing appetizers to craft cocktails, our food and beverage offerings are sure to impress.</p>

        <p>Event Design and Decor:</p>
        <p>Our talented design team can transform our space to match your vision, from elegant and sophisticated to fun and vibrant. We'll work with you to create a captivating atmosphere that leaves a lasting impression.</p>

        <p>Entertainment and Music:</p>
        <p>Elevate the energy of your event with our entertainment options, including live music, DJs, and more. We can curate the perfect playlist or connect you with talented performers to ensure the right vibe for your gathering.</p>

        <p>Professional Staffing:</p>
        <p>Our courteous and attentive staff will ensure that your guests are well taken care of, from the moment they arrive until the event's conclusion.</p>

        <p>Event Coordination:</p>
        <p>Our experienced event planners will handle all the logistics, timelines, and coordination, so you can relax and enjoy your event without worrying about the details.</p>

        <p>At Warm Hospitality, we understand that every event is unique. Our goal is to bring your vision to life and create an unforgettable experience for you and your guests. Whether you're celebrating a milestone or hosting a corporate event, let us be your partner in making it truly exceptional. Contact us today to start planning your next memorable gathering.</p>
      </div>
    </div>
    </div>
  )
}

export default EventPlanning