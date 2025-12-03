import React from 'react';
import { Search, ChevronDown, Bell, Moon, Menu } from 'lucide-react';

const Header = ({ isSearchSticky }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 border-b border-gray-800 bg-black">
      <div className="flex items-center justify-between max-w-full mx-auto">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-4">
          <div className="text-lg font-bold text-white tracking-wider hidden md:block">
            Stage
          </div>
          <div className="text-lg font-bold text-white tracking-wider md:hidden">
            S
          </div>
          
          {/* Search bar - hidden when sticky version is active */}
          {!isSearchSticky && (
            <div className="hidden md:flex items-center bg-gray-900 rounded-lg px-3 py-1.5 w-72 border border-gray-700/50">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search Collections"
                className="bg-transparent text-sm placeholder-gray-500 focus:outline-none w-full"
              />
              <span className="text-xs text-gray-500 ml-3 bg-gray-800/80 px-1 py-0.5 rounded font-mono">
                /
              </span>
            </div>
          )}
        </div>

        {/* Right Section - Icons and Wallet */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button className="md:hidden w-8 h-8 flex items-center justify-center">
            <Menu className="w-5 h-5 text-gray-400" />
          </button>
          
          {/* Desktop icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <Moon className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
            </div>
          </div>
          
          <button className="text-sm font-medium border bg-white border-gray-500 text-black px-3 py-1.5 rounded-lg hover:bg-gray-200 transition">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;