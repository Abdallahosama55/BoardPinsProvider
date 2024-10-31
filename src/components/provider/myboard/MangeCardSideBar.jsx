import React from 'react';
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const ManageCardSideBar = ({ isOpenMangeCard, toggleSidebar }) => {
  const { t } = useTranslation();

  const cards = [
    { title: t('Recents'), description: t('Recents Description'), color: 'text-[#6161FF]', icon: '🕒', bgColorIcon: 'bg-blue-500' },
    { title: t('In-Progress Project'), description: t('In-Progress Project Description'), color: 'text-purple-500', icon: '🔍', bgColorIcon: 'bg-purple-500' },
    { title: t('Reminder'), description: t('Reminder Description'), color: 'text-yellow-500', icon: '⏰', bgColorIcon: 'bg-yellow-500' },
    { title: t('Project Tasks'), description: t('Project Tasks Description'), color: 'text-orange-500', icon: '⏳', bgColorIcon: 'bg-orange-500' },
    { title: t('Personal List'), description: t('Personal List Description'), color: 'text-green-500', icon: '📝', bgColorIcon: 'bg-green-500' },
    { title: t('Merchants Want’s To Connect'), description: t('Merchants Want’s To Connect Description'), color: 'text-[#6161FF]', icon: '🛒', bgColorIcon: 'bg-blue-500' },
    { title: t('Production Groups'), description: t('Production Groups Description'), color: 'text-indigo-500', icon: '👥', bgColorIcon: 'bg-indigo-500' },
  ];

  return (
    <div className={`fixed right-0 top-0 h-screen lg:w-[23%] shadow bg-white z-50 overflow-y-auto transform ${isOpenMangeCard ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl ">{t('Add Cards')}</h2>
        <button onClick={toggleSidebar}>
          <IoMdClose color='grey-500' />
        </button>
      </div>
      <div className="p-4 space-y-4 overflow-y-auto ">
        {cards.map((card, index) => (
          <div key={index} className="p-4 pt-6 bg-[#F7F7F7] border text-white rounded-lg items-start space-x-4">
            <div className={`w-10 h-10 mb-5 ${card.bgColorIcon} text-white rounded-lg flex items-center justify-center`}>
              <span>{card.icon}</span>
            </div>
            <div>
              <h3 className={`text-xl font-bold ${card.color}`}>{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCardSideBar;
