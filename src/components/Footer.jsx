import React from 'react';
import { Twitter, Github, MessageSquare, Globe, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600"></div>
              <span className="text-xl font-bold tracking-tight">
                Stage<span className="text-purple-400">™</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Perpetual on-chain machines.
            </p>
            <div className="pt-2">
              <p className="text-xs text-gray-500 mb-2">Powered by</p>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <span className="font-medium">TokenWorks</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  PunkStrategy<span className="text-purple-400 ml-1">™</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm flex items-center">
                  <FileText className="w-3 h-3 mr-2" />
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm flex items-center">
                  <Globe className="w-3 h-3 mr-2" />
                  More
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition">
                <Github className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition">
                <MessageSquare className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition">
                <Globe className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
            
            <div className="space-y-2">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition">
                Terms
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition">
                Privacy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-gray-500 text-center md:text-left">
              <p>
                <span className="text-gray-400">© 2025 Stage.</span> All intellectual property 
                associated with any Strategy is the property of its respective owners. TokenWorks 
                and its affiliates are not affiliated with, sponsored by, or endorsed by any 
                third-party intellectual property referenced or incorporated within a Strategy.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-xs text-gray-500">v2.1.4</span>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs text-green-500">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;