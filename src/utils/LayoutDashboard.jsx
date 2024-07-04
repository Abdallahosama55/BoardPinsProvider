// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/provider/NavbarProvider';
import Sidebar from '../components/provider/SidebarProvider';


const LayoutDashboard = () => {
  return (
    <div className="flex overflow-x-hidden flex-col p-5 bg-[#F5F6FA]  font-poppins">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1  mx-3 py-0 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
