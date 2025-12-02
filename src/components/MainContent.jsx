import React from 'react';
import { Search, ChevronDown, CheckCircle, ArrowUp } from 'lucide-react';

const MainContent = ({ cardBg, borderColor }) => {

  // --- SUB-COMPONENTS ---

  const TokenSearchSection = () => (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-3">
        {/* Token Selector */}
        <div className="flex items-center bg-gray-900/90 border border-gray-700 rounded-lg p-2 px-3">
          <div className="w-5 h-5 rounded-full bg-purple-500/80 mr-2"></div>
          <span className="text-sm font-medium">Ethereum</span>
          <ChevronDown className="w-3 h-3 text-gray-400 ml-2" />
        </div>

        {/* Strategy Search */}
        <div className="flex items-center bg-gray-900/90 rounded-lg px-3 py-2 w-72 border border-gray-700">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search strategies"
            className="bg-transparent text-sm placeholder-gray-400 focus:outline-none w-full"
          />
        </div>
      </div>

      {/* ERC Filters */}
      <div className="flex items-center space-x-2 text-sm font-medium text-gray-400">
        <span className="px-3 py-1.5 rounded-lg bg-gray-800/50 text-white">ALL</span>
        <span className="px-3 py-1.5 rounded-lg hover:bg-gray-800/50 cursor-pointer">ERC 721</span>
        <span className="px-3 py-1.5 rounded-lg hover:bg-gray-800/50 cursor-pointer">ERC 115</span>
        <span className="px-3 py-1.5 rounded-lg hover:bg-gray-800/50 cursor-pointer">ERC 20</span>
        <span className="px-3 py-1.5 rounded-lg hover:bg-gray-800/50 cursor-pointer">Recursive</span>
        <button className="ml-4 px-4 py-1.5 text-sm rounded-lg bg-purple-600 hover:bg-purple-700 font-medium transition">
          Deploy a Strategy
        </button>
      </div>
    </div>
  );

  const StrategyCard = ({ rank, title, token, volume, color, image, performer }) => (
    <div className={`p-4 rounded-xl ${cardBg} border ${borderColor} hover:border-purple-500 transition cursor-pointer`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-lg mr-3`} style={{ backgroundColor: color }}>
            {image && (
              <img src={image} alt={`${title} logo`} className="w-full h-full object-cover rounded-lg" />
            )}
          </div>
          <div>
            <div className="text-sm font-semibold">{rank} {title}</div>
            <div className="text-xs text-green-400 font-medium mt-1">{token}</div>
            <div className="text-xs text-gray-400 font-light mt-1">Vol. ${volume}</div>
          </div>
        </div>
        <ArrowUp className="w-4 h-4 text-green-400" />
      </div>
      {performer && (
        <div className="flex items-center mt-3 pt-3 border-t border-gray-800">
          <img src={performer} alt="Performer Avatar" className="w-6 h-6 rounded-full mr-2 bg-gray-700" />
          <div className="text-xs text-gray-400">Performer Name</div>
        </div>
      )}
    </div>
  );

  const TradingCard = ({ title, token, color, shortName, isBull }) => (
    <div className={`flex items-center p-3 rounded-lg ${cardBg} border border-gray-800 hover:border-yellow-500 transition cursor-pointer`}>
      <div className={`w-6 h-6 rounded-lg mr-3`} style={{ backgroundColor: color }}></div>
      <div>
        <div className="text-xs font-semibold">{title}</div>
        <div className={`text-xs ${isBull ? 'text-yellow-500' : 'text-red-500'} font-medium mt-0.5`}>
          {isBull ? 'BULL' : 'SHORT'} <span className="text-gray-400 ml-1">{shortName}</span>
        </div>
      </div>
    </div>
  );

  const TableRow = ({ name, type, holdings, value, price, prog, volume, burcol }) => (
    <div className="grid grid-cols-10 gap-4 py-3 border-b border-gray-800/50 text-sm hover:bg-gray-900/50 transition">
      <div className="col-span-2 flex items-center space-x-3">
        <div className="w-5 h-5 rounded-full bg-green-600/50 border border-green-500"></div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-400">{type}</div>
        </div>
      </div>
      <div className="col-span-1 text-right text-green-400 font-medium">{holdings}</div>
      <div className="col-span-1 text-right text-white font-medium">{value}</div>
      <div className="col-span-1 text-right text-red-400 font-medium">{price}</div>
      <div className="col-span-2 text-right font-medium">{prog}</div>
      <div className="col-span-2 text-right font-medium">{volume}</div>
      <div className="col-span-1 text-right font-medium">{burcol}</div>
    </div>
  );

  // --- MAIN RENDER ---

  return (
    <main className="flex-1 p-8 pr-10">
      {/* Huge Header Text */}
      <h1 className="text-6xl font-extrabold leading-tight tracking-tight mb-8">
        Turn any token <br /> into a perpetual machine
      </h1>

      <TokenSearchSection />

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left 9 Columns - Performance Cards and Table */}
        <div className="col-span-9 space-y-6">

          {/* Top Performers Section */}
          <div className="grid grid-cols-3 gap-6">
            <h3 className="col-span-1 text-lg font-semibold text-gray-300">Trending Today</h3>
            <h3 className="col-span-1 text-lg font-semibold text-gray-300">Top Performers</h3>
            <h3 className="col-span-1 text-lg font-semibold text-gray-300">Top Performers</h3>

            <StrategyCard
              rank="#8"
              title="RektStrate..."
              token="SEKSTR"
              volume="22.57K"
              color="#ffcc00"
            />
            <StrategyCard
              rank="#9"
              title="RektStrate..."
              token="SEKSTR"
              volume="18.02K"
              color="#0066ff"
            />
            <TradingCard
              title="SHITCOIN"
              token="SNKYSTRATS"
              color="#ff0000"
              shortName="SNKYSTRATs"
              isBull={false}
            />

            <StrategyCard
              rank="#9"
              title="RektStrate..."
              token="SEKSTR"
              volume="18.57K"
              color="#ffcc00"
            />
            <StrategyCard
              rank="#9"
              title="Ape(10)T..."
              token="SEKSTR"
              volume="16.57K"
              image="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2021.svg" // Placeholder for ETH icon
            />
             <TradingCard
              title="Prophet"
              token="SOL-STF"
              color="#33cc33"
              shortName="SOL-STF"
              isBull={true}
            />

          </div>

          {/* Table Header */}
          <div className="grid grid-cols-10 gap-4 mt-8 py-2 border-b border-gray-800 text-xs text-gray-500 font-medium uppercase tracking-wider">
            <div className="col-span-2">Strategy</div>
            <div className="col-span-1 text-right">Holdings %</div>
            <div className="col-span-1 text-right">Holdings $</div>
            <div className="col-span-1 text-right">Price %</div>
            <div className="col-span-2 text-right">Proginess 6th</div>
            <div className="col-span-2 text-right">Volume 24bp %</div>
            <div className="col-span-1 text-right">Burcol</div>
          </div>

          {/* Table Rows */}
          <TableRow
            name="PorkStrategy"
            type="ERC 721"
            holdings="+40.45%"
            value="$91.89K"
            price="+261.9K"
            prog="$918.69K"
            volume="$41.98K"
            burcol="424.8"
          />
          <TableRow
            name="PunkStrategy"
            type="ERC 721"
            holdings="+30.45%"
            value="$19.89K"
            price="+161.9K"
            prog="$518.69K"
            volume="$21.98K"
            burcol="244.8"
          />
          {/* Add more rows here */}

        </div>

        {/* Right 3 Columns - Trading Today Cards */}
        <div className="col-span-3 space-y-3 pt-[2.3rem]"> {/* Align with the cards to the left */}
          <h3 className="text-lg font-semibold text-gray-300">Trading Today</h3>
          <div className="space-y-3">
            <TradingCard
              title="SHITCOIN"
              token="SNKYSTRATS"
              color="#ff0000"
              shortName="SNKYSTRATs"
              isBull={false}
            />
            <TradingCard
              title="Diztwich"
              token="VEXX001"
              color="#3366cc"
              shortName="VEXX001"
              isBull={true}
            />
            <TradingCard
              title="Wall Street"
              token="MARELSSTR"
              color="#33cc33"
              shortName="MARELsSTR"
              isBull={true}
            />
            <TradingCard
              title="ETH"
              token="SMAISSTR"
              color="#ffcc00"
              shortName="SMAISsTR"
              isBull={true}
            />
            <TradingCard
              title="Scotleion"
              token="L0tA"
              color="#ffcc00"
              shortName="L0tA"
              isBull={true}
            />
            <TradingCard
              title="PUMP"
              token="HULKRX"
              color="#33cc33"
              shortName="HULKRX"
              isBull={true}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;