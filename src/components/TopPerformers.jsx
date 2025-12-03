import React from 'react';
import { ArrowUp } from 'lucide-react';

const StrategyCard = ({ rank, title, token, volume, color }) => (
  <div className="flex-shrink-0 w-64 p-4 rounded-xl bg-gray-900/70 border border-gray-800 hover:border-purple-500 transition cursor-pointer">
    <div className="flex justify-between items-start">
      <div className="flex items-center">
        <div className={`w-9 h-9 rounded-md mr-3 flex-shrink-0`} style={{ backgroundColor: color }}>
          {title.includes('Ape') && (
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
  </div>
);

const TopPerformers = ({ cardBg, borderColor }) => {
  // Mock data for horizontal scrolling
  const performersData = [
    { rank: "#1", title: "Ape(10)T...", token: "APE10", volume: "45.2K", color: "transparent" },
    { rank: "#2", title: "Prophet...", token: "PROPH", volume: "38.7K", color: "#33cc33" },
    { rank: "#3", title: "MoonShot...", token: "MOON", volume: "32.1K", color: "#9b59b6" },
    { rank: "#4", title: "DeFi King...", token: "DFK", volume: "28.9K", color: "#3498db" },
    { rank: "#5", title: "NFT Maxi...", token: "NFTM", volume: "25.6K", color: "#e74c3c" },
    { rank: "#6", title: "Yield Farm...", token: "YLD", volume: "22.3K", color: "#f1c40f" },
    { rank: "#7", title: "GameFi Pro...", token: "GAME", volume: "19.8K", color: "#e67e22" },
    { rank: "#8", title: "Liquid Stkr...", token: "LST", volume: "17.4K", color: "#2ecc71" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-gray-300">Top Performers Today</h3>
        <div className="flex space-x-2">
          <button className="text-xs text-gray-400 hover:text-white">←</button>
          <button className="text-xs text-gray-400 hover:text-white">→</button>
        </div>
      </div>
      <div className="relative overflow-hidden group">
        {/* Horizontal auto-scrolling container */}
        <div className="flex space-x-4 animate-scroll-horizontal-reverse">
          {[...performersData, ...performersData].map((item, index) => (
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

export default TopPerformers;