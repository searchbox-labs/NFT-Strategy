import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const TokenSearchSection = ({ cardBg, borderColor, isCompact = false }) => {
  if (isCompact) {
    return (
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Token Selector - Compact */}
          <div className={`flex items-center ${cardBg} border ${borderColor} rounded-lg p-1.5 px-2`}>
            <div className="w-4 h-4 rounded-full bg-purple-500/80 mr-1.5"></div>
            <span className="text-xs font-medium">ETH</span>
            <ChevronDown className="w-2.5 h-2.5 text-gray-400 ml-1" />
          </div>

          {/* Strategy Search - Compact */}
          <div className={`flex items-center ${cardBg} rounded-lg px-2 py-1.5 w-48 border ${borderColor}`}>
            <Search className="w-3 h-3 text-gray-400 mr-1.5" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-xs placeholder-gray-400 focus:outline-none w-full"
            />
          </div>
        </div>

        {/* ERC Filters - Compact */}
        <div className="flex items-center space-x-1">
          <span className="px-2 py-1 rounded-lg bg-gray-700 text-white cursor-pointer text-xs">ALL</span>
          <button className="ml-2 px-2 py-1 text-xs rounded-lg bg-purple-600 hover:bg-purple-700 font-medium transition">
            Deploy
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 space-y-4 lg:space-y-0">
      <div className="flex items-center space-x-3">
        {/* Token Selector */}
        <div className={`flex items-center ${cardBg} border ${borderColor} rounded-lg p-2 px-3`}>
          <div className="w-5 h-5 rounded-full bg-purple-500/80 mr-2"></div>
          <span className="text-sm font-medium">Ethereum</span>
          <ChevronDown className="w-3 h-3 text-gray-400 ml-2" />
        </div>

        {/* Strategy Search */}
        <div className={`flex items-center ${cardBg} rounded-lg px-3 py-2 w-full lg:w-72 border ${borderColor}`}>
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search strategies"
            className="bg-transparent text-sm placeholder-gray-400 focus:outline-none w-full"
          />
        </div>
      </div>

      {/* ERC Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-3 py-1.5 rounded-lg bg-gray-700 text-white cursor-pointer text-sm">ALL</span>
        <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer text-sm">ERC 721</span>
        <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer text-sm">ERC 1155</span>
        <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer text-sm">ERC 20</span>
        <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer text-sm">Recursive</span>
        <button className="px-4 py-1.5 text-sm rounded-lg bg-purple-600 hover:bg-purple-700 font-medium transition">
          Deploy a Strategy
        </button>
      </div>
    </div>
  );
};

export default TokenSearchSection;