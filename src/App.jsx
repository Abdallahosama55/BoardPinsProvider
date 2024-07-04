
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './utils/LayoutDashboard';
import Dashboard from './pages/Provider/Dashboard';
import MyBoardPins from './pages/Provider/MyBoardPins';
import Merchant from './pages/Provider/Merchant';
import MerchantPinned from './pages/Provider/MerchantPinned';
import Upgrade from './pages/Provider/Upgrade';
import Home from './pages/Landing/Home';
import LayoutLanding from './utils/LayoutLanding';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LayoutLanding/>}>
        
      <Route index element={<Home/>} />
        </Route>
    
        <Route path="/" element={<Layout />}>
          <Route path="/myboard" element={<MyBoardPins/>} />
          <Route path="/merchant" element={<Merchant/>} />
          <Route path="/merchantPinned" element={<MerchantPinned/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/upgrade" element={<Upgrade/>} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
