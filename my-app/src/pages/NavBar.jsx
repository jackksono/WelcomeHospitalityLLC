import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
// import AboutUs from "./AboutUs"
import Logo from '../Images/Logos/Logo.png'


const NavBar = () => {

    const [ selectedPage, setSelectedPage ] = useState()
    const navigate = useNavigate();

    const onToggleMenu = () => {
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
        <div className="flex items-start justify-between w-full h-full">
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt='Logo' className="lg:w-100 lg:h-60 lg:mb-20">
              </img>
            </Link>
          </div>
          
          <div className="absolute top-0 mt-4 mr-8 text-4xl text-white duration-1000 lg:right-20 lg:pt-10">
            <button >
                <ion-icon name="menu" id="menu" onClick={onToggleMenu} className='focus:duration-1000'></ion-icon>
              </button>
          </div>

          <div className="flex flex-row-reverse items-center hidden gap-20 text-lg nav-links lg:pt-16 lg:pr-48">
          
              <Link to="/about-us">
                <button className="text-white">
                  Executive Leadership
                </button>
              </Link>
              <Link to="/contact-us">
                <button className="text-white">Contact Us</button>
              </Link>
           
          </div>
        </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </>
    )
}

export default NavBar