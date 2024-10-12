

import React, { useState } from 'react';
import Chatheader from '../../components/provider/Chat/Chatheader';
import Chatsidebar from '../../components/provider/Chat/Chatsidebar';
import InputMessage from '../../components/provider/atoms/atomsChat/atomsChatMain/InputMessage';
import { Outlet } from 'react-router-dom';

function Chat() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='h-full rounded-xl p-5 bg font-poppins flex flex-col'>
      <Chatheader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

  
      <div className='lg:flex-row flex flex-col flex-grow gap-6 mt-5 lg:overflow-hidden'>
        <div
          className={`fixed top-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform transform ${
            isSidebarOpen ? 'translate-x-0 h-full' : '-translate-x-full h-full'
          } lg:static lg:translate-x-0 lg:min-w-[300px] lg:col-span-1 col-span-3 flex flex-col gap-5 py-6 px-6 border-[1px] border-[#E8E8E8] shadow-sm rounded-3xl`}
        >
          <Chatsidebar />
        </div>

        <div className='flex-grow py-3 px-3 lg:col-span-2 col-span-3 border-[1px] border-[#E8E8E8] shadow-sm rounded-3xl relative'>
          <div className='flex flex-col h-full'>
            <div className='flex-grow  overflow-auto'>
              
              <Outlet />
            </div>
            <div className='absolute bottom-0 left-0  bg-white p-4 px-6 w-full'>
              <InputMessage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
 