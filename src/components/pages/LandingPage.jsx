// components/LandingPage.jsx
import { useState } from 'react';
import Navbar from './Navbar';

const LandingPage = ({ currentBackground }) => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url('/images/background-${currentBackground}.jpg')` 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <Navbar />
        
        {/* Intro Text */}
        <div className="text-center pt-40 px-4 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to <span className="text-[color:var(--main-color)]">the Hidden Village</span> of Coders
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            "Guess the Naruto Character" is a fun game where players identify
            characters from pictures. With different difficulty levels, time
            limits, and hints, it's perfect for casual fans and die-hard
            enthusiasts to test their Naruto knowledge!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;