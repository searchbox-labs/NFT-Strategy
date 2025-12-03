import React from 'react';
import { ArrowUp } from 'lucide-react';

const StrategyCard = ({ rank, title, token, volume, color, performer }) => (
  <div className="flex-shrink-0 w-64 p-4 rounded-xl bg-gray-900/70 border border-gray-800 hover:border-purple-500 transition cursor-pointer">
    <div className="flex justify-between items-start">
      <div className="flex items-center">
        <div className={`w-9 h-9 rounded-md mr-3 flex-shrink-0`} style={{ backgroundColor: color }}>
          {color === 'transparent' && (
            <div className="w-full h-full flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2021.svg" alt="ETH" className="w-6 h-6 object-contain" />
            </div>
          )}
        </div>
        <div>
          <div className="text-sm font-medium">{rank} <span className='text-gray-300'>{title}</span></div>
          <div className="text-xs text-green-400 font-medium mt-0.5">{token}</div>
          <div className="text-xs text-gray-400 font-light mt-0.5">Vol. <span className='text-white'>${volume}</span></div>
        </div>
      </div>
      <ArrowUp className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
    </div>
    
    {performer && (
      <div className="flex items-center mt-3 pt-3 border-t border-gray-800">
        <div className="w-5 h-5 rounded-full mr-2 bg-gray-700"></div>
        <div className="text-xs text-gray-400">#9 RektStrate...</div>
      </div>
    )}
  </div>
);

const TrendingToday = ({ cardBg, borderColor }) => {
  // Mock data for horizontal scrolling
  const trendingData = [
    { rank: "#8", title: "RektStrate...", token: "SEKSTR", volume: "22.57K", color: "#ffcc00" },
    { rank: "#9", title: "RektStrate...", token: "SEKSTR", volume: "18.02K", color: "#0066ff" },
    { rank: "#10", title: "MoonShot...", token: "MOON", volume: "15.32K", color: "#9b59b6" },
    { rank: "#11", title: "DeFi King...", token: "DFK", volume: "14.89K", color: "#3498db" },
    { rank: "#12", title: "NFT Maxi...", token: "NFTM", volume: "13.45K", color: "#e74c3c" },
    { rank: "#13", title: "Yield Farm...", token: "YLD", volume: "12.67K", color: "#f1c40f" },
    { rank: "#14", title: "GameFi Pro...", token: "GAME", volume: "11.89K", color: "#e67e22" },
    { rank: "#15", title: "Liquid Stkr...", token: "LST", volume: "10.45K", color: "#2ecc71" },
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-gray-300">Trending Today</h3>
        <div className="flex space-x-2">
          <button className="text-xs text-gray-400 hover:text-white">←</button>
          <button className="text-xs text-gray-400 hover:text-white">→</button>
        </div>
      </div>
      <div className="relative overflow-hidden group">
        {/* Horizontal auto-scrolling container */}
        <div className="flex space-x-4 animate-scroll-horizontal-reverse">
          {[...trendingData, ...trendingData].map((item, index) => (
            <StrategyCard key={index} {...item} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default TrendingToday;