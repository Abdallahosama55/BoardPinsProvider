import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/provider/NavbarProvider';
import Sidebar from '../components/provider/SidebarProvider';

const LayoutDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F6FA] relative">
      <Sidebar className="z-10" />
      <div className="flex flex-col flex-1">
        <Navbar className="z-20" />
        <div className="flex-1 lg:h-[83vh] rounded-2xl mx-6 bg-[#F5F6FA] font-poppins overflow-y-auto"  style={{ scrollbarWidth: 'thin', scrollbarColor: '#4B5563 ##1E1E1EBF' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
