// AddStock.js
import React, { useState } from 'react';

const AddStock = ({ onAddStock }) => {
  const [symbol, setSymbol] = useState('');
  const [shares, setShares] = useState('');
  const [avgPrice, setAvgPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symbol && shares && avgPrice) {
      onAddStock({ symbol, shares: Number(shares), avgPrice: Number(avgPrice), currentPrice: 0 });
      setSymbol('');
      setShares('');
      setAvgPrice('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add Stock</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Stock Symbol</label>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Shares</label>
          <input
            type="number"
            value={shares}
            onChange={(e) => setShares(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Average Price</label>
          <input
            type="number"
            value={avgPrice}
            onChange={(e) => setAvgPrice(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white rounded-md p-2 hover:bg-indigo-700">
          Add Stock
        </button>
      </form>
    </div>
  );
};

export default AddStock;
