import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const TokenSearchSection = ({ cardBg, borderColor }) => (
  <div className="flex justify-between items-center mb-6 px-8">
    <div className="flex items-center space-x-3">
      {/* Token Selector */}
      <div className={`flex items-center ${cardBg} border ${borderColor} rounded-lg p-2 px-3`}>
        <div className="w-5 h-5 rounded-full bg-purple-500/80 mr-2"></div>
        <span className="text-sm font-medium">Ethereum</span>
        <ChevronDown className="w-3 h-3 text-gray-400 ml-2" />
      </div>

      {/* Strategy Search */}
      <div className={`flex items-center ${cardBg} rounded-lg px-3 py-2 w-72 border ${borderColor}`}>
        <Search className="w-4 h-4 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search strategies"
          className="bg-transparent text-sm placeholder-gray-400 focus:outline-none w-full"
        />
      </div>
    </div>

    {/* ERC Filters */}
    <div className="flex items-center space-x-2 text-sm font-medium">
      <span className="px-3 py-1.5 rounded-lg bg-gray-700 text-white cursor-pointer">ALL</span>
      <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">ERC 721</span>
      <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">ERC 115</span>
      <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">ERC 20</span>
      <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">Recursive</span>
      <button className="ml-4 px-4 py-1.5 text-sm rounded-lg bg-purple-600 hover:bg-purple-700 font-medium transition">
        Deploy a Strategy
      </button>
    </div>
  </div>
);

export default TokenSearchSection;