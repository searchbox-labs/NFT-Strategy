import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';         
import Sidebar from '../components/Sidebar';
import TokenSearchSection from '../components/TokenSearchSection';
import TrendingToday from '../components/TrendingToday';
import LatestStrategies from '../components/LatestStrategies';
import TopPerformers from '../components/TopPerformers';
import StrategyTable from '../components/StrategyTable';

const Landing = () => {
  const darkBg = 'bg-black'; 
  const cardBg = 'bg-gray-900/70'; 
  const borderColor = 'border-gray-800'; 

  return (
    <div className={`min-h-screen ${darkBg} text-white font-sans`}>
      {/* 1. Header - Full width */}
      <Header />
      
      {/* Main content with padding to account for fixed header */}
      <div className="pt-[74px]">
        
        {/* 2. Hero - Full width section */}
        <Hero />
        
        {/* 3. Token Search Section - Full width */}
        <div className="px-8">
          <TokenSearchSection cardBg={cardBg} borderColor={borderColor} />
        </div>
        
        {/* 4. Two-column layout for Trending/Top Performers and Latest Strategies */}
        <div className="flex px-8 mb-8 gap-8">
          {/* Left Column: Trending Today + Top Performers Today */}
          <div className="w-1/2 space-y-8">
            <TrendingToday cardBg={cardBg} borderColor={borderColor} />
            <TopPerformers cardBg={cardBg} borderColor={borderColor} />
          </div>
          
          {/* Right Column: Latest Strategies */}
          <div className="w-1/2">
            <LatestStrategies cardBg={cardBg} borderColor={borderColor} />
          </div>
        </div>
        
        {/* 5. Sidebar + Table - Side by side */}
        <div className="flex px-8 gap-6">
          <Sidebar cardBg={cardBg} borderColor={borderColor} />
          <StrategyTable />
        </div>
      </div>
    </div>
  );
};

export default Landing;