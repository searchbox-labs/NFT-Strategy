import React from 'react';

const StrategyCard = ({ title, token, volume, color, change }) => (
  <div className="flex-shrink-0 w-48 p-3 rounded-lg bg-gray-900/70 border border-gray-800 hover:border-yellow-500 transition cursor-pointer">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className={`w-7 h-7 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center`} style={{ backgroundColor: `${color}20` }}>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
        </div>
        <div>
          <div className="text-xs font-semibold">{title}</div>
          <div className="text-xs text-gray-400 mt-0.5">{token}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-xs font-semibold">${volume}</div>
        <div className={`text-xs font-medium mt-0.5 ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </div>
      </div>
    </div>
  </div>
);

const LatestStrategies = ({ cardBg, borderColor }) => {
  // Mock data for horizontal scrolling - 3 sets of 3 strategies each
  const strategiesData = [
    { title: "SHITCOIN", token: "SNKYSTRATS", volume: "45.2K", color: "#ff4757", change: -5.4 },
    { title: "Diztwich", token: "VEXX001", volume: "32.8K", color: "#3498db", change: +12.4 },
    { title: "Prophet", token: "SOL-STF", volume: "28.9K", color: "#00d2d3", change: +8.7 },
    { title: "Wall Street", token: "MARELSSTR", volume: "25.6K", color: "#2ecc71", change: +15.8 },
    { title: "ETH Maxi", token: "ETHM", volume: "22.3K", color: "#9b59b6", change: +3.2 },
    { title: "Scotleion", token: "L0tA", volume: "19.8K", color: "#ff9f43", change: +7.9 },
    { title: "PUMP", token: "HULKRX", volume: "17.4K", color: "#e74c3c", change: +22.1 },
    { title: "Bored Ape", token: "BAYC", volume: "15.2K", color: "#00d2d3", change: +4.3 },
    { title: "CryptoPunk", token: "PUNK", volume: "13.8K", color: "#f1c40f", change: -2.1 },
    { title: "DeFi Whale", token: "WHALE", volume: "12.5K", color: "#9b59b6", change: +6.7 },
    { title: "NFT King", token: "NFTK", volume: "11.3K", color: "#e74c3c", change: +9.2 },
    { title: "Yield Farm", token: "YLD", volume: "10.8K", color: "#2ecc71", change: +11.5 },
  ];

  // Create 3 rows of horizontal scrolling
  const createRow = (startIndex, rowNumber) => {
    const rowData = [];
    for (let i = 0; i < 6; i++) {
      const dataIndex = (startIndex + i) % strategiesData.length;
      rowData.push(strategiesData[dataIndex]);
    }
    return rowData;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-gray-300">Latest Strategies</h3>
        <button className="text-xs text-gray-400 hover:text-white">View All →</button>
      </div>
      <div className="space-y-3">
        {/* Row 1 - Horizontal Scroll */}
        <div className="relative overflow-hidden group">
          <div className="flex space-x-3 animate-scroll-horizontal-row1">
            {[...createRow(0, 1), ...createRow(0, 1)].map((strategy, index) => (
              <StrategyCard key={index} {...strategy} />
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black to-transparent"></div>
        </div>

        {/* Row 2 - Horizontal Scroll (different speed/direction) */}
        <div className="relative overflow-hidden group">
          <div className="flex space-x-3 animate-scroll-horizontal-row2">
            {[...createRow(4, 2), ...createRow(4, 2)].map((strategy, index) => (
              <StrategyCard key={index} {...strategy} />
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black to-transparent"></div>
        </div>

        {/* Row 3 - Horizontal Scroll */}
        <div className="relative overflow-hidden group">
          <div className="flex space-x-3 animate-scroll-horizontal-row3">
            {[...createRow(8, 3), ...createRow(8, 3)].map((strategy, index) => (
              <StrategyCard key={index} {...strategy} />
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default LatestStrategies;