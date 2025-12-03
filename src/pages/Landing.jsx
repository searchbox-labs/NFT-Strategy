import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';         
import Sidebar from '../components/Sidebar';
import TokenSearchSection from '../components/TokenSearchSection';
import TrendingToday from '../components/TrendingToday';
import LatestStrategies from '../components/LatestStrategies';
import TopPerformers from '../components/TopPerformers';
import StrategyTable from '../components/StrategyTable';
import Footer from '../components/Footer';

const Landing = () => {
  const darkBg = 'bg-black'; 
  const cardBg = 'bg-gray-900/70'; 
  const borderColor = 'border-gray-800';
  
  // State for responsive sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  
  // State for sticky search bar
  const [isSearchSticky, setIsSearchSticky] = useState(false);
  
  // Handle scroll for sticky search bar
  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('.hero-section');
      if (heroElement) {
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        setIsSearchSticky(heroBottom <= 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${darkBg} text-white font-sans flex flex-col`}>
      {/* 1. Header with sticky search */}
      <Header isSearchSticky={isSearchSticky} />
      
      {/* Sticky Token Search Section when hero is scrolled past */}
      {isSearchSticky && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-black border-b border-gray-800 shadow-lg">
          <div className="px-4 py-3">
            <TokenSearchSection 
              cardBg={cardBg} 
              borderColor={borderColor} 
              isCompact={true}
            />
          </div>
        </div>
      )}
      
      {/* Main content with padding to account for fixed header */}
      <div className={`pt-[74px] flex-1 ${isSearchSticky ? 'pt-32' : ''}`}>
        
        {/* 2. Hero - Full width section */}
        <div className="hero-section">
          <Hero />
        </div>
        
        {/* 3. Token Search Section - Full width (hidden when sticky) */}
        {!isSearchSticky && (
          <div className="px-4 md:px-8">
            <TokenSearchSection cardBg={cardBg} borderColor={borderColor} />
          </div>
        )}
        
        {/* Mobile sidebar toggle button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed bottom-4 right-4 z-50 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-white text-lg">☰</span>
        </button>
        
        {/* Mobile sidebar overlay */}
        {isSidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-70 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        {/* 4. Two-column layout for Trending/Top Performers and Latest Strategies */}
        <div className="flex flex-col lg:flex-row px-4 md:px-8 mb-8 gap-8">
          {/* Left Column: Trending Today + Top Performers Today */}
          <div className="lg:w-1/2 space-y-8">
            <TrendingToday cardBg={cardBg} borderColor={borderColor} />
            <TopPerformers cardBg={cardBg} borderColor={borderColor} />
          </div>
          
          {/* Right Column: Latest Strategies */}
          <div className="lg:w-1/2">
            <LatestStrategies cardBg={cardBg} borderColor={borderColor} />
          </div>
        </div>
        
        {/* 5. Sidebar + Table - Side by side */}
        <div className="flex flex-col lg:flex-row px-4 md:px-8 gap-6">
          {/* Sidebar for desktop, overlay for mobile */}
          <div className={`
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 transition-transform duration-300 ease-in-out
            lg:w-64 w-72 fixed lg:static top-0 left-0 h-full lg:h-auto z-50 lg:z-auto
            bg-black lg:bg-transparent
          `}>
            <Sidebar 
              cardBg={cardBg} 
              borderColor={borderColor} 
              onClose={() => setIsSidebarOpen(false)}
            />
          </div>
          
          {/* Table */}
          <div className="flex-1">
            <StrategyTable 
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
              onPageChange={setCurrentPage}
              onRowsPerPageChange={setRowsPerPage}
            />
          </div>
        </div>
      </div>
      
      {/* 7. Footer - At the very bottom */}
      <Footer />
    </div>
  );
};

export default Landing;