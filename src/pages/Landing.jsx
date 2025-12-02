import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const Landing = () => {
  // Define dark colors to match the image
  const darkBg = 'bg-black'; // Main container background
  const cardBg = 'bg-gray-900/70'; // Card/section background
  const borderColor = 'border-gray-800'; // Border color

  return (
    <div className={`min-h-screen ${darkBg} text-white font-sans`}>
      <Header />
      <div className="flex pt-16"> {/* Adjust padding top for fixed header */}
        <Sidebar cardBg={cardBg} borderColor={borderColor} />
        <MainContent cardBg={cardBg} borderColor={borderColor} />
      </div>
    </div>
  );
};

export default Landing;