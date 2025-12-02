import React from 'react';

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

const TradingToday = ({ cardBg, borderColor }) => (
  <div className="w-64 flex-shrink-0">
    <h3 className="text-base font-semibold text-gray-300 mb-4">Trading Today</h3>
    <div className="space-y-3">
      <TradingCard
        title="Scotleion"
        token="L0tA"
        color="#ffcc00"
        shortName="L0tA"
        isBull={true}
        cardBg={cardBg}
        borderColor={borderColor}
      />
      <TradingCard
        title="PUMP"
        token="HULKRX"
        color="#33cc33"
        shortName="HULKRX"
        isBull={true}
        cardBg={cardBg}
        borderColor={borderColor}
      />
      {/* Add more trading cards as needed */}
    </div>
  </div>
);

export default TradingToday;