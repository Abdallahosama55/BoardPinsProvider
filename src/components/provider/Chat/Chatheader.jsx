import React from 'react'
import chat from '../../../assets/icons/chatheader.svg'
function Chatheader({toggleSidebar,isSidebarOpen}) {
  return (
    <div><div className=' flex items-center gap-2'>
    <img src={chat} className='  bg-[#E5E5FF] rounded-lg p-2'/>
    <h1 className=' text-dark font-bold text-2xl flex-grow'>Chat</h1>
    <button
        className='lg:hidden mb-4 flex items-center p-2  text-dark rounded'
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

    
    </div></div>
  )
}

export default Chatheader