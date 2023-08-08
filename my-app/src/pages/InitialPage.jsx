import React, { useEffect, useState } from 'react';
import '../index.css'

const InitialPage = ({ onFadeOutComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const fadeOutAnimationDuration = 1000;
      const timer = setTimeout(() => {
        onFadeOutComplete();
      }, fadeOutAnimationDuration);

      return () => clearTimeout(timer);
    }
  }, [fadeOut, onFadeOutComplete]);

  return (
    <div
      className={`fixed w-screen h-screen bg-black bg-cover bg-center flex items-center justify-center transition-opacity ${
        fadeOut ? 'fade-out' : ''
      }`}
    >
      <h1 className="flex items-center justify-center text-5xl text-white font-Italiana ">
        "a <span className='px-2 font-bold text-amber-400 font-Italiana'>WARM</span> welcome from experienced professionals."
      </h1>
    </div>
  );
};

export default InitialPage;
