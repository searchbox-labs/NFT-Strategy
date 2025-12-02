import React from 'react';
import { ArrowUp } from 'lucide-react';

const StrategyCard = ({ rank, title, token, volume, color, performer, cardBg, borderColor }) => (
  <div className={`p-4 rounded-xl ${cardBg} border ${borderColor} hover:border-purple-500 transition cursor-pointer`}>
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

const TrendingToday = ({ cardBg, borderColor }) => (
  <div className="px-8 mb-8">
    <h3 className="text-base font-semibold text-gray-300 mb-4">Trending Today</h3>
    <div className="grid grid-cols-3 gap-4">
      <StrategyCard
        rank="#8"
        title="RektStrate..."
        token="SEKSTR"
        volume="22.57K"
        color="#ffcc00"
        cardBg={cardBg}
        borderColor={borderColor}
      />
      <StrategyCard
        rank="#9"
        title="RektStrate..."
        token="SEKSTR"
        volume="18.02K"
        color="#0066ff"
        cardBg={cardBg}
        borderColor={borderColor}
      />
      <StrategyCard
        rank="#9"
        title="RektStrate..."
        token="SEKSTR"
        volume="18.57K"
        color="#ffcc00"
        performer={true}
        cardBg={cardBg}
        borderColor={borderColor}
      />
    </div>
  </div>
);

export default TrendingToday;