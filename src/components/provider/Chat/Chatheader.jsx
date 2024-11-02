import React from 'react'
import chat from '../../../assets/icons/chatheader.svg'
import { useTranslation } from 'react-i18next'
function Chatheader({toggleSidebar,isSidebarOpen}) {
  const {t}=useTranslation()
  return (
    <div><div className=' flex items-center gap-2'>
    <img src={chat} className='  bg-[#E5E5FF] rounded-lg p-2'/>
    <h1 className=' text-dark font-bold text-2xl flex-grow'>{t('chat')}</h1>
    <button
        className='lg:hidden mb-4 flex items-center p-2 bg-primary text-white    rounded-2xl'
        onClick={toggleSidebar}
      >
 {t("menu.Chat_history")}
      </button>

    
    </div></div>
  )
}

export default Chatheader