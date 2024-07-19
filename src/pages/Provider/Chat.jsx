import React from 'react';
import Chatheader from '../../components/provider/Chat/Chatheader';
import Chatsidebar from '../../components/provider/Chat/Chatsidebar';
import InputMessage from '../../components/provider/atoms/atomsChat/atomsChatMain/InputMessage';
import { Outlet } from 'react-router-dom';

function Chat() {
  return (
    <div className='bg-white rounded-xl p-5 font-poppins'>
      <Chatheader />

      <div className='lg:flex-row flex flex-col lg:min-h-[60vh] gap-6 mt-5 md:mx-12 mx-5 overflowy-hidden'>
        <div className='  lg:min-w-[300px] lg:col-span-1 col-span-3 flex flex-col gap-5 py-6 px-6 border-[1px] border-[#E8E8E8] shadow-sm rounded-3xl'>
          <Chatsidebar />
        </div>
        <div className='     flex-grow py-3 px-3  lg:col-span-2 col-span-3 border-[1px] border-[#E8E8E8] shadow-sm rounded-3xl'>
          <div className='flex flex-col gap-3 relative min-h-full'>
            <div className='flex-grow h-full  '> <Outlet /></div>
           <InputMessage/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
