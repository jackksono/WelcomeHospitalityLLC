import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Headroom from 'react-headroom';

import Home from "./Home";
import ContactUs from "./ContactUs";
import Services from "./Services";
import AboutUs from "./AboutUs"
import Logo from '../Images/Logos/Logo.png'
import Loading from '../pages/Loading'

const ConciergeService = lazy(() => import('../pages/ServicesFolder/ConciergeService'))
const EventPlanning = lazy(() => import('../pages/ServicesFolder/EventPlanning'))
const HospitalityConsulting = lazy(() => import('../pages/ServicesFolder/HospitalityConsulting'))


const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen ] = useState(false)
  const closeTimerRef = useRef(null)

  const onToggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    const navLinks = document.querySelector('.nav-links')
    // console.log(navLinks)
    let tag = document.getElementById("menu")
    // console.log(tag.name)
    tag.name = tag.name === "close" ? "menu" : "close"
    // console.log(navLinks.classList)
    navLinks.classList.toggle('hidden')
  }


  const handleMouseEnterButton = () => {
    setIsDropDownOpen(true);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
  };

  const handleMouseLeaveButton = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsDropDownOpen(false);
    }, 200);
  };

  const handleMouseEnterDropdown = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
  };

  const handleMouseLeaveDropdown = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsDropDownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);
    return (
        <>
        
          <nav  className="fixed w-screen top-0 left-0 bg-transparent h-[150px] z-10 drop-shadow-xl">
          <Headroom>
            <div className="flex items-start justify-between lg:h-full lg:w-full">
              <div className="flex items-center mt-3 ml-2 sm:mr-20 sm:mt-0 lg:mr-40">
                <Link to="/">
                  <img 
                    src={Logo} 
                    alt='Logo' 
                    className="transform scale-[2] sm:scale-[1.5] lg:scale-[2.5] lg:ml-5 object-cover sm:object-fill lg:h-40 lg:mb-20 lg:mt-8">
                  </img>
                </Link>
              </div>
              
              <div className="absolute top-0 z-10 text-3xl text-white lg:text-5xl sm:text-4xl pt-9 right-7 lg:mt-4 lg:mr-8 lg:right-20 sm:right-10 md:pt-10 lg:pt-12">
                <button className='hover:text-black'>
                    <ion-icon  name="menu" id="menu" onClick={onToggleMenu}></ion-icon>
                  </button>
              </div>

              <div className={`flex flex-row-reverse z-0 items-center gap-7 text-[10px] pt-10 pr-20 sm:gap-10 lg:gap-20 sm:text-sm md:text-lg lg:text-2xl nav-links lg:pt-14 lg:pr-52 sm:pr-28 md:pt-10 md:gap-16 sm:mt-0 transition duration-500 ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                  <Link to="/contact-us">
                    <button className="text-white font-Italiana hover:text-black focus:text-gray-300">Contact</button>
                  </Link>

                  <div className="relative group">
                    <Link to='/services'>
                      <button
                        className="text-white font-Italiana hover:text-black focus:text-gray-300"
                        onMouseEnter={handleMouseEnterButton}
                        onMouseLeave={handleMouseLeaveButton}
                      >
                        Services
                      </button>
                    </Link>
                    {isDropDownOpen && (
                    <div
                      className="absolute z-10 flex justify-center text-center duration-1000 border border-black -left-24 bg-stone-900 space-x-7 sm:h-16 top-10"
                      onMouseEnter={handleMouseEnterDropdown}
                      onMouseLeave={handleMouseLeaveDropdown}
                    >
                      <div className="flex-1">
                        <Link to='/concierge-services'> 
                          <button className="w-full p-2 text-sm text-left text-white font-Italiana hover:text-stone-900 hover:bg-white">
                            Concierge Service
                          </button>
                        </Link>
                      </div>

                      <div className="flex-1">
                        <Link to='/event-planning'>
                          <button className="w-full p-2 text-sm text-left text-white font-Italiana hover:text-stone-900 hover:bg-white">
                            Event Planning
                          </button>
                        </Link>
                      </div>

                      <div className="flex-1">
                        <Link to='/hospitality-consulting'>
                          <button className="w-full p-2 text-sm text-left text-white font-Italiana hover:text-stone-900 hover:bg-white">
                            Hospitality Consulting
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}

                  </div>
                  <Link to="/about-us" className="relative group">
                    <button className="z-10 text-white font-Italiana hover:text-black focus:text-gray-300">About Us</button>
                  </Link>
              </div>
            </div>
            </Headroom>
          </nav>
         
          <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/concierge-services" element={<ConciergeService/>}/>
        <Route path="/event-planning" element={<EventPlanning/>}/>
        <Route path="/hospitality-consulting" element={<HospitalityConsulting/>}/>

      </Routes>
      </Suspense>
    </>
    )
}

export default NavBar