import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/provider/NavbarProvider';
import Sidebar from '../components/provider/SidebarProvider';
import Invite from '../components/provider/Invite/Invite';
import DataWelcomeModal from '../components/provider/DataWelcomeModal/DataWelcomeModal';

const LayoutDashboard = () => {
  const[IsOpen,setIsOpen]=useState()
  const[IsOpenWelcome,setIsOpenWelcome]=useState(true)
  const handleIsopen =()=> {
setIsOpen(true)
    
  }
  const handleIsopenWelcome =()=> {
    setIsOpenWelcome(true)
        
      }
  const handleIsclose=()=>{
setIsOpen(false)
  }
  const handleIscloseWelcome=()=>{
    setIsOpenWelcome(false)
      }
  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F6FA] relative">

      <Sidebar className="z-10" handleIsopen={handleIsopen} />
      <div className="flex flex-col flex-1">
        <Invite isOpen={IsOpen} handleIsclose={handleIsclose} />
        <DataWelcomeModal isOpen={true} handleIsclose={handleIscloseWelcome} />
      
        <Navbar className="z-20"  />
        <div className="flex-1 lg:h-[83vh] outline-0 rounded-2xl mx-6 bg-[#F5F6FA] font-poppins overflow-y-auto"  style={{ scrollbarWidth: 'thin', scrollbarColor: '#4B5563 ##1E1E1EBF' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
