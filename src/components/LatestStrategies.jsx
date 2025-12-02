import React from 'react';
import { ArrowUp } from 'lucide-react';

const TradingCard = ({ title, token, color, shortName, isBull, cardBg, borderColor }) => (
  <div className={`flex items-center p-3 rounded-lg ${cardBg} border ${borderColor} hover:border-yellow-500 transition cursor-pointer`}>
    <div className={`w-5 h-5 rounded-lg mr-3 flex-shrink-0`} style={{ backgroundColor: color }}></div>
    <div>
      <div className="text-xs font-semibold">{title}</div>
      <div className={`text-xs ${isBull ? 'text-yellow-500' : 'text-red-500'} font-medium mt-0.5`}>
        {isBull ? 'BULL' : 'SHORT'} <span className="text-gray-400 ml-1">{shortName}</span>
      </div>
    </div>
  </div>
);

const LatestStrategies = ({ cardBg, borderColor }) => (
  <div className="px-8 mb-8">
    <h3 className="text-base font-semibold text-gray-300 mb-4">Latest Strategies</h3>
    <div className="grid grid-cols-3 gap-4">
      <TradingCard
        title="SHITCOIN"
        token="SNKYSTRATS"
        color="#ff0000"
        shortName="SNKYSTRATs"
        isBull={false}
        cardBg={cardBg}
        borderColor={borderColor}
      />
      <TradingCard
        title="Diztwich"
        token="VEXX001"
        color="#3366cc"
        shortName="VEXX001"
        isBull={true}
        cardBg={cardBg}
        borderColor={borderColor}
      />
      <TradingCard
        title="Prophet"
        token="SOL-STF"
        color="#33cc33"
        shortName="SOL-STF"
        isBull={true}
        cardBg={cardBg}
        borderColor={borderColor}
      />
    </div>
  </div>
);

export default LatestStrategies;