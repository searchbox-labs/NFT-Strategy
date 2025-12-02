import React from 'react';
import { Search, ChevronDown, Bell } from 'lucide-react'; // Using lucide-react for icons

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 border-b border-gray-800 bg-black">
      <div className="flex items-center justify-between max-w-full mx-auto">
        {/* Left Section - Logo and Search */}
        <div className="flex items-center space-x-6">
          <div className="text-xl font-bold text-white tracking-wider">
            GreenStrategy™
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-800/80 rounded-lg px-3 py-1.5 w-72">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search Collections"
                className="bg-transparent text-sm placeholder-gray-400 focus:outline-none w-full"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Icons and Wallet */}
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          {/* Example of a circular icon */}
          <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-500 flex items-center justify-center">
            {/* Replace with an actual icon/image */}
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          </div>
          <button className="text-sm font-medium border border-green-500 text-green-500 px-3 py-1.5 rounded-lg hover:bg-green-500/10 transition">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;