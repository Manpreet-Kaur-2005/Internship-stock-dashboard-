// PortfolioSection.js
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegSadCry } from 'react-icons/fa'; // Importing an icon for a friendly touch

const PortfolioSection = ({ portfolio = [] }) => {
  const totalValue = portfolio.reduce((acc, stock) => acc + stock.shares * stock.currentPrice, 0);
  const totalCost = portfolio.reduce((acc, stock) => acc + stock.shares * stock.avgPrice, 0);
  const totalGainLoss = totalValue - totalCost;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Portfolio</h2>
      {portfolio.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center">
          <FaRegSadCry className="text-6xl text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg">Oh no! Your portfolio is currently empty.</p>
          <p className="text-gray-500">Start adding stocks to see your investments grow!</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Add Stocks
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gain/Loss</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {portfolio.map((stock) => {
                const currentValue = stock.shares * stock.currentPrice;
                const costBasis = stock.shares * stock.avgPrice;
                const gainLoss = currentValue - costBasis;

                return (
                  <tr key={stock.symbol}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stock.symbol}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stock.shares}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${stock.avgPrice.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${stock.currentPrice.toFixed(2)}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${gainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${gainLoss.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-700">Total Portfolio Value: <span className="text-2xl font-bold text-gray-900">${totalValue.toFixed(2)}</span></h3>
        <h3 className="text-lg font-semibold text-gray-700">Total Gain/Loss: <span className={`text-2xl font-bold ${totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>${totalGainLoss.toFixed(2)}</span></h3>
      </div>
    </div>
  );
};

PortfolioSection.propTypes = {
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      shares: PropTypes.number.isRequired,
      avgPrice: PropTypes.number.isRequired,
      currentPrice: PropTypes.number.isRequired,
    })
  ),
};

export default PortfolioSection;
