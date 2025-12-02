import React from 'react';
import { Search, ChevronDown, ArrowUp } from 'lucide-react';

const MainContent = ({ cardBg, borderColor }) => {

  // --- SUB-COMPONENTS ---

  const TokenSearchSection = () => (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-3">
        {/* Token Selector: Use the darker card background for this dropdown */}
        <div className={`flex items-center ${cardBg} border ${borderColor} rounded-lg p-2 px-3`}>
          {/* Ethereum Icon */}
          <div className="w-5 h-5 rounded-full bg-purple-500/80 mr-2"></div> 
          <span className="text-sm font-medium">Ethereum</span>
          <ChevronDown className="w-3 h-3 text-gray-400 ml-2" />
        </div>

        {/* Strategy Search: Also use the darker card background */}
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
        {/* Active Filter (ALL) should be slightly brighter/more distinct */}
        <span className="px-3 py-1.5 rounded-lg bg-gray-700 text-white cursor-pointer">ALL</span>
        {/* Inactive Filters should use the same color as the 'Deploy' text */}
        <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">ERC 721</span>
        <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">ERC 115</span>
        <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">ERC 20</span>
        <span className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">Recursive</span>
        {/* Deploy Strategy CTA: Use the purpleAccent from your config (assuming bg-purple-600 is close) */}
        <button className="ml-4 px-4 py-1.5 text-sm rounded-lg bg-purple-600 hover:bg-purple-700 font-medium transition">
          Deploy a Strategy
        </button>
      </div>
    </div>
  );

  const StrategyCard = ({ rank, title, token, volume, color, performer }) => (
    <div className={`p-4 rounded-xl ${cardBg} border ${borderColor} hover:border-purple-500 transition cursor-pointer`}>
      <div className="flex justify-between items-start"> {/* Use items-start for better top alignment */}
        <div className="flex items-center">
          {/* Color box for the strategy: Use rounded-md for a slight visual difference from the table icons */}
          <div className={`w-9 h-9 rounded-md mr-3 flex-shrink-0`} style={{ backgroundColor: color }}>
             {/* If image is present (like ETH), render it here */}
             {color === '#ffcc00' && <div className="w-full h-full"></div>} {/* Yellow box */}
             {color === '#0066ff' && <div className="w-full h-full"></div>} {/* Blue box */}
             {/* For the Ape(10)T... card (ETH logo) */}
             {title.includes('Ape') && (
                // Placeholder for a detailed icon structure if needed
                <div className="w-full h-full flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2021.svg" alt="ETH" className="w-6 h-6 object-contain" />
                </div>
             )}
          </div>
          <div>
            <div className="text-sm font-medium">{rank} <span className='text-gray-300'>{title}</span></div>
            <div className="text-xs text-green-400 font-medium mt-0.5">{token}</div>
            <div className="text-xs text-gray-400 font-light mt-0.5">Vol. <span className='text-white'>${volume}</span></div>
          </div>
        </div>
        <ArrowUp className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
      </div>
      
      {/* Performer Avatar Section */}
      {performer && (
        <div className="flex items-center mt-3 pt-3 border-t border-gray-800">
          {/* Avatar Placeholder: Use a darker gray circle */}
          <div className="w-5 h-5 rounded-full mr-2 bg-gray-700"></div>
          <div className="text-xs text-gray-400">#9 RektStrate...</div> {/* Title repeated as in the image */}
        </div>
      )}
    </div>
  );
  
  // Trading Card is already quite accurate

  const TradingCard = ({ title, token, color, shortName, isBull }) => (
    <div className={`flex items-center p-3 rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-500 transition cursor-pointer`}>
      {/* Icon: Slightly smaller w-5 h-5 */}
      <div className={`w-5 h-5 rounded-lg mr-3 flex-shrink-0`} style={{ backgroundColor: color }}></div>
      <div>
        <div className="text-xs font-semibold">{title}</div>
        <div className={`text-xs ${isBull ? 'text-yellow-500' : 'text-red-500'} font-medium mt-0.5`}>
          {isBull ? 'BULL' : 'SHORT'} <span className="text-gray-400 ml-1">{shortName}</span>
        </div>
      </div>
    </div>
  );

  // Table Row is already quite accurate

  const TableRow = ({ name, type, holdings, value, price, prog, volume, burcol }) => (
    <div className="grid grid-cols-10 gap-4 py-3 border-b border-gray-800/50 text-sm hover:bg-gray-900/50 transition">
      <div className="col-span-2 flex items-center space-x-3">
        {/* Small icon placeholder */}
        <div className="w-3 h-3 rounded-full bg-greenAccent border border-greenAccent/50"></div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-400">{type}</div>
        </div>
      </div>
      <div className="col-span-1 text-right text-green-400 font-medium">{holdings}</div>
      <div className="col-span-1 text-right text-white font-medium">{value}</div>
      <div className="col-span-1 text-right text-green-400 font-medium">{price}</div> {/* Price is green in the image */}
      <div className="col-span-2 text-right font-medium">{prog}</div>
      <div className="col-span-2 text-right font-medium">{volume}</div>
      <div className="col-span-1 text-right font-medium">{burcol}</div>
    </div>
  );


  // --- MAIN RENDER ---

  return (
    // Adjusting padding to align with the Hero section's padding (p-8 - w-64 sidebar)
    // We are now just using flex-1 with standard padding and letting the Sidebar define the left margin
    <main className="flex-1 p-8 pr-10 pt-4"> 
      
      <TokenSearchSection />

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left 9 Columns - Performance Cards and Table */}
        <div className="col-span-9 space-y-6">

          {/* Top Performers Section */}
          <div className="grid grid-cols-3 gap-6">
            {/* Using text-base for the titles to match the image's font size better */}
            <h3 className="col-span-1 text-base font-semibold text-gray-300">Trending Today</h3>
            <h3 className="col-span-1 text-base font-semibold text-gray-300">Top Performers</h3>
            <h3 className="col-span-1 text-base font-semibold text-gray-300">Top Performers</h3>

            {/* Row 1 */}
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
              title="SHITCOIN" // Card 1 on the right column
              token="SNKYSTRATS"
              color="#ff0000"
              shortName="SNKYSTRATs"
              isBull={false}
            />

            {/* Row 2 */}
            <StrategyCard
              rank="#9"
              title="RektStrate..."
              token="SEKSTR"
              volume="18.57K"
              color="#ffcc00"
              performer={true} // Adding performer tag to trigger the avatar footer
            />
            <StrategyCard
              rank="#9"
              title="Ape(10)T..."
              token="SEKSTR"
              volume="16.57K"
              color="transparent" // Using transparent to show the ETH logo clearly
              image="true" // Placeholder to signify image use
            />
             <TradingCard
              title="Diztwich" // Card 2 on the right column
              token="VEXX001"
              color="#3366cc"
              shortName="VEXX001"
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
        {/* We need to move the remaining TradingCards here and rename the section header */}
        <div className="col-span-3 space-y-3 pt-0"> 
          <h3 className="text-base font-semibold text-gray-300 mb-4">Trading Today</h3>
          <div className="space-y-3">
             {/* The first two cards (SHITCOIN and Diztwich) were moved to align with the grid rows, 
                 so we only include the remaining ones here to complete the list. */}
            
            <TradingCard
              title="Prophet"
              token="SOL-STF"
              color="#33cc33"
              shortName="SOL-STF"
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