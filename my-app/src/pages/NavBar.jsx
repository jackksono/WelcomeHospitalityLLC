import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Services from "./Services";
import AboutUs from "./AboutUs"
import Logo from '../Images/Logos/Logo.png'


const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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

    return (
        <>
          <nav  className="fixed w-screen top-0 left-0 bg-transparent h-[150px] z-10 drop-shadow-xl">
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
                <button className=''>
                    <ion-icon name="menu" id="menu" onClick={onToggleMenu}></ion-icon>
                  </button>
              </div>

              <div className={`flex flex-row-reverse z-0 items-center gap-7 text-[10px] pt-10 pr-20 sm:gap-10 lg:gap-20 sm:text-sm md:text-lg lg:text-2xl nav-links lg:pt-14 lg:pr-52 sm:pr-28 md:pt-10 md:gap-16 sm:mt-0 transition duration-500 ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                 
                 
                  <Link to="/contact-us">
                    <button className="text-white font-Italiana">Contact</button>
                  </Link>
                  <Link to="/services">
                    <button className="text-white font-Italiana">Services</button>
                  </Link>
                  <Link to="/about-us">
                    <button className="z-10 text-white font-Italiana">
                      About Us
                    </button>
                  </Link>
                  
              
              </div>
            </div>
          </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
    </>
    )
}

export default NavBar