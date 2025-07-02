// Dashboard.js
import React, { useState, useEffect } from 'react';
import MarketTrend from './MarketTrend';
import Protfolio from './Protfolio';

const Dashboard = () => {
  const [trendingStocks, setTrendingStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching data
        setTimeout(() => {
          setTrendingStocks([
            { symbol: 'TSLA', currentPrice: 720.50 },
            { symbol: 'AMZN', currentPrice: 3300.00 },
            { symbol: 'NFLX', currentPrice: 550.00 },
            { symbol: 'FB', currentPrice: 300.00 },
          ]);
          setPortfolio([
            { symbol: 'TSLA', shares: 10, avgPrice: 650.00, currentPrice: 720.50 },
            { symbol: 'AMZN', shares: 5, avgPrice: 3100.00, currentPrice: 3300.00 },
            { symbol: 'NFLX', shares: 8, avgPrice: 500.00, currentPrice: 550.00 },
            { symbol: 'FB', shares: 15, avgPrice: 280.00, currentPrice: 300.00 },
          ]);
          setLoading(false);
        }, 2000);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
    </div>
  );

  if (error) return <p className="text-red-600 text-center">{error}</p>;

  return (
    <div>
      <MarketTrend trends={trendingStocks} />
      <Protfolio portfolio={portfolio} />
    </div>
  );
};

export default Dashboard;
