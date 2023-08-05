import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
// import AboutUs from "./AboutUs"
import Logo from '../Images/Logos/Logo.png'


const NavBar = () => {

    const [ selectedPage, setSelectedPage ] = useState()
    const navigate = useNavigate();

    return (
        <>
        <nav  className="fixed w-screen top-0 left-0 bg-transparent h-[80px] z-10 drop-shadow-xl">
        <div className="flex items-start justify-between w-full h-full">
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt='Logo' className="lg:w-80 lg:h-40">
              </img>
            </Link>
          </div>
          
          <div className="flex items-center gap-10 lg:px-20">
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