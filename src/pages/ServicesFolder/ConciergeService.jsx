import React from 'react'
import ConciergeServiceIMG from '../../Images/WebImages/ConciergeService.jpg'
const ConciergeService = () => {
  return (
    <div className='w-screen h-screen overflow-auto max-h-min pt-28 bg-stone-900'>

    <div className='relative z-0 flex items-center justify-center w-screen h-full'>
      <img className='object-cover w-screen h-3/4' src={ConciergeServiceIMG} alt='ConciergeServiceIMG'></img>
      <h1 className='absolute text-6xl text-white sm:pt-80 font-Italiana sm:left-60'>Concierge Services</h1>
    </div>

    <div className='flex flex-col items-center justify-center h-auto pb-20 my-20 text-white lg:px-24 font-Italiana'>
      <div className='w-1/2 space-y-4 text-left'>
        <div className='flex items-center justify-center text-4xl'>
          <h1>Premier Concierge Services in Las Vegas</h1>
        </div>
        <p>Warm Hospitality, your trusted partner for top-tier concierge services in the vibrant city of Las Vegas. Our expert team is here to enhance your Las Vegas experience by providing unparalleled assistance, insights, and access to the city's finest attractions and entertainment.</p>

        <h2 className='pt-10 text-3xl'>Our Services:</h2>
        
        <p>Personalized Recommendations:</p>
        <p>Our seasoned Las Vegas experts will work closely with you to understand your preferences and desires. From world-class dining experiences and thrilling nightlife to family-friendly activities and cultural excursions, we curate personalized recommendations tailored to your unique interests.</p>

        <p>VIP Access:</p>
        <p>Unlock exclusive access to Las Vegas' most coveted venues, events, and experiences. We have established relationships with top-tier establishments, granting you VIP entry and priority reservations. </p>

        <p>Event Planning:</p>
        <p>Hosting a special event in Las Vegas? Let us handle the details. Our event planning services cover everything from venue selection and catering to entertainment and décor. Whether it's a corporate function, wedding, or private celebration, we ensure a flawless and memorable experience.</p>

        <p>24/7 Assistance:</p>
        <p>Our concierge services are available around the clock. Whether you have a last-minute request, need emergency assistance, or simply seek advice, our dedicated team is just a text away.</p>

        <h3 className='pt-10 text-3xl'>Why Choose Warm Hospitality?</h3>
        <p>Local Expertise: With a deep understanding of Las Vegas, our consultants have insider knowledge and connections that ensure you experience the city to the fullest.</p>
        <p>Tailored Experiences: We believe that every client is unique. We pride ourselves on delivering personalized solutions that cater to your specific needs and desires.</p>
        <p>Unparalleled Service: Our commitment to excellence means we go above and beyond to make your stay in Las Vegas unforgettable.</p>
        <p>When you choose Warm Hospitality, you're choosing to take your Las Vegas experience to the next level. Contact us today to start planning your exceptional journey through this extraordinary city.</p>
      </div>
    </div>
  </div>
  )
}

export default ConciergeService