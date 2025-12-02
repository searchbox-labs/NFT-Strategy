import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';         
import Sidebar from '../components/Sidebar';
import TokenSearchSection from '../components/TokenSearchSection';
import TrendingToday from '../components/TrendingToday';
import LatestStrategies from '../components/LatestStrategies';
import TopPerformers from '../components/TopPerformers';
import StrategyTable from '../components/StrategyTable';
import TradingToday from '../components/TradingToday';

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
        <TokenSearchSection cardBg={cardBg} borderColor={borderColor} />
        
        {/* 4. Trending Today + Latest Strategies - Side by side */}
        <div className="flex mb-8">
          <div className="flex-1">
            <TrendingToday cardBg={cardBg} borderColor={borderColor} />
          </div>
          <div className="flex-1">
            <LatestStrategies cardBg={cardBg} borderColor={borderColor} />
          </div>
        </div>
        
        {/* 5. Top Performers Today - Full width */}
        <TopPerformers cardBg={cardBg} borderColor={borderColor} />
        
        {/* 6. Sidebar + Table - Side by side */}
        <div className="flex px-8">
          <div className="w-64 mr-6">
            <Sidebar cardBg={cardBg} borderColor={borderColor} />
          </div>
          <StrategyTable />
        </div>
        
        {/* 7. Trading Today - Placed appropriately (you can adjust position) */}
        <div className="px-8 mt-8">
          <TradingToday cardBg={cardBg} borderColor={borderColor} />
        </div>
      </div>
    </div>
  );
};

export default Landing;