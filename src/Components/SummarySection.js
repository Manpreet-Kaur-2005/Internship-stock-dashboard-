// SummarySection.js
import React from 'react';
import { FaDollarSign, FaChartLine, FaChartPie } from 'react-icons/fa';

const SummarySection = ({ portfolio = [] }) => {
  const totalValue = portfolio.reduce((acc, stock) => acc + stock.shares * stock.currentPrice, 0);
  const totalCost = portfolio.reduce((acc, stock) => acc + stock.shares * stock.avgPrice, 0);
  const totalGainLoss = totalValue - totalCost;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-4 flex items-center">
          <FaDollarSign className="text-indigo-600 h-8 w-8 mr-2" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total Market Value</h3>
            <p className="text-2xl font-bold text-gray-900">${totalValue.toFixed(2)}</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex items-center">
          <FaChartPie className="text-indigo-600 h-8 w-8 mr-2" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total Cost Basis</h3>
            <p className="text-2xl font-bold text-gray-900">${totalCost.toFixed(2)}</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex items-center">
          <FaChartLine className="text-indigo-600 h-8 w-8 mr-2" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total Gain/Loss</h3>
            <p className={`text-2xl font-bold ${totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${totalGainLoss.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
