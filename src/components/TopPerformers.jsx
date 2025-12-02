import React from 'react';
import { ArrowUp } from 'lucide-react';

const StrategyCard = ({ rank, title, token, volume, color, cardBg, borderColor }) => (
  <div className={`p-4 rounded-xl ${cardBg} border ${borderColor} hover:border-purple-500 transition cursor-pointer`}>
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

const TopPerformers = ({ cardBg, borderColor }) => (
  <div className="px-8 mb-8">
    <h3 className="text-base font-semibold text-gray-300 mb-4">Top Performers Today</h3>
    <div className="grid grid-cols-3 gap-4">
      <StrategyCard
        rank="#9"
        title="Ape(10)T..."
        token="SEKSTR"
        volume="16.57K"
        color="transparent"
        cardBg={cardBg}
        borderColor={borderColor}
      />
      <TradingCard
        title="Wall Street"
        token="MARELSSTR"
        color="#33cc33"
        shortName="MARELsSTR"
        isBull={true}
        cardBg={cardBg}
        borderColor={borderColor}
      />
      <TradingCard
        title="ETH"
        token="SMAISSTR"
        color="#ffcc00"
        shortName="SMAISsTR"
        isBull={true}
        cardBg={cardBg}
        borderColor={borderColor}
      />
    </div>
  </div>
);

export default TopPerformers;