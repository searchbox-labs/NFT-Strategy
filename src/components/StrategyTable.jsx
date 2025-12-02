import React from 'react';

const TableRow = ({ name, type, holdings, value, price, prog, volume, burcol }) => (
  <div className="grid grid-cols-10 gap-4 py-3 border-b border-gray-800/50 text-sm hover:bg-gray-900/50 transition">
    <div className="col-span-2 flex items-center space-x-3">
      <div className="w-3 h-3 rounded-full bg-green-500 border border-green-500/50"></div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-xs text-gray-400">{type}</div>
      </div>
    </div>
    <div className="col-span-1 text-right text-green-400 font-medium">{holdings}</div>
    <div className="col-span-1 text-right text-white font-medium">{value}</div>
    <div className="col-span-1 text-right text-green-400 font-medium">{price}</div>
    <div className="col-span-2 text-right font-medium">{prog}</div>
    <div className="col-span-2 text-right font-medium">{volume}</div>
    <div className="col-span-1 text-right font-medium">{burcol}</div>
  </div>
);

const StrategyTable = () => (
  <div className="flex-1">
    {/* Table Header */}
    <div className="grid grid-cols-10 gap-4 py-2 border-b border-gray-800 text-xs text-gray-500 font-medium uppercase tracking-wider">
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
    {/* Add more rows as needed */}
  </div>
);

export default StrategyTable;