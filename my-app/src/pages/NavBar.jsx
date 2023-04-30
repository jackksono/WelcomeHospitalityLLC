import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Logo from "../Images/Logo.png"

const NavBar = () => {

    const [ selectedPage, setSelectedPage ] = useState()
    const navigate = useNavigate();

    return (
        <>
      <nav className="fixed w-screen bg-secondary-500 h-[80px] z-10 drop-shadow-xl">
        <div className="flex justify-between w-full h-full px-20">
          <div className="flex items-center gap-10">
            <img
              alt="logo"
              src={Logo}
              onClick={() => navigate('/')}
              className="cursor-pointer"
            />
            <Link
              to="/"
              onClick={() => setSelectedPage('home')}
              className={`${
                selectedPage === 'home'
                  ? 'text-tertiary-500'
                  : 'text-primary-500'
              } hover:text-opacity-75`}
            >
              Home
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <Link to="/about-us">
              <button className="bg-primary-500 text-secondary-500">
                About Us
              </button>
            </Link>
            <Link to="/contact-us">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
    )
}

export default NavBar