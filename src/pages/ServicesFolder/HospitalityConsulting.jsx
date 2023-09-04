import React from 'react'
import HospitalityConsultingIMG from '../../Images/WebImages/HospitalityConsulting.jpg'
const HospitalityConsulting = () => {
  return (
    <div className='w-screen h-screen overflow-auto max-h-min pt-28 bg-stone-900'>

      <div className='relative z-0 flex items-center justify-center w-screen h-full'>
        <img className='object-cover w-screen h-3/4' src={HospitalityConsultingIMG} alt='HospitalityConsultingIMG'></img>
      </div>
    </div>
  )
}

export default HospitalityConsulting