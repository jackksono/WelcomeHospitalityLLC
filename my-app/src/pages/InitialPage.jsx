// InitialPage.js
import React, { useEffect, useState } from 'react';

const InitialPage = ({ onFadeOutComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

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
      className={`fixed w-screen h-screen bg-black flex items-center justify-center transition-opacity ${
        fadeOut ? 'fade-out' : ''
      }`}
    >
      <h1 className="text-3xl italic text-white lg:pb-96 font-Nanum">
        Experienced Professionals and<span className="italic"> Warm Hospitality.</span>
      </h1>
    </div>
  );
};

export default InitialPage;
