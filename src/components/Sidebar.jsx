import React from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

const Sidebar = ({ cardBg, borderColor }) => {
  const FilterSection = ({ title, filters, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    
    return (
      <div className={`mb-4 rounded-lg ${cardBg} border ${borderColor}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-4 text-left"
        >
          <div className="flex items-center">
            <Filter className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">{title}</span>
          </div>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {isOpen && (
          <div className="px-4 pb-4 space-y-2">
            {filters.map((filter, index) => (
              <label key={index} className="flex items-center cursor-pointer hover:bg-gray-800/30 p-1 rounded">
                <input
                  type="checkbox"
                  className="w-3 h-3 mr-3 rounded bg-gray-700 border-gray-600 text-purple-600 focus:ring-purple-600 focus:ring-offset-gray-800"
                />
                <span className="text-sm text-gray-400">{filter}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };

  const filterSections = [
    {
      title: "Market Cap",
      filters: ["Below $10K", "Below $100K", "Below $1M", "$1M and above"]
    },
    {
      title: "24h Volume",
      filters: ["Below $1K", "$1K - $10K", "$10K - $100K", "$100K and above"]
    },
    {
      title: "Holdings",
      filters: ["Below 10", "10 - 50", "50 - 100", "100 and above"]
    },
    {
      title: "Burn %",
      filters: ["Below 10%", "10% - 25%", "25% - 50%", "50% and above"]
    },
    {
      title: "Date Created",
      filters: ["Last 24 hours", "Last 7 days", "Last 30 days", "All time"]
    }
  ];

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-2">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">Filters</h3>
          <p className="text-sm text-gray-400">Filter strategies by different metrics</p>
        </div>
        
        {filterSections.map((section, index) => (
          <FilterSection
            key={index}
            title={section.title}
            filters={section.filters}
            defaultOpen={index === 0}
          />
        ))}
        
        {/* Apply Filters Button */}
        <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition">
          Apply Filters
        </button>
        
        {/* Clear All Button */}
        <button className="w-full py-2 text-gray-400 hover:text-white font-medium text-sm">
          Clear All
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;