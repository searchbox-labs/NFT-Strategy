import React from 'react';
import { Search, ChevronDown, CheckCircle, X, Maximize, Minus, User } from 'lucide-react';

const Sidebar = ({ cardBg, borderColor }) => {
  const FilterItem = ({ label }) => (
    <div className="flex justify-between items-center py-2 px-4 hover:bg-gray-800/50 cursor-pointer rounded-lg">
      <span className="text-sm text-gray-300">{label}</span>
      <Maximize className="w-3 h-3 text-gray-500" />
    </div>
  );

  return (
    <aside className="w-64 flex-shrink-0 p-4 pt-0">
      {/* Search Bar at the top of the sidebar */}
      <div className="flex items-center justify-between p-3 mb-4 mt-2">
         {/* Placeholder for the main title/text */}
      </div>

      {/* Filters Section */}
      <div className={`p-4 rounded-xl ${cardBg} border ${borderColor} mb-4`}>
        <h3 className="text-sm font-semibold mb-3 text-gray-300">Strategy Filters</h3>
        <div className="text-sm text-gray-400 mb-4 leading-relaxed">
          Reviewing all strategies. Filter by token or strategy type see filter list specific categories.
        </div>
        <div className="flex items-center justify-between text-xs">
          <button className="text-green-500 font-medium hover:text-green-400">
            Learn More
          </button>
          <button className="text-gray-500 hover:text-gray-400 flex items-center">
             <X className="w-3 h-3 mr-1" />
             Dismiss
          </button>
        </div>
      </div>

      {/* Main Filter List */}
      <div className="space-y-1">
        <FilterItem label="Market Cap" />
        <FilterItem label="Volumes" />
        <FilterItem label="Price" />
        <FilterItem label="Colors" />
      </div>
    </aside>
  );
};

export default Sidebar;