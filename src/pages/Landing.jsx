import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';         
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const Landing = () => {
  const darkBg = 'bg-black'; 
  const cardBg = 'bg-gray-900/70'; 
  const borderColor = 'border-gray-800'; 

  return (
    <div className={`min-h-screen ${darkBg} text-white font-sans`}>
      {/* 1. Header - Full width, fixed at top */}
      <Header />
      
      {/* Main content with padding to account for fixed header */}
      <div className="pt-[74px]"> {/* This pushes everything down below the fixed header */}
        
        {/* 2. Hero - Full width section */}
        <Hero />
        
        {/* 3. Sidebar + Main Content - Side by side below hero */}
        <div className="flex">
          {/* Sidebar */}
          <Sidebar cardBg={cardBg} borderColor={borderColor} />
          
          {/* Main Content - Takes remaining space */}
          <MainContent cardBg={cardBg} borderColor={borderColor} />
        </div>
      </div>
    </div>
  );
};

export default Landing;