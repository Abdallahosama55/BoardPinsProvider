
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './utils/LayoutDashboard';
import Dashboard from './pages/Provider/Dashboard';
import MyBoardPins from './pages/Provider/MyBoardPins';
import Merchant from './pages/Provider/Merchant';
import MerchantPinned from './pages/Provider/MerchantPinned';
import Upgrade from './pages/Provider/Upgrade';
import Home from './pages/Landing/Home';
import LayoutLanding from './utils/LayoutLanding';
import Pricing from './pages/Landing/Pricing';
import About from './pages/Landing/About';
import Signup  from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import ForgetPassword from './pages/Auth/ForgotPassword';
import LayoutAuth from './utils/LayoutAuth';
import NewPassword from './pages/Auth/NewPassword';
import VerifyMail from './pages/Auth/VerfiyMail';
import RecoverySuccess from './pages/Auth/RecoverySuccess';
import Chat from './pages/Provider/Chat';
import ChatWelcome from './components/provider/Chat/ChatWelcome';
import ChatMessages from './components/provider/Chat/ChatMessages';
import KnowledgeBase from './pages/Provider/KnowledgeBase';
import ProjectmangementTasks from './pages/Provider/ProjectmangementTasks';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LayoutAuth/>}>
     
      <Route path="/recoverysuccess" element={<RecoverySuccess/>} />
      <Route path="/verifymail" element={<VerifyMail/>} />
      <Route path="/NewPassword" element={<NewPassword/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/forgetpassword" element={<ForgetPassword/>} />
      </Route>


      <Route path="/" element={<LayoutLanding/>}>
      <Route index element={<Home/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/about" element={<About/>} />
        </Route>
    
        <Route path="/" element={<Layout />}>
        <Route path="/knowledgebase" element={<KnowledgeBase/>} />
       
          <Route path="/myboard" element={<MyBoardPins/>} />
          <Route path="/merchant" element={<Merchant/>} />
          <Route path="/merchantPinned" element={<MerchantPinned/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Chat />}>
          <Route path="chat" element={<ChatWelcome />} />
          <Route path="chatmessages" element={<ChatMessages/>} />
        </Route>
        <Route path="/projectmangement-tasks" element={<ProjectmangementTasks />} />
          <Route path="/upgrade" element={<Upgrade/>} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
