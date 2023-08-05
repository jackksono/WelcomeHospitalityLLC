import React, {useState} from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import Logo from '../Images/Logos/Logo.png'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="fixed flex items-center justify-center w-screen h-screen bg-stone-800 drop-shadow-xl ">
          <div className="text-center">
            <h1 className="text-4xl text-white lg:pb-72">
              Your Experience,<span className="italic"> Refined.</span>
            </h1>
          </div>
              
              
            <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-full">
              <div className="flex flex-row space-x-64">
                <h1 className="text-6xl font-bold text-white duration-700 cursor-pointer hover:underline">CONCEPTS</h1>
                <h2 className="text-6xl font-bold text-white duration-700 cursor-pointer hover:underline">MARKETING</h2>
              </div>
            </div>
        </div>
    )
}

export default Home