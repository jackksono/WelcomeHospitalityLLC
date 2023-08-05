import React, {useState, useEffect} from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import InitialPage from "./InitialPage";
import Fade from 'react-reveal/Fade'
import '../index.css'

const Home = () => {
  const [ showContent, setShowContent ] = useState(false)
  const navigate = useNavigate()
  
  const handleFadeOutComplete = () => {
    setShowContent(true);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

    return (
      <>
      {showContent ? (
        <Fade duration={5000}>
          <div className="fixed flex flex-col items-center justify-center w-screen h-screen bg-center bg-no-repeat bg-cover bg-banner drop-shadow-xl fade-in">
            
            <div className="absolute left-0 items-center justify-center w-full bottom-20">
              <div className="flex flex-row justify-center space-x-64">
                <>
                  <h1 className="text-7xl font-bold text-white duration-700 cursor-pointer hover:underline font-Nanum underline-offset-[20px]">CONCEPTS</h1>
                  <h2 className="text-7xl font-bold text-white duration-700 cursor-pointer hover:underline font-Nanum underline-offset-[20px]" >MARKETING</h2>
                </>
              </div>
            </div>
        </div>
      </Fade>
      ) : (
        <InitialPage className='fade-out' onFadeOutComplete={() => setShowContent(true)} />
      )}
        </>
    )
}

export default Home