import './App.css';
import Navbar from './Components/Navbar';
import SummarySection from './Components/SummarySection';
import Dashboard from './Components/Dashboard';
import MarketTrend from './Components/MarketTrend'
import Protfolio from './Components/Protfolio'
import AddStock from './Components/AddStock';
import Notification from './Components/Notification';


function App() {
  return (
   <div className="min-h-screen">
      <Navbar />
      <SummarySection/>
      <Dashboard/>
      <MarketTrend/>
      <Protfolio/>
      <AddStock/>
      <Notification/>
      
      
    </div>
  );
}

export default App;



