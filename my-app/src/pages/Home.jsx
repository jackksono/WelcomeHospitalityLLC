import React, {useState} from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="fixed flex items-center justify-center w-screen h-screen bg-stone-900 drop-shadow-xl">
          <div className="text-center">
            <h1 className="text-3xl italic text-white lg:pb-72 font-Nanum">
              Experienced Professionals and<span className="italic"> Warm Hospitality.</span>
            </h1>
          </div>
              
              
            <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-full">
              <div className="flex flex-row space-x-64">
                <h1 className="text-7xl font-bold text-white duration-700 cursor-pointer hover:underline font-Nanum underline-offset-[20px]">CONCEPTS</h1>
                <h2 className="text-7xl font-bold text-white duration-700 cursor-pointer hover:underline font-Nanum underline-offset-[20px]" >MARKETING</h2>
              </div>
            </div>
        </div>
    )
}

export default Home