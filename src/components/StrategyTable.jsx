import React from 'react';
import { ExternalLink, TrendingUp, TrendingDown, MoreVertical } from 'lucide-react';

const StrategyTable = ({ 
  currentPage, 
  rowsPerPage, 
  onPageChange, 
  onRowsPerPageChange 
}) => {

  const tableData = [
    {
      strategy: "PunkStrategy",
      type: "ERC 721",
      blockchain: "Ethereum",
      collection: "CryptoPunks",
      holdings: 36,
      progress: "63.6%",
      price: "$0.0639",
      volume24h: "$268.97K",
      marketCap: "$60.46M",
      burned: "53.6M",
      burnPercent: "5.4%",
      change24h: "+12.26%",
      isPositive: true
    },
    {
      strategy: "VibeStrategy",
      type: "ERC 721",
      blockchain: "Ethereum",
      collection: "Good Vibes Club",
      holdings: 634,
      progress: "96.8%",
      price: "$0.0062",
      volume24h: "$65.10K",
      marketCap: "$5.54M",
      burned: "105.0M",
      burnPercent: "10.5%",
      change24h: "-7.33%",
      isPositive: false
    },
    {
      strategy: "ChimpStrategy",
      type: "ERC 721",
      blockchain: "Ethereum",
      collection: "Chimpers",
      holdings: 392,
      progress: "98.3%",
      price: "$0.0051",
      volume24h: "$46.96K",
      marketCap: "$4.57M",
      burned: "105.7M",
      burnPercent: "10.6%",
      change24h: "-7.17%",
      isPositive: false
    },
    {
      strategy: "ApeStrategy",
      type: "ERC 721",
      blockchain: "Ethereum",
      collection: "Bored Ape Yacht Club",
      holdings: 48,
      progress: "64.1%",
      price: "$0.0020",
      volume24h: "$5.37K",
      marketCap: "$1.90M",
      burned: "55.5M",
      burnPercent: "5.6%",
      change24h: "+4.33%",
      isPositive: true
    },
    {
      strategy: "PudgyStrategy",
      type: "ERC 721",
      blockchain: "Ethereum",
      collection: "Pudgy Penguins",
      holdings: 51,
      progress: "89.7%",
      price: "$0.0017",
      volume24h: "$22.79K",
      marketCap: "$1.65M",
      burned: "0.0M",
      burnPercent: "0.0%",
      change24h: "-1.86%",
      isPositive: false
    },
    {
      strategy: "PainStrategy",
      type: "ERC 721",
      blockchain: "Ethereum",
      collection: "MAX PAIN AND FRENS",
      holdings: 243,
      progress: "38.2%",
      price: "$0.0011",
      volume24h: "$99.04K",
      marketCap: "$1.03M",
      burned: "41.7M",
      burnPercent: "4.2%",
      change24h: "-3.04%",
      isPositive: false
    },
    {
      strategy: "BirbStrategy",
      type: "ERC 721",
      blockchain: "Ethereum",
      collection: "Moonbirds",
      holdings: 63,
      progress: "4.6%",
      price: "$0.0010",
      volume24h: "$257.95",
      marketCap: "$934.24K",
      burned: "54.1M",
      burnPercent: "5.4%",
      change24h: "+1.31%",
      isPositive: true
    },
    {
      strategy: "Nakamigo",
      type: "ERC 721",
      blockchain: "Ethereum",
      collection: "Nakamigos",
      holdings: 103,
      progress: "100.0%",
      price: "$0.0007",
      volume24h: "$830.01K",
      marketCap: "$743.63K",
      burned: "0.8M",
      burnPercent: "0.1%",
      change24h: "+856.19%",
      isPositive: true
    },
    {
      strategy: "CheckStrategy",
      type: "ERC 721",
      blockchain: "Ethereum",
      collection: "Checks - VV Originals",
      holdings: 675,
      progress: "67.3%",
      price: "$0.0007",
      volume24h: "$1.40K",
      marketCap: "$653.38K",
      burned: "59.4M",
      burnPercent: "5.9%",
      change24h: "+1.80%",
      isPositive: true
    },
    {
      strategy: "MeebitStrategy",
      type: "ERC 721",
      blockchain: "Ethereum",
      collection: "Meebits",
      holdings: 140,
      progress: "23.8%",
      price: "$0.0007",
      volume24h: "$416.10",
      marketCap: "$626.90K",
      burned: "75.0M",
      burnPercent: "7.5%",
      change24h: "+0.78%",
      isPositive: true
    },
  ];

  // Pagination logic
  const totalPages = 6;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = tableData.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleRowsPerPageChange = (e) => {
    onRowsPerPageChange(parseInt(e.target.value));
    onPageChange(1); // Reset to first page when changing rows per page
  };


  const TableRow = ({ data }) => (
    <tr className="border-b border-gray-800/50 hover:bg-gray-900/30 transition">
      <td className="py-3 px-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center mr-3">
            <span className="text-xs font-bold text-purple-400">PS</span>
          </div>
          <div>
            <div className="font-medium text-sm">{data.strategy}</div>
            <div className="text-xs text-gray-400 flex items-center">
              <span className="px-1.5 py-0.5 bg-gray-800 rounded text-xs mr-2">{data.type}</span>
              {data.collection}
            </div>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 text-center">
        <div className="text-sm font-medium">{data.holdings}</div>
      </td>
      <td className="py-3 px-4">
        <div className="flex items-center">
          <div className="w-full bg-gray-800 rounded-full h-1.5">
            <div 
              className="bg-green-500 h-1.5 rounded-full" 
              style={{ width: data.progress }}
            ></div>
          </div>
          <span className="text-xs text-gray-400 ml-2">{data.progress}</span>
        </div>
      </td>
      <td className="py-3 px-4">
        <div className="text-sm font-medium">{data.price}</div>
      </td>
      <td className="py-3 px-4">
        <div className="text-sm font-medium">{data.volume24h}</div>
      </td>
      <td className="py-3 px-4">
        <div className="text-sm font-medium">{data.marketCap}</div>
      </td>
      <td className="py-3 px-4">
        <div className="text-sm font-medium">{data.burned}</div>
        <div className="text-xs text-gray-400">{data.burnPercent}</div>
      </td>
      <td className="py-3 px-4">
        <div className={`text-sm font-medium flex items-center ${data.isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {data.isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
          {data.change24h}
        </div>
      </td>
      <td className="py-3 px-4">
        <button className="text-gray-400 hover:text-white">
          <MoreVertical className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );

  // Summary Stats
  const summaryStats = [
    { label: "Total Market Cap", value: "$88.49M" },
    { label: "24h Volume", value: "$1.66M" },
    { label: "NFTs Held", value: "4319" },
    { label: "Total Burned", value: "1.34%", subValue: "1565.90M tokens" },
    { 
      label: "Best Performing", 
      value: "Nakamigo", 
      subValue: "+856.19%",
      highlight: true 
    },
  ];

  return (
    <div className="flex-1">
      {/* Table Container */}
      <div className="rounded-xl border border-gray-800 bg-gray-900/30 overflow-hidden">
        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50">
                <th className="py-2 px-2 md:py-3 md:px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Strategy
                </th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Holdings
                </th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Progress
                </th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Price
                </th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Volume 24h
                </th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Market Cap
                </th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Burned
                </th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  24h %
                </th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <TableRow key={index} data={row} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 border-t border-gray-800">
          <div className="flex items-center space-x-2 md:space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-gray-400">Rows</span>
            <select 
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-sm text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-3 py-1.5 text-sm border border-gray-700 rounded-lg transition ${
                currentPage === 1 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-800'
              }`}
            >
              ← Previous
            </button>
            
            {/* Page numbers */}
            <div className="flex space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={`px-3 py-1.5 text-sm rounded-lg transition ${
                      pageNum === currentPage
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:bg-gray-800'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <>
                  <span className="px-2 py-1.5 text-gray-400">...</span>
                  <button
                    onClick={() => onPageChange(totalPages)}
                    className="px-3 py-1.5 text-sm rounded-lg text-gray-400 hover:bg-gray-800 transition"
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>
            
            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 py-1.5 text-sm border border-gray-700 rounded-lg transition ${
                currentPage === totalPages 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-800'
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {summaryStats.map((stat, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-xl border ${stat.highlight ? 'border-purple-500/50 bg-purple-600/10' : 'border-gray-800 bg-gray-900/30'}`}
          >
            <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
            <div className={`text-lg font-semibold ${stat.highlight ? 'text-purple-400' : 'text-white'}`}>
              {stat.value}
            </div>
            {stat.subValue && (
              <div className={`text-xs mt-1 ${stat.highlight ? 'text-purple-300' : 'text-gray-400'}`}>
                {stat.subValue}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyTable;