// MarketTrend.js
import React from 'react';
import PropTypes from 'prop-types';

const MarketTrend = ({ trends = [] }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-lg font-bold text-gray-900">Market Trends</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trends.length === 0 ? (
          <p className="text-gray-600">No trending stocks available.</p>
        ) : (
          trends.map((stock) => (
            <div key={stock.symbol} className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-gray-800 font-medium">{stock.symbol}</h3>
              <p className="text-gray-600">${stock.currentPrice.toFixed(2)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

MarketTrend.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      currentPrice: PropTypes.number,
    })
  ),
};

export default MarketTrend;
